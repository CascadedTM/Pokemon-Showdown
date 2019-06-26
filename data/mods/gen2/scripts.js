'use strict';
let scaleMultPOS;
let scaleMultNEG;
/**
 * Gen 2 scripts.
 */

/**@type {ModdedBattleScriptsData} */
let BattleScripts = {
	inherit: 'gen3',
	gen: 2,
	// BattlePokemon scripts.
	pokemon: {
		getStat(statName, unboosted, unmodified, fastReturn) {
			statName = /** @type {StatNameExceptHP} */(toID(statName));
			// @ts-ignore - type checking prevents 'hp' from being passed, but we're paranoid
			if (statName === 'hp') throw new Error("Please read `maxhp` directly");

			// base stat
			let stat = this.storedStats[statName];
			
				
			// Stat boosts.
			if (!unboosted) {
				// @ts-ignore				
				let boost = this.boosts[statName];
				if (boost > 6) boost = 6;
				if (boost < -6) boost = -6;
				if (boost >= 0) {
					
					//* // let boostTable = [1, 1.5, 2, 2.5, 3, 3.5, 4];
					//* // stat = Math.floor(stat * boostTable[boost]);
				//* // } else {
					//* // let numerators = [100, 66, 50, 40, 33, 28, 25];
					//* // stat = Math.floor(stat * numerators[-boost] / 100);
				//* // }
				
					// // let j = 0;
					// // let nuTab = [1, 1.2, 1.5, 1.75, 1.92, 2.1, 2.25];
					let boostTable = [10000000, 12500000, 13333333, 14222222, 15555555, 16666666, 17777777];
						stat = Math.round(stat *  boostTable[boost]); 
						stat = Math.floor(stat / boostTable[0]); 
						scaleMultPOS = boostTable[boost];
					
					// // while (j !== boost) {
						// // j++;
					// // } 	
					// // if (j != 0) {	
						// // stat = Math.round(stat * Math.pow(nuTab[j],-1));
						// // scaleMultPOS = Math.floor(10000000 * (boostTable[j] * Math.pow(nuTab[j],-1)));
					// // }

				} else {
					let numerators = [10000000, 8000000, 7500000, 7031250, 6428571, 6000000, 5555555];
						stat = Math.round(stat * numerators[-boost]); 
						stat = Math.ceil(stat / numerators[0]);
						scaleMultNEG = numerators[-boost];
				}
			}

			if (this.status === 'par' && statName === 'spe') {
				stat = Math.floor(stat / 4);
			}

			if (!unmodified) {
				// Burn attack drop is checked when you get the attack stat upon switch in and used until switch out.
				if (this.status === 'brn' && statName === 'atk') {
					stat = Math.floor(stat / 2);
				}
			}
			
			
			
			// Gen 2 caps stats at 999 and min is 1.
			stat = this.battle.clampIntRange(stat, 1, 999);
			if (fastReturn) return stat;

			// Screens
			// * // if (!unboosted) {
				// * // if ((this.side.sideConditions['reflect'] && statName === 'def') || (this.side.sideConditions['lightscreen'] && statName === 'spd')) {
					// * // stat *= 2;
				// * // }
			// * // }

			// Treat here the items.
			if ((['Cubone', 'Marowak'].includes(this.template.species) && this.item === 'thickclub' && statName === 'atk') || (this.template.species === 'Pikachu' && this.item === 'lightball' && statName === 'spa')) {
				stat *= 2;
			} else if (this.species === 'Ditto' && this.item === 'metalpowder' && ['def', 'spd'].includes(statName)) {
				stat *= 1.5;
			}

			return stat;
		},
		boostBy(boost) {
			let delta = 0;
			for (let i in boost) {
				// @ts-ignore
				delta = boost[i];
				// @ts-ignore
				if (delta > 0 && this.getStat(i, false, true, true) === 999) {
					delta = 0;
					continue;
				}
				// @ts-ignore
				this.boosts[i] += delta;
				// @ts-ignore
				if (this.boosts[i] > 6) {
					// @ts-ignore
					delta -= this.boosts[i] - 6;
					// @ts-ignore
					this.boosts[i] = 6;
				}
				// @ts-ignore
				if (this.boosts[i] < -6) {
					// @ts-ignore
					delta -= this.boosts[i] - (-6);
					// @ts-ignore
					this.boosts[i] = -6;
				}
			}
			return delta;
		},
	},
	// Battle scripts.
	runMove(moveOrMoveName, pokemon, targetLoc, sourceEffect) {
		let move = this.getActiveMove(moveOrMoveName);
		let target = this.getTarget(pokemon, move, targetLoc);
		if (!sourceEffect && move.id !== 'struggle') {
			let changedMove = this.runEvent('OverrideAction', pokemon, target, move);
			if (changedMove && changedMove !== true) {
				move = this.getActiveMove(changedMove);
				target = this.resolveTarget(pokemon, move);
			}
		}
		if (!target && target !== false) target = this.resolveTarget(pokemon, move);

		this.setActiveMove(move, pokemon, target);

		if (pokemon.moveThisTurn) {
			// THIS IS PURELY A SANITY CHECK
			// DO NOT TAKE ADVANTAGE OF THIS TO PREVENT A POKEMON FROM MOVING;
			// USE this.cancelMove INSTEAD
			this.debug('' + pokemon.id + ' INCONSISTENT STATE, ALREADY MOVED: ' + pokemon.moveThisTurn);
			this.clearActiveMove(true);
			return;
		}
		if (!this.runEvent('BeforeMove', pokemon, target, move)) {
			this.runEvent('MoveAborted', pokemon, target, move);
			this.clearActiveMove(true);
			// This is only run for sleep and fully paralysed.
			this.runEvent('AfterMoveSelf', pokemon, target, move);
			return;
		}
		if (move.beforeMoveCallback) {
			if (move.beforeMoveCallback.call(this, pokemon, target, move)) {
				this.clearActiveMove(true);
				return;
			}
		}
		pokemon.lastDamage = 0;
		let lockedMove = this.runEvent('LockMove', pokemon);
		if (lockedMove === true) lockedMove = false;
		if (!lockedMove) {
			if (!pokemon.deductPP(move, null, target) && (move.id !== 'struggle')) {
				this.add('cant', pokemon, 'nopp', move);
				this.clearActiveMove(true);
				return;
			}
		}
		pokemon.moveUsed(move);
		this.useMove(move, pokemon, target, sourceEffect);
		this.singleEvent('AfterMove', move, null, pokemon, target, move);
		if (!move.selfSwitch && target && target.hp > 0) this.runEvent('AfterMoveSelf', pokemon, target, move);
	},
	tryMoveHit(target, pokemon, move) {
		let positiveBoostTable = [1, 1.33, 1.66, 2, 2.33, 2.66, 3];
		let negativeBoostTable = [1, 0.75, 0.6, 0.5, 0.43, 0.36, 0.33];
		let doSelfDestruct = true;
		/** @type {number | false | undefined} */
		let damage = 0;

		if (move.selfdestruct && doSelfDestruct) {
			this.faint(pokemon, pokemon, move);
		}

		let hitResult = this.singleEvent('PrepareHit', move, {}, target, pokemon, move);
		if (!hitResult) {
			if (hitResult === false) this.add('-fail', target);
			return false;
		}
		this.runEvent('PrepareHit', pokemon, target, move);

		if (!this.singleEvent('Try', move, null, pokemon, target, move)) {
			return false;
		}

		hitResult = this.runEvent('TryImmunity', target, pokemon, move);
		if (!hitResult) {
			if (!move.spreadHit) this.attrLastMove('[miss]');
			this.add('-miss', pokemon);
			return false;
		}

		if (move.ignoreImmunity === undefined) {
			move.ignoreImmunity = (move.category === 'Status');
		}

		if ((!move.ignoreImmunity || (move.ignoreImmunity !== true && !move.ignoreImmunity[move.type])) && !target.runImmunity(move.type, true)) {
			return false;
		}

		hitResult = this.runEvent('TryHit', target, pokemon, move);
		if (!hitResult) {
			if (hitResult === false) this.add('-fail', target);
			return false;
		}

		/** @type {number | true} */
		let accuracy = move.accuracy;
		if (move.alwaysHit) {
			accuracy = true;
		} else {
			accuracy = this.runEvent('Accuracy', target, pokemon, move, accuracy);
		}
		
		// Now, let's calculate the accuracy.
		if (accuracy !== true) {
			accuracy = Math.floor(accuracy * 255 / 100);
			if (move.ohko) {
				if (pokemon.level >= target.level) {
					accuracy += (pokemon.level - target.level) * 2;
					accuracy = Math.min(accuracy, 255);
				} else {
					this.add('-immune', target, '[ohko]');
					return false;
				}
			}
			if (!move.ignoreAccuracy) {
				if (pokemon.boosts.accuracy > 0) { 
					accuracy *= positiveBoostTable[pokemon.boosts.accuracy];
				} else {
					accuracy *= negativeBoostTable[-pokemon.boosts.accuracy];
				}
			}
			if (!move.ignoreEvasion) {
				if (target.boosts.evasion > 0 && !move.ignorePositiveEvasion) {
					accuracy *= negativeBoostTable[target.boosts.evasion];
				} else if (target.boosts.evasion < 0) {
					accuracy *= positiveBoostTable[-target.boosts.evasion];
				}
			}
			accuracy = Math.min(Math.floor(accuracy), 255);
			accuracy = Math.max(accuracy, 1);
		} else {
			accuracy = this.runEvent('Accuracy', target, pokemon, move, accuracy);
		}
		accuracy = this.runEvent('ModifyAccuracy', target, pokemon, move, accuracy);
		
		if (accuracy !== true) accuracy = Math.max(accuracy, 0);
		if (move.alwaysHit) {
			accuracy = true;
		} else {
			accuracy = this.runEvent('Accuracy', target, pokemon, move, accuracy);
		} 

		if (accuracy !== true && accuracy !== 255 && !this.randomChance(accuracy, 256)) {
			this.attrLastMove('[miss]');
			this.add('-miss', pokemon);
			damage = false;
			return damage;
	// // // !
	
			// counting = this.effectData.etc activeTurns how does it count them? merely a number initializing 
			// ^& reinitializing is yet a mystery
			
			// // if (this.attrLastMove('[miss]')) counting++;
			// // 2. this.boost = {('spa': 1)}; Maybe only if last move used was special / up Crit Ratio by 1
			// // 3. pokemon.setStatus('confusion');
			// // 5. if (target.lastMove.id !== 'swagger' && pokemon.boosts['atk'] <= 2) this.boost = {('atk': 1)};
			// // 6* this.cancelMove; OnBeforeNextTurn
			// // 7. this.useMove('bide', pokemon);		
			// // 9. move.selfSwitch (essentially after bide ends and misses, not specifically a miss count) 
			
			var aCounting;
			if (pokemon.moveThisTurn === false) {
				if (this.effectData.counter === [null, undefined]) this.effectData.counter = 0; 
			// how to initialize ?

				aCounting = this.effectData.counter;
				aCounting++;
				switch (aCounting) {
					case 3: 
						this.boost({spa: 1});
						// if (move.category === 'Special') Crit Ratio++
						//let critRatio = this.runEvent('ModifyCritRatio', pokemon, null, 	// move, move.critRatio 
						aCounting++; 
				// break;}
					case 4: 
						if (target.lastMove && target.lastMove.id !== 'swagger') this.boost({atk: 1});
						aCounting++;
				// break;}
					case 5: 
						if (!pokemon.volatiles['confusion']) {
							pokemon.addVolatile('confusion');
							aCounting++;
						} else {	aCounting = 0;} 
						//when confused the player has a hitSelf chance, this makes things weird						
				// break;}
					// case 6: this.cancelMove;
					case 7:
						// this.cancelMove;
						this.useMove('bide', pokemon);	
						aCounting++;
				// break;}
					case 8: 
						this.useMove('batonpass', pokemon);
						move.selfSwitch =  true;
						aCounting = 0;
				// break;}
				}	
			}			
	// // // !	
		}


		move.totalDamage = 0;
		pokemon.lastDamage = 0;
		
		if (move.multihit) {
			let hits = move.multihit;
			if (Array.isArray(hits)) {
				if (hits[0] === 2 && hits[1] === 5) {
					hits = this.sample([2, 2, 2, 3, 3, 3, 4, 5]);
				} else {
					hits = this.random(hits[0], hits[1] + 1);
				}
			}
			hits = Math.floor(hits);
			
			let nullDamage = true;
			/**@type {number | undefined | false} */
			let moveDamage;

			let isSleepUsable = move.sleepUsable || this.getMove(move.sourceEffect).sleepUsable;
			let i;
			for (i = 0; i < hits && target.hp && pokemon.hp; i++) {
				if (pokemon.status === 'slp' && !isSleepUsable) break;
				move.hit = i + 1;
				if (move.hit === hits) move.lastHit = true;
				moveDamage = this.moveHit(target, pokemon, move);
				if (moveDamage === false) break;
				if (nullDamage && (moveDamage || moveDamage === 0 || moveDamage === undefined)) nullDamage = false;
				damage = (moveDamage || 0);
				move.totalDamage += damage;
				this.eachEvent('Update');
			}
			if (i === 0) return 1;
			if (nullDamage) damage = false;
			this.add('-hitcount', target, i);
		} else {
			damage = this.moveHit(target, pokemon, move);
			move.totalDamage = damage;
		}
		if (move.category !== 'Status') {
			target.gotAttacked(move, damage, pokemon);
		}
		if (move.ohko) this.add('-ohko');

		if (!move.negateSecondary) {
			this.singleEvent('AfterMoveSecondary', move, null, target, pokemon, move);
			this.runEvent('AfterMoveSecondary', target, pokemon, move);
		}

		if (move.recoil && move.totalDamage) {
			this.damage(this.calcRecoilDamage(move.totalDamage, move), pokemon, target, 'recoil');
		}
		return damage;
	},
	/** @return {number | undefined | false} */
	moveHit(target, pokemon, move, moveData, isSecondary, isSelf) {
		/** @type {number | false | null | undefined} */
		let damage = undefined;
		move = this.getActiveMove(move);

		if (!moveData) moveData = move;
		/**@type {?boolean | number} */
		let hitResult = true;

		if (move.target === 'all' && !isSelf) {
			hitResult = this.singleEvent('TryHitField', moveData, {}, target, pokemon, move);
		} else if ((move.target === 'foeSide' || move.target === 'allySide') && !isSelf) {
			hitResult = this.singleEvent('TryHitSide', moveData, {}, (target ? target.side : null), pokemon, move);
		} else if (target) {
			hitResult = this.singleEvent('TryHit', moveData, {}, target, pokemon, move);
		}
		if (!hitResult) {
			if (hitResult === false) this.add('-fail', target);
			return false;
		}

		if (target && !isSecondary && !isSelf) {
			hitResult = this.runEvent('TryPrimaryHit', target, pokemon, moveData);
			if (hitResult === 0) {
				// special Substitute flag
				hitResult = true;
				target = null;
			}
		}
		if (target && isSecondary && !moveData.self) {
			hitResult = true;
		}
		if (!hitResult) {
			return false;
		}

		if (target) {
			/**@type {?boolean | number} */
			let didSomething = false;
			damage = this.getDamage(pokemon, target, moveData);

			if ((damage || damage === 0) && !target.fainted) {
				if (move.noFaint && damage >= target.hp) {
					damage = target.hp - 1;
				}
				damage = this.damage(damage, target, pokemon, move);
				if (!(damage || damage === 0)) {
					this.debug('damage interrupted');
					return false;
				}
				didSomething = true;
			}
			if (damage === false || damage === null) {
				if (damage === false && !isSecondary && !isSelf) {
					this.add('-fail', target);
				}
				this.debug('damage calculation interrupted');
				return false;
			}

			if (moveData.boosts && !target.fainted) {
				if (pokemon.volatiles['lockon'] && target === pokemon.volatiles['lockon'].source && target.isSemiInvulnerable() && !isSelf) {
					if (!isSecondary) this.add('-fail', target);
					return false;
				}
				hitResult = this.boost(moveData.boosts, target, pokemon, move);
				didSomething = didSomething || hitResult;
			}
			if (moveData.heal && !target.fainted) {
				let d = target.heal(Math.round(target.maxhp * moveData.heal[0] / moveData.heal[1]));
				if (!d && d !== 0) {
					this.add('-fail', target);
					this.debug('heal interrupted');
					return false;
				}
				this.add('-heal', target, target.getHealth);
				didSomething = true;
			}
			if (moveData.status) {
				hitResult = target.trySetStatus(moveData.status, pokemon, move);
				if (!hitResult && move.status) return hitResult;
				didSomething = didSomething || hitResult;
			}
			if (moveData.forceStatus) {
				hitResult = target.setStatus(moveData.forceStatus, pokemon, move);
				didSomething = didSomething || hitResult;
			}
			if (moveData.volatileStatus) {
				hitResult = target.addVolatile(moveData.volatileStatus, pokemon, move);
				didSomething = didSomething || hitResult;
			}
			if (moveData.sideCondition) {
				hitResult = target.side.addSideCondition(moveData.sideCondition, pokemon, move);
				didSomething = didSomething || hitResult;
			}
			if (moveData.weather) {
				hitResult = this.field.setWeather(moveData.weather, pokemon, move);
				didSomething = didSomething || hitResult;
			}
			if (moveData.pseudoWeather) {
				hitResult = this.field.addPseudoWeather(moveData.pseudoWeather, pokemon, move);
				didSomething = didSomething || hitResult;
			}
			if (moveData.forceSwitch) {
				if (this.canSwitch(target.side)) didSomething = true; // at least defer the fail message to later
			}
			if (moveData.selfSwitch) {
				if (this.canSwitch(pokemon.side)) didSomething = true; // at least defer the fail message to later
			}
			// Hit events
			//   These are like the TryHit events, except we don't need a FieldHit event.
			//   Scroll up for the TryHit event documentation, and just ignore the "Try" part. ;)
			hitResult = null;
			if (move.target === 'all' && !isSelf) {
				if (moveData.onHitField) hitResult = this.singleEvent('HitField', moveData, {}, target, pokemon, move);
			} else if ((move.target === 'foeSide' || move.target === 'allySide') && !isSelf) {
				if (moveData.onHitSide) hitResult = this.singleEvent('HitSide', moveData, {}, target.side, pokemon, move);
			} else {
				if (moveData.onHit) hitResult = this.singleEvent('Hit', moveData, {}, target, pokemon, move);
				if (!isSelf && !isSecondary) {
					this.runEvent('Hit', target, pokemon, move);
				}
				if (moveData.onAfterHit) hitResult = this.singleEvent('AfterHit', moveData, {}, target, pokemon, move);
			}

			if (!hitResult && !didSomething && !moveData.self && !moveData.selfdestruct) {
				if (!isSelf && !isSecondary) {
					if (hitResult === false || didSomething === false) this.add('-fail', target);
				}
				this.debug('move failed because it did nothing');
				return false;
			}
		}
		if (moveData.self) {
			let selfRoll = 0;
			if (!isSecondary && moveData.self.boosts) selfRoll = this.random(100);
			// This is done solely to mimic in-game RNG behaviour. All self drops have a 100% chance of happening but still grab a random number.
			if (moveData.self.chance === undefined || selfRoll < moveData.self.chance) {
				this.moveHit(pokemon, pokemon, move, moveData.self, isSecondary, true);
			}
		}
		if (moveData.secondaries && this.runEvent('TrySecondaryHit', target, pokemon, moveData)) {
			for (const secondary of moveData.secondaries) {
				// We check here whether to negate the probable secondary status if it's burn or freeze.
				// In the game, this is checked and if true, the random number generator is not called.
				// That means that a move that does not share the type of the target can status it.
				// This means tri-attack can burn fire-types and freeze ice-types.
				// Unlike gen 1, though, paralysis works for all unless the target is immune to direct move (ie. ground-types and t-wave).
				if (secondary.status && ['brn', 'frz'].includes(secondary.status) && target && target.hasType(move.type)) {
					this.debug('Target immune to [' + secondary.status + ']');
					continue;
				}
				// A sleeping or frozen target cannot be flinched in Gen 2; King's Rock is exempt
				if (secondary.volatileStatus === 'flinch' && target && ['slp', 'frz'].includes(target.status) && !secondary.kingsrock) {
					this.debug('Cannot flinch a sleeping or frozen target');
					continue;
				}
				if (secondary.volatileStatus === 'confusion' && target && target.status === 'frz') {
					// this.debug('Cannot flinch a sleeping or frozen target');
					continue;
				}
				 
				// Multi-hit moves only roll for status once
				if (!move.multihit || move.lastHit) {
					let effectChance = Math.floor((secondary.chance || 100) * 255 / 100);
					if (typeof secondary.chance === 'undefined' || this.randomChance(effectChance, 256)) {
						this.moveHit(target, pokemon, move, secondary, true, isSelf);
					} else if (effectChance === 255) {
						this.hint("In Gen 2, moves with a 100% secondary effect chance will not trigger in 1/256 uses.");
					}
				}
			}
		}
		if (target && target.hp > 0 && pokemon.hp > 0 && moveData.forceSwitch && this.canSwitch(target.side)) {
			hitResult = this.runEvent('DragOut', target, pokemon, move);
			if (hitResult) {
				this.dragIn(target.side, target.position);
			} else if (hitResult === false) {
				this.add('-fail', target);
			}
		}
		if (move.selfSwitch && pokemon.hp) {
			pokemon.switchFlag = move.fullname;
		}
		return damage;
	},
	getDamage(pokemon, target, move, suppressMessages) {
		// First of all, we get the move.
		if (typeof move === 'string') {
			move = this.getActiveMove(move);
		} else if (typeof move === 'number') {
			move = /** @type {ActiveMove} */ ({
				basePower: move,
				type: '???',
				category: 'Physical',
				willCrit: false,
				flags: {},
			});
		}

		// Let's test for immunities.
		if (!move.ignoreImmunity || (move.ignoreImmunity !== true && !move.ignoreImmunity[move.type])) {
			if (!target.runImmunity(move.type, true)) {
				return false;
			}
		}

		// Is it an OHKO move?
		if (move.ohko) {
			return target.maxhp;
		}

		// We edit the damage through move's damage callback
		if (move.damageCallback) {
			return move.damageCallback.call(this, pokemon, target);
		}

		// We take damage from damage=level moves
		if (move.damage === 'level') {
			return pokemon.level;
		}

		// If there's a fix move damage, we run it
		if (move.damage) {	
			return move.damage;
		}

		// We check the category and typing to calculate later on the damage
		move.category = this.getCategory(move);
		if (!move.defensiveCategory) move.defensiveCategory = move.category;
		// '???' is typeless damage: used for Struggle and Confusion etc
		if (!move.type) move.type = '???';
		let type = move.type;

		// We get the base power and apply basePowerCallback if necessary
		/** @type {number | false | null | undefined} */
		let basePower = move.basePower;
		if (move.basePowerCallback) {
			basePower = move.basePowerCallback.call(this, pokemon, target, move);
		}

		// We check for Base Power
		if (!basePower) {
			if (basePower === 0) return; // Returning undefined means not dealing damage
			return basePower;
		}
		basePower = this.clampIntRange(basePower, 1);
	// * //
		let attacker = pokemon;
		let defender = target;
		if (move.useTargetOffensive) attacker = target;
		if (move.useSourceDefensive) defender = pokemon;
		/** @type {StatNameExceptHP} */
		let atkType = (move.category === 'Physical') ? 'atk' : 'spa';
		/** @type {StatNameExceptHP} */
		let defType = (move.defensiveCategory === 'Physical') ? 'def' : 'spd';
		let unboosted = false;
		let noburndrop = false;
	// * //
		// Checking for the move's Critical Hit ratio
		let critRatio = this.runEvent('ModifyCritRatio', pokemon, target, move, move.critRatio || 0);
		critRatio = this.clampIntRange(critRatio, 0, 5);
		let critMult = [0, 16, 8, 4, 3, 2];
		//* // move.crit = move.willCrit || false;
		
	// // // !	
		let modal = Math.ceil(attacker.maxhp * 0.19);
		let vitals = (attacker.status === 'tox') ? 'true' : 'false';
		let nuVitals = (attacker.status === 'psn' && attacker.hp < modal) ? 'true' : 'false';	
		
		if (!attacker.hasType('Beast')) {
			
			if (vitals === 'true') {
				critRatio = this.clampIntRange(critRatio, 0, 3);			 
				critMult.splice(1, 2); 
				//// [0, 4, 3, 2];
			} else if (vitals === 'true' && attacker.hp < modal) {	
				critRatio = this.clampIntRange(critRatio, 0, 2);			
				critMult.splice(1, 3);
							// (i, x)
				//// [0, 3, 2];
			}	//   [0, 8, 4, 3, 2]
			
			if (attacker.status === 'psn' || attacker.hp < modal) {
				critRatio = this.clampIntRange(critRatio, 0, 4);			
				critMult.splice(1, 1);
				//// [0, 8, 4, 3, 2]; 
			} 
			
			if (nuVitals === 'true' && vitals === 'false') {		
				critRatio = this.clampIntRange(critRatio, 0, 3);	//? What happens if range is 4 but list is 3?
				critMult.splice(1, 2); 
				//// [0, 4, 3, 2];
			}
		}
		
		if (attacker.hasType('Beast') && ['tox', 'psn'].includes(attacker.status)) {		
			critRatio = this.clampIntRange(critRatio, 0, 3);				  
			critMult.splice(1, 2); 
			//// [0, 4, 3, 2];
			if (this.willMove(attacker) && this.willMove(attacker) === 'move' && move.category === 'Physical') move.accuracy = true;
		} 	
		
		if (type === 'Fire' && defender.hasType('Bird')) {
			
			if ([nuVitals, vitals].includes('false')) {
				critRatio = this.clampIntRange(critRatio, 0, 4);
			} else if ([nuVitals, vitals].includes('true')) { 
				critRatio = this.clampIntRange(critRatio, 0, 2);
				if (vitals === 'true' && attacker.hp < modal) {	
					critRatio = this.clampIntRange(critRatio, 0, 1);
				}
			} else if ((attacker.status === 'psn' && vitals === 'false') || attacker.hp < modal) { 
				critRatio = this.clampIntRange(critRatio, 0, 3);
			}
			
			critMult.splice(1, 1); 
			//// [0, 8, 4, 3, 2]; 
		}		
		
		if (type === 'Fighting' && defender.hasType('Ice')) {
			
			if ([nuVitals, vitals].includes('false')) { 
				critRatio = this.clampIntRange(critRatio, 0, 4);
			} else if ([nuVitals, vitals].includes('true')) { 
				critRatio = this.clampIntRange(critRatio, 0, 2);
				if (vitals === 'true' && attacker.hp < modal) {
					critRatio = this.clampIntRange(critRatio, 0, 1);
				}
			} else if ((attacker.status === 'psn' && vitals === 'false') || attacker.hp < modal) { 
				critRatio = this.clampIntRange(critRatio, 0, 3);
			}
			
			critMult.splice(1, 1); 
			//// [0, 8, 4, 3, 2]; 
		}			
		
		if (type === 'Steel' && ['Ice', 'Ghost'].includes(defender.hasType)) {
			
			//// [0, 4, 3, 2]; else //// [0, 8, 4, 3, 2];
			if (attacker.hasType('Steel') && defender.hasType('Ice')) {
				
				if ([nuVitals, vitals].includes('false')) { 
					critRatio = this.clampIntRange(critRatio, 0, 3);
				} else if ([nuVitals, vitals].includes('true')) { 
					critRatio = this.clampIntRange(critRatio, 0, 1);	
					if (vitals === 'true' && attacker.hp < modal) {
						move.crit = true;
					}
				} else if (attacker.status === 'psn' || attacker.hp < modal) { 
					critRatio = this.clampIntRange(critRatio, 0, 2);
				}
				
				critMult.splice(1, 2);
				
			} else if (attacker.hasType('Steel') && defender.hasType('Ghost') && this.field.isWeather('sunnyday')) {
				
				if ([nuVitals, vitals].includes('false')) { 
					critRatio = this.clampIntRange(critRatio, 0, 3);
				} else if ([nuVitals, vitals].includes('true')) { 
					critRatio = this.clampIntRange(critRatio, 0, 1);	
					if (vitals === 'true' && attacker.hp < modal) {
						move.crit = true;
					}
				} else if ((attacker.status === 'psn' && vitals === 'false') || attacker.hp < modal) { 
					critRatio = this.clampIntRange(critRatio, 0, 2);
				}	
				
				critMult.splice(1, 2);
				
			} else	{
				
				if ([nuVitals, vitals].includes('false')) { 
					critRatio = this.clampIntRange(critRatio, 0, 4);
				} else if ([nuVitals, vitals].includes('true')) { 
					critRatio = this.clampIntRange(critRatio, 0, 2);
					if (vitals === 'true' && attacker.hp < modal) {
						critRatio = this.clampIntRange(critRatio, 0, 1);
					}
				} else if ((attacker.status === 'psn' && vitals === 'false') || attacker.hp < modal) { 
					critRatio = this.clampIntRange(critRatio, 0, 3);
				}
				
				critMult.splice(1, 1);; 
				
			}
		}

		if (defender.hasType('Ghost')) {
			
			if (['lockon', 'foresight', 'mindreader'].includes(pokemon.lastMove.id) 
				&& pokemon.moveLastTurnResult === true) {
					
				if ([nuVitals, vitals].includes('false')) { 
					critRatio = this.clampIntRange(critRatio, 0, 4);
				} else if ([nuVitals, vitals].includes('true')) { 
					critRatio = this.clampIntRange(critRatio, 0, 2); //[0, X, X, 3, 2];
					if (vitals === 'true' && attacker.hp < modal) {
						critRatio = this.clampIntRange(critRatio, 0, 1);  //[0, X, 4, 3, 2];
					}
				} else if ((attacker.status === 'psn' && vitals === 'false') || attacker.hp < modal) { 
					critRatio = this.clampIntRange(critRatio, 0, 3); //[0, X, X, X, 2];
				}
				// [0, 8, 4, 3, 2];
				critMult.splice(1, 1);
				
				/* if (defender.status === 'par' && attacker.hasType('Steel')) {
					critRatio--; ////= this.clampIntRange(critRatio, 0, 3);
					//[0, 4, 3, 2]; 
					//critMult.shift(); 
					critMult.splice(1, 1);
				} */
			}
			
			if (defender.status === 'par') {
				if (attacker.hp < modal) { 
					critRatio = this.clampIntRange(critRatio, 0, 2);
				} else {	critRatio = this.clampIntRange(critRatio, 0, 3);
				} // else if ooh spooky
				critMult.splice(1, 2); 
				//// [0, 4, 3, 2]; 	
			}
		}
	// // // !		
		
		//* // 
		move.crit = move.willCrit || false;
		//* // 
		
		if (typeof move.willCrit === 'undefined') {
			if (critRatio) {
				move.crit = this.randomChance(1, critMult[critRatio]);
			}
		}

		if (move.crit) {
			move.crit = this.runEvent('CriticalHit', target, null, move);
		}
		
	//*//*//
		if (move.crit === !false && defender.hasType('Fire')) {
			if (type === 'Ice') {
				move.crit = false;
				if (!suppressMessages) {
					this.add('-crit', target);
					this.add('-fail', target);
				}
			}
		}
		if (move.crit === !false && defender.hasType('Electric')) {
			if (type === 'Flying') {
				move.crit = false;
				if (!suppressMessages) {
					this.add('-crit', target);
					this.add('-fail', target);
				}
			}
		}
		if (move.crit === !false && defender.hasType('Poison')) {
			if (type === 'Fighting' || ['psn', 'tox'].includes(attacker.status)) {
				move.crit = false;
				if (!suppressMessages) {
					this.add('-crit', target);
					this.add('-fail', target);
				}
			}
		}
		if (move.crit === !false && defender.hasType('Faery')) {
			if (attacker.hasType('Fighting') && type === 'Fighting') {
				move.crit = false;
				if (!suppressMessages) {
					this.add('-crit', target);
					this.add('-fail', target);
				}
			}
		}
		if (move.crit === !false && defender.hasType('Bird')) {
			if (attacker.hasType('Bug') && type === 'Bug') {
				move.crit = false;
				if (!suppressMessages) {
					this.add('-crit', target);
					this.add('-fail', target);
				}
			}
		}
	//*//*//
		
		// Happens after crit calculation
		if (basePower) {
			// confusion damage
			if (move.isSelfHit) {
				// @ts-ignore
				move.type = move.baseMoveType;
				basePower = this.runEvent('BasePower', pokemon, target, move, basePower, true);
				move.type = '???';
			} else {
				basePower = this.runEvent('BasePower', pokemon, target, move, basePower, true);
			}
			if (basePower && move.basePowerModifier) { 
				basePower *= move.basePowerModifier;  
			 }
		}
		if (!basePower) return 0;
		basePower = this.clampIntRange(basePower, 1);

		// We now check for attacker and defender
		let level = pokemon.level;

		// Using Beat Up
		if (move.allies) {
			this.add('-activate', pokemon, 'move: Beat Up', '[of] ' + move.allies[0].name);
			level = move.allies[0].level;
		}

		//* // let attacker = pokemon;
		//* // let defender = target;
		//* // if (move.useTargetOffensive) attacker = target;
		//* // if (move.useSourceDefensive) defender = pokemon;
		//* // /** @type {StatNameExceptHP} */
		//* // let atkType = (move.category === 'Physical') ? 'atk' : 'spa';
		//* // /** @type {StatNameExceptHP} */
		//* // let defType = (move.defensiveCategory === 'Physical') ? 'def' : 'spd';
		//* // let unboosted = false;
		//* // let noburndrop = false;
		

		// The move is a critical hit. Several things happen here.
		if (move.crit) {
			// Level is doubled for damage calculation.
			
			//* // level *= 2;
			
		    let damagec = basePower; //	Doesn't factor Effectiveness, instead emphasizes the move's power
						
			// Toxic & Poison both peirce defense,
			// The trade off with Toxic is that, while it pierces Weather's defenses, it doesn't access Weather's buffs
			// Only Normal poisoning stacks damage multipliers

			
			damagec = damagec * 2;	
			
			if (defender.lastMove && defender.lastMove.id === 'sandattack' && defender.moveLastTurnResult === true) {
				damagec = damagec * 8;
				damagec = Math.round(damagec / 7);
			}
			
			if (vitals === 'true') {	damagec *= 1;}
			
			else if (nuVitals === 'true' || attacker.hp < modal) {
				damagec = damagec * 14;
				damagec = Math.round(damagec / 15);
			}
			
			else if (vitals === 'false' && nuVitals === 'false') {
				damagec = damagec * 3;
				damagec = Math.round(damagec / 4);
			}
			
			// RNG Variance develops depending on volatile Status and Health
			
			if (vitals === 'true')  { // 2 - 1.4
				
				if (!move.noDamageVariance && damagec > 1) {
					damagec *= this.random(180, 256);
					damagec = Math.floor(damagec / 255);
				} 				 
				if (!suppressMessages) this.add('-crit', target);
				
				return damagec;
			}
			
			//	Weather influences each critical except when the player has the Toxic status 
			
			if ((this.field.isWeather('raindance') && type === 'Water') || (this.field.isWeather('sunnyday') && type === 'Fire') || 
				(this.field.isWeather('sandstorm') && move.id === 'ancientpower' && attacker.hasType('Rock'))) {
				damagec = Math.floor(damagec * 1.5);
				
			}
			if ((this.field.isWeather('raindance') && (type === 'Fire' || type === 'Ghost' || move.id === 'solarbeam')) || 
				(this.field.isWeather('sunnyday') && type === 'Water')) {
					damagec = Math.floor(damagec / 2);
			} 
			if (this.field.isWeather('sandstorm') && move.id === 'solarbeam') damagec = Math.ceil(damagec * 0.8);
			
			//Still needs extensive proofing trials, getting here means that defense is peirced alongside weather only
			
			if (nuVitals === 'false' && attacker.hp < modal) { // 1.866_ - 1.5866_
				
				if (!move.noDamageVariance && damagec > 1) {
					damagec *= this.random(217, 256);
					damagec = Math.floor(damagec / 255);
				}
				if (!suppressMessages) this.add('-crit', target);
				
				return damagec;
			}
			
			// Stat Multipliers stack on Critical Hit
			
			let	atkVar;
			// *// * //
			if (attacker.getStat(atkType) !== attacker.getStat(atkType, true, noburndrop)) {
			// *// * //	
				if (scaleMultPOS > 10000000) {														
					atkVar = [10000000, 12500000, 13333333, 14222222, 15555555, 16666666, 17777777];
					let i = 0;

						while (atkVar[i] != scaleMultPOS) {i++;}

					damagec = Math.round(damagec * atkVar[i]); 
					damagec = Math.floor(damagec / atkVar[0]);
					
					
				} else {
					
					// atkVar = [10000000, 8000000, 7500000, 7031250, 6428571, 6000000, 5555555];

					damagec = Math.round(damagec * attacker.getStat(atkType));
					atkVar = attacker.getStat(atkType, true, noburndrop);
					damagec = Math.ceil(damagec / atkVar);
				}	
			}
			
			if (attacker.status === 'psn' || nuVitals === 'true') { // 1.5 - 1.365 || 1.866 - 1.7 
			
				if (['poisonpowder', 'poisongas'].includes(defender.lastMove.id)
					&& defender.lastMove && defender.moveLastTurnResult === true) {
					damage *= 1; //1.5 || 1.866
				} else {
					if (!move.noDamageVariance && damagec > 1) {
						damagec *= this.random(232, 256);
						damagec = Math.floor(damagec / 255);
					}
					if (!suppressMessages) this.add('-crit', target);
					
					return damagec;
				}
			}
			
			
			let defVar;
			// *// * //
			if (defender.getStat(defType) !== defender.getStat(defType, true, noburndrop)) {
			// *// * //	
				let scalar = 10125;
				let precise = 10000;
				
				if (scaleMultPOS > 10000000) { 
					defVar = [10000000, 12500000, 13333333, 14222222, 15555555, 16666666, 17777777];
					let i = 0;
				
						while (defVar[i] != scaleMultPOS) {i++;}
					
					damagec = Math.round(damagec * defVar[0]); 
					damagec = Math.ceil(damagec / defVar[i]);
					
					if (defVar[i] == defVar[6]) {	//needs reduce down from 1.8
						damagec = Math.round(damagec * precise);
						damagec = Math.ceil(damagec / scalar);	
					}
						
				} else {
					
					// defVar = [10000000, 8000000, 7500000, 7031250, 6428571, 6000000, 5555555];

					defVar = defender.getStat(defType, true, noburndrop);
					damagec = Math.round(damagec * defVar);
					damagec = Math.floor(damagec / defender.getStat(defType));
				}
			}	
			
			// Screens play a vital role counterbalancing the damage range 
			
			if (defender.side.sideConditions['reflect'] && atkType === 'atk') {
				damagec = Math.floor(damagec / 2);
			}
			if (defender.side.sideConditions['lightscreen'] && atkType === 'spa') {
				damagec = Math.floor(damagec / 2);
			}
			
			
			// /**/ STAB is a WIP; still deciding on how to orient defenses when STAB is in play
			
			if (type !== '???' && attacker.hasType(type)) {
			
				damagec *= 22; //flat 50 ruleset only
				damagec *= attacker.getStat(atkType);
				damagec += Math.floor(damagec / 2); //stab damage multiplier
				damagec = Math.ceil(damagec / defender.getStat(defType));
				
				damagec = this.clampIntRange(Math.round(damagec / 50), 1, 997);
				
				this.add('-stab', target);				
				
				if (!move.noDamageVariance && damagec > 1) {
					damagec *= this.random(205, 256);
					damagec = Math.floor(damagec / 255);
				}
				
				if (!suppressMessages) this.add('-crit', target);
				if (attacker.boosts[atkType] <= defender.boosts[defType]) noburndrop = true;
				
				return damagec;
			}				
			
			if (!suppressMessages) this.add('-crit', target);
			// Stat level modifications are ignored if they are neutral to or favour the defender.
			// Reflect and Light Screen defensive boosts are only ignored if stat level modifications were also ignored as a result of that.
			// @ts-ignore
            if (attacker.boosts[atkType] <= defender.boosts[defType]) {
				// //* // unboosted = true;
				noburndrop = true;
			}
			
			return damagec; 
	
		} else {
		
		
		// Get stats now.
		let attack = attacker.getStat(atkType, unboosted, noburndrop);
		let defense = defender.getStat(defType, unboosted);
		
		// // //!	
		if ((defender.side.sideConditions['reflect'] && defType === 'def') || (defender.side.sideConditions['lightscreen'] && defType === 'spd')) {
			defense *= 2;
		}
		// // //!

		// Using Beat Up
		if (move.allies) {
			attack = move.allies[0].template.baseStats.atk;
			move.allies.shift();
			defense = defender.template.baseStats.def;
		}

		// Moves that ignore offense and defense respectively.
		if (move.ignoreOffensive) {
			this.debug('Negating (sp)atk boost/penalty.');
			// The attack drop from the burn is only applied when attacker's attack level is higher than defender's defense level.
			attack = attacker.getStat(atkType, true, true);
		}
		if (move.ignoreDefensive) {
			this.debug('Negating (sp)def boost/penalty.');
			defense = target.getStat(defType, true, true);
		}

		if (move.id === 'present') {
			/**@type {{[k: string]: number}} */
			const typeIndexes = {"Normal": 0, "Fighting": 1, "Flying": 2, "Poison": 3, "Ground": 4, "Rock": 5, "Bug": 7, "Ghost": 8, "Steel": 9, "Fire": 20, "Water": 21, "Grass": 22, "Electric": 23, "Psychic": 24, "Ice": 25, "Dragon": 26, "Dark": 27};
			attack = 10;

			const attackerLastType = attacker.getTypes().slice(-1)[0];
			const defenderLastType = defender.getTypes().slice(-1)[0];

			defense = typeIndexes[attackerLastType] || 1;
			level = typeIndexes[defenderLastType] || 1;
			if (move.crit) {
				level *= 2;
			}
			this.hint("Gen 2 Present has a glitched damage calculation using the secondary types of the Pokemon for the Attacker's Level and Defender's Defense.", true);
		}

		// When either attack or defense are higher than 256, they are both divided by 4 and modded by 256.
		// This is what causes the rollover bugs.
		if (attack >= 256 || defense >= 256) {
			if (attack >= 1024 || defense >= 1024) {
				this.hint("In Gen 2, a stat will roll over to a small number if it is larger than 1024.");
			}
			attack = this.clampIntRange(Math.floor(attack / 4) % 256, 1);
			defense = this.clampIntRange(Math.floor(defense / 4) % 256, 1);
		}

		// Self destruct moves halve defense at this point.
		if (move.selfdestruct && defType === 'def') {
			defense = this.clampIntRange(Math.floor(defense / 2), 1);
		}

		// Let's go with the calculation now that we have what we need.
		// We do it step by step just like the game does.
		
		//*// let damage = level * 2;
		
		let damage = level; 
		damage *= 2;
		damage = Math.floor(damage / 5);
		damage += 2;
		damage *= basePower;
		damage *= attack;
		damage = Math.floor(damage / defense);
		damage = this.clampIntRange(Math.floor(damage / 50), 1, 997);
		damage += 2;
		
	// // // !			
		let birdMoves = ['steelwing', 'drillpeck', 'peck', 'skyattack', 'wingattack', 'hiddenpowerflying'];
		let beastMoves = ['scratch', 'bite', 'pound', 'falseswipe', 'furycutter', 'crunch', 'hyperfang', 
						  'takedown', 'struggle', 'vicegrip', 'bonerush', 'thrash', 'snore', 'leechlife'];
						  

		if (attacker.hasType('Bird') && birdMoves.includes(move.id)) damage = Math.floor(damage * 1.33);
		if (attacker.hasType('Beast') && beastMoves.includes(move.id)) damage = Math.ceil(damage * 1.2); 					
	// // // !	
	
		let actor = this.willAct();
		if (this.willMove(defender) && !['instaswitch', 'switch'].includes(actor.choice)) {
		
			if (move.id === 'whirlwhind' && ['Bird', 'Rock', 'Steel'].includes(defender.hasType)) {
				this.add('-fail', defender);
			}
	//*//*// !
			if (defender.hasType('Rock') && defender.status === 'frz') {
				this.add('-resisted', defender);
				damage *= 6;
				damage = Math.round(damage / 5);
			}
			if (defender.hasType('Fighting') && move.id === 'lick') {				
				this.add('-resisted', defender);
				damage = Math.ceil(damage / 2);
				
			}
			
			if (defender.lastMove && defender.hasType('Rock') && defender.lastMove.id === 'rockthrow' && defender.moveLastTurnResult === true) {
				if (actor.choice === 'move' && this.willMove(attacker) && move.type === 'Flying' && attacker.hasType('Flying')) {
					damage *= 6;
					damage = Math.round(damage / 9);
				} 
			}
			
			if (defender.hasType('Beast') && defender.status === 'psn' && move.type === 'Poison' && attacker.hasType('Poison')) {
				this.add('-supereffective', defender);
				damage *= 5;
				damage = Math.floor(damage / 4);
			}
			
			if (type === 'Fighting' && defender.status === 'frz') {
				if (!suppressMessages) this.add('-supereffective', defender);
				damage *= 5;
				damage = Math.round(damage / 4);
			}
			if (attacker.hasType('Grass') && move.id === 'gigadrain' && defender.hasType('Bug') && this.field.isWeather('sunnyday')) {
				this.add('-supereffective', defender);
				damage *= 16;
				damage = Math.round(damage / 9);
			}
			
			
			if (defender.hasType('Fighting') && move.id === 'slam') move.type = 'Fighting';
				
			if (defender.hasType('Steel') && move.id === 'vicegrip') move.type = '???';
			
			let runThru = Math.round(attacker.maxhp * 0.87);
			if (move.id === 'hornattack' && attacker.hp !== attacker.maxhp && attacker.hp >= runThru) { 
				damage = Math.round(damage * 1.7);
			} else if (move.id === 'hornattack' && attacker.hp === attacker.maxhp) { damage *= 2;}
		}
		// // let theFury = Math.round(attacker.maxhp * 0.25);
		// // if (['furyswipes', 'furyattack'].includes(move.id) && attacker.hp < theFury) {
			// // damage *= 28;
			// // damage = Math.floor(damage / 25);
		// // }
//*//*// !
		
		// Weather modifiers
		if ((this.field.isWeather('raindance') && type === 'Water') || (this.field.isWeather('sunnyday') && type === 'Fire')) {
			damage = Math.floor(damage * 1.5);
		} else if ((this.field.isWeather('raindance') && (type === 'Fire' || type === 'Ghost' || move.id === 'solarbeam')) || (this.field.isWeather('sunnyday') && type === 'Water')) {
			damage = Math.floor(damage / 2);
		}

		// STAB damage bonus, the "???" type never gets STAB
		if (type !== '???' && pokemon.hasType(type)) {
			damage += Math.floor(damage / 2);
		}

		// Type effectiveness
		let totalTypeMod = target.runEffectiveness(move);
		// Super effective attack
		if (totalTypeMod > 0) {
			if (!suppressMessages) this.add('-supereffective', target);
			damage *= 2;
			if (totalTypeMod >= 2) {
				damage *= 2;
			}
		}
		// Resisted attack
		if (totalTypeMod < 0) {
			if (!suppressMessages) this.add('-resisted', target);
			damage = Math.floor(damage / 2);
			if (totalTypeMod <= -2) {
				damage = Math.floor(damage / 2);
			}
		}

		//* // Apply random factor is damage is greater than 1, except for Flail and Reversal
		//* // if (!move.noDamageVariance && damage > 1) {
			//* // damage *= this.random(217, 256);
			//* // damage = Math.floor(damage / 255);
		//* // }

		// If damage is less than 1, we return 1
		if (basePower && !Math.floor(damage)) {
			return 1;
		}

		// We are done, this is the final damage
		return damage;
		}
	},
};

exports.BattleScripts = BattleScripts;
