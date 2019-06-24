'use strict';

/**@type {{[k: string]: ModdedPureEffectData}} */
let BattleStatuses = {
	brn: {
		name: 'brn',
		id: 'brn',
		num: 0,
		effectType: 'Status',
		onStart(target) {
			this.add('-status', target, 'brn');
		},
		// * // onAfterMoveSelfPriority: 3,
		// * // onAfterMoveSelf(pokemon) {
			// * // residualdmg(this, pokemon);
		// * // },
	
		beforeMoveCallBack(pokemon, target) {
		
			if (this.willMove(pokemon) 
				&& ['Special', 'Physical'].includes(this.getMove(this.lastMove).category)) 
					residualdmg(this, pokemon);
		},
		onAfterSwitchInSelf(pokemon) {
			if (this.field.isWeather('sunnyday')) residualdmg(this, pokemon);			
		},
	},
	par: {
		name: 'par',
		id: 'par',
		num: 0,
		inherit: true,
		onBeforeMovePriority: 2,
		onBeforeMove(pokemon) {
			if (this.randomChance(1, 4)) {
				this.add('cant', pokemon, 'par');
				return false;
			}
		},		
	},
	slp: {
		name: 'slp',
		id: 'slp',
		num: 0,
		effectType: 'Status',
		onStart(target, move) {
			this.add('-status', target, 'slp');
			// 1-6 turns
			this.effectData.time = this.random(2, 8);			 									
		}, 
	// // // !		
		onSwitchIn() {
			for (const pokemon of this.getAllActive()) { //may not need getAll at All; works however
				if (pokemon.status === 'slp') this.boost({evasion: -1})
			}
		},
	// // // !
		beforeTurnCallback(pokemon, target, move) { //  beforeMoveCallback onOverrideAction
			var nightStash = pokemon.statusData.time + 1;
			let	dreadTimer
			for (const action of this.queue.entries()) {
				if (action && action.choice === 'move') {
				// // action.pokemon
					if (action.choice === 'nightmare' && target.moveLastTurnResult === true) {
							
						dreadTimer = this.random(2, nightStash);
															
						if (action.choice === 'move' && action.choice === 'flash') {
							dreadTimer = this.random(1, 6);
						}
					
						this.effectData.time  = dreadTimer;
						if (this.field.isWeather('sunnyday') && action.choice === "flash") pokemon.statusData.time--;
					}
				}
			}
		}, 
		onBeforeTurn(pokemon) {			
							
			let volleyMoves = [ 'outrage', 'thrash', 'petaldance']; // locked move - how does it confuse?
			
			let actor = this.willAct(); 	// this.effectData.move <- potential storage
			
			switch (actor.choice) {
				//its possible that a willmove or willact condition 
												//is the measure that sets apart the confusion from sleep dahdada!
				
			// there is a possibility that not hoisting the confusion condition here will nullify the switchout wakeup effect unfortunately
				case 'switch': { //apparently switching applies to both sides; how to remedy this bug to function based around the sleeping target
					if	(pokemon.volatiles['confusion']) {
						pokemon.statusData.time--; 
						if (pokemon.statusData.time <= 0) {
							pokemon.cureStatus();
							return; 
						}
					}
					break;
				}
				case 'instaswitch': {
					break;
				}
				case 'move': {
					
					let smoothMoves = ['sing', 'hypnosis', 'lovelykiss', 'sleeppowder', 'spore']; 
							//, 'nightmare']; What if nightmare ends when inducting monster faints
					let shuiteMoves = ['confuseray', 'supersonic', 'sweetkiss', 'swagger' 
							   , 'batonpass']; 
					
					if (pokemon.lastMove 
						&& [smoothMoves, shuiteMoves].includes(pokemon.lastMove.id) 
						&& pokemon.moveLastTurnResult === true) 
						{	break;}
						
					else if (pokemon.lastMove
							&& pokemon.lastMove.id === 'nightmare' 
							&& pokemon.moveLastTurnResult === true) 
						{	pokemon.statusData.time++;}

					else {
						if (pokemon.volatiles['confusion'] 
							&& !pokemon.hurtThisTurn 
							&& !pokemon.volatiles['residualdmg']

						)	{
							
							pokemon.statusData.time--; 
							this.queue.unshift(pokemon);
							if (pokemon.statusData.time <= 0) {
								pokemon.cureStatus();
								// // this.boost({evasion: 1}); 
								if (this.field.isWeather('sunnyday')) this.boost({accuracy: -1});							
								return;
							}
						}
					}
				}
			} 
		},
	// // // !

		onBeforeMovePriority: 10,
		onBeforeMove(pokemon, target, move) {	
		
			pokemon.statusData.time--;		
			if (pokemon.statusData.time <= 0)  {
				
		// // // !
				if (!pokemon.volatiles['nightmare']) {				
					pokemon.cureStatus();
				
					if (!pokemon.hasType('Ghost')) 
						this.boost({evasion: 1}); 
					// // After turn two on sunny day's end accuracy++ Ghost Excluded
					if (this.field.isWeather('sunnyday')) 
						this.boost({accuracy: -1});
				
			
					return;			
				} else {
					pokemon.cureStatus();
						
					if (this.field.isWeather('sunnyday')) this.boost({accuracy: -1});
					return;
				}
		// // // ! 
			
			// * // return;
			}
			this.add('cant', pokemon, 'slp');
			if (move.sleepUsable) {
				return;
			}
			return false;
		},
	},
	frz: {
		name: 'frz',
		id: 'frz',
		num: 0,
		inherit: true,
		onBeforeMove(pokemon, target, move) {
			if (move.flags['defrost']) return;
			this.add('cant', pokemon, 'frz');
			return false;
		},
		onModifyMove() {},
		onHit() {},
		onAfterMoveSecondary(target, source, move) {
			if ((move.secondary && move.secondary.status === 'brn') || move.statusRoll === 'brn') {
				target.cureStatus();
			}
		},
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.flags['defrost']) { 
				pokemon.cureStatus();
			}
		},
		onResidual(pokemon) {
			if (this.randomChance(25, 256)) { 
				pokemon.cureStatus();
			// // // !
				// onResidualOrder: ??
				this.boost({evasion: 1});
				//Does not occur immediately on thaw as with sleep, the turn must end
				
				// On turn 2 after thaw scale up accuracy
				if (this.field.isWeather('sunnyday')) { 	this.boost({accuracy: -1});}
				else { 		this.boost({accuracy: 1});}
				// // duration: ^ after two turns during sun: accuracy++, two more turns same deal
				//Operates normally not as end of turn
			// // // !
			}
		},
	},
	psn: {
		name: 'psn',
		id: 'psn',
		num: 0,
		effectType: 'Status',
		onStart(target) {
			this.add('-status', target, 'psn');
		},
	// // // !
		onBeforeMoveSelf(pokemon) {
			if (this.willMove(pokemon) === move) {
				if (move.category === 'Status') {
					residualdmg(this, pokemon);
				}
			}
		},
	// // // !
		onAfterMoveSelfPriority: 3,
		onAfterMoveSelf(pokemon) {
	// // // !
		if (this.getMove(this.lastMove).category !== 'Status') {
			if (!pokemon.hasType('Ghost')) {	residualdmg(this, pokemon);}
			else { // should consider opting a few exception options, like self switching on Normal/Fighting types
				let moves = []; 				// Perhaps by this point it is fully visible like a stationary foresight
				for (const moveSlot of pokemon.moveSlots) {
					const move = moveSlot.id;
					if (move) moves.push(move); 
				}
				
				var i = moves.length - 1;
				let movePlicity;
				while (i >= 0) { //make PP an actual counter here, when zero self switch - if its the last monster forefit
				
					let movePlicity = moves[i];
					this.add("-activate", pokemon, 'move: Spite', this.getMove(movePlicity).name, pokemon.deductPP(movePlicity, 1));
					i--;
				}
			}
		}
	// // // !
		},
		// * // onAfterSwitchInSelf(pokemon) {
			// * // residualdmg(this, pokemon);
		// * // },
	},
	tox: {
		name: 'tox',
		id: 'tox',
		num: 0,
		effectType: 'Status',
		onStart(target) {
		// // // !
			if (target.hasType('Ghost')) { 
				target.setStatus('psn'); // I would like to see this working through depleted PP randomly selected move on residual
				let moves = []; 
				for (const moveSlot of target.moveSlots) {
					const move = moveSlot.id;
					if (move) moves.push(move); 
				}
				
				var i = moves.length - 1;
				let movePlicity;
				while (i >= 0) { 
					let movePlicity = moves[i];
					this.add("-activate", target, 'move: Spite', this.getMove(movePlicity).name, target.deductPP(movePlicity, 3));
					i--;
				} // find a way to splice the move pool in the debug message when the pp of that move reaches zero
			} else {
		// // // !
			// * //
			this.add('-status', target, 'tox');
			if (!target.volatiles['residualdmg']) target.addVolatile('residualdmg');
			target.volatiles['residualdmg'].counter = 0;			
			// * //
			}
		},
		onAfterMoveSelfPriority: 3,
		onAfterMoveSelf(pokemon) {
			this.damage(this.clampIntRange(Math.floor(pokemon.maxhp / 16), 1) * pokemon.volatiles['residualdmg'].counter, pokemon, pokemon);
		},
		onSwitchIn(pokemon) {
			// Regular poison status and damage after a switchout -> switchin.
			pokemon.setStatus('psn');
		},
		onAfterSwitchInSelf(pokemon) {
			this.damage(this.clampIntRange(Math.floor(pokemon.maxhp / 16), 1));
		},
	},
	confusion: {
		inherit: true,
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.id === 'lockedmove') {
				this.add('-start', target, 'confusion', '[silent]');
			} else {
				this.add('-start', target, 'confusion');
			}
			if (sourceEffect && sourceEffect.id === 'berserkgene') {
				this.effectData.time = 256;
			} else {
				this.effectData.time = this.random(2, 6);
			}
		},
		onBeforeMove(pokemon, target, move) {
			pokemon.volatiles.confusion.time--;
			if (!pokemon.volatiles.confusion.time) {
				pokemon.removeVolatile('confusion');
				return;
			}
		// // // !
			
			var foOnction =  Math.floor(Math.random() * 7) + 1;	 
			if (foOnction <= 0 || foOnction > 7) foOnction = 1;
			
			let action = this.willMove(pokemon);
			if (action && pokemon.getStat('spe') > target.getStat('spe')) {
				if (foOnction == 5) {
					this.queue.unshift(pokemon); 
				}
			}
			this.add('-activate', pokemon, 'confusion');
			// * // if (this.randomChance(1, 2)) {
		// // // !
			if (this.randomChance(1, 3)) {
				return;
			}
			
			// // var foonction = 6; 		// Math.floor(Math.random() * 7) + 1;	 
			// // if (foonction <= 0 || foonction > 7) foonction = 1;
			
			switch (
				// this.random(1, 7);
				// Math.floor(Math.random() * (n-m+1)) + m {m=min, n=max}

				foOnction
				
				// function generateRandomInteger(min, max) {
				// return Math.floor(min + Math.random()*(max + 1 - min)) }				
			) {
				
				case 1: {
					
					move = /** @type {ActiveMove} */ ({
					basePower: 40,
					type: '???',
					baseMoveType: move.type,
					category: 'Physical',
					willCrit: false,
					isSelfHit: true,
					noDamageVariance: true,
					flags: {},
					});
					
					let damage = this.getDamage(pokemon, pokemon, move);
					if (typeof damage !== 'number') throw new Error("Confusion damage not dealt");
					this.directDamage(damage);
																		
					break;
				}
				case 2: {
					
					let moves = []; 
					for (const moveSlot of pokemon.moveSlots) {
						const move = moveSlot.id;
						if (move) moves.push(move);
					}
					
					let randomMove = '';
					if (moves.length) randomMove = this.sample(moves);
					
					if (!randomMove) {
						return false;
					}
				
					this.useMove(randomMove, pokemon);
					
					break;
				}
				case 3: {
					
					let moves = []; 
					for (const moveSlot of pokemon.moveSlots) {
						const move = moveSlot.id;
						if (move) moves.push(move); 
					}
					
					let randomChoice = this.random(1, moves.length);
					let randomMove = moves[randomChoice];
										
					this.useMove('splash', pokemon);					 
					this.add("-activate", pokemon, 'move: Spite', this.getMove(randomMove).name, pokemon.deductPP(randomMove,1));
					
					// Still need to figure out how to intercept selected move execution 
					// changeAction() undoChoice()	// this.clearActiveMove();
  
					break;
				}
				case 4: {
					
														
					if (target.hasType('Ghost')) { 
						this.add('-immune', target);	
					} else {
						this.useMove('struggle', pokemon);				
					}
					
					break;
				}
				case 5: {
					
					// Ignored Orders! Turned Away! Won't Obey!
					// ^ Stopped the action to find a berry, fails when none is present					
					  
					if (pokemon.hasItem()) {
						let item = pokemon.getItem();
						if (item.isBerry) {						
							if (this.singleEvent('Eat', item, null, pokemon, null, null)) {
							 // this.singleEvent('Eat', item, this.itemData, this, source, sourceEffect);
								this.runEvent('EatItem', pokemon, null, null, item);
							 // this.runEvent('EatItem', this, null, null, item);
							}
							if (item.onEat) pokemon.ateBerry = true;
						} 
					} else { 
						
						this.runEvent('StallMove', pokemon); 
	
					}
					
					break;
				}
				case 6: {

					let nuMove;
					
				// shouldn't do anything related to the cureStatus functions of normal waking
				// strangely enough setStatus doesn't lower accuracy which is perfect																																				
						
					pokemon.setStatus('slp');
					this.useMove('teleport', pokemon);
					
					for (const action of this.queue) { 
						if (action.choice === 'move') { //&& action.pokemon === pokemon) {
							nuMove = action.choice; 
							// // getting this far means that a move was selected during confusion

							this.useMove(nuMove, pokemon);
						}
					}	
						pokemon.statusData.time = 1;
					
					break;
				}
				case 7: {
					
					// temporarily in play because it provides a supplement for the specific case 
					// as it maintains confusion on switch	
					this.useMove('batonpass', pokemon); 
					//this.willAct or this.queue.entries.push('switch') this.queue.entries.shift(pokemon)
					let switchIn = this.willSwitch(pokemon);
					if (switchIn && move.selfSwitch === 'copyvolatile') move.selfSwitch = true;
					// this.getActiveMove
					// 'copyvolatile' <- should be nullified so that there isn't any stat passing 
						// if (sourceEffect && (sourceEffect as Move).selfSwitch === 'copyvolatile') {
						// action.pokemon.switchCopyFlag = true;	
					
					// Still need to determine what will trigger a vanilla switch '
															
					break;
				}						
			}
	// // // !
			
			// * // move = /** @type {ActiveMove} */ ({
				// * // basePower: 40,
				// * // type: '???',
				// * // baseMoveType: move.type,
				// * // category: 'Physical',
				// * // willCrit: false,
				// * // isSelfHit: true,
				// * // noDamageVariance: true,
				// * // flags: {},
			// * // });
			// * // let damage = this.getDamage(pokemon, pokemon, move);
			// * // if (typeof damage !== 'number') throw new Error("Confusion damage not dealt");
			// * // this.directDamage(damage);
			return false;
		},		
	},
	partiallytrapped: {
		inherit: true,
		durationCallback(target, source) {
			return this.random(3, 6);
		},
	},
	lockedmove: {
		name: 'lockedmove',
		id: 'lockedmove',
		num: 0,
		// Outrage, Thrash, Petal Dance...
		durationCallback() {
			return this.random(2, 4);
		},
		onResidual(target) {
			if ((target.lastMove && target.lastMove.id === 'struggle') || target.status === 'slp') {
				// don't lock, and bypass confusion for calming
				delete target.volatiles['lockedmove'];
			}
		},
		onStart(target, source, effect) {
			this.effectData.move = effect.id;
		},
		onEnd(target) {
			// Confusion begins even if already confused
			delete target.volatiles['confusion'];
			target.addVolatile('confusion');
		},
		onLockMove(pokemon) {
			return this.effectData.move;
		},
		onMoveAborted(pokemon) {
			delete pokemon.volatiles['lockedmove'];
		},
		onBeforeTurn(pokemon) {
			let move = this.getMove(this.effectData.move);
			if (move.id) {
				this.debug('Forcing into ' + move.id);
				this.changeAction(pokemon, {move: move.id});
			}
		},
	},
	sandstorm: {
		inherit: true,
		onWeather(target) {
			// * // this.damage(target.maxhp / 8);
		// // // !
			
				if (!target.hasType('Ghost')) {
					this.damage(Math.floor(target.maxhp / 11.4)); 
				} else {
					if (target.volatiles['foresight']) this.damage(target.maxhp / 8);
				}
				
				// if (move.id === 'rapidspin' && target.moveThisTurnResult && target.moveThisTurnResult === true)

		// // // !
		},
	},
	stall: {
		name: 'stall',
		id: 'stall',
		num: 0,
		duration: 2,
		onStart() {
			this.effectData.counter = 127;
		},
		onStallMove() {
			let counter = Math.floor(this.effectData.counter) || 127;
			this.debug("Success chance: " + Math.round(counter * 1000 / 255) / 10 + "% (" + counter + "/255)");
			return this.randomChance(counter, 255);
		},
		onRestart() {
			this.effectData.counter /= 2;
			this.effectData.duration = 2;
		},
	},
	residualdmg: {
		name: 'residualdmg',
		id: 'residualdmg',
		num: 0,
		onStart(target) {
			target.volatiles['residualdmg'].counter = 0;
		},
		onAfterMoveSelfPriority: 100,
		onAfterMoveSelf(pokemon) {
			if (['brn', 'psn', 'tox'].includes(pokemon.status)) pokemon.volatiles['residualdmg'].counter++;
		},
		onAfterSwitchInSelf(pokemon) {
			if (['brn', 'psn', 'tox'].includes(pokemon.status)) pokemon.volatiles['residualdmg'].counter++;
		},
	},
};

/**
 * @param {Battle} battle
 * @param {Pokemon} pokemon
 */
function residualdmg(battle, pokemon) {
	if (pokemon.volatiles['residualdmg']) {
		battle.damage(battle.clampIntRange(Math.floor(pokemon.maxhp / 16) * pokemon.volatiles['residualdmg'].counter, 1), pokemon);
		battle.hint("In Gen 2, Toxic's counter is retained through Baton Pass/Heal Bell and applies to PSN/BRN.", true);
	} else {
		battle.damage(battle.clampIntRange(Math.floor(pokemon.maxhp / 8), 1), pokemon);
	}
}

exports.BattleStatuses = BattleStatuses;
