'use strict';

/**@type {{[k: string]: TemplateFormatsData}} */
let BattleFormatsData = {
	bulbasaur: {
		randomBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerfire", "hiddenpowerice", "sludgebomb", "powerwhip", "leechseed", "synthesis"],
		randomDoubleBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerfire", "hiddenpowerice", "sludgebomb", "powerwhip", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["sweetscent", "growth", "solarbeam", "synthesis"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "growl", "leechseed", "vinewhip"], "pokeball": "pokeball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tackle", "growl", "leechseed", "vinewhip"]},
			{"generation": 5, "level": 1, "shiny": 1, "ivs": {"def": 31}, "isHidden": false, "moves": ["falseswipe", "block", "frenzyplant", "weatherball"], "pokeball": "pokeball"},
			{"generation": 6, "level": 5, "isHidden": false, "moves": ["growl", "leechseed", "vinewhip", "poisonpowder"], "pokeball": "cherishball"},
			{"generation": 6, "level": 5, "isHidden": true, "moves": ["tackle", "growl", "celebrate"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 5},
		],
		tier: "LC",
	},
	ivysaur: {
		randomBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerfire", "hiddenpowerice", "sludgebomb", "powerwhip", "leechseed", "synthesis"],
		randomDoubleBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerfire", "hiddenpowerice", "sludgebomb", "powerwhip", "protect"],
		tier: "NFE",
	},
	venusaur: {
		randomBattleMoves: ["sunnyday", "sleeppowder", "gigadrain", "hiddenpowerfire", "sludgebomb", "leechseed", "substitute"],
		randomDoubleBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerfire", "hiddenpowerice", "sludgebomb", "powerwhip", "protect"],
		eventPokemon: [
			{"generation": 6, "level": 100, "isHidden": true, "moves": ["solarbeam", "frenzyplant", "synthesis", "grasspledge"], "pokeball": "cherishball"},
		],
		tier: "NUBL",
		doublesTier: "(DUU)",
	},
	venusaurmega: {
		randomBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerfire", "sludgebomb", "leechseed", "synthesis", "earthquake", "knockoff"],
		randomDoubleBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerfire", "hiddenpowerice", "sludgebomb", "powerwhip", "protect"],
		requiredItem: "Venusaurite",
		tier: "UUBL",
		doublesTier: "DUU",
	},
	charmander: {
		randomBattleMoves: ["flamethrower", "overheat", "dragonpulse", "hiddenpowergrass", "fireblast"],
		randomDoubleBattleMoves: ["heatwave", "dragonpulse", "hiddenpowergrass", "fireblast", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["scratch", "growl", "ember"], "pokeball": "pokeball"},
			{"generation": 4, "level": 40, "gender": "M", "nature": "Mild", "moves": ["return", "hiddenpower", "quickattack", "howl"], "pokeball": "cherishball"},
			{"generation": 4, "level": 40, "gender": "M", "nature": "Naive", "moves": ["return", "hiddenpower", "quickattack", "howl"], "pokeball": "cherishball"},
			{"generation": 4, "level": 40, "gender": "M", "nature": "Naughty", "moves": ["return", "hiddenpower", "quickattack", "howl"], "pokeball": "cherishball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["scratch", "growl", "ember", "smokescreen"]},
			{"generation": 4, "level": 40, "gender": "M", "nature": "Hardy", "moves": ["return", "hiddenpower", "quickattack", "howl"], "pokeball": "cherishball"},
			{"generation": 5, "level": 1, "shiny": 1, "ivs": {"spe": 31}, "isHidden": false, "moves": ["falseswipe", "block", "blastburn", "acrobatics"], "pokeball": "pokeball"},
			{"generation": 6, "level": 5, "isHidden": false, "moves": ["growl", "ember", "smokescreen", "dragonrage"], "pokeball": "cherishball"},
			{"generation": 6, "level": 5, "isHidden": true, "moves": ["scratch", "growl", "celebrate"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 5},
		],
		tier: "LC",
	},
	charmeleon: {
		randomBattleMoves: ["flamethrower", "overheat", "dragonpulse", "hiddenpowergrass", "fireblast", "dragondance", "flareblitz", "shadowclaw", "dragonclaw"],
		randomDoubleBattleMoves: ["heatwave", "dragonpulse", "hiddenpowergrass", "fireblast", "protect"],
		tier: "NFE",
	},
	charizard: {
		randomBattleMoves: ["fireblast", "airslash", "focusblast", "roost", "swordsdance", "flamecharge", "acrobatics", "earthquake", "willowisp"],
		randomDoubleBattleMoves: ["heatwave", "fireblast", "airslash", "overheat", "dragonpulse", "roost", "tailwind", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["wingattack", "slash", "dragonrage", "firespin"], "pokeball": "pokeball"},
			{"generation": 6, "level": 36, "gender": "M", "isHidden": false, "moves": ["firefang", "flameburst", "airslash", "inferno"], "pokeball": "cherishball"},
			{"generation": 6, "level": 36, "gender": "M", "isHidden": false, "moves": ["firefang", "airslash", "dragonclaw", "dragonrage"], "pokeball": "cherishball"},
			{"generation": 6, "level": 36, "shiny": true, "gender": "M", "isHidden": false, "moves": ["overheat", "solarbeam", "focusblast", "holdhands"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "isHidden": true, "moves": ["flareblitz", "blastburn", "scaryface", "firepledge"], "pokeball": "cherishball"},
			{"generation": 6, "level": 36, "gender": "M", "nature": "Serious", "isHidden": false, "moves": ["flamethrower", "ember", "firespin", "flameburst"], "pokeball": "cherishball"},
			{"generation": 7, "level": 40, "gender": "M", "nature": "Jolly", "isHidden": false, "moves": ["flareblitz", "dragonclaw", "fly", "dragonrage"], "pokeball": "cherishball"},
			{"generation": 7, "level": 40, "gender": "M", "nature": "Adamant", "isHidden": false, "moves": ["flamethrower", "dragonrage", "slash", "seismictoss"], "pokeball": "pokeball"},
			{"generation": 7, "level": 50, "isHidden": false, "moves": ["dragondance", "flareblitz", "fly", "earthquake"], "pokeball": "cherishball"},
		],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	charizardmegax: {
		randomBattleMoves: ["dragondance", "flareblitz", "dragonclaw", "earthquake", "roost", "willowisp"],
		randomDoubleBattleMoves: ["dragondance", "flareblitz", "dragonclaw", "earthquake", "rockslide", "roost", "substitute"],
		requiredItem: "Charizardite X",
		tier: "OU",
		doublesTier: "(DUU)",
	},
	charizardmegay: {
		randomBattleMoves: ["fireblast", "airslash", "roost", "solarbeam", "focusblast", "dragonpulse"],
		randomDoubleBattleMoves: ["heatwave", "fireblast", "airslash", "roost", "solarbeam", "focusblast", "protect"],
		requiredItem: "Charizardite Y",
		tier: "OU",
		doublesTier: "DOU",
	},
	squirtle: {
		randomBattleMoves: ["icebeam", "hydropump", "rapidspin", "scald", "aquajet", "toxic"],
		randomDoubleBattleMoves: ["muddywater", "icebeam", "hydropump", "fakeout", "scald", "followme", "icywind", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "tailwhip", "bubble", "withdraw"], "pokeball": "pokeball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tackle", "tailwhip", "bubble", "withdraw"]},
			{"generation": 5, "level": 1, "shiny": 1, "ivs": {"hp": 31}, "isHidden": false, "moves": ["falseswipe", "block", "hydrocannon", "followme"], "pokeball": "pokeball"},
			{"generation": 6, "level": 5, "isHidden": false, "moves": ["tailwhip", "watergun", "withdraw", "bubble"], "pokeball": "cherishball"},
			{"generation": 6, "level": 5, "isHidden": true, "moves": ["tackle", "tailwhip", "celebrate"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 5},
		],
		tier: "LC",
	},
	wartortle: {
		randomBattleMoves: ["icebeam", "hydropump", "rapidspin", "scald", "aquajet", "toxic"],
		randomDoubleBattleMoves: ["muddywater", "icebeam", "hydropump", "fakeout", "scald", "followme", "icywind", "protect"],
		tier: "NFE",
	},
	blastoise: {
		randomBattleMoves: ["icebeam", "rapidspin", "scald", "toxic", "dragontail", "roar"],
		randomDoubleBattleMoves: ["muddywater", "icebeam", "hydropump", "fakeout", "scald", "followme", "icywind", "protect", "waterspout"],
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["protect", "raindance", "skullbash", "hydropump"], "pokeball": "pokeball"},
			{"generation": 6, "level": 100, "isHidden": true, "moves": ["hydropump", "hydrocannon", "irondefense", "waterpledge"], "pokeball": "cherishball"},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	blastoisemega: {
		randomBattleMoves: ["icebeam", "hydropump", "rapidspin", "scald", "dragontail", "darkpulse", "aurasphere"],
		randomDoubleBattleMoves: ["muddywater", "icebeam", "hydropump", "fakeout", "scald", "darkpulse", "aurasphere", "followme", "icywind", "protect"],
		requiredItem: "Blastoisinite",
		tier: "RU",
		doublesTier: "(DUU)",
	},
	caterpie: {
		randomBattleMoves: ["bugbite", "snore", "tackle", "electroweb"],
		encounters: [
			{"generation": 1, "level": 3, "shiny": false},
			{"generation": 2, "level": 3},
			{"generation": 3, "level": 3},
		],
		tier: "LC",
	},
	metapod: {
		randomBattleMoves: ["snore", "bugbite", "tackle", "electroweb"],
		encounters: [
			{"generation": 1, "level": 4, "shiny": false},
			{"generation": 2, "level": 4},
			{"generation": 3, "level": 4},
			{"generation": 4, "level": 3},
			{"generation": 6, "level": 4},
			{"generation": 7, "level": 3},
		],
		tier: "NFE",
	},
	butterfree: {
		randomBattleMoves: ["sleeppowder", "quiverdance", "bugbuzz", "airslash", "gigadrain", "substitute"],
		randomDoubleBattleMoves: ["quiverdance", "bugbuzz", "substitute", "sleeppowder", "airslash", "shadowball", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 30, "moves": ["morningsun", "psychic", "sleeppowder", "aerialace"]},
		],
		encounters: [
			{"generation": 2, "level": 7},
			{"generation": 4, "level": 6},
			{"generation": 7, "level": 9},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	weedle: {
		randomBattleMoves: ["bugbite", "stringshot", "poisonsting", "electroweb"],
		encounters: [
			{"generation": 1, "level": 3, "shiny": false},
			{"generation": 2, "level": 3},
			{"generation": 3, "level": 3},
		],
		tier: "LC",
	},
	kakuna: {
		randomBattleMoves: ["electroweb", "bugbite", "irondefense", "poisonsting"],
		encounters: [
			{"generation": 1, "level": 4, "shiny": false},
			{"generation": 2, "level": 4},
			{"generation": 3, "level": 4},
			{"generation": 4, "level": 3},
			{"generation": 6, "level": 4},
			{"generation": 7, "level": 3},
		],
		tier: "NFE",
	},
	beedrill: {
		randomBattleMoves: ["toxicspikes", "tailwind", "uturn", "endeavor", "poisonjab", "knockoff"],
		randomDoubleBattleMoves: ["xscissor", "uturn", "poisonjab", "drillrun", "brickbreak", "knockoff", "protect", "stringshot"],
		eventPokemon: [
			{"generation": 3, "level": 30, "moves": ["batonpass", "sludgebomb", "twineedle", "swordsdance"]},
		],
		encounters: [
			{"generation": 2, "level": 7},
			{"generation": 4, "level": 6},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	beedrillmega: {
		randomBattleMoves: ["xscissor", "swordsdance", "uturn", "poisonjab", "drillrun", "knockoff"],
		randomDoubleBattleMoves: ["xscissor", "uturn", "substitute", "poisonjab", "drillrun", "knockoff", "protect"],
		requiredItem: "Beedrillite",
		tier: "UU",
		doublesTier: "DUU",
	},
	pidgey: {
		randomBattleMoves: ["roost", "bravebird", "heatwave", "return", "workup", "uturn", "thief"],
		randomDoubleBattleMoves: ["bravebird", "heatwave", "return", "uturn", "tailwind", "protect"],
		encounters: [
			{"generation": 1, "level": 2, "shiny": false},
			{"generation": 2, "level": 2},
			{"generation": 3, "level": 2},
		],
		tier: "LC",
	},
	pidgeotto: {
		randomBattleMoves: ["roost", "bravebird", "heatwave", "return", "workup", "uturn", "thief"],
		randomDoubleBattleMoves: ["bravebird", "heatwave", "return", "uturn", "tailwind", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 30, "abilities": ["keeneye"], "moves": ["refresh", "wingattack", "steelwing", "featherdance"]},
		],
		encounters: [
			{"generation": 1, "level": 9, "shiny": false},
			{"generation": 2, "level": 7},
			{"generation": 3, "level": 7},
			{"generation": 4, "level": 7},
		],
		tier: "NFE",
	},
	pidgeot: {
		randomBattleMoves: ["roost", "bravebird", "heatwave", "return", "uturn", "defog"],
		randomDoubleBattleMoves: ["bravebird", "heatwave", "return", "doubleedge", "uturn", "tailwind", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 61, "gender": "M", "nature": "Naughty", "ivs": {"hp": 30, "atk": 30, "def": 30, "spa": 30, "spd": 30, "spe": 30}, "isHidden": false, "abilities": ["keeneye"], "moves": ["whirlwind", "wingattack", "skyattack", "mirrormove"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 7, "level": 29, "isHidden": false},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pidgeotmega: {
		randomBattleMoves: ["roost", "heatwave", "uturn", "hurricane", "defog"],
		randomDoubleBattleMoves: ["tailwind", "heatwave", "uturn", "hurricane", "protect"],
		requiredItem: "Pidgeotite",
		tier: "UU",
		doublesTier: "(DUU)",
	},
	rattata: {
		randomBattleMoves: ["facade", "flamewheel", "suckerpunch", "uturn", "wildcharge", "thunderwave", "crunch", "revenge"],
		randomDoubleBattleMoves: ["facade", "flamewheel", "suckerpunch", "uturn", "wildcharge", "superfang", "crunch", "protect"],
		encounters: [
			{"generation": 1, "level": 2, "shiny": false},
			{"generation": 2, "level": 2},
			{"generation": 3, "level": 2},
		],
		tier: "LC",
	},
	rattataalola: {
		tier: "LC",
	},
	raticate: {
		randomBattleMoves: ["protect", "facade", "stompingtantrum", "suckerpunch", "uturn", "swordsdance"],
		randomDoubleBattleMoves: ["facade", "stompingtantrum", "suckerpunch", "uturn", "crunch", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 34, "moves": ["refresh", "superfang", "scaryface", "hyperfang"]},
		],
		encounters: [
			{"generation": 1, "level": 15, "shiny": false},
			{"generation": 2, "level": 6},
			{"generation": 4, "level": 13},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	raticatealola: {
		randomBattleMoves: ["swordsdance", "return", "suckerpunch", "knockoff", "doubleedge"],
		randomDoubleBattleMoves: ["doubleedge", "suckerpunch", "protect", "crunch", "uturn"],
		encounters: [
			{"generation": 7, "level": 17},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	raticatealolatotem: {
		eventPokemon: [
			{"generation": 7, "level": 20, "perfectIVs": 3, "moves": ["bite", "pursuit", "hyperfang", "assurance"], "pokeball": "pokeball"},
		],
		eventOnly: true,
	},
	spearow: {
		randomBattleMoves: ["return", "drillpeck", "doubleedge", "uturn", "quickattack", "pursuit", "drillrun", "featherdance"],
		randomDoubleBattleMoves: ["return", "drillpeck", "doubleedge", "uturn", "quickattack", "drillrun", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 22, "moves": ["batonpass", "falseswipe", "leer", "aerialace"]},
		],
		encounters: [
			{"generation": 1, "level": 3, "shiny": false},
			{"generation": 2, "level": 2},
			{"generation": 3, "level": 3},
		],
		tier: "LC",
	},
	fearow: {
		randomBattleMoves: ["return", "drillpeck", "doubleedge", "uturn", "pursuit", "drillrun"],
		randomDoubleBattleMoves: ["return", "drillpeck", "doubleedge", "uturn", "quickattack", "drillrun", "protect"],
		encounters: [
			{"generation": 1, "level": 19, "shiny": false},
			{"generation": 2, "level": 7},
			{"generation": 4, "level": 7},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	ekans: {
		randomBattleMoves: ["coil", "gunkshot", "glare", "suckerpunch", "earthquake", "rest"],
		randomDoubleBattleMoves: ["gunkshot", "seedbomb", "suckerpunch", "aquatail", "earthquake", "rest", "rockslide", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 14, "gender": "F", "nature": "Docile", "ivs": {"hp": 26, "atk": 28, "def": 6, "spa": 14, "spd": 30, "spe": 11}, "abilities": ["shedskin"], "moves": ["leer", "wrap", "poisonsting", "bite"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["wrap", "leer", "poisonsting"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 6, "shiny": false},
			{"generation": 2, "level": 4},
		],
		tier: "LC",
	},
	arbok: {
		randomBattleMoves: ["coil", "gunkshot", "suckerpunch", "aquatail", "earthquake", "rest"],
		randomDoubleBattleMoves: ["gunkshot", "suckerpunch", "aquatail", "crunch", "earthquake", "rest", "rockslide", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 33, "moves": ["refresh", "sludgebomb", "glare", "bite"]},
		],
		encounters: [
			{"generation": 2, "level": 10},
			{"generation": 4, "level": 10},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pichu: {
		randomBattleMoves: ["fakeout", "volttackle", "encore", "irontail", "toxic", "thunderbolt"],
		randomDoubleBattleMoves: ["fakeout", "volttackle", "encore", "irontail", "protect", "thunderbolt"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["thundershock", "charm", "surf"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["thundershock", "charm", "wish"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["thundershock", "charm", "teeterdance"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["thundershock", "charm", "followme"], "pokeball": "pokeball"},
			{"generation": 4, "level": 1, "moves": ["volttackle", "thunderbolt", "grassknot", "return"], "pokeball": "pokeball"},
			{"generation": 4, "level": 30, "shiny": true, "gender": "M", "nature": "Jolly", "moves": ["charge", "volttackle", "endeavor", "endure"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	pichuspikyeared: {
		eventPokemon: [
			{"generation": 4, "level": 30, "gender": "F", "nature": "Naughty", "moves": ["helpinghand", "volttackle", "swagger", "painsplit"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 4,
		tier: "Illegal",
	},
	pikachu: {
		randomBattleMoves: ["volttackle", "voltswitch", "grassknot", "hiddenpowerice", "knockoff", "irontail"],
		randomDoubleBattleMoves: ["fakeout", "thunderbolt", "volttackle", "voltswitch", "grassknot", "hiddenpowerice", "brickbreak", "extremespeed", "encore", "substitute", "knockoff", "protect", "discharge"],
		eventPokemon: [
			{"generation": 3, "level": 50, "moves": ["thunderbolt", "agility", "thunder", "lightscreen"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "moves": ["thundershock", "growl", "tailwhip", "thunderwave"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "moves": ["fly", "tailwhip", "growl", "thunderwave"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "moves": ["surf", "growl", "tailwhip", "thunderwave"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "moves": ["fly", "growl", "tailwhip", "thunderwave"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "moves": ["thundershock", "growl", "thunderwave", "surf"], "pokeball": "pokeball"},
			{"generation": 3, "level": 70, "moves": ["thunderbolt", "thunder", "lightscreen", "fly"], "pokeball": "pokeball"},
			{"generation": 3, "level": 70, "moves": ["thunderbolt", "thunder", "lightscreen", "surf"], "pokeball": "pokeball"},
			{"generation": 3, "level": 70, "moves": ["thunderbolt", "thunder", "lightscreen", "agility"], "pokeball": "pokeball"},
			{"generation": 4, "level": 10, "gender": "F", "nature": "Hardy", "moves": ["surf", "volttackle", "tailwhip", "thunderwave"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["thundershock", "growl", "tailwhip", "thunderwave"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "gender": "M", "nature": "Hardy", "moves": ["surf", "thunderbolt", "lightscreen", "quickattack"], "pokeball": "cherishball"},
			{"generation": 4, "level": 20, "gender": "F", "nature": "Bashful", "moves": ["present", "quickattack", "thundershock", "tailwhip"], "pokeball": "cherishball"},
			{"generation": 4, "level": 20, "gender": "M", "nature": "Jolly", "moves": ["grassknot", "thunderbolt", "flash", "doubleteam"], "pokeball": "pokeball"},
			{"generation": 4, "level": 40, "gender": "M", "nature": "Modest", "moves": ["surf", "thunder", "protect"], "pokeball": "cherishball"},
			{"generation": 4, "level": 20, "gender": "F", "nature": "Bashful", "moves": ["quickattack", "thundershock", "tailwhip", "present"], "pokeball": "cherishball"},
			{"generation": 4, "level": 40, "gender": "M", "nature": "Mild", "moves": ["surf", "thunder", "protect"], "pokeball": "cherishball"},
			{"generation": 4, "level": 20, "gender": "F", "nature": "Bashful", "moves": ["present", "quickattack", "thunderwave", "tailwhip"], "pokeball": "cherishball"},
			{"generation": 4, "level": 30, "gender": "M", "nature": "Naughty", "moves": ["lastresort", "present", "thunderbolt", "quickattack"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "gender": "M", "nature": "Relaxed", "moves": ["rest", "sleeptalk", "yawn", "snore"], "pokeball": "cherishball"},
			{"generation": 4, "level": 20, "gender": "M", "nature": "Docile", "moves": ["present", "quickattack", "thundershock", "tailwhip"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "gender": "M", "nature": "Naughty", "moves": ["volttackle", "irontail", "quickattack", "thunderbolt"], "pokeball": "cherishball"},
			{"generation": 4, "level": 20, "gender": "M", "nature": "Bashful", "moves": ["present", "quickattack", "thundershock", "tailwhip"], "pokeball": "cherishball"},
			{"generation": 5, "level": 30, "gender": "F", "isHidden": true, "moves": ["sing", "teeterdance", "encore", "electroball"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "isHidden": false, "moves": ["fly", "irontail", "electroball", "quickattack"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "shiny": 1, "gender": "F", "isHidden": false, "moves": ["thunder", "volttackle", "grassknot", "quickattack"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "shiny": 1, "gender": "F", "isHidden": false, "moves": ["extremespeed", "thunderbolt", "grassknot", "brickbreak"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "gender": "F", "nature": "Timid", "isHidden": true, "moves": ["fly", "thunderbolt", "grassknot", "protect"], "pokeball": "cherishball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["thundershock", "tailwhip", "thunderwave", "headbutt"]},
			{"generation": 5, "level": 100, "gender": "M", "isHidden": true, "moves": ["volttackle", "quickattack", "feint", "voltswitch"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "gender": "M", "nature": "Brave", "isHidden": false, "moves": ["thunderbolt", "quickattack", "irontail", "electroball"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "growl", "playnice", "quickattack"], "pokeball": "cherishball"},
			{"generation": 6, "level": 22, "isHidden": false, "moves": ["quickattack", "electroball", "doubleteam", "megakick"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["thunderbolt", "quickattack", "surf", "holdhands"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "gender": "F", "isHidden": false, "moves": ["thunderbolt", "quickattack", "heartstamp", "holdhands"], "pokeball": "healball"},
			{"generation": 6, "level": 36, "shiny": true, "isHidden": true, "moves": ["thunder", "substitute", "playnice", "holdhands"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "gender": "F", "isHidden": false, "moves": ["playnice", "charm", "nuzzle", "sweetkiss"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "gender": "M", "nature": "Naughty", "isHidden": false, "moves": ["thunderbolt", "quickattack", "irontail", "electroball"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "shiny": true, "isHidden": false, "moves": ["teeterdance", "playnice", "tailwhip", "nuzzle"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "perfectIVs": 2, "isHidden": true, "moves": ["fakeout", "encore", "volttackle", "endeavor"], "pokeball": "cherishball"},
			{"generation": 6, "level": 99, "isHidden": false, "moves": ["happyhour", "playnice", "holdhands", "flash"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["fly", "surf", "agility", "celebrate"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["bestow", "holdhands", "return", "playnice"], "pokeball": "healball"},
			{"generation": 7, "level": 10, "nature": "Jolly", "isHidden": false, "moves": ["celebrate", "growl", "playnice", "quickattack"], "pokeball": "cherishball"},
			{"generation": 7, "level": 10, "isHidden": false, "moves": ["bestow", "holdhands", "return", "playnice"], "pokeball": "cherishball"},
			{"generation": 7, "level": 10, "isHidden": false, "moves": ["holdhands", "playnice", "teeterdance", "happyhour"], "pokeball": "cherishball"},
			{"generation": 7, "level": 10, "isHidden": false, "moves": ["growl", "quickattack", "thundershock", "happyhour"], "pokeball": "cherishball"},
			{"generation": 7, "level": 40, "shiny": 1, "perfectIVs": 3, "isHidden": false, "moves": ["nuzzle", "discharge", "slam", "surf"], "pokeball": "pokeball"},
			{"generation": 7, "level": 5, "isHidden": false, "moves": ["celebrate", "sweetscent", "counter", "refresh"], "pokeball": "cherishball"},
			{"generation": 7, "level": 10, "isHidden": false, "moves": ["fly", "surf", "thunderbolt", "quickattack"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 3, "shiny": false},
			{"generation": 2, "level": 4},
			{"generation": 3, "level": 3},
		],
		tier: "NFE",
	},
	pikachucosplay: {
		eventPokemon: [
			{"generation": 6, "level": 20, "perfectIVs": 3, "moves": ["quickattack", "electroball", "thunderwave", "thundershock"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 6,
		tier: "Illegal",
	},
	pikachurockstar: {
		eventPokemon: [
			{"generation": 6, "level": 20, "perfectIVs": 3, "moves": ["quickattack", "electroball", "thunderwave", "meteormash"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 6,
		tier: "Illegal",
	},
	pikachubelle: {
		eventPokemon: [
			{"generation": 6, "level": 20, "perfectIVs": 3, "moves": ["quickattack", "electroball", "thunderwave", "iciclecrash"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 6,
		tier: "Illegal",
	},
	pikachupopstar: {
		eventPokemon: [
			{"generation": 6, "level": 20, "perfectIVs": 3, "moves": ["quickattack", "electroball", "thunderwave", "drainingkiss"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 6,
		tier: "Illegal",
	},
	pikachuphd: {
		eventPokemon: [
			{"generation": 6, "level": 20, "perfectIVs": 3, "moves": ["quickattack", "electroball", "thunderwave", "electricterrain"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 6,
		tier: "Illegal",
	},
	pikachulibre: {
		eventPokemon: [
			{"generation": 6, "level": 20, "perfectIVs": 3, "moves": ["quickattack", "electroball", "thunderwave", "flyingpress"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 6,
		tier: "Illegal",
	},
	pikachuoriginal: {
		eventPokemon: [
			{"generation": 7, "level": 1, "nature": "Hardy", "moves": ["thunderbolt", "quickattack", "thunder", "agility"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 7,
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pikachuhoenn: {
		eventPokemon: [
			{"generation": 7, "level": 6, "nature": "Hardy", "moves": ["thunderbolt", "quickattack", "thunder", "irontail"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 7,
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pikachusinnoh: {
		eventPokemon: [
			{"generation": 7, "level": 10, "nature": "Hardy", "moves": ["thunderbolt", "quickattack", "irontail", "volttackle"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 7,
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pikachuunova: {
		eventPokemon: [
			{"generation": 7, "level": 14, "nature": "Hardy", "moves": ["thunderbolt", "quickattack", "irontail", "volttackle"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 7,
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pikachukalos: {
		eventPokemon: [
			{"generation": 7, "level": 17, "nature": "Hardy", "moves": ["thunderbolt", "quickattack", "irontail", "electroball"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 7,
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pikachualola: {
		eventPokemon: [
			{"generation": 7, "level": 20, "nature": "Hardy", "moves": ["thunderbolt", "quickattack", "irontail", "electroball"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 7,
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pikachupartner: {
		eventPokemon: [
			{"generation": 7, "level": 21, "shiny": 1, "nature": "Hardy", "moves": ["thunderbolt", "quickattack", "thunder", "irontail"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 7,
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pikachustarter: {
		eventPokemon: [
			{"generation": 7, "level": 5, "perfectIVs": 6, "moves": ["thundershock", "tailwhip", "growl"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		isNonstandard: "LGPE",
		tier: "Illegal",
	},
	raichu: {
		randomBattleMoves: ["nastyplot", "encore", "thunderbolt", "grassknot", "hiddenpowerice", "focusblast", "voltswitch"],
		randomDoubleBattleMoves: ["fakeout", "encore", "thunderbolt", "grassknot", "hiddenpowerice", "focusblast", "voltswitch", "protect"],
		tier: "(PU)",
		doublesTier: "DUU",
	},
	raichualola: {
		randomBattleMoves: ["nastyplot", "thunderbolt", "psyshock", "focusblast", "voltswitch", "surf"],
		randomDoubleBattleMoves: ["thunderbolt", "fakeout", "encore", "psychic", "protect", "voltswitch"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	sandshrew: {
		randomBattleMoves: ["earthquake", "rockslide", "swordsdance", "rapidspin", "xscissor", "stealthrock", "toxic", "knockoff"],
		randomDoubleBattleMoves: ["earthquake", "rockslide", "swordsdance", "xscissor", "knockoff", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 12, "gender": "M", "nature": "Docile", "ivs": {"hp": 4, "atk": 23, "def": 8, "spa": 31, "spd": 1, "spe": 25}, "moves": ["scratch", "defensecurl", "sandattack", "poisonsting"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 6, "shiny": false},
		],
		tier: "LC",
	},
	sandshrewalola: {
		eventPokemon: [
			{"generation": 7, "level": 10, "isHidden": false, "moves": ["rapidspin", "iceball", "powdersnow", "bide"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	sandslash: {
		randomBattleMoves: ["earthquake", "swordsdance", "rapidspin", "toxic", "stealthrock", "knockoff"],
		randomDoubleBattleMoves: ["earthquake", "rockslide", "stoneedge", "swordsdance", "xscissor", "knockoff", "protect"],
		encounters: [
			{"generation": 2, "level": 10},
			{"generation": 4, "level": 10},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	sandslashalola: {
		randomBattleMoves: ["swordsdance", "iciclecrash", "ironhead", "earthquake", "rapidspin", "stealthrock", "knockoff"],
		randomDoubleBattleMoves: ["protect", "swordsdance", "iciclecrash", "ironhead", "earthquake", "rockslide"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	nidoranf: {
		randomBattleMoves: ["toxicspikes", "crunch", "poisonjab", "honeclaws"],
		randomDoubleBattleMoves: ["helpinghand", "crunch", "poisonjab", "protect"],
		encounters: [
			{"generation": 1, "level": 2},
		],
		tier: "LC",
	},
	nidorina: {
		randomBattleMoves: ["toxicspikes", "crunch", "poisonjab", "honeclaws", "icebeam", "thunderbolt", "shadowclaw"],
		randomDoubleBattleMoves: ["helpinghand", "crunch", "poisonjab", "protect", "icebeam", "thunderbolt", "shadowclaw"],
		encounters: [
			{"generation": 4, "level": 15, "pokeball": "safariball"},
		],
		tier: "NFE",
	},
	nidoqueen: {
		randomBattleMoves: ["toxicspikes", "stealthrock", "fireblast", "icebeam", "earthpower", "sludgewave"],
		randomDoubleBattleMoves: ["protect", "fireblast", "icebeam", "earthpower", "sludgebomb", "thunderbolt"],
		eventPokemon: [
			{"generation": 6, "level": 41, "perfectIVs": 2, "isHidden": false, "abilities": ["poisonpoint"], "moves": ["tailwhip", "doublekick", "poisonsting", "bodyslam"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	nidoranm: {
		randomBattleMoves: ["suckerpunch", "poisonjab", "headsmash", "honeclaws", "shadowclaw"],
		randomDoubleBattleMoves: ["suckerpunch", "poisonjab", "shadowclaw", "helpinghand", "protect"],
		encounters: [
			{"generation": 1, "level": 2},
		],
		tier: "LC",
	},
	nidorino: {
		randomBattleMoves: ["suckerpunch", "poisonjab", "headsmash", "honeclaws", "shadowclaw"],
		randomDoubleBattleMoves: ["suckerpunch", "poisonjab", "shadowclaw", "helpinghand", "protect"],
		encounters: [
			{"generation": 4, "level": 15, "pokeball": "safariball"},
		],
		tier: "NFE",
	},
	nidoking: {
		randomBattleMoves: ["substitute", "fireblast", "icebeam", "earthpower", "sludgewave", "superpower"],
		randomDoubleBattleMoves: ["protect", "fireblast", "thunderbolt", "icebeam", "earthpower", "sludgebomb", "focusblast"],
		eventPokemon: [
			{"generation": 7, "level": 68, "isHidden": false, "abilities": ["poisonpoint"], "moves": ["earthquake", "poisonjab", "throatchop", "aquatail"], "pokeball": "cherishball"},
		],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	cleffa: {
		randomBattleMoves: ["reflect", "thunderwave", "lightscreen", "toxic", "fireblast", "encore", "wish", "protect", "aromatherapy"],
		randomDoubleBattleMoves: ["reflect", "thunderwave", "lightscreen", "safeguard", "fireblast", "protect"],
		tier: "LC",
	},
	clefairy: {
		randomBattleMoves: ["healingwish", "reflect", "thunderwave", "lightscreen", "toxic", "fireblast", "encore", "wish", "protect", "aromatherapy", "stealthrock", "moonblast", "knockoff", "moonlight"],
		randomDoubleBattleMoves: ["reflect", "thunderwave", "lightscreen", "safeguard", "fireblast", "followme", "protect", "moonblast"],
		encounters: [
			{"generation": 1, "level": 8},
		],
		tier: "PU",
		doublesTier: "NFE",
	},
	clefable: {
		randomBattleMoves: ["calmmind", "softboiled", "fireblast", "moonblast", "stealthrock", "thunderwave"],
		randomDoubleBattleMoves: ["reflect", "thunderwave", "lightscreen", "safeguard", "fireblast", "followme", "protect", "moonblast", "dazzlinggleam", "softboiled"],
		tier: "OU",
		doublesTier: "DUU",
	},
	vulpix: {
		randomBattleMoves: ["flamethrower", "fireblast", "willowisp", "energyball", "substitute", "toxic", "hypnosis", "painsplit"],
		randomDoubleBattleMoves: ["heatwave", "fireblast", "willowisp", "energyball", "substitute", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 18, "gender": "F", "nature": "Quirky", "ivs": {"hp": 15, "atk": 6, "def": 3, "spa": 25, "spd": 13, "spe": 22}, "moves": ["tailwhip", "roar", "quickattack", "willowisp"], "pokeball": "pokeball"},
			{"generation": 3, "level": 18, "moves": ["charm", "heatwave", "ember", "dig"]},
		],
		encounters: [
			{"generation": 1, "level": 18},
		],
		tier: "LC Uber",
	},
	vulpixalola: {
		eventPokemon: [
			{"generation": 7, "level": 10, "isHidden": false, "moves": ["celebrate", "tailwhip", "babydolleyes", "iceshard"], "pokeball": "cherishball"},
			{"generation": 7, "level": 10, "gender": "F", "nature": "Modest", "isHidden": false, "moves": ["powdersnow"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	ninetales: {
		randomBattleMoves: ["fireblast", "willowisp", "solarbeam", "nastyplot", "substitute", "hiddenpowerice"],
		randomDoubleBattleMoves: ["heatwave", "fireblast", "willowisp", "solarbeam", "substitute", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 50, "gender": "M", "nature": "Bold", "ivs": {"def": 31}, "isHidden": true, "moves": ["heatwave", "solarbeam", "psyshock", "willowisp"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "DUU",
	},
	ninetalesalola: {
		randomBattleMoves: ["nastyplot", "blizzard", "moonblast", "substitute", "hiddenpowerfire", "freezedry", "auroraveil"],
		randomDoubleBattleMoves: ["blizzard", "moonblast", "protect", "hiddenpowerfire", "freezedry", "auroraveil", "encore"],
		tier: "UUBL",
		doublesTier: "DOU",
	},
	igglybuff: {
		randomBattleMoves: ["wish", "thunderwave", "reflect", "lightscreen", "healbell", "seismictoss", "counter", "protect"],
		randomDoubleBattleMoves: ["wish", "thunderwave", "reflect", "lightscreen", "seismictoss", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "abilities": ["cutecharm"], "moves": ["sing", "charm", "defensecurl", "tickle"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	jigglypuff: {
		randomBattleMoves: ["wish", "thunderwave", "reflect", "lightscreen", "healbell", "seismictoss", "counter", "stealthrock", "protect", "knockoff", "dazzlinggleam"],
		randomDoubleBattleMoves: ["wish", "thunderwave", "reflect", "lightscreen", "seismictoss", "protect", "knockoff", "dazzlinggleam"],
		encounters: [
			{"generation": 1, "level": 3, "shiny": false},
			{"generation": 2, "level": 3},
			{"generation": 3, "level": 3},
		],
		tier: "NFE",
	},
	wigglytuff: {
		randomBattleMoves: ["wish", "protect", "fireblast", "stealthrock", "dazzlinggleam", "hypervoice"],
		randomDoubleBattleMoves: ["thunderwave", "reflect", "lightscreen", "protect", "dazzlinggleam", "fireblast", "icebeam", "hypervoice"],
		encounters: [
			{"generation": 1, "level": 22},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	zubat: {
		randomBattleMoves: ["bravebird", "roost", "toxic", "taunt", "nastyplot", "gigadrain", "sludgebomb", "airslash", "uturn", "whirlwind", "heatwave", "superfang"],
		randomDoubleBattleMoves: ["bravebird", "taunt", "nastyplot", "gigadrain", "sludgebomb", "airslash", "uturn", "protect", "heatwave", "superfang"],
		encounters: [
			{"generation": 1, "level": 6, "shiny": false},
			{"generation": 2, "level": 2},
		],
		tier: "LC",
	},
	golbat: {
		randomBattleMoves: ["bravebird", "roost", "toxic", "taunt", "defog", "superfang", "uturn"],
		randomDoubleBattleMoves: ["bravebird", "taunt", "nastyplot", "gigadrain", "sludgebomb", "airslash", "uturn", "protect", "heatwave", "superfang"],
		encounters: [
			{"generation": 2, "level": 13},
			{"generation": 3, "level": 5},
			{"generation": 4, "level": 10},
			{"generation": 6, "level": 19, "maxEggMoves": 1},
			{"generation": 7, "level": 20},
		],
		tier: "NU",
		doublesTier: "NFE",
	},
	crobat: {
		randomBattleMoves: ["bravebird", "roost", "toxic", "taunt", "defog", "uturn", "superfang"],
		randomDoubleBattleMoves: ["bravebird", "taunt", "tailwind", "crosspoison", "uturn", "protect", "superfang"],
		eventPokemon: [
			{"generation": 4, "level": 30, "gender": "M", "nature": "Timid", "moves": ["heatwave", "airslash", "sludgebomb", "superfang"], "pokeball": "cherishball"},
			{"generation": 7, "level": 64, "gender": "M", "isHidden": false, "moves": ["airslash", "toxic", "darkpulse", "sludgebomb"], "pokeball": "cherishball"},
		],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	oddish: {
		randomBattleMoves: ["gigadrain", "sludgebomb", "synthesis", "sleeppowder", "stunspore", "toxic", "hiddenpowerfire", "leechseed", "dazzlinggleam", "sunnyday"],
		randomDoubleBattleMoves: ["gigadrain", "sludgebomb", "sleeppowder", "stunspore", "protect", "hiddenpowerfire", "leechseed", "dazzlinggleam", "sunnyday"],
		eventPokemon: [
			{"generation": 3, "level": 26, "gender": "M", "nature": "Quirky", "ivs": {"hp": 23, "atk": 24, "def": 20, "spa": 21, "spd": 9, "spe": 16}, "moves": ["poisonpowder", "stunspore", "sleeppowder", "acid"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["absorb", "leechseed"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 12, "shiny": false},
		],
		tier: "LC",
	},
	gloom: {
		randomBattleMoves: ["gigadrain", "sludgebomb", "synthesis", "sleeppowder", "stunspore", "toxic", "hiddenpowerfire", "leechseed", "dazzlinggleam", "sunnyday"],
		randomDoubleBattleMoves: ["gigadrain", "sludgebomb", "sleeppowder", "stunspore", "protect", "hiddenpowerfire", "leechseed", "dazzlinggleam", "sunnyday"],
		eventPokemon: [
			{"generation": 3, "level": 50, "moves": ["sleeppowder", "acid", "moonlight", "petaldance"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 2, "level": 14},
			{"generation": 4, "level": 14},
			{"generation": 6, "level": 18, "maxEggMoves": 1},
		],
		tier: "NFE",
	},
	vileplume: {
		randomBattleMoves: ["gigadrain", "sludgebomb", "sleeppowder", "hiddenpowerfire", "aromatherapy", "strengthsap"],
		randomDoubleBattleMoves: ["gigadrain", "sludgebomb", "sleeppowder", "stunspore", "protect", "hiddenpowerfire", "moonblast"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	bellossom: {
		randomBattleMoves: ["gigadrain", "sleeppowder", "hiddenpowerfire", "hiddenpowerrock", "quiverdance", "moonblast"],
		randomDoubleBattleMoves: ["gigadrain", "sludgebomb", "sleeppowder", "stunspore", "protect", "hiddenpowerfire", "moonblast", "sunnyday", "solarbeam"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	paras: {
		randomBattleMoves: ["spore", "stunspore", "xscissor", "seedbomb", "synthesis", "leechseed", "aromatherapy", "knockoff"],
		randomDoubleBattleMoves: ["spore", "stunspore", "xscissor", "seedbomb", "ragepowder", "leechseed", "protect", "knockoff", "wideguard"],
		eventPokemon: [
			{"generation": 3, "level": 28, "abilities": ["effectspore"], "moves": ["refresh", "spore", "slash", "falseswipe"]},
		],
		encounters: [
			{"generation": 1, "level": 8, "shiny": false},
		],
		tier: "LC",
	},
	parasect: {
		randomBattleMoves: ["spore", "substitute", "leechlife", "seedbomb", "leechseed", "knockoff"],
		randomDoubleBattleMoves: ["spore", "stunspore", "leechlife", "seedbomb", "ragepowder", "leechseed", "protect", "knockoff", "wideguard"],
		encounters: [
			{"generation": 1, "level": 13},
			{"generation": 2, "level": 5},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	venonat: {
		randomBattleMoves: ["sleeppowder", "morningsun", "toxicspikes", "sludgebomb", "signalbeam", "stunspore", "psychic"],
		randomDoubleBattleMoves: ["sleeppowder", "morningsun", "ragepowder", "sludgebomb", "signalbeam", "stunspore", "psychic", "protect"],
		encounters: [
			{"generation": 1, "level": 13, "shiny": false},
		],
		tier: "LC",
	},
	venomoth: {
		randomBattleMoves: ["sleeppowder", "quiverdance", "bugbuzz", "sludgebomb", "substitute"],
		randomDoubleBattleMoves: ["sleeppowder", "roost", "ragepowder", "quiverdance", "protect", "bugbuzz", "sludgebomb", "gigadrain", "substitute", "psychic"],
		eventPokemon: [
			{"generation": 3, "level": 32, "abilities": ["shielddust"], "moves": ["refresh", "silverwind", "substitute", "psychic"]},
		],
		encounters: [
			{"generation": 1, "level": 30, "shiny": false},
			{"generation": 2, "level": 10},
			{"generation": 4, "level": 8},
			{"generation": 6, "level": 30},
		],
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	diglett: {
		randomBattleMoves: ["earthquake", "rockslide", "stealthrock", "suckerpunch", "reversal", "substitute", "shadowclaw"],
		randomDoubleBattleMoves: ["earthquake", "rockslide", "protect", "suckerpunch", "shadowclaw"],
		encounters: [
			{"generation": 1, "level": 15, "shiny": false},
			{"generation": 2, "level": 2},
		],
		tier: "LC",
	},
	diglettalola: {
		eventPokemon: [
			{"generation": 7, "level": 10, "isHidden": false, "abilities": ["tanglinghair"], "moves": ["mudslap", "astonish", "growl", "metalclaw"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	dugtrio: {
		randomBattleMoves: ["earthquake", "stoneedge", "stealthrock", "suckerpunch", "reversal", "substitute", "memento"],
		randomDoubleBattleMoves: ["earthquake", "rockslide", "protect", "suckerpunch", "stoneedge"],
		eventPokemon: [
			{"generation": 3, "level": 40, "moves": ["charm", "earthquake", "sandstorm", "triattack"]},
		],
		encounters: [
			{"generation": 1, "level": 15},
			{"generation": 2, "level": 5},
			{"generation": 4, "level": 19},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	dugtrioalola: {
		randomBattleMoves: ["earthquake", "ironhead", "substitute", "reversal", "stoneedge", "suckerpunch", "stealthrock"],
		randomDoubleBattleMoves: ["earthquake", "ironhead", "protect", "rockslide", "stoneedge", "suckerpunch"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	meowth: {
		randomBattleMoves: ["fakeout", "uturn", "thief", "taunt", "return", "hypnosis"],
		randomDoubleBattleMoves: ["fakeout", "uturn", "nightslash", "taunt", "return", "hypnosis", "feint", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["scratch", "growl", "petaldance"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "moves": ["scratch", "growl"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["scratch", "growl", "bite"], "pokeball": "pokeball"},
			{"generation": 3, "level": 22, "moves": ["sing", "slash", "payday", "bite"]},
			{"generation": 4, "level": 21, "gender": "F", "nature": "Jolly", "abilities": ["pickup"], "moves": ["bite", "fakeout", "furyswipes", "screech"], "pokeball": "cherishball"},
			{"generation": 4, "level": 10, "gender": "M", "nature": "Jolly", "abilities": ["pickup"], "moves": ["fakeout", "payday", "assist", "scratch"], "pokeball": "cherishball"},
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "abilities": ["pickup"], "moves": ["furyswipes", "sing", "nastyplot", "snatch"], "pokeball": "cherishball"},
			{"generation": 6, "level": 20, "isHidden": false, "abilities": ["pickup"], "moves": ["happyhour", "screech", "bite", "fakeout"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 10},
			{"generation": 3, "level": 3, "shiny": false, "gender": "M", "nature": "Naive", "ivs": {"hp": 4, "atk": 5, "def": 4, "spa": 5, "spd": 4, "spe": 4}, "abilities": ["pickup"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	meowthalola: {
		tier: "LC",
	},
	persian: {
		randomBattleMoves: ["fakeout", "uturn", "taunt", "return", "knockoff"],
		randomDoubleBattleMoves: ["fakeout", "uturn", "knockoff", "taunt", "return", "hypnosis", "feint", "protect"],
		encounters: [
			{"generation": 2, "level": 18},
			{"generation": 4, "level": 19},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	persianalola: {
		randomBattleMoves: ["nastyplot", "darkpulse", "powergem", "hypnosis", "hiddenpowerfighting"],
		randomDoubleBattleMoves: ["fakeout", "foulplay", "darkpulse", "powergem", "snarl", "hiddenpowerfighting", "partingshot", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	psyduck: {
		randomBattleMoves: ["hydropump", "scald", "icebeam", "hiddenpowergrass", "crosschop", "encore", "psychic", "signalbeam"],
		randomDoubleBattleMoves: ["hydropump", "scald", "icebeam", "hiddenpowergrass", "crosschop", "encore", "psychic", "signalbeam", "surf", "icywind", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 27, "gender": "M", "nature": "Lax", "ivs": {"hp": 31, "atk": 16, "def": 12, "spa": 29, "spd": 31, "spe": 14}, "abilities": ["damp"], "moves": ["tailwhip", "confusion", "disable", "screech"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["watersport", "scratch", "tailwhip", "mudsport"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 15},
		],
		tier: "LC",
	},
	golduck: {
		randomBattleMoves: ["hydropump", "scald", "icebeam", "psyshock", "encore", "calmmind", "substitute"],
		randomDoubleBattleMoves: ["hydropump", "scald", "icebeam", "hiddenpowergrass", "focusblast", "encore", "psychic", "icywind", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 33, "moves": ["charm", "waterfall", "psychup", "brickbreak"]},
			{"generation": 7, "level": 50, "gender": "M", "nature": "Timid", "ivs": {"hp": 31, "atk": 30, "def": 31, "spa": 31, "spd": 31, "spe": 31}, "isHidden": true, "moves": ["hydropump", "scald", "encore", "protect"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 15, "shiny": false},
			{"generation": 2, "level": 10},
			{"generation": 3, "level": 25, "pokeball": "safariball"},
			{"generation": 4, "level": 10},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	mankey: {
		randomBattleMoves: ["closecombat", "uturn", "icepunch", "rockslide", "punishment", "earthquake", "poisonjab"],
		randomDoubleBattleMoves: ["closecombat", "uturn", "icepunch", "rockslide", "punishment", "earthquake", "poisonjab", "protect"],
		encounters: [
			{"generation": 1, "level": 3, "shiny": false},
			{"generation": 3, "level": 2},
		],
		tier: "LC",
	},
	primeape: {
		randomBattleMoves: ["closecombat", "uturn", "icepunch", "stoneedge", "encore", "earthquake", "gunkshot"],
		randomDoubleBattleMoves: ["closecombat", "uturn", "icepunch", "rockslide", "punishment", "earthquake", "poisonjab", "protect", "taunt", "stoneedge"],
		eventPokemon: [
			{"generation": 3, "level": 34, "abilities": ["vitalspirit"], "moves": ["helpinghand", "crosschop", "focusenergy", "reversal"]},
		],
		encounters: [
			{"generation": 2, "level": 15},
			{"generation": 4, "level": 15},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	growlithe: {
		randomBattleMoves: ["flareblitz", "wildcharge", "hiddenpowergrass", "closecombat", "morningsun", "willowisp", "toxic", "flamethrower"],
		randomDoubleBattleMoves: ["flareblitz", "wildcharge", "hiddenpowergrass", "closecombat", "willowisp", "snarl", "heatwave", "helpinghand", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 32, "gender": "F", "nature": "Quiet", "ivs": {"hp": 11, "atk": 24, "def": 28, "spa": 1, "spd": 20, "spe": 2}, "abilities": ["intimidate"], "moves": ["leer", "odorsleuth", "takedown", "flamewheel"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["bite", "roar", "ember"], "pokeball": "pokeball"},
			{"generation": 3, "level": 28, "moves": ["charm", "flamethrower", "bite", "takedown"]},
		],
		encounters: [
			{"generation": 1, "level": 15, "shiny": false},
		],
		tier: "LC",
	},
	arcanine: {
		randomBattleMoves: ["flareblitz", "wildcharge", "extremespeed", "closecombat", "morningsun", "willowisp", "toxic", "crunch", "roar"],
		randomDoubleBattleMoves: ["flareblitz", "wildcharge", "closecombat", "willowisp", "snarl", "protect", "extremespeed"],
		eventPokemon: [
			{"generation": 4, "level": 50, "abilities": ["intimidate"], "moves": ["flareblitz", "thunderfang", "crunch", "extremespeed"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "isHidden": false, "abilities": ["intimidate"], "moves": ["flareblitz", "extremespeed", "willowisp", "protect"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "DUU",
	},
	poliwag: {
		randomBattleMoves: ["hydropump", "icebeam", "encore", "bellydrum", "hypnosis", "waterfall", "return"],
		randomDoubleBattleMoves: ["hydropump", "icebeam", "encore", "icywind", "hypnosis", "waterfall", "return", "protect", "helpinghand"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["bubble", "sweetkiss"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 5},
			{"generation": 2, "level": 3},
		],
		tier: "LC",
	},
	poliwhirl: {
		randomBattleMoves: ["hydropump", "icebeam", "encore", "bellydrum", "hypnosis", "waterfall", "return", "earthquake"],
		randomDoubleBattleMoves: ["hydropump", "icebeam", "encore", "icywind", "hypnosis", "waterfall", "return", "protect", "helpinghand", "earthquake"],
		encounters: [
			{"generation": 1, "level": 15},
			{"generation": 2, "level": 10},
			{"generation": 3, "level": 20},
			{"generation": 4, "level": 10},
			{"generation": 7, "level": 24},
			{"generation": 7, "level": 22, "isHidden": false, "gender": "F", "nature": "Naughty", "abilities": ["damp"], "pokeball": "pokeball"},
		],
		tier: "NFE",
	},
	poliwrath: {
		randomBattleMoves: ["hydropump", "focusblast", "icepunch", "rest", "sleeptalk", "scald", "circlethrow", "raindance"],
		randomDoubleBattleMoves: ["bellydrum", "encore", "waterfall", "protect", "icepunch", "earthquake", "brickbreak", "rockslide"],
		eventPokemon: [
			{"generation": 3, "level": 42, "moves": ["helpinghand", "hydropump", "raindance", "brickbreak"]},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	politoed: {
		randomBattleMoves: ["scald", "toxic", "encore", "perishsong", "protect", "hypnosis", "rest"],
		randomDoubleBattleMoves: ["scald", "hypnosis", "icywind", "encore", "helpinghand", "protect", "icebeam", "focusblast", "hydropump", "hiddenpowergrass"],
		eventPokemon: [
			{"generation": 5, "level": 50, "gender": "M", "nature": "Calm", "ivs": {"hp": 31, "atk": 13, "def": 31, "spa": 5, "spd": 31, "spe": 5}, "isHidden": true, "moves": ["scald", "icebeam", "perishsong", "protect"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "DOU",
	},
	abra: {
		randomBattleMoves: ["calmmind", "psychic", "psyshock", "hiddenpowerfighting", "shadowball", "encore", "substitute"],
		randomDoubleBattleMoves: ["protect", "psychic", "psyshock", "hiddenpowerfighting", "shadowball", "encore", "substitute"],
		encounters: [
			{"generation": 1, "level": 6},
		],
		tier: "LC",
	},
	kadabra: {
		randomBattleMoves: ["calmmind", "psychic", "psyshock", "hiddenpowerfighting", "shadowball", "encore", "substitute"],
		randomDoubleBattleMoves: ["protect", "psychic", "psyshock", "hiddenpowerfighting", "shadowball", "encore", "substitute"],
		encounters: [
			{"generation": 2, "level": 15},
			{"generation": 4, "level": 15},
			{"generation": 7, "level": 11, "isHidden": false, "pokeball": "pokeball"},
		],
		tier: "NFE",
	},
	alakazam: {
		randomBattleMoves: ["psyshock", "psychic", "focusblast", "shadowball", "hiddenpowerice", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["protect", "psychic", "psyshock", "focusblast", "shadowball", "encore", "substitute", "dazzlinggleam"],
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["futuresight", "calmmind", "psychic", "trick"], "pokeball": "pokeball"},
		],
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	alakazammega: {
		randomBattleMoves: ["calmmind", "psyshock", "focusblast", "shadowball", "encore", "substitute"],
		randomDoubleBattleMoves: ["protect", "psychic", "psyshock", "focusblast", "shadowball", "encore", "substitute", "dazzlinggleam"],
		requiredItem: "Alakazite",
		tier: "OU",
		doublesTier: "(DUU)",
	},
	machop: {
		randomBattleMoves: ["dynamicpunch", "bulkup", "icepunch", "rockslide", "bulletpunch", "knockoff"],
		randomDoubleBattleMoves: ["dynamicpunch", "protect", "icepunch", "rockslide", "bulletpunch", "knockoff"],
		encounters: [
			{"generation": 1, "level": 15, "shiny": false},
		],
		tier: "LC",
	},
	machoke: {
		randomBattleMoves: ["dynamicpunch", "bulkup", "icepunch", "rockslide", "bulletpunch", "poweruppunch", "knockoff"],
		randomDoubleBattleMoves: ["dynamicpunch", "protect", "icepunch", "rockslide", "bulletpunch", "knockoff"],
		eventPokemon: [
			{"generation": 5, "level": 30, "isHidden": false, "moves": ["lowsweep", "foresight", "seismictoss", "revenge"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 2, "level": 14},
			{"generation": 4, "level": 14},
		],
		tier: "NFE",
	},
	machamp: {
		randomBattleMoves: ["dynamicpunch", "icepunch", "stoneedge", "bulletpunch", "knockoff", "substitute"],
		randomDoubleBattleMoves: ["dynamicpunch", "protect", "icepunch", "stoneedge", "rockslide", "bulletpunch", "knockoff", "wideguard"],
		eventPokemon: [
			{"generation": 3, "level": 38, "gender": "M", "nature": "Quiet", "ivs": {"hp": 9, "atk": 23, "def": 25, "spa": 20, "spd": 15, "spe": 10}, "abilities": ["guts"], "moves": ["seismictoss", "foresight", "revenge", "vitalthrow"], "pokeball": "pokeball"},
			{"generation": 6, "level": 50, "shiny": true, "gender": "M", "nature": "Adamant", "ivs": {"hp": 31, "atk": 31, "def": 31, "spa": 31, "spd": 31, "spe": 31}, "isHidden": false, "abilities": ["noguard"], "moves": ["dynamicpunch", "stoneedge", "wideguard", "knockoff"], "pokeball": "cherishball"},
			{"generation": 6, "level": 39, "gender": "M", "nature": "Hardy", "isHidden": false, "abilities": ["noguard"], "moves": ["seismictoss", "dynamicpunch", "dig", "focusenergy"], "pokeball": "cherishball"},
			{"generation": 7, "level": 34, "gender": "F", "nature": "Brave", "ivs": {"atk": 31}, "isHidden": false, "abilities": ["guts"], "moves": ["strength", "bulkup", "quickguard", "doubleedge"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 16},
			{"generation": 2, "level": 5},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	bellsprout: {
		randomBattleMoves: ["sleeppowder", "sunnyday", "growth", "solarbeam", "sludgebomb", "weatherball", "suckerpunch", "seedbomb"],
		randomDoubleBattleMoves: ["sleeppowder", "sunnyday", "growth", "solarbeam", "sludgebomb", "weatherball", "suckerpunch", "seedbomb", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["vinewhip", "teeterdance"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["vinewhip", "growth"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 12, "shiny": false},
			{"generation": 2, "level": 3},
		],
		tier: "LC",
	},
	weepinbell: {
		randomBattleMoves: ["sleeppowder", "sunnyday", "growth", "solarbeam", "sludgebomb", "weatherball", "suckerpunch", "seedbomb", "knockoff"],
		randomDoubleBattleMoves: ["sleeppowder", "sunnyday", "growth", "solarbeam", "sludgebomb", "weatherball", "suckerpunch", "seedbomb", "knockoff", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 32, "moves": ["morningsun", "magicalleaf", "sludgebomb", "sweetscent"]},
		],
		encounters: [
			{"generation": 2, "level": 12},
			{"generation": 4, "level": 10},
		],
		tier: "NFE",
	},
	victreebel: {
		randomBattleMoves: ["sleeppowder", "sludgebomb", "gigadrain", "hiddenpowerfire", "suckerpunch", "swordsdance", "powerwhip", "knockoff"],
		randomDoubleBattleMoves: ["sleeppowder", "sunnyday", "growth", "solarbeam", "sludgebomb", "weatherball", "suckerpunch", "powerwhip", "knockoff", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	tentacool: {
		randomBattleMoves: ["toxicspikes", "rapidspin", "scald", "sludgebomb", "icebeam", "knockoff", "gigadrain", "toxic", "dazzlinggleam"],
		randomDoubleBattleMoves: ["muddywater", "scald", "sludgebomb", "icebeam", "knockoff", "gigadrain", "protect", "dazzlinggleam"],
		encounters: [
			{"generation": 1, "level": 5},
		],
		tier: "LC",
	},
	tentacruel: {
		randomBattleMoves: ["toxicspikes", "rapidspin", "scald", "sludgebomb", "acidspray", "knockoff"],
		randomDoubleBattleMoves: ["muddywater", "scald", "sludgebomb", "acidspray", "icebeam", "knockoff", "gigadrain", "protect", "dazzlinggleam"],
		encounters: [
			{"generation": 1, "level": 20},
			{"generation": 2, "level": 20},
			{"generation": 3, "level": 20},
			{"generation": 4, "level": 15},
			{"generation": 6, "level": 21, "maxEggMoves": 1},
		],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	geodude: {
		randomBattleMoves: ["stealthrock", "earthquake", "stoneedge", "suckerpunch", "hammerarm", "firepunch", "rockblast"],
		randomDoubleBattleMoves: ["rockslide", "earthquake", "stoneedge", "suckerpunch", "hammerarm", "firepunch", "protect"],
		encounters: [
			{"generation": 1, "level": 7, "shiny": false},
			{"generation": 2, "level": 2},
		],
		tier: "LC",
	},
	geodudealola: {
		tier: "LC",
	},
	graveler: {
		randomBattleMoves: ["stealthrock", "earthquake", "stoneedge", "suckerpunch", "hammerarm", "firepunch", "rockblast"],
		randomDoubleBattleMoves: ["rockslide", "earthquake", "stoneedge", "suckerpunch", "hammerarm", "firepunch", "protect"],
		encounters: [
			{"generation": 2, "level": 23},
			{"generation": 4, "level": 16, "pokeball": "safariball"},
			{"generation": 6, "level": 24, "isHidden": false},
		],
		tier: "NFE",
	},
	graveleralola: {
		tier: "NFE",
	},
	golem: {
		randomBattleMoves: ["stealthrock", "earthquake", "explosion", "suckerpunch", "toxic", "rockblast"],
		randomDoubleBattleMoves: ["rockslide", "earthquake", "stoneedge", "suckerpunch", "hammerarm", "firepunch", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	golemalola: {
		randomBattleMoves: ["stealthrock", "stoneedge", "return", "thunderpunch", "earthquake", "toxic"],
		randomDoubleBattleMoves: ["doubleedge", "stoneedge", "rockslide", "earthquake", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	ponyta: {
		randomBattleMoves: ["flareblitz", "wildcharge", "morningsun", "hypnosis", "flamecharge"],
		randomDoubleBattleMoves: ["flareblitz", "wildcharge", "protect", "hypnosis", "flamecharge"],
		encounters: [
			{"generation": 1, "level": 28, "shiny": false},
		],
		tier: "LC",
	},
	rapidash: {
		randomBattleMoves: ["flareblitz", "wildcharge", "morningsun", "highhorsepower", "willowisp"],
		randomDoubleBattleMoves: ["flareblitz", "wildcharge", "protect", "hypnosis", "flamecharge", "megahorn", "drillrun", "willowisp"],
		eventPokemon: [
			{"generation": 3, "level": 40, "moves": ["batonpass", "solarbeam", "sunnyday", "flamethrower"]},
		],
		encounters: [
			{"generation": 2, "level": 14, "gender": "M", "shiny": false},
			{"generation": 3, "level": 37},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	slowpoke: {
		randomBattleMoves: ["scald", "aquatail", "zenheadbutt", "thunderwave", "toxic", "slackoff", "trickroom"],
		randomDoubleBattleMoves: ["scald", "aquatail", "zenheadbutt", "thunderwave", "slackoff", "trickroom", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 31, "gender": "F", "nature": "Naive", "ivs": {"hp": 17, "atk": 11, "def": 19, "spa": 20, "spd": 5, "spe": 10}, "abilities": ["oblivious"], "moves": ["watergun", "confusion", "disable", "headbutt"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["curse", "yawn", "tackle", "growl"], "pokeball": "pokeball"},
			{"generation": 5, "level": 30, "isHidden": false, "moves": ["confusion", "disable", "headbutt", "waterpulse"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 15},
		],
		tier: "LC",
	},
	slowbro: {
		randomBattleMoves: ["scald", "toxic", "thunderwave", "psyshock", "fireblast", "icebeam", "slackoff"],
		randomDoubleBattleMoves: ["scald", "fireblast", "icebeam", "psychic", "grassknot", "thunderwave", "slackoff", "trickroom", "protect", "psyshock"],
		eventPokemon: [
			{"generation": 6, "level": 100, "nature": "Quiet", "isHidden": false, "abilities": ["oblivious"], "moves": ["scald", "trickroom", "slackoff", "irontail"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 15, "shiny": false},
			{"generation": 1, "level": 23},
			{"generation": 2, "level": 20},
			{"generation": 3, "level": 32},
			{"generation": 4, "level": 15},
			{"generation": 5, "level": 35, "isHidden": false},
			{"generation": 7, "level": 15},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	slowbromega: {
		randomBattleMoves: ["calmmind", "scald", "psyshock", "slackoff", "fireblast", "icebeam"],
		randomDoubleBattleMoves: ["scald", "fireblast", "icebeam", "psychic", "thunderwave", "slackoff", "trickroom", "protect", "psyshock"],
		requiredItem: "Slowbronite",
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	slowking: {
		randomBattleMoves: ["scald", "fireblast", "icebeam", "psychic", "grassknot", "thunderwave", "toxic", "slackoff", "trickroom", "nastyplot", "dragontail", "psyshock"],
		randomDoubleBattleMoves: ["scald", "fireblast", "icebeam", "psychic", "grassknot", "thunderwave", "slackoff", "trickroom", "protect", "psyshock"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	magnemite: {
		randomBattleMoves: ["thunderbolt", "thunderwave", "magnetrise", "substitute", "flashcannon", "hiddenpowerice", "voltswitch"],
		randomDoubleBattleMoves: ["thunderbolt", "thunderwave", "magnetrise", "substitute", "flashcannon", "hiddenpowerice", "voltswitch", "protect", "electroweb", "discharge"],
		encounters: [
			{"generation": 1, "level": 16, "shiny": false},
		],
		tier: "LC",
	},
	magneton: {
		randomBattleMoves: ["thunderbolt", "substitute", "flashcannon", "hiddenpowerice", "voltswitch", "chargebeam", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["thunderbolt", "thunderwave", "magnetrise", "substitute", "flashcannon", "hiddenpowerice", "voltswitch", "protect", "electroweb", "discharge", "hiddenpowerfire"],
		eventPokemon: [
			{"generation": 3, "level": 30, "moves": ["refresh", "doubleedge", "raindance", "thunder"]},
		],
		encounters: [
			{"generation": 2, "level": 5, "shiny": false},
			{"generation": 3, "level": 26},
			{"generation": 4, "level": 17, "pokeball": "safariball"},
		],
		tier: "UU",
		doublesTier: "NFE",
	},
	magnezone: {
		randomBattleMoves: ["thunderbolt", "substitute", "flashcannon", "hiddenpowerice", "voltswitch", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["thunderbolt", "substitute", "flashcannon", "hiddenpowerice", "voltswitch", "protect", "electroweb", "discharge", "hiddenpowerfire"],
		tier: "OU",
		doublesTier: "(DUU)",
	},
	farfetchd: {
		randomBattleMoves: ["bravebird", "swordsdance", "return", "leafblade", "roost", "knockoff"],
		randomDoubleBattleMoves: ["bravebird", "swordsdance", "return", "leafblade", "protect", "knockoff"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["yawn", "wish"], "pokeball": "pokeball"},
			{"generation": 3, "level": 36, "moves": ["batonpass", "slash", "swordsdance", "aerialace"]},
		],
		encounters: [
			{"generation": 1, "level": 3},
			{"generation": 3, "level": 3, "gender": "M", "nature": "Adamant", "ivs": {"hp": 20, "atk": 25, "def": 21, "spa": 24, "spd": 15, "spe": 20}, "abilities": ["keeneye"], "pokeball": "pokeball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	doduo: {
		randomBattleMoves: ["bravebird", "return", "doubleedge", "roost", "quickattack", "pursuit"],
		randomDoubleBattleMoves: ["bravebird", "return", "doubleedge", "quickattack", "protect"],
		encounters: [
			{"generation": 1, "level": 18, "shiny": false},
			{"generation": 2, "level": 4},
		],
		tier: "LC",
	},
	dodrio: {
		randomBattleMoves: ["bravebird", "return", "swordsdance", "roost", "quickattack", "knockoff", "jumpkick"],
		randomDoubleBattleMoves: ["bravebird", "return", "doubleedge", "quickattack", "knockoff", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 34, "moves": ["batonpass", "drillpeck", "agility", "triattack"]},
		],
		encounters: [
			{"generation": 1, "level": 29, "shiny": false},
			{"generation": 2, "level": 10, "gender": "F", "shiny": false},
			{"generation": 2, "level": 30},
			{"generation": 3, "level": 29, "pokeball": "safariball"},
			{"generation": 4, "level": 15, "gender": "F", "shiny": false, "nature": "Impish", "ivs": {"hp": 20, "atk": 20, "def": 20, "spa": 15, "spd": 15, "spe": 15}, "abilities": ["runaway"], "pokeball": "pokeball"},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	seel: {
		randomBattleMoves: ["surf", "icebeam", "aquajet", "protect", "rest", "toxic", "drillrun"],
		randomDoubleBattleMoves: ["surf", "icebeam", "aquajet", "protect", "rest", "toxic", "fakeout", "drillrun", "icywind"],
		eventPokemon: [
			{"generation": 3, "level": 23, "abilities": ["thickfat"], "moves": ["helpinghand", "surf", "safeguard", "icebeam"]},
		],
		encounters: [
			{"generation": 1, "level": 22, "shiny": false},
		],
		tier: "LC",
	},
	dewgong: {
		randomBattleMoves: ["surf", "icebeam", "perishsong", "encore", "toxic", "protect"],
		randomDoubleBattleMoves: ["surf", "icebeam", "protect", "perishsong", "fakeout", "encore", "toxic"],
		encounters: [
			{"generation": 1, "level": 15},
			{"generation": 2, "level": 5},
			{"generation": 3, "level": 32},
			{"generation": 5, "level": 30, "isHidden": false},
			{"generation": 6, "level": 30, "maxEggMoves": 1},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	grimer: {
		randomBattleMoves: ["curse", "gunkshot", "poisonjab", "shadowsneak", "painsplit", "icepunch", "firepunch", "memento"],
		randomDoubleBattleMoves: ["gunkshot", "poisonjab", "shadowsneak", "protect", "icepunch", "firepunch"],
		eventPokemon: [
			{"generation": 3, "level": 23, "moves": ["helpinghand", "sludgebomb", "shadowpunch", "minimize"]},
		],
		encounters: [
			{"generation": 1, "level": 23, "shiny": false},
		],
		tier: "LC",
	},
	grimeralola: {
		eventPokemon: [
			{"generation": 7, "level": 10, "isHidden": false, "abilities": ["poisontouch"], "moves": ["bite", "harden", "poisongas", "pound"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	muk: {
		randomBattleMoves: ["curse", "gunkshot", "poisonjab", "shadowsneak", "icepunch", "firepunch", "memento"],
		randomDoubleBattleMoves: ["gunkshot", "poisonjab", "shadowsneak", "protect", "icepunch", "firepunch", "brickbreak"],
		encounters: [
			{"generation": 1, "level": 25},
			{"generation": 2, "level": 5},
			{"generation": 3, "level": 32},
			{"generation": 4, "level": 15},
			{"generation": 5, "level": 5, "isHidden": false},
			{"generation": 5, "level": 35, "isHidden": true},
			{"generation": 6, "level": 30},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	mukalola: {
		randomBattleMoves: ["curse", "gunkshot", "knockoff", "poisonjab", "shadowsneak", "pursuit", "icepunch", "firepunch"],
		randomDoubleBattleMoves: ["gunkshot", "knockoff", "stoneedge", "snarl", "protect", "poisonjab", "shadowsneak"],
		tier: "UU",
		doublesTier: "DUU",
	},
	shellder: {
		randomBattleMoves: ["shellsmash", "hydropump", "liquidation", "rockblast", "iciclespear", "rapidspin"],
		randomDoubleBattleMoves: ["shellsmash", "hydropump", "liquidation", "rockblast", "iciclespear", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 24, "gender": "F", "nature": "Brave", "ivs": {"hp": 5, "atk": 19, "def": 18, "spa": 5, "spd": 11, "spe": 13}, "abilities": ["shellarmor"], "moves": ["withdraw", "iciclespear", "supersonic", "aurorabeam"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["shellarmor"], "moves": ["tackle", "withdraw", "iciclespear"], "pokeball": "pokeball"},
			{"generation": 3, "level": 29, "abilities": ["shellarmor"], "moves": ["refresh", "takedown", "surf", "aurorabeam"]},
		],
		encounters: [
			{"generation": 1, "level": 10},
		],
		tier: "LC",
	},
	cloyster: {
		randomBattleMoves: ["shellsmash", "hydropump", "rockblast", "iciclespear", "iceshard", "rapidspin", "spikes", "toxicspikes"],
		randomDoubleBattleMoves: ["shellsmash", "hydropump", "liquidation", "rockblast", "iciclespear", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 30, "gender": "M", "nature": "Naughty", "isHidden": false, "abilities": ["skilllink"], "moves": ["iciclespear", "rockblast", "hiddenpower", "razorshell"], "pokeball": "pokeball"},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	gastly: {
		randomBattleMoves: ["shadowball", "sludgebomb", "hiddenpowerfighting", "thunderbolt", "substitute", "disable", "painsplit", "hypnosis", "gigadrain", "trick", "dazzlinggleam"],
		randomDoubleBattleMoves: ["shadowball", "sludgebomb", "hiddenpowerfighting", "thunderbolt", "substitute", "disable", "taunt", "hypnosis", "gigadrain", "trick", "dazzlinggleam", "protect"],
		encounters: [
			{"generation": 1, "level": 18, "shiny": false},
		],
		tier: "LC",
	},
	haunter: {
		randomBattleMoves: ["shadowball", "sludgebomb", "dazzlinggleam", "substitute", "destinybond"],
		randomDoubleBattleMoves: ["shadowball", "sludgebomb", "hiddenpowerfighting", "thunderbolt", "substitute", "disable", "taunt", "hypnosis", "gigadrain", "trick", "dazzlinggleam", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 30, "moves": ["confuseray", "suckerpunch", "shadowpunch", "payback"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 20, "shiny": false},
			{"generation": 2, "level": 15},
			{"generation": 3, "level": 20},
			{"generation": 4, "level": 16},
		],
		tier: "PU",
		doublesTier: "NFE",
	},
	gengar: {
		randomBattleMoves: ["shadowball", "sludgewave", "focusblast", "substitute", "disable", "painsplit", "willowisp"],
		randomDoubleBattleMoves: ["shadowball", "sludgebomb", "focusblast", "substitute", "disable", "taunt", "hypnosis", "willowisp", "dazzlinggleam", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 23, "gender": "F", "nature": "Hardy", "ivs": {"hp": 19, "atk": 14, "def": 0, "spa": 14, "spd": 17, "spe": 27}, "moves": ["spite", "curse", "nightshade", "confuseray"], "pokeball": "pokeball"},
			{"generation": 6, "level": 25, "nature": "Timid", "moves": ["psychic", "confuseray", "suckerpunch", "shadowpunch"], "pokeball": "cherishball"},
			{"generation": 6, "level": 25, "moves": ["nightshade", "confuseray", "suckerpunch", "shadowpunch"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "moves": ["shadowball", "sludgebomb", "willowisp", "destinybond"], "pokeball": "cherishball"},
			{"generation": 6, "level": 25, "shiny": true, "moves": ["shadowball", "sludgewave", "confuseray", "astonish"], "pokeball": "duskball"},
			{"generation": 6, "level": 50, "shiny": true, "gender": "M", "moves": ["meanlook", "hypnosis", "psychic", "hyperbeam"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["meanlook", "hypnosis", "psychic", "hyperbeam"], "pokeball": "cherishball"},
		],
		tier: "UU",
		doublesTier: "DUU",
	},
	gengarmega: {
		randomBattleMoves: ["shadowball", "sludgewave", "focusblast", "taunt", "destinybond", "disable", "perishsong", "protect"],
		randomDoubleBattleMoves: ["shadowball", "sludgebomb", "focusblast", "substitute", "disable", "taunt", "hypnosis", "willowisp", "dazzlinggleam", "protect"],
		requiredItem: "Gengarite",
		tier: "Uber",
		doublesTier: "DUber",
	},
	onix: {
		randomBattleMoves: ["stealthrock", "earthquake", "stoneedge", "dragontail", "curse"],
		randomDoubleBattleMoves: ["stealthrock", "earthquake", "stoneedge", "rockslide", "protect", "explosion"],
		encounters: [
			{"generation": 1, "level": 13, "shiny": false},
		],
		tier: "LC",
	},
	steelix: {
		randomBattleMoves: ["stealthrock", "earthquake", "ironhead", "roar", "toxic", "rockslide"],
		randomDoubleBattleMoves: ["stealthrock", "earthquake", "ironhead", "rockslide", "protect", "explosion", "wideguard"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	steelixmega: {
		randomBattleMoves: ["stealthrock", "earthquake", "heavyslam", "roar", "toxic", "dragontail"],
		randomDoubleBattleMoves: ["stealthrock", "earthquake", "heavyslam", "rockslide", "protect", "explosion"],
		requiredItem: "Steelixite",
		tier: "UU",
		doublesTier: "(DUU)",
	},
	drowzee: {
		randomBattleMoves: ["psychic", "seismictoss", "thunderwave", "wish", "protect", "toxic", "shadowball", "trickroom", "calmmind", "dazzlinggleam"],
		randomDoubleBattleMoves: ["psychic", "seismictoss", "thunderwave", "wish", "protect", "hypnosis", "shadowball", "trickroom", "calmmind", "dazzlinggleam", "toxic"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "abilities": ["insomnia"], "moves": ["bellydrum", "wish"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 9, "shiny": false},
		],
		tier: "LC",
	},
	hypno: {
		randomBattleMoves: ["psychic", "seismictoss", "foulplay", "wish", "protect", "thunderwave", "toxic"],
		randomDoubleBattleMoves: ["psychic", "seismictoss", "thunderwave", "wish", "protect", "hypnosis", "trickroom", "dazzlinggleam", "foulplay"],
		eventPokemon: [
			{"generation": 3, "level": 34, "abilities": ["insomnia"], "moves": ["batonpass", "psychic", "meditate", "shadowball"]},
		],
		encounters: [
			{"generation": 2, "level": 16},
			{"generation": 4, "level": 16},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	krabby: {
		randomBattleMoves: ["crabhammer", "swordsdance", "agility", "rockslide", "substitute", "xscissor", "superpower", "knockoff"],
		randomDoubleBattleMoves: ["crabhammer", "swordsdance", "rockslide", "substitute", "xscissor", "superpower", "knockoff", "protect"],
		encounters: [
			{"generation": 1, "level": 10},
		],
		tier: "LC",
	},
	kingler: {
		randomBattleMoves: ["liquidation", "xscissor", "rockslide", "swordsdance", "agility", "superpower", "knockoff"],
		randomDoubleBattleMoves: ["liquidation", "xscissor", "rockslide", "substitute", "superpower", "knockoff", "protect", "wideguard"],
		encounters: [
			{"generation": 1, "level": 15},
			{"generation": 3, "level": 25},
			{"generation": 4, "level": 22},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	voltorb: {
		randomBattleMoves: ["voltswitch", "thunderbolt", "taunt", "foulplay", "hiddenpowerice"],
		randomDoubleBattleMoves: ["voltswitch", "thunderbolt", "taunt", "foulplay", "hiddenpowerice", "protect", "thunderwave"],
		eventPokemon: [
			{"generation": 3, "level": 19, "moves": ["refresh", "mirrorcoat", "spark", "swift"]},
		],
		encounters: [
			{"generation": 1, "level": 14, "shiny": false},
			{"generation": 1, "level": 40},
		],
		tier: "LC",
	},
	electrode: {
		randomBattleMoves: ["voltswitch", "thunderbolt", "taunt", "foulplay", "hiddenpowergrass", "signalbeam"],
		randomDoubleBattleMoves: ["voltswitch", "discharge", "taunt", "foulplay", "hiddenpowerice", "protect", "thunderwave"],
		encounters: [
			{"generation": 1, "level": 3},
			{"generation": 2, "level": 23},
			{"generation": 3, "level": 3, "shiny": false, "nature": "Hasty", "ivs": {"hp": 19, "atk": 16, "def": 18, "spa": 25, "spd": 25, "spe": 19}, "abilities": ["static"], "pokeball": "pokeball"},
			{"generation": 4, "level": 23},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	exeggcute: {
		randomBattleMoves: ["substitute", "leechseed", "gigadrain", "psychic", "sleeppowder", "stunspore", "hiddenpowerfire", "synthesis"],
		randomDoubleBattleMoves: ["substitute", "leechseed", "gigadrain", "psychic", "sleeppowder", "stunspore", "hiddenpowerfire", "protect", "trickroom"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["sweetscent", "wish"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 20, "shiny": false},
		],
		tier: "LC",
	},
	exeggutor: {
		randomBattleMoves: ["substitute", "leechseed", "gigadrain", "psychic", "sleeppowder", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["substitute", "leechseed", "gigadrain", "psychic", "sleeppowder", "hiddenpowerfire", "protect", "trickroom", "psyshock"],
		eventPokemon: [
			{"generation": 3, "level": 46, "moves": ["refresh", "psychic", "hypnosis", "ancientpower"]},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	exeggutoralola: {
		randomBattleMoves: ["dracometeor", "leafstorm", "flamethrower", "gigadrain", "trickroom"],
		randomDoubleBattleMoves: ["dracometeor", "leafstorm", "protect", "flamethrower", "trickroom", "woodhammer", "dragonhammer"],
		eventPokemon: [
			{"generation": 7, "level": 50, "gender": "M", "nature": "Modest", "isHidden": true, "moves": ["powerswap", "celebrate", "leafstorm", "dracometeor"], "pokeball": "cherishball"},
		],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	cubone: {
		randomBattleMoves: ["substitute", "bonemerang", "doubleedge", "rockslide", "firepunch", "earthquake"],
		randomDoubleBattleMoves: ["substitute", "bonemerang", "doubleedge", "rockslide", "firepunch", "earthquake", "protect"],
		encounters: [
			{"generation": 1, "level": 16, "shiny": false},
		],
		tier: "LC",
	},
	marowak: {
		randomBattleMoves: ["bonemerang", "earthquake", "knockoff", "doubleedge", "stoneedge", "stealthrock", "substitute"],
		randomDoubleBattleMoves: ["substitute", "bonemerang", "doubleedge", "rockslide", "firepunch", "earthquake", "protect", "swordsdance"],
		eventPokemon: [
			{"generation": 3, "level": 44, "moves": ["sing", "earthquake", "swordsdance", "rockslide"]},
		],
		encounters: [
			{"generation": 1, "level": 24, "shiny": false},
			{"generation": 2, "level": 12},
			{"generation": 4, "level": 14},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	marowakalola: {
		randomBattleMoves: ["flamecharge", "shadowbone", "bonemerang", "willowisp", "stoneedge", "flareblitz", "substitute"],
		randomDoubleBattleMoves: ["shadowbone", "bonemerang", "willowisp", "stoneedge", "flareblitz", "protect"],
		tier: "RU",
		doublesTier: "DUU",
	},
	marowakalolatotem: {
		eventPokemon: [
			{"generation": 7, "level": 25, "perfectIVs": 3, "moves": ["leer", "hex", "bonemerang", "willowisp"], "pokeball": "pokeball"},
		],
		eventOnly: true,
	},
	tyrogue: {
		randomBattleMoves: ["highjumpkick", "rapidspin", "fakeout", "bulletpunch", "machpunch", "toxic", "counter"],
		randomDoubleBattleMoves: ["highjumpkick", "fakeout", "bulletpunch", "machpunch", "helpinghand", "protect"],
		tier: "LC",
	},
	hitmonlee: {
		randomBattleMoves: ["highjumpkick", "knockoff", "stoneedge", "rapidspin", "machpunch", "poisonjab", "fakeout"],
		randomDoubleBattleMoves: ["knockoff", "rockslide", "machpunch", "fakeout", "highjumpkick", "earthquake", "blazekick", "wideguard", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 38, "abilities": ["limber"], "moves": ["refresh", "highjumpkick", "mindreader", "megakick"]},
		],
		encounters: [
			{"generation": 1, "level": 30},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	hitmonchan: {
		randomBattleMoves: ["bulkup", "drainpunch", "icepunch", "firepunch", "machpunch", "rapidspin"],
		randomDoubleBattleMoves: ["fakeout", "drainpunch", "icepunch", "firepunch", "machpunch", "earthquake", "rockslide", "protect", "thunderpunch"],
		eventPokemon: [
			{"generation": 3, "level": 38, "abilities": ["keeneye"], "moves": ["helpinghand", "skyuppercut", "mindreader", "megapunch"]},
		],
		encounters: [
			{"generation": 1, "level": 30},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	hitmontop: {
		randomBattleMoves: ["suckerpunch", "stoneedge", "rapidspin", "closecombat", "toxic"],
		randomDoubleBattleMoves: ["fakeout", "feint", "suckerpunch", "closecombat", "helpinghand", "machpunch", "wideguard"],
		eventPokemon: [
			{"generation": 5, "level": 55, "gender": "M", "nature": "Adamant", "isHidden": false, "abilities": ["intimidate"], "moves": ["fakeout", "closecombat", "suckerpunch", "helpinghand"]},
		],
		tier: "NU",
		doublesTier: "DUU",
	},
	lickitung: {
		randomBattleMoves: ["wish", "protect", "dragontail", "curse", "bodyslam", "return", "powerwhip", "swordsdance", "earthquake", "toxic", "healbell"],
		randomDoubleBattleMoves: ["wish", "protect", "dragontail", "knockoff", "bodyslam", "return", "powerwhip", "swordsdance", "earthquake"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["healbell", "wish"], "pokeball": "pokeball"},
			{"generation": 3, "level": 38, "moves": ["helpinghand", "doubleedge", "defensecurl", "rollout"]},
		],
		encounters: [
			{"generation": 1, "level": 15},
		],
		tier: "LC",
	},
	lickilicky: {
		randomBattleMoves: ["wish", "protect", "bodyslam", "knockoff", "dragontail", "healbell", "swordsdance", "explosion", "earthquake", "powerwhip"],
		randomDoubleBattleMoves: ["wish", "protect", "dragontail", "knockoff", "bodyslam", "rockslide", "powerwhip", "earthquake", "explosion"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	koffing: {
		randomBattleMoves: ["painsplit", "sludgebomb", "willowisp", "fireblast", "toxic", "clearsmog", "rest", "sleeptalk", "thunderbolt"],
		randomDoubleBattleMoves: ["protect", "sludgebomb", "willowisp", "fireblast", "toxic", "rest", "sleeptalk", "thunderbolt"],
		encounters: [
			{"generation": 1, "level": 30, "shiny": false},
		],
		tier: "LC",
	},
	weezing: {
		randomBattleMoves: ["painsplit", "sludgebomb", "willowisp", "fireblast", "protect", "toxicspikes"],
		randomDoubleBattleMoves: ["protect", "sludgebomb", "willowisp", "fireblast", "toxic", "painsplit", "thunderbolt", "explosion"],
		encounters: [
			{"generation": 2, "level": 16},
			{"generation": 3, "level": 32},
			{"generation": 4, "level": 15, "pokeball": "safariball"},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	rhyhorn: {
		randomBattleMoves: ["stoneedge", "earthquake", "aquatail", "megahorn", "stealthrock", "rockblast", "rockpolish"],
		randomDoubleBattleMoves: ["stoneedge", "earthquake", "aquatail", "megahorn", "stealthrock", "rockslide", "protect"],
		encounters: [
			{"generation": 1, "level": 20},
		],
		tier: "LC",
	},
	rhydon: {
		randomBattleMoves: ["stealthrock", "earthquake", "rockblast", "roar", "swordsdance", "stoneedge", "megahorn", "rockpolish"],
		randomDoubleBattleMoves: ["stoneedge", "earthquake", "aquatail", "megahorn", "stealthrock", "rockslide", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 46, "moves": ["helpinghand", "megahorn", "scaryface", "earthquake"]},
		],
		encounters: [
			{"generation": 1, "level": 15},
			{"generation": 2, "level": 10},
			{"generation": 4, "level": 41},
			{"generation": 6, "level": 30},
		],
		tier: "NU",
		doublesTier: "NFE",
	},
	rhyperior: {
		randomBattleMoves: ["stoneedge", "earthquake", "icepunch", "megahorn", "stealthrock", "rockblast", "rockpolish", "dragontail"],
		randomDoubleBattleMoves: ["stoneedge", "earthquake", "hammerarm", "megahorn", "stealthrock", "rockslide", "icepunch", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	happiny: {
		randomBattleMoves: ["aromatherapy", "toxic", "thunderwave", "counter", "endeavor", "lightscreen", "fireblast"],
		randomDoubleBattleMoves: ["aromatherapy", "toxic", "thunderwave", "helpinghand", "swagger", "lightscreen", "fireblast", "protect"],
		tier: "LC",
	},
	chansey: {
		randomBattleMoves: ["softboiled", "healbell", "stealthrock", "thunderwave", "toxic", "seismictoss", "wish"],
		randomDoubleBattleMoves: ["aromatherapy", "toxic", "thunderwave", "helpinghand", "softboiled", "lightscreen", "seismictoss", "protect", "wish"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["sweetscent", "wish"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "moves": ["pound", "growl", "tailwhip", "refresh"], "pokeball": "pokeball"},
			{"generation": 3, "level": 39, "moves": ["sweetkiss", "thunderbolt", "softboiled", "skillswap"]},
		],
		encounters: [
			{"generation": 1, "level": 7, "shiny": false},
		],
		tier: "OU",
		doublesTier: "NFE",
	},
	blissey: {
		randomBattleMoves: ["toxic", "flamethrower", "seismictoss", "softboiled", "healbell", "protect", "thunderwave", "stealthrock"],
		randomDoubleBattleMoves: ["wish", "softboiled", "protect", "toxic", "aromatherapy", "seismictoss", "helpinghand", "thunderwave", "flamethrower", "icebeam"],
		eventPokemon: [
			{"generation": 5, "level": 10, "isHidden": true, "moves": ["pound", "growl", "tailwhip", "refresh"]},
		],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	tangela: {
		randomBattleMoves: ["gigadrain", "sleeppowder", "hiddenpowerfire", "hiddenpowerice", "leechseed", "knockoff", "leafstorm", "sludgebomb", "synthesis"],
		randomDoubleBattleMoves: ["gigadrain", "sleeppowder", "hiddenpowerrock", "hiddenpowerice", "leechseed", "knockoff", "leafstorm", "stunspore", "protect", "hiddenpowerfire"],
		eventPokemon: [
			{"generation": 3, "level": 30, "abilities": ["chlorophyll"], "moves": ["morningsun", "solarbeam", "sunnyday", "ingrain"]},
		],
		encounters: [
			{"generation": 1, "level": 13},
		],
		tier: "LC Uber",
	},
	tangrowth: {
		randomBattleMoves: ["gigadrain", "leafstorm", "knockoff", "earthquake", "hiddenpowerfire", "rockslide", "sleeppowder", "leechseed", "synthesis"],
		randomDoubleBattleMoves: ["gigadrain", "sleeppowder", "hiddenpowerice", "leechseed", "knockoff", "ragepowder", "focusblast", "protect", "powerwhip", "earthquake"],
		eventPokemon: [
			{"generation": 4, "level": 50, "gender": "M", "nature": "Brave", "moves": ["sunnyday", "morningsun", "ancientpower", "naturalgift"], "pokeball": "cherishball"},
		],
		tier: "OU",
		doublesTier: "(DUU)",
	},
	kangaskhan: {
		randomBattleMoves: ["return", "suckerpunch", "earthquake", "drainpunch", "crunch", "fakeout"],
		randomDoubleBattleMoves: ["fakeout", "return", "suckerpunch", "earthquake", "doubleedge", "drainpunch", "crunch", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "abilities": ["earlybird"], "moves": ["yawn", "wish"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "abilities": ["earlybird"], "moves": ["cometpunch", "leer", "bite"], "pokeball": "pokeball"},
			{"generation": 3, "level": 35, "abilities": ["earlybird"], "moves": ["sing", "earthquake", "tailwhip", "dizzypunch"]},
			{"generation": 6, "level": 50, "isHidden": false, "abilities": ["scrappy"], "moves": ["fakeout", "return", "earthquake", "suckerpunch"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 25, "shiny": false},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	kangaskhanmega: {
		randomBattleMoves: ["fakeout", "return", "suckerpunch", "earthquake", "poweruppunch", "crunch"],
		randomDoubleBattleMoves: ["fakeout", "return", "suckerpunch", "earthquake", "doubleedge", "poweruppunch", "drainpunch", "crunch", "protect"],
		requiredItem: "Kangaskhanite",
		tier: "Uber",
		doublesTier: "DUber",
	},
	horsea: {
		randomBattleMoves: ["hydropump", "icebeam", "substitute", "hiddenpowergrass", "raindance"],
		randomDoubleBattleMoves: ["hydropump", "icebeam", "substitute", "hiddenpowergrass", "raindance", "muddywater", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 1, "shiny": true, "isHidden": false, "moves": ["bubble"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 5},
		],
		tier: "LC",
	},
	seadra: {
		randomBattleMoves: ["hydropump", "icebeam", "agility", "substitute", "hiddenpowergrass"],
		randomDoubleBattleMoves: ["hydropump", "icebeam", "substitute", "hiddenpowergrass", "agility", "muddywater", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 45, "abilities": ["poisonpoint"], "moves": ["leer", "watergun", "twister", "agility"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 20},
			{"generation": 2, "level": 20},
			{"generation": 3, "level": 25},
			{"generation": 4, "level": 15},
		],
		tier: "NFE",
	},
	kingdra: {
		randomBattleMoves: ["raindance", "hydropump", "dracometeor", "icebeam", "dragondance", "waterfall", "outrage"],
		randomDoubleBattleMoves: ["hydropump", "icebeam", "raindance", "dracometeor", "dragonpulse", "muddywater", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 50, "abilities": ["swiftswim"], "moves": ["leer", "watergun", "twister", "agility"], "pokeball": "pokeball"},
			{"generation": 5, "level": 50, "gender": "M", "nature": "Timid", "ivs": {"hp": 31, "atk": 17, "def": 8, "spa": 31, "spd": 11, "spe": 31}, "isHidden": false, "abilities": ["swiftswim"], "moves": ["dracometeor", "muddywater", "dragonpulse", "protect"], "pokeball": "cherishball"},
		],
		tier: "NUBL",
		doublesTier: "DOU",
	},
	goldeen: {
		randomBattleMoves: ["waterfall", "megahorn", "knockoff", "drillrun", "icebeam"],
		randomDoubleBattleMoves: ["waterfall", "megahorn", "knockoff", "drillrun", "icebeam", "protect"],
		encounters: [
			{"generation": 1, "level": 5},
		],
		tier: "LC",
	},
	seaking: {
		randomBattleMoves: ["waterfall", "megahorn", "knockoff", "drillrun", "scald", "icebeam"],
		randomDoubleBattleMoves: ["waterfall", "surf", "megahorn", "knockoff", "drillrun", "icebeam", "icywind", "protect"],
		encounters: [
			{"generation": 1, "level": 23},
			{"generation": 2, "level": 10},
			{"generation": 3, "level": 20},
			{"generation": 4, "level": 10},
			{"generation": 6, "level": 26, "maxEggMoves": 1},
			{"generation": 7, "level": 10},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	staryu: {
		randomBattleMoves: ["scald", "thunderbolt", "icebeam", "rapidspin", "recover", "dazzlinggleam", "hydropump"],
		randomDoubleBattleMoves: ["scald", "thunderbolt", "icebeam", "protect", "recover", "dazzlinggleam", "hydropump"],
		eventPokemon: [
			{"generation": 3, "level": 50, "moves": ["minimize", "lightscreen", "cosmicpower", "hydropump"], "pokeball": "pokeball"},
			{"generation": 3, "level": 18, "nature": "Timid", "ivs": {"hp": 10, "atk": 3, "def": 22, "spa": 24, "spd": 3, "spe": 18}, "abilities": ["illuminate"], "moves": ["harden", "watergun", "rapidspin", "recover"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 1, "level": 5},
		],
		tier: "LC",
	},
	starmie: {
		randomBattleMoves: ["thunderbolt", "icebeam", "rapidspin", "recover", "psyshock", "scald", "hydropump"],
		randomDoubleBattleMoves: ["surf", "thunderbolt", "icebeam", "protect", "recover", "psychic", "psyshock", "scald", "hydropump"],
		eventPokemon: [
			{"generation": 3, "level": 41, "moves": ["refresh", "waterfall", "icebeam", "recover"]},
		],
		tier: "UU",
		doublesTier: "DUU",
	},
	mimejr: {
		randomBattleMoves: ["psychic", "thunderwave", "hiddenpowerfighting", "healingwish", "nastyplot", "thunderbolt", "encore"],
		randomDoubleBattleMoves: ["fakeout", "psychic", "thunderwave", "hiddenpowerfighting", "healingwish", "nastyplot", "thunderbolt", "encore", "icywind", "protect"],
		tier: "LC",
	},
	mrmime: {
		randomBattleMoves: ["nastyplot", "psyshock", "dazzlinggleam", "shadowball", "focusblast", "healingwish", "encore"],
		randomDoubleBattleMoves: ["fakeout", "thunderwave", "hiddenpowerfighting", "psychic", "thunderbolt", "encore", "icywind", "protect", "wideguard", "dazzlinggleam", "followme"],
		eventPokemon: [
			{"generation": 3, "level": 42, "abilities": ["soundproof"], "moves": ["followme", "psychic", "encore", "thunderpunch"]},
		],
		encounters: [
			{"generation": 1, "level": 6},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	scyther: {
		randomBattleMoves: ["swordsdance", "roost", "bugbite", "quickattack", "brickbreak", "aerialace", "uturn", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "protect", "bugbite", "quickattack", "brickbreak", "aerialace", "feint", "uturn", "knockoff"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["swarm"], "moves": ["quickattack", "leer", "focusenergy"], "pokeball": "pokeball"},
			{"generation": 3, "level": 40, "abilities": ["swarm"], "moves": ["morningsun", "razorwind", "silverwind", "slash"]},
			{"generation": 5, "level": 30, "isHidden": false, "moves": ["agility", "wingattack", "furycutter", "slash"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 15, "shiny": false},
			{"generation": 1, "level": 25},
		],
		tier: "PU",
		doublesTier: "LC Uber",
	},
	scizor: {
		randomBattleMoves: ["swordsdance", "bulletpunch", "bugbite", "superpower", "uturn", "pursuit", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "roost", "bulletpunch", "bugbite", "superpower", "uturn", "protect", "feint", "knockoff"],
		eventPokemon: [
			{"generation": 3, "level": 50, "gender": "M", "abilities": ["swarm"], "moves": ["furycutter", "metalclaw", "swordsdance", "slash"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "gender": "M", "nature": "Adamant", "abilities": ["swarm"], "moves": ["xscissor", "swordsdance", "irondefense", "agility"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "gender": "M", "isHidden": false, "abilities": ["technician"], "moves": ["bulletpunch", "bugbite", "roost", "swordsdance"], "pokeball": "cherishball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["leer", "focusenergy", "pursuit", "steelwing"]},
			{"generation": 6, "level": 50, "gender": "M", "isHidden": false, "moves": ["xscissor", "nightslash", "doublehit", "ironhead"], "pokeball": "cherishball"},
			{"generation": 6, "level": 25, "nature": "Adamant", "isHidden": false, "abilities": ["technician"], "moves": ["aerialace", "falseswipe", "agility", "furycutter"], "pokeball": "cherishball"},
			{"generation": 6, "level": 25, "isHidden": false, "moves": ["metalclaw", "falseswipe", "agility", "furycutter"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "isHidden": false, "abilities": ["technician"], "moves": ["bulletpunch", "swordsdance", "roost", "uturn"], "pokeball": "cherishball"},
		],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	scizormega: {
		randomBattleMoves: ["swordsdance", "roost", "bulletpunch", "bugbite", "superpower", "uturn", "defog", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "roost", "bulletpunch", "bugbite", "superpower", "uturn", "protect", "feint", "knockoff"],
		requiredItem: "Scizorite",
		tier: "OU",
		doublesTier: "DUU",
	},
	smoochum: {
		randomBattleMoves: ["icebeam", "psychic", "hiddenpowerfighting", "trick", "shadowball", "grassknot"],
		randomDoubleBattleMoves: ["icebeam", "psychic", "hiddenpowerfighting", "trick", "shadowball", "grassknot", "fakeout", "protect"],
		tier: "LC",
	},
	jynx: {
		randomBattleMoves: ["icebeam", "psychic", "focusblast", "trick", "nastyplot", "lovelykiss", "substitute", "psyshock"],
		randomDoubleBattleMoves: ["icebeam", "psychic", "hiddenpowerfighting", "shadowball", "protect", "lovelykiss", "substitute", "psyshock"],
		encounters: [
			{"generation": 1, "level": 15},
			{"generation": 2, "level": 10},
			{"generation": 3, "level": 20, "nature": "Mild", "ivs": {"hp": 18, "atk": 17, "def": 18, "spa": 22, "spd": 25, "spe": 21}, "abilities": ["oblivious"], "pokeball": "pokeball"},
			{"generation": 4, "level": 22},
			{"generation": 7, "level": 9},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	elekid: {
		randomBattleMoves: ["thunderbolt", "crosschop", "voltswitch", "substitute", "icepunch", "psychic", "hiddenpowergrass"],
		randomDoubleBattleMoves: ["thunderbolt", "crosschop", "voltswitch", "substitute", "icepunch", "psychic", "hiddenpowergrass", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 20, "moves": ["icepunch", "firepunch", "thunderpunch", "crosschop"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	electabuzz: {
		randomBattleMoves: ["thunderbolt", "voltswitch", "substitute", "hiddenpowerice", "hiddenpowergrass", "focusblast", "psychic"],
		randomDoubleBattleMoves: ["thunderbolt", "crosschop", "voltswitch", "substitute", "icepunch", "psychic", "hiddenpowergrass", "protect", "focusblast", "discharge"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["quickattack", "leer", "thunderpunch"], "pokeball": "pokeball"},
			{"generation": 3, "level": 43, "moves": ["followme", "crosschop", "thunderwave", "thunderbolt"]},
			{"generation": 4, "level": 30, "gender": "M", "nature": "Naughty", "moves": ["lowkick", "shockwave", "lightscreen", "thunderpunch"], "pokeball": "pokeball"},
			{"generation": 5, "level": 30, "isHidden": false, "moves": ["lowkick", "swift", "shockwave", "lightscreen"], "pokeball": "cherishball"},
			{"generation": 6, "level": 30, "gender": "M", "isHidden": true, "moves": ["lowkick", "shockwave", "lightscreen", "thunderpunch"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 33, "shiny": false},
			{"generation": 2, "level": 15},
			{"generation": 4, "level": 15},
			{"generation": 7, "level": 25},
		],
		tier: "NFE",
	},
	electivire: {
		randomBattleMoves: ["wildcharge", "crosschop", "icepunch", "flamethrower", "earthquake", "voltswitch"],
		randomDoubleBattleMoves: ["wildcharge", "crosschop", "icepunch", "substitute", "flamethrower", "earthquake", "protect", "followme"],
		eventPokemon: [
			{"generation": 4, "level": 50, "gender": "M", "nature": "Adamant", "moves": ["thunderpunch", "icepunch", "crosschop", "earthquake"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "gender": "M", "nature": "Serious", "moves": ["lightscreen", "thunderpunch", "discharge", "thunderbolt"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	magby: {
		randomBattleMoves: ["flareblitz", "substitute", "fireblast", "hiddenpowergrass", "hiddenpowerice", "crosschop", "thunderpunch", "overheat"],
		tier: "LC",
	},
	magmar: {
		randomBattleMoves: ["flareblitz", "substitute", "fireblast", "hiddenpowergrass", "hiddenpowerice", "crosschop", "thunderpunch", "focusblast"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["leer", "smog", "firepunch", "ember"], "pokeball": "pokeball"},
			{"generation": 3, "level": 36, "moves": ["followme", "fireblast", "crosschop", "thunderpunch"]},
			{"generation": 4, "level": 30, "gender": "M", "nature": "Quiet", "moves": ["smokescreen", "firespin", "confuseray", "firepunch"], "pokeball": "pokeball"},
			{"generation": 5, "level": 30, "isHidden": false, "moves": ["smokescreen", "feintattack", "firespin", "confuseray"], "pokeball": "cherishball"},
			{"generation": 6, "level": 30, "gender": "M", "isHidden": true, "moves": ["smokescreen", "firespin", "confuseray", "firepunch"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 34, "shiny": false},
			{"generation": 2, "level": 14},
			{"generation": 4, "level": 14},
			{"generation": 7, "level": 16},
		],
		tier: "NFE",
	},
	magmortar: {
		randomBattleMoves: ["fireblast", "focusblast", "hiddenpowergrass", "hiddenpowerice", "thunderbolt", "earthquake", "substitute"],
		randomDoubleBattleMoves: ["fireblast", "taunt", "focusblast", "hiddenpowergrass", "hiddenpowerice", "thunderbolt", "heatwave", "willowisp", "protect", "followme"],
		eventPokemon: [
			{"generation": 4, "level": 50, "gender": "F", "nature": "Modest", "moves": ["flamethrower", "psychic", "hyperbeam", "solarbeam"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "gender": "M", "nature": "Hardy", "moves": ["confuseray", "firepunch", "lavaplume", "flamethrower"], "pokeball": "cherishball"},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	pinsir: {
		randomBattleMoves: ["earthquake", "xscissor", "closecombat", "stoneedge", "stealthrock", "knockoff"],
		randomDoubleBattleMoves: ["protect", "swordsdance", "xscissor", "earthquake", "closecombat", "substitute", "rockslide"],
		eventPokemon: [
			{"generation": 3, "level": 35, "abilities": ["hypercutter"], "moves": ["helpinghand", "guillotine", "falseswipe", "submission"]},
			{"generation": 6, "level": 50, "gender": "F", "nature": "Adamant", "isHidden": false, "moves": ["xscissor", "earthquake", "stoneedge", "return"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "nature": "Jolly", "isHidden": true, "moves": ["earthquake", "swordsdance", "feint", "quickattack"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 15, "shiny": false},
			{"generation": 1, "level": 20},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pinsirmega: {
		randomBattleMoves: ["swordsdance", "earthquake", "closecombat", "quickattack", "return"],
		randomDoubleBattleMoves: ["feint", "protect", "swordsdance", "xscissor", "earthquake", "closecombat", "substitute", "quickattack", "return", "rockslide"],
		requiredItem: "Pinsirite",
		tier: "OU",
		doublesTier: "(DUU)",
	},
	tauros: {
		randomBattleMoves: ["rockclimb", "earthquake", "zenheadbutt", "rockslide", "doubleedge"],
		randomDoubleBattleMoves: ["return", "earthquake", "zenheadbutt", "rockslide", "stoneedge", "protect", "doubleedge"],
		eventPokemon: [
			{"generation": 3, "level": 25, "nature": "Docile", "ivs": {"hp": 14, "atk": 19, "def": 12, "spa": 17, "spd": 5, "spe": 26}, "abilities": ["intimidate"], "moves": ["rage", "hornattack", "scaryface", "pursuit"], "pokeball": "safariball"},
			{"generation": 3, "level": 10, "abilities": ["intimidate"], "moves": ["tackle", "tailwhip", "rage", "hornattack"], "pokeball": "pokeball"},
			{"generation": 3, "level": 46, "abilities": ["intimidate"], "moves": ["refresh", "earthquake", "tailwhip", "bodyslam"]},
		],
		encounters: [
			{"generation": 1, "level": 21, "shiny": false},
		],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	magikarp: {
		randomBattleMoves: ["bounce", "flail", "tackle", "hydropump"],
		eventPokemon: [
			{"generation": 4, "level": 5, "gender": "M", "nature": "Relaxed", "moves": ["splash"], "pokeball": "pokeball"},
			{"generation": 4, "level": 6, "gender": "F", "nature": "Rash", "moves": ["splash"], "pokeball": "pokeball"},
			{"generation": 4, "level": 7, "gender": "F", "nature": "Hardy", "moves": ["splash"], "pokeball": "pokeball"},
			{"generation": 4, "level": 5, "gender": "F", "nature": "Lonely", "moves": ["splash"], "pokeball": "pokeball"},
			{"generation": 4, "level": 4, "gender": "M", "nature": "Modest", "moves": ["splash"], "pokeball": "pokeball"},
			{"generation": 5, "level": 99, "shiny": true, "gender": "M", "isHidden": false, "moves": ["flail", "hydropump", "bounce", "splash"], "pokeball": "cherishball"},
			{"generation": 6, "level": 1, "shiny": 1, "isHidden": false, "moves": ["splash", "celebrate", "happyhour"], "pokeball": "cherishball"},
			{"generation": 7, "level": 19, "shiny": true, "isHidden": false, "moves": ["splash", "bounce"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 5},
		],
		tier: "LC",
	},
	gyarados: {
		randomBattleMoves: ["dragondance", "waterfall", "earthquake", "bounce", "dragontail", "stoneedge", "substitute"],
		randomDoubleBattleMoves: ["dragondance", "waterfall", "earthquake", "bounce", "taunt", "protect", "thunderwave", "stoneedge", "substitute", "icefang"],
		eventPokemon: [
			{"generation": 6, "level": 50, "isHidden": false, "moves": ["waterfall", "earthquake", "icefang", "dragondance"], "pokeball": "cherishball"},
			{"generation": 6, "level": 20, "shiny": true, "isHidden": false, "moves": ["waterfall", "bite", "icefang", "ironhead"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 15},
			{"generation": 2, "level": 15},
			{"generation": 3, "level": 5},
			{"generation": 4, "level": 10},
			{"generation": 5, "level": 1, "isHidden": false},
			{"generation": 7, "level": 10},
		],
		tier: "UUBL",
		doublesTier: "DOU",
	},
	gyaradosmega: {
		randomBattleMoves: ["dragondance", "waterfall", "earthquake", "substitute", "icefang", "crunch"],
		randomDoubleBattleMoves: ["dragondance", "waterfall", "earthquake", "bounce", "taunt", "protect", "thunderwave", "stoneedge", "substitute", "icefang", "crunch"],
		requiredItem: "Gyaradosite",
		tier: "OU",
		doublesTier: "(DOU)",
	},
	lapras: {
		randomBattleMoves: ["icebeam", "thunderbolt", "healbell", "toxic", "hydropump", "substitute"],
		randomDoubleBattleMoves: ["icebeam", "thunderbolt", "hydropump", "surf", "substitute", "protect", "iceshard", "icywind"],
		eventPokemon: [
			{"generation": 3, "level": 44, "moves": ["hydropump", "raindance", "blizzard", "healbell"]},
		],
		encounters: [
			{"generation": 1, "level": 15},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	ditto: {
		randomBattleMoves: ["transform"],
		eventPokemon: [
			{"generation": 7, "level": 10, "isHidden": false, "moves": ["transform"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 12},
			{"generation": 2, "level": 10},
			{"generation": 3, "level": 23},
			{"generation": 4, "level": 10},
			{"generation": 5, "level": 45},
			{"generation": 6, "level": 30},
			{"generation": 7, "level": 25},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	eevee: {
		randomBattleMoves: ["quickattack", "return", "bite", "irontail", "yawn", "protect", "wish"],
		randomDoubleBattleMoves: ["quickattack", "return", "bite", "helpinghand", "irontail", "yawn", "protect", "wish"],
		eventPokemon: [
			{"generation": 4, "level": 10, "gender": "F", "nature": "Lonely", "abilities": ["adaptability"], "moves": ["covet", "bite", "helpinghand", "attract"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "shiny": true, "gender": "M", "nature": "Hardy", "abilities": ["adaptability"], "moves": ["irontail", "trumpcard", "flail", "quickattack"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "gender": "F", "nature": "Hardy", "isHidden": false, "abilities": ["adaptability"], "moves": ["sing", "return", "echoedvoice", "attract"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "sandattack", "babydolleyes", "swift"], "pokeball": "cherishball"},
			{"generation": 6, "level": 15, "shiny": true, "isHidden": true, "moves": ["swift", "quickattack", "babydolleyes", "helpinghand"], "pokeball": "cherishball"},
			{"generation": 7, "level": 10, "nature": "Jolly", "isHidden": false, "moves": ["celebrate", "sandattack", "babydolleyes"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 25},
		],
		tier: "LC",
	},
	eeveestarter: {
		eventPokemon: [
			{"generation": 7, "level": 5, "perfectIVs": 6, "moves": ["tackle", "tailwhip", "growl"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		isNonstandard: "LGPE",
		tier: "Illegal",
	},
	vaporeon: {
		randomBattleMoves: ["wish", "protect", "scald", "roar", "icebeam", "healbell"],
		randomDoubleBattleMoves: ["helpinghand", "wish", "protect", "scald", "muddywater", "icebeam", "toxic", "hydropump"],
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tailwhip", "tackle", "helpinghand", "sandattack"]},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "tailwhip", "sandattack", "watergun"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "gender": "F", "isHidden": true, "moves": ["scald", "icebeam", "raindance", "rest"], "pokeball": "cherishball"},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	jolteon: {
		randomBattleMoves: ["thunderbolt", "voltswitch", "hiddenpowerice", "shadowball", "signalbeam"],
		randomDoubleBattleMoves: ["thunderbolt", "voltswitch", "hiddenpowergrass", "hiddenpowerice", "helpinghand", "protect", "substitute", "signalbeam"],
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tailwhip", "tackle", "helpinghand", "sandattack"]},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "tailwhip", "sandattack", "thundershock"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "gender": "F", "isHidden": false, "moves": ["thunderbolt", "shadowball", "lightscreen", "voltswitch"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	flareon: {
		randomBattleMoves: ["flamecharge", "facade", "flareblitz", "superpower", "quickattack"],
		randomDoubleBattleMoves: ["flamecharge", "facade", "flareblitz", "superpower", "wish", "protect", "helpinghand"],
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tailwhip", "tackle", "helpinghand", "sandattack"]},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "tailwhip", "sandattack", "ember"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "gender": "F", "isHidden": true, "moves": ["flareblitz", "facade", "willowisp", "quickattack"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	espeon: {
		randomBattleMoves: ["psychic", "psyshock", "substitute", "shadowball", "calmmind", "morningsun", "dazzlinggleam"],
		randomDoubleBattleMoves: ["psychic", "psyshock", "substitute", "wish", "shadowball", "hiddenpowerfighting", "helpinghand", "protect", "dazzlinggleam"],
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["psybeam", "psychup", "psychic", "morningsun"], "pokeball": "pokeball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tailwhip", "tackle", "helpinghand", "sandattack"]},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "tailwhip", "sandattack", "confusion"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "gender": "F", "isHidden": true, "moves": ["psychic", "dazzlinggleam", "shadowball", "reflect"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	umbreon: {
		randomBattleMoves: ["wish", "protect", "healbell", "toxic", "foulplay"],
		randomDoubleBattleMoves: ["moonlight", "wish", "protect", "healbell", "snarl", "foulplay", "helpinghand"],
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["feintattack", "meanlook", "screech", "moonlight"], "pokeball": "pokeball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tailwhip", "tackle", "helpinghand", "sandattack"]},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "tailwhip", "sandattack", "pursuit"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "gender": "F", "isHidden": false, "moves": ["snarl", "toxic", "protect", "moonlight"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	leafeon: {
		randomBattleMoves: ["swordsdance", "leafblade", "healbell", "xscissor", "synthesis", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "leafblade", "substitute", "xscissor", "protect", "helpinghand", "knockoff"],
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tailwhip", "tackle", "helpinghand", "sandattack"]},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "tailwhip", "sandattack", "razorleaf"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "gender": "F", "isHidden": true, "moves": ["leafblade", "swordsdance", "sunnyday", "synthesis"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	glaceon: {
		randomBattleMoves: ["icebeam", "hiddenpowerground", "shadowball", "healbell", "wish", "protect", "toxic"],
		randomDoubleBattleMoves: ["icebeam", "hiddenpowerground", "shadowball", "wish", "protect", "healbell", "helpinghand"],
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tailwhip", "tackle", "helpinghand", "sandattack"]},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "tailwhip", "sandattack", "icywind"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "gender": "F", "isHidden": false, "moves": ["blizzard", "shadowball", "hail", "auroraveil"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	porygon: {
		randomBattleMoves: ["triattack", "icebeam", "recover", "toxic", "thunderwave", "discharge", "trick"],
		eventPokemon: [
			{"generation": 5, "level": 10, "isHidden": true, "moves": ["tackle", "conversion", "sharpen", "psybeam"]},
		],
		encounters: [
			{"generation": 1, "level": 18},
		],
		tier: "LC Uber",
	},
	porygon2: {
		randomBattleMoves: ["triattack", "icebeam", "recover", "toxic", "thunderwave", "thunderbolt"],
		randomDoubleBattleMoves: ["triattack", "icebeam", "discharge", "shadowball", "thunderbolt", "protect", "recover"],
		tier: "RU",
		doublesTier: "DOU",
	},
	porygonz: {
		randomBattleMoves: ["triattack", "shadowball", "icebeam", "thunderbolt", "trick", "nastyplot"],
		randomDoubleBattleMoves: ["protect", "triattack", "darkpulse", "hiddenpowerfighting", "icebeam", "thunderbolt", "agility", "trick", "nastyplot"],
		tier: "UUBL",
		doublesTier: "DUU",
	},
	omanyte: {
		randomBattleMoves: ["shellsmash", "surf", "icebeam", "earthpower", "hiddenpowerelectric", "spikes", "toxicspikes", "stealthrock", "hydropump"],
		eventPokemon: [
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "abilities": ["swiftswim"], "moves": ["bubblebeam", "supersonic", "withdraw", "bite"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 30},
		],
		tier: "LC",
	},
	omastar: {
		randomBattleMoves: ["shellsmash", "scald", "icebeam", "earthpower", "spikes", "stealthrock", "hydropump"],
		randomDoubleBattleMoves: ["shellsmash", "muddywater", "icebeam", "earthpower", "hiddenpowerelectric", "protect", "hydropump"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	kabuto: {
		randomBattleMoves: ["aquajet", "rockslide", "rapidspin", "stealthrock", "honeclaws", "waterfall", "toxic"],
		eventPokemon: [
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "abilities": ["battlearmor"], "moves": ["confuseray", "dig", "scratch", "harden"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 30},
		],
		tier: "LC",
	},
	kabutops: {
		randomBattleMoves: ["aquajet", "stoneedge", "rapidspin", "swordsdance", "liquidation", "knockoff"],
		randomDoubleBattleMoves: ["aquajet", "stoneedge", "protect", "rockslide", "swordsdance", "liquidation", "superpower", "knockoff"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	aerodactyl: {
		randomBattleMoves: ["stealthrock", "taunt", "defog", "roost", "stoneedge", "earthquake", "doubleedge", "pursuit"],
		randomDoubleBattleMoves: ["wideguard", "taunt", "stoneedge", "rockslide", "earthquake", "aquatail", "protect", "icefang", "skydrop", "tailwind"],
		eventPokemon: [
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "abilities": ["pressure"], "moves": ["steelwing", "icefang", "firefang", "thunderfang"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 30},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	aerodactylmega: {
		randomBattleMoves: ["honeclaws", "stoneedge", "aerialace", "aquatail", "earthquake", "firefang", "roost"],
		randomDoubleBattleMoves: ["wideguard", "taunt", "stoneedge", "rockslide", "earthquake", "ironhead", "aerialace", "protect", "icefang", "skydrop", "tailwind"],
		requiredItem: "Aerodactylite",
		tier: "UU",
		doublesTier: "DUU",
	},
	munchlax: {
		randomBattleMoves: ["rest", "curse", "sleeptalk", "bodyslam", "earthquake", "return", "firepunch", "icepunch", "whirlwind", "toxic"],
		eventPokemon: [
			{"generation": 4, "level": 5, "moves": ["metronome", "tackle", "defensecurl", "selfdestruct"]},
			{"generation": 4, "level": 5, "gender": "F", "nature": "Relaxed", "abilities": ["thickfat"], "moves": ["metronome", "odorsleuth", "tackle", "curse"], "pokeball": "cherishball"},
			{"generation": 7, "level": 5, "isHidden": false, "abilities": ["thickfat"], "moves": ["tackle", "metronome", "holdback", "happyhour"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	snorlax: {
		randomBattleMoves: ["rest", "curse", "sleeptalk", "bodyslam", "earthquake", "return", "firepunch", "crunch", "pursuit", "whirlwind"],
		randomDoubleBattleMoves: ["curse", "protect", "bodyslam", "earthquake", "return", "firepunch", "icepunch", "crunch", "selfdestruct"],
		eventPokemon: [
			{"generation": 3, "level": 43, "moves": ["refresh", "fissure", "curse", "bodyslam"]},
			{"generation": 7, "level": 30, "isHidden": false, "abilities": ["thickfat"], "moves": ["sunnyday", "block", "bodyslam", "celebrate"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 1, "level": 30},
		],
		tier: "RU",
		doublesTier: "DUber",
	},
	articuno: {
		randomBattleMoves: ["icebeam", "roost", "freezedry", "toxic", "substitute", "hurricane"],
		randomDoubleBattleMoves: ["freezedry", "roost", "protect", "substitute", "hurricane", "tailwind"],
		eventPokemon: [
			{"generation": 3, "level": 50, "shiny": 1, "moves": ["mist", "agility", "mindreader", "icebeam"]},
			{"generation": 3, "level": 70, "moves": ["agility", "mindreader", "icebeam", "reflect"], "pokeball": "pokeball"},
			{"generation": 3, "level": 50, "moves": ["icebeam", "healbell", "extrasensory", "haze"]},
			{"generation": 4, "level": 60, "shiny": 1, "moves": ["agility", "icebeam", "reflect", "roost"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["mist", "agility", "mindreader", "icebeam"]},
			{"generation": 6, "level": 70, "isHidden": false, "moves": ["icebeam", "reflect", "hail", "tailwind"]},
			{"generation": 6, "level": 70, "isHidden": true, "moves": ["freezedry", "icebeam", "hail", "reflect"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["ancientpower", "freezedry", "reflect", "hail"]},
		],
		encounters: [
			{"generation": 1, "level": 50},
		],
		eventOnly: true,
		tier: "PU",
		doublesTier: "(DUU)",
	},
	zapdos: {
		randomBattleMoves: ["thunderbolt", "heatwave", "hiddenpowerice", "roost", "toxic", "uturn", "defog"],
		randomDoubleBattleMoves: ["thunderbolt", "heatwave", "hiddenpowergrass", "hiddenpowerice", "tailwind", "protect", "discharge"],
		eventPokemon: [
			{"generation": 3, "level": 50, "shiny": 1, "moves": ["thunderwave", "agility", "detect", "drillpeck"]},
			{"generation": 3, "level": 70, "moves": ["agility", "detect", "drillpeck", "charge"], "pokeball": "pokeball"},
			{"generation": 3, "level": 50, "moves": ["thunderbolt", "extrasensory", "batonpass", "metalsound"]},
			{"generation": 4, "level": 60, "shiny": 1, "moves": ["charge", "agility", "discharge", "roost"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["thunderwave", "agility", "detect", "drillpeck"]},
			{"generation": 6, "level": 70, "isHidden": false, "moves": ["agility", "discharge", "raindance", "lightscreen"]},
			{"generation": 6, "level": 70, "isHidden": true, "moves": ["discharge", "thundershock", "raindance", "agility"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["ancientpower", "discharge", "pluck", "raindance"]},
		],
		encounters: [
			{"generation": 1, "level": 50},
		],
		eventOnly: true,
		tier: "OU",
		doublesTier: "DOU",
	},
	moltres: {
		randomBattleMoves: ["fireblast", "roost", "substitute", "toxic", "willowisp", "hurricane"],
		randomDoubleBattleMoves: ["fireblast", "airslash", "roost", "substitute", "protect", "uturn", "willowisp", "hurricane", "heatwave", "tailwind"],
		eventPokemon: [
			{"generation": 3, "level": 50, "shiny": 1, "moves": ["firespin", "agility", "endure", "flamethrower"]},
			{"generation": 3, "level": 70, "moves": ["agility", "endure", "flamethrower", "safeguard"], "pokeball": "pokeball"},
			{"generation": 3, "level": 50, "moves": ["extrasensory", "morningsun", "willowisp", "flamethrower"]},
			{"generation": 4, "level": 60, "shiny": 1, "moves": ["flamethrower", "safeguard", "airslash", "roost"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["firespin", "agility", "endure", "flamethrower"]},
			{"generation": 6, "level": 70, "isHidden": false, "moves": ["safeguard", "airslash", "sunnyday", "heatwave"]},
			{"generation": 6, "level": 70, "isHidden": true, "moves": ["skyattack", "heatwave", "sunnyday", "safeguard"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["ancientpower", "flamethrower", "airslash", "sunnyday"]},
		],
		encounters: [
			{"generation": 1, "level": 50},
		],
		eventOnly: true,
		tier: "UU",
		doublesTier: "(DUU)",
	},
	dratini: {
		randomBattleMoves: ["dragondance", "outrage", "waterfall", "fireblast", "extremespeed", "dracometeor", "substitute"],
		encounters: [
			{"generation": 1, "level": 10},
		],
		tier: "LC",
	},
	dragonair: {
		randomBattleMoves: ["dragondance", "outrage", "waterfall", "fireblast", "extremespeed", "dracometeor", "substitute"],
		encounters: [
			{"generation": 1, "level": 15},
			{"generation": 2, "level": 10},
			{"generation": 3, "level": 25, "pokeball": "safariball"},
			{"generation": 4, "level": 15},
			{"generation": 7, "level": 10},
		],
		tier: "NFE",
	},
	dragonite: {
		randomBattleMoves: ["dragondance", "outrage", "firepunch", "extremespeed", "earthquake", "roost"],
		randomDoubleBattleMoves: ["dragondance", "firepunch", "extremespeed", "dragonclaw", "earthquake", "roost", "substitute", "superpower", "dracometeor", "protect", "skydrop"],
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["agility", "safeguard", "wingattack", "outrage"], "pokeball": "pokeball"},
			{"generation": 3, "level": 55, "moves": ["healbell", "hyperbeam", "dragondance", "earthquake"]},
			{"generation": 4, "level": 50, "gender": "M", "nature": "Mild", "moves": ["dracometeor", "thunderbolt", "outrage", "dragondance"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "gender": "M", "isHidden": true, "moves": ["extremespeed", "firepunch", "dragondance", "outrage"], "pokeball": "cherishball"},
			{"generation": 5, "level": 55, "gender": "M", "isHidden": true, "moves": ["dragonrush", "safeguard", "wingattack", "thunderpunch"]},
			{"generation": 5, "level": 55, "gender": "M", "isHidden": true, "moves": ["dragonrush", "safeguard", "wingattack", "extremespeed"]},
			{"generation": 5, "level": 50, "gender": "M", "nature": "Brave", "ivs": {"hp": 30, "atk": 30, "def": 30, "spa": 30, "spd": 30, "spe": 30}, "isHidden": false, "moves": ["fireblast", "safeguard", "outrage", "hyperbeam"], "pokeball": "cherishball"},
			{"generation": 6, "level": 55, "gender": "M", "isHidden": true, "moves": ["dragondance", "outrage", "hurricane", "extremespeed"], "pokeball": "cherishball"},
			{"generation": 6, "level": 62, "gender": "M", "ivs": {"hp": 31, "def": 31, "spa": 31, "spd": 31}, "isHidden": false, "moves": ["agility", "slam", "barrier", "hyperbeam"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 5, "level": 50, "isHidden": false},
			{"generation": 7, "level": 10},
		],
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	mewtwo: {
		randomBattleMoves: ["psystrike", "aurasphere", "fireblast", "icebeam", "calmmind", "recover"],
		randomDoubleBattleMoves: ["psystrike", "aurasphere", "fireblast", "icebeam", "calmmind", "substitute", "recover", "thunderbolt", "willowisp", "taunt", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 70, "shiny": 1, "moves": ["swift", "recover", "safeguard", "psychic"]},
			{"generation": 4, "level": 70, "shiny": 1, "moves": ["psychocut", "amnesia", "powerswap", "guardswap"]},
			{"generation": 5, "level": 70, "isHidden": false, "moves": ["psystrike", "shadowball", "aurasphere", "electroball"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "nature": "Timid", "ivs": {"spa": 31, "spe": 31}, "isHidden": true, "moves": ["psystrike", "icebeam", "healpulse", "hurricane"], "pokeball": "cherishball"},
			{"generation": 6, "level": 70, "isHidden": false, "moves": ["recover", "psychic", "barrier", "aurasphere"]},
			{"generation": 6, "level": 100, "shiny": true, "isHidden": true, "moves": ["psystrike", "psychic", "recover", "aurasphere"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["psychic", "recover", "swift", "psychocut"]},
		],
		encounters: [
			{"generation": 1, "level": 70},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	mewtwomegax: {
		randomBattleMoves: ["bulkup", "drainpunch", "earthquake", "taunt", "stoneedge", "zenheadbutt", "icebeam"],
		randomDoubleBattleMoves: ["bulkup", "drainpunch", "earthquake", "taunt", "stoneedge", "zenheadbutt", "icebeam"],
		requiredItem: "Mewtwonite X",
		tier: "Uber",
		doublesTier: "DUber",
	},
	mewtwomegay: {
		randomBattleMoves: ["psystrike", "aurasphere", "shadowball", "fireblast", "icebeam", "calmmind", "recover", "willowisp", "taunt"],
		randomDoubleBattleMoves: ["psystrike", "aurasphere", "shadowball", "fireblast", "icebeam", "calmmind", "recover", "willowisp", "taunt"],
		requiredItem: "Mewtwonite Y",
		tier: "Uber",
		doublesTier: "DUber",
	},
	mew: {
		randomBattleMoves: ["defog", "roost", "willowisp", "knockoff", "taunt", "icebeam", "earthpower", "aurasphere", "stealthrock", "nastyplot", "psyshock"],
		randomDoubleBattleMoves: ["taunt", "willowisp", "transform", "roost", "psyshock", "nastyplot", "aurasphere", "fireblast", "icebeam", "thunderbolt", "protect", "fakeout", "helpinghand", "tailwind"],
		eventPokemon: [
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["pound", "transform", "megapunch", "metronome"]},
			{"generation": 3, "level": 10, "moves": ["pound", "transform"], "pokeball": "pokeball"},
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["fakeout"]},
			{"generation": 3, "level": 10, "moves": ["fakeout"], "pokeball": "pokeball"},
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["feintattack"]},
			{"generation": 3, "level": 10, "moves": ["feintattack"], "pokeball": "pokeball"},
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["hypnosis"]},
			{"generation": 3, "level": 10, "moves": ["hypnosis"], "pokeball": "pokeball"},
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["nightshade"]},
			{"generation": 3, "level": 10, "moves": ["nightshade"], "pokeball": "pokeball"},
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["roleplay"]},
			{"generation": 3, "level": 10, "moves": ["roleplay"], "pokeball": "pokeball"},
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["zapcannon"]},
			{"generation": 3, "level": 10, "moves": ["zapcannon"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "moves": ["ancientpower", "metronome", "teleport", "aurasphere"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "moves": ["barrier", "metronome", "teleport", "aurasphere"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "moves": ["megapunch", "metronome", "teleport", "aurasphere"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "moves": ["amnesia", "metronome", "teleport", "aurasphere"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "moves": ["transform", "metronome", "teleport", "aurasphere"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "moves": ["psychic", "metronome", "teleport", "aurasphere"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "moves": ["synthesis", "return", "hypnosis", "teleport"], "pokeball": "cherishball"},
			{"generation": 4, "level": 5, "moves": ["pound"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["pound"], "pokeball": "cherishball"},
			{"generation": 7, "level": 5, "perfectIVs": 5, "moves": ["pound"], "pokeball": "pokeball"},
			{"generation": 7, "level": 50, "moves": ["psychic", "barrier", "metronome", "transform"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "OU",
		doublesTier: "DOU",
	},
	chikorita: {
		randomBattleMoves: ["reflect", "lightscreen", "aromatherapy", "grasswhistle", "leechseed", "toxic", "gigadrain", "synthesis"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "growl", "razorleaf"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "moves": ["tackle", "growl", "ancientpower", "frenzyplant"], "pokeball": "pokeball"},
			{"generation": 6, "level": 5, "isHidden": false, "moves": ["tackle", "growl"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	bayleef: {
		randomBattleMoves: ["reflect", "lightscreen", "aromatherapy", "grasswhistle", "leechseed", "toxic", "gigadrain", "synthesis"],
		tier: "NFE",
	},
	meganium: {
		randomBattleMoves: ["reflect", "lightscreen", "aromatherapy", "leechseed", "toxic", "gigadrain", "synthesis", "dragontail"],
		randomDoubleBattleMoves: ["reflect", "lightscreen", "leechseed", "leafstorm", "gigadrain", "synthesis", "dragontail", "healpulse", "toxic", "protect"],
		eventPokemon: [
			{"generation": 6, "level": 50, "isHidden": true, "moves": ["solarbeam", "sunnyday", "synthesis", "bodyslam"], "pokeball": "pokeball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	cyndaquil: {
		randomBattleMoves: ["eruption", "fireblast", "flamethrower", "hiddenpowergrass", "hiddenpowerice"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "leer", "smokescreen"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "moves": ["tackle", "leer", "reversal", "blastburn"], "pokeball": "pokeball"},
			{"generation": 6, "level": 5, "isHidden": false, "moves": ["tackle", "leer"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	quilava: {
		randomBattleMoves: ["eruption", "fireblast", "flamethrower", "hiddenpowergrass", "hiddenpowerice"],
		tier: "NFE",
	},
	typhlosion: {
		randomBattleMoves: ["eruption", "fireblast", "hiddenpowergrass", "extrasensory", "focusblast"],
		randomDoubleBattleMoves: ["eruption", "fireblast", "hiddenpowergrass", "extrasensory", "focusblast", "heatwave", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["quickattack", "flamewheel", "swift", "flamethrower"], "pokeball": "pokeball"},
			{"generation": 6, "level": 50, "isHidden": true, "moves": ["overheat", "flamewheel", "flamecharge", "swift"], "pokeball": "pokeball"},
		],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	totodile: {
		randomBattleMoves: ["aquajet", "waterfall", "crunch", "icepunch", "superpower", "dragondance", "swordsdance"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["scratch", "leer", "rage"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "moves": ["scratch", "leer", "crunch", "hydrocannon"], "pokeball": "pokeball"},
			{"generation": 6, "level": 5, "isHidden": false, "moves": ["scratch", "leer"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	croconaw: {
		randomBattleMoves: ["aquajet", "waterfall", "crunch", "icepunch", "superpower", "dragondance", "swordsdance"],
		tier: "NFE",
	},
	feraligatr: {
		randomBattleMoves: ["aquajet", "liquidation", "crunch", "icepunch", "dragondance", "swordsdance", "earthquake"],
		randomDoubleBattleMoves: ["aquajet", "liquidation", "crunch", "icepunch", "dragondance", "swordsdance", "earthquake", "protect"],
		eventPokemon: [
			{"generation": 6, "level": 50, "isHidden": true, "moves": ["icepunch", "crunch", "waterfall", "screech"], "pokeball": "pokeball"},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	sentret: {
		randomBattleMoves: ["superfang", "trick", "toxic", "uturn", "knockoff"],
		encounters: [
			{"generation": 2, "level": 2},
		],
		tier: "LC",
	},
	furret: {
		randomBattleMoves: ["uturn", "trick", "aquatail", "firepunch", "knockoff", "doubleedge"],
		randomDoubleBattleMoves: ["uturn", "suckerpunch", "icepunch", "firepunch", "knockoff", "doubleedge", "superfang", "followme", "helpinghand", "protect"],
		encounters: [
			{"generation": 2, "level": 6},
			{"generation": 4, "level": 6},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	hoothoot: {
		randomBattleMoves: ["reflect", "toxic", "roost", "whirlwind", "nightshade", "magiccoat"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "growl", "foresight"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 2, "level": 2},
		],
		tier: "LC",
	},
	noctowl: {
		randomBattleMoves: ["roost", "whirlwind", "nightshade", "toxic", "defog", "hurricane", "heatwave"],
		randomDoubleBattleMoves: ["roost", "tailwind", "airslash", "hypervoice", "heatwave", "protect", "hypnosis"],
		encounters: [
			{"generation": 2, "level": 7},
			{"generation": 4, "level": 5},
			{"generation": 7, "level": 19},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	ledyba: {
		randomBattleMoves: ["roost", "lightscreen", "encore", "reflect", "knockoff", "toxic"],
		eventPokemon: [
			{"generation": 3, "level": 10, "moves": ["refresh", "psybeam", "aerialace", "supersonic"]},
		],
		encounters: [
			{"generation": 2, "level": 3},
		],
		tier: "LC",
	},
	ledian: {
		randomBattleMoves: ["roost", "lightscreen", "encore", "reflect", "knockoff", "toxic", "uturn"],
		randomDoubleBattleMoves: ["protect", "lightscreen", "encore", "reflect", "knockoff", "bugbuzz", "uturn", "tailwind"],
		encounters: [
			{"generation": 2, "level": 7},
			{"generation": 4, "level": 5},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	spinarak: {
		randomBattleMoves: ["toxic", "lunge", "toxicspikes", "poisonjab", "stickyweb"],
		eventPokemon: [
			{"generation": 3, "level": 14, "moves": ["refresh", "dig", "signalbeam", "nightshade"]},
		],
		encounters: [
			{"generation": 2, "level": 3},
		],
		tier: "LC",
	},
	ariados: {
		randomBattleMoves: ["megahorn", "toxicspikes", "poisonjab", "suckerpunch", "stickyweb"],
		randomDoubleBattleMoves: ["protect", "megahorn", "stringshot", "poisonjab", "stickyweb", "ragepowder"],
		encounters: [
			{"generation": 2, "level": 7},
			{"generation": 4, "level": 5},
			{"generation": 6, "level": 19, "maxEggMoves": 1},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	chinchou: {
		randomBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowergrass", "hydropump", "icebeam", "surf", "thunderwave", "scald", "discharge", "healbell"],
		tier: "LC",
	},
	lanturn: {
		randomBattleMoves: ["voltswitch", "hiddenpowergrass", "hydropump", "icebeam", "thunderwave", "scald", "thunderbolt", "healbell", "toxic"],
		randomDoubleBattleMoves: ["thunderbolt", "hiddenpowergrass", "hydropump", "icebeam", "thunderwave", "scald", "discharge", "protect", "surf"],
		encounters: [
			{"generation": 4, "level": 20},
			{"generation": 6, "level": 26, "maxEggMoves": 1},
			{"generation": 7, "level": 10},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	togepi: {
		randomBattleMoves: ["protect", "fireblast", "toxic", "thunderwave", "softboiled", "dazzlinggleam"],
		eventPokemon: [
			{"generation": 3, "level": 20, "gender": "F", "abilities": ["serenegrace"], "moves": ["metronome", "charm", "sweetkiss", "yawn"], "pokeball": "pokeball"},
			{"generation": 3, "level": 25, "moves": ["triattack", "followme", "ancientpower", "helpinghand"]},
		],
		tier: "LC",
	},
	togetic: {
		randomBattleMoves: ["nastyplot", "dazzlinggleam", "fireblast", "roost", "defog", "toxic", "thunderwave", "healbell"],
		tier: "NFE",
	},
	togekiss: {
		randomBattleMoves: ["roost", "thunderwave", "nastyplot", "airslash", "aurasphere", "healbell", "defog"],
		randomDoubleBattleMoves: ["roost", "thunderwave", "nastyplot", "airslash", "followme", "dazzlinggleam", "tailwind", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["extremespeed", "aurasphere", "airslash", "present"]},
		],
		tier: "UU",
		doublesTier: "DUU",
	},
	natu: {
		randomBattleMoves: ["thunderwave", "roost", "toxic", "reflect", "lightscreen", "uturn", "wish", "psychic", "nightshade"],
		eventPokemon: [
			{"generation": 3, "level": 22, "moves": ["batonpass", "futuresight", "nightshade", "aerialace"]},
		],
		tier: "LC",
	},
	xatu: {
		randomBattleMoves: ["thunderwave", "toxic", "roost", "psychic", "uturn", "reflect", "calmmind", "nightshade", "heatwave"],
		randomDoubleBattleMoves: ["thunderwave", "tailwind", "roost", "psychic", "uturn", "reflect", "lightscreen", "grassknot", "heatwave", "protect"],
		encounters: [
			{"generation": 2, "level": 15, "shiny": false},
			{"generation": 4, "level": 16, "shiny": false, "gender": "M", "nature": "Modest", "ivs": {"hp": 15, "atk": 20, "def": 15, "spa": 20, "spd": 20, "spe": 20}, "abilities": ["synchronize"], "pokeball": "pokeball"},
			{"generation": 6, "level": 24, "maxEggMoves": 1},
			{"generation": 7, "level": 21},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	mareep: {
		randomBattleMoves: ["reflect", "lightscreen", "thunderbolt", "discharge", "thunderwave", "toxic", "hiddenpowerice", "cottonguard", "powergem"],
		eventPokemon: [
			{"generation": 3, "level": 37, "gender": "F", "moves": ["thunder", "thundershock", "thunderwave", "cottonspore"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "growl", "thundershock"], "pokeball": "pokeball"},
			{"generation": 3, "level": 17, "moves": ["healbell", "thundershock", "thunderwave", "bodyslam"]},
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["holdback", "tackle", "thunderwave", "thundershock"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	flaaffy: {
		randomBattleMoves: ["reflect", "lightscreen", "thunderbolt", "discharge", "thunderwave", "toxic", "hiddenpowerice", "cottonguard", "powergem"],
		encounters: [
			{"generation": 7, "level": 11, "isHidden": false, "pokeball": "pokeball"},
		],
		tier: "NFE",
	},
	ampharos: {
		randomBattleMoves: ["voltswitch", "reflect", "lightscreen", "focusblast", "thunderbolt", "toxic", "healbell", "hiddenpowerice"],
		randomDoubleBattleMoves: ["focusblast", "hiddenpowerice", "hiddenpowergrass", "thunderbolt", "discharge", "dragonpulse", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	ampharosmega: {
		randomBattleMoves: ["voltswitch", "focusblast", "agility", "thunderbolt", "healbell", "dragonpulse"],
		randomDoubleBattleMoves: ["focusblast", "hiddenpowerice", "hiddenpowergrass", "thunderbolt", "discharge", "dragonpulse", "protect"],
		requiredItem: "Ampharosite",
		tier: "RU",
		doublesTier: "DUU",
	},
	azurill: {
		randomBattleMoves: ["scald", "return", "bodyslam", "encore", "toxic", "protect", "knockoff"],
		tier: "LC",
	},
	marill: {
		randomBattleMoves: ["waterfall", "knockoff", "encore", "toxic", "aquajet", "superpower", "icepunch", "protect", "playrough", "poweruppunch"],
		tier: "NFE",
	},
	azumarill: {
		randomBattleMoves: ["liquidation", "aquajet", "playrough", "superpower", "bellydrum", "knockoff"],
		randomDoubleBattleMoves: ["waterfall", "aquajet", "playrough", "superpower", "bellydrum", "knockoff", "protect"],
		encounters: [
			{"generation": 5, "level": 5, "isHidden": false},
			{"generation": 6, "level": 16, "maxEggMoves": 1},
		],
		tier: "UUBL",
		doublesTier: "DUU",
	},
	bonsly: {
		randomBattleMoves: ["rockslide", "brickbreak", "doubleedge", "toxic", "stealthrock", "suckerpunch", "explosion"],
		tier: "LC",
	},
	sudowoodo: {
		randomBattleMoves: ["headsmash", "earthquake", "suckerpunch", "woodhammer", "toxic", "stealthrock"],
		randomDoubleBattleMoves: ["headsmash", "earthquake", "suckerpunch", "woodhammer", "explosion", "stealthrock", "rockslide", "helpinghand", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	hoppip: {
		randomBattleMoves: ["encore", "sleeppowder", "uturn", "toxic", "leechseed", "substitute", "protect"],
		encounters: [
			{"generation": 2, "level": 3},
		],
		tier: "LC",
	},
	skiploom: {
		randomBattleMoves: ["encore", "sleeppowder", "uturn", "toxic", "leechseed", "substitute", "protect"],
		encounters: [
			{"generation": 4, "level": 12},
		],
		tier: "NFE",
	},
	jumpluff: {
		randomBattleMoves: ["swordsdance", "sleeppowder", "uturn", "encore", "toxic", "acrobatics", "leechseed", "seedbomb", "substitute", "strengthsap"],
		randomDoubleBattleMoves: ["encore", "sleeppowder", "uturn", "helpinghand", "leechseed", "gigadrain", "ragepowder", "protect", "strengthsap"],
		eventPokemon: [
			{"generation": 5, "level": 27, "gender": "M", "isHidden": true, "moves": ["falseswipe", "sleeppowder", "bulletseed", "leechseed"]},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	aipom: {
		randomBattleMoves: ["fakeout", "return", "brickbreak", "seedbomb", "knockoff", "uturn", "icepunch", "irontail"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["scratch", "tailwhip", "sandattack"], "pokeball": "pokeball"},
		],
		tier: "LC Uber",
	},
	ambipom: {
		randomBattleMoves: ["fakeout", "tailslap", "knockoff", "uturn", "switcheroo", "seedbomb", "lowkick"],
		randomDoubleBattleMoves: ["fakeout", "return", "knockoff", "uturn", "doublehit", "icepunch", "lowkick", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	sunkern: {
		randomBattleMoves: ["sunnyday", "gigadrain", "solarbeam", "hiddenpowerfire", "toxic", "earthpower", "leechseed"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["chlorophyll"], "moves": ["absorb", "growth"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	sunflora: {
		randomBattleMoves: ["sunnyday", "gigadrain", "solarbeam", "hiddenpowerfire", "earthpower"],
		randomDoubleBattleMoves: ["sunnyday", "gigadrain", "solarbeam", "hiddenpowerfire", "hiddenpowerice", "earthpower", "protect", "encore"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	yanma: {
		randomBattleMoves: ["bugbuzz", "airslash", "hiddenpowerground", "uturn", "protect", "gigadrain", "ancientpower"],
		tier: "LC Uber",
	},
	yanmega: {
		randomBattleMoves: ["bugbuzz", "airslash", "ancientpower", "uturn", "protect", "gigadrain"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	wooper: {
		randomBattleMoves: ["recover", "earthquake", "scald", "toxic", "stockpile", "yawn", "protect"],
		encounters: [
			{"generation": 2, "level": 4},
		],
		tier: "LC",
	},
	quagsire: {
		randomBattleMoves: ["recover", "earthquake", "scald", "toxic", "encore", "icebeam"],
		randomDoubleBattleMoves: ["icywind", "earthquake", "waterfall", "scald", "rockslide", "curse", "yawn", "icepunch", "protect"],
		encounters: [
			{"generation": 2, "level": 15},
			{"generation": 4, "level": 10},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	murkrow: {
		randomBattleMoves: ["substitute", "suckerpunch", "bravebird", "heatwave", "roost", "darkpulse", "thunderwave"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["insomnia"], "moves": ["peck", "astonish"], "pokeball": "pokeball"},
		],
		tier: "LC Uber",
	},
	honchkrow: {
		randomBattleMoves: ["substitute", "superpower", "suckerpunch", "bravebird", "roost", "heatwave", "pursuit"],
		randomDoubleBattleMoves: ["substitute", "superpower", "suckerpunch", "bravebird", "roost", "heatwave", "protect"],
		eventPokemon: [
			{"generation": 7, "level": 65, "gender": "M", "isHidden": false, "abilities": ["superluck"], "moves": ["nightslash", "skyattack", "heatwave", "icywind"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	misdreavus: {
		randomBattleMoves: ["nastyplot", "thunderbolt", "dazzlinggleam", "willowisp", "shadowball", "taunt", "painsplit"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["growl", "psywave", "spite"], "pokeball": "pokeball"},
		],
		tier: "LC Uber",
	},
	mismagius: {
		randomBattleMoves: ["nastyplot", "substitute", "willowisp", "shadowball", "thunderbolt", "dazzlinggleam", "taunt", "painsplit", "destinybond"],
		randomDoubleBattleMoves: ["nastyplot", "substitute", "willowisp", "shadowball", "thunderbolt", "dazzlinggleam", "taunt", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	unown: {
		randomBattleMoves: ["hiddenpowerpsychic"],
		encounters: [
			{"generation": 2, "level": 5},
			{"generation": 3, "level": 25},
			{"generation": 4, "level": 5},
			{"generation": 6, "level": 32},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	wynaut: {
		randomBattleMoves: ["destinybond", "counter", "mirrorcoat", "encore"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["splash", "charm", "encore", "tickle"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	wobbuffet: {
		randomBattleMoves: ["counter", "mirrorcoat", "encore", "destinybond", "safeguard"],
		randomDoubleBattleMoves: ["counter", "mirrorcoat", "encore", "destinybond", "safeguard"],
		eventPokemon: [
			{"generation": 3, "level": 5, "moves": ["counter", "mirrorcoat", "safeguard", "destinybond"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["counter", "mirrorcoat", "safeguard", "destinybond"], "pokeball": "pokeball"},
			{"generation": 6, "level": 10, "gender": "M", "isHidden": false, "moves": ["counter"], "pokeball": "cherishball"},
			{"generation": 6, "level": 15, "gender": "M", "isHidden": false, "moves": ["counter", "mirrorcoat"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 2, "level": 5},
			{"generation": 4, "level": 3},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	girafarig: {
		randomBattleMoves: ["psychic", "psyshock", "thunderbolt", "nastyplot", "substitute", "hypervoice"],
		randomDoubleBattleMoves: ["psychic", "psyshock", "thunderbolt", "nastyplot", "protect", "agility", "hypervoice"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pineco: {
		randomBattleMoves: ["rapidspin", "toxicspikes", "spikes", "bugbite", "stealthrock"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "protect", "selfdestruct"], "pokeball": "pokeball"},
			{"generation": 3, "level": 20, "moves": ["refresh", "pinmissile", "spikes", "counter"]},
		],
		tier: "LC",
	},
	forretress: {
		randomBattleMoves: ["rapidspin", "toxic", "spikes", "voltswitch", "stealthrock", "gyroball"],
		randomDoubleBattleMoves: ["rockslide", "drillrun", "toxic", "voltswitch", "stealthrock", "gyroball", "protect"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	dunsparce: {
		randomBattleMoves: ["coil", "rockslide", "bite", "headbutt", "glare", "bodyslam", "roost", "stealthrock"],
		randomDoubleBattleMoves: ["coil", "rockslide", "bite", "headbutt", "glare", "bodyslam", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	gligar: {
		randomBattleMoves: ["stealthrock", "toxic", "roost", "defog", "earthquake", "uturn", "knockoff"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["poisonsting", "sandattack"], "pokeball": "pokeball"},
		],
		tier: "UU",
		doublesTier: "LC Uber",
	},
	gliscor: {
		randomBattleMoves: ["roost", "taunt", "earthquake", "protect", "toxic", "stealthrock", "knockoff", "uturn"],
		randomDoubleBattleMoves: ["tailwind", "substitute", "taunt", "earthquake", "protect", "stoneedge", "knockoff"],
		tier: "OU",
		doublesTier: "(DUU)",
	},
	snubbull: {
		randomBattleMoves: ["thunderwave", "firepunch", "crunch", "closecombat", "icepunch", "earthquake", "playrough"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "scaryface", "tailwhip", "charm"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	granbull: {
		randomBattleMoves: ["thunderwave", "playrough", "crunch", "earthquake", "healbell"],
		randomDoubleBattleMoves: ["thunderwave", "playrough", "crunch", "earthquake", "snarl", "rockslide", "protect"],
		encounters: [
			{"generation": 2, "level": 15},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	qwilfish: {
		randomBattleMoves: ["toxicspikes", "liquidation", "spikes", "painsplit", "thunderwave", "taunt", "destinybond"],
		randomDoubleBattleMoves: ["poisonjab", "liquidation", "swordsdance", "protect", "thunderwave", "taunt", "destinybond"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "poisonsting", "harden", "minimize"], "pokeball": "pokeball"},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	shuckle: {
		randomBattleMoves: ["toxic", "encore", "stealthrock", "knockoff", "stickyweb", "infestation"],
		randomDoubleBattleMoves: ["encore", "stealthrock", "knockoff", "stickyweb", "guardsplit", "powersplit", "toxic", "helpinghand"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["sturdy"], "moves": ["constrict", "withdraw", "wrap"], "pokeball": "pokeball"},
			{"generation": 3, "level": 20, "abilities": ["sturdy"], "moves": ["substitute", "toxic", "sludgebomb", "encore"], "pokeball": "pokeball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	heracross: {
		randomBattleMoves: ["closecombat", "megahorn", "stoneedge", "swordsdance", "knockoff", "earthquake"],
		randomDoubleBattleMoves: ["closecombat", "megahorn", "stoneedge", "swordsdance", "knockoff", "earthquake", "protect"],
		eventPokemon: [
			{"generation": 6, "level": 50, "gender": "F", "nature": "Adamant", "isHidden": false, "moves": ["bulletseed", "pinmissile", "closecombat", "megahorn"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "nature": "Adamant", "isHidden": false, "abilities": ["guts"], "moves": ["pinmissile", "bulletseed", "earthquake", "rockblast"], "pokeball": "cherishball"},
		],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	heracrossmega: {
		randomBattleMoves: ["closecombat", "pinmissile", "rockblast", "swordsdance", "bulletseed", "substitute"],
		randomDoubleBattleMoves: ["closecombat", "pinmissile", "rockblast", "swordsdance", "bulletseed", "knockoff", "earthquake", "protect"],
		requiredItem: "Heracronite",
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	sneasel: {
		randomBattleMoves: ["iceshard", "iciclecrash", "lowkick", "pursuit", "swordsdance", "knockoff"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["scratch", "leer", "taunt", "quickattack"], "pokeball": "pokeball"},
		],
		tier: "NU",
		doublesTier: "LC Uber",
	},
	weavile: {
		randomBattleMoves: ["iceshard", "iciclecrash", "knockoff", "pursuit", "swordsdance", "lowkick"],
		randomDoubleBattleMoves: ["iceshard", "iciclecrash", "knockoff", "fakeout", "swordsdance", "lowkick", "taunt", "protect", "feint"],
		eventPokemon: [
			{"generation": 4, "level": 30, "gender": "M", "nature": "Jolly", "moves": ["fakeout", "iceshard", "nightslash", "brickbreak"], "pokeball": "cherishball"},
			{"generation": 6, "level": 48, "gender": "M", "perfectIVs": 2, "isHidden": false, "moves": ["nightslash", "icepunch", "brickbreak", "xscissor"], "pokeball": "cherishball"},
		],
		tier: "UUBL",
		doublesTier: "DUU",
	},
	teddiursa: {
		randomBattleMoves: ["swordsdance", "protect", "facade", "closecombat", "firepunch", "crunch", "playrough", "gunkshot"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["pickup"], "moves": ["scratch", "leer", "lick"], "pokeball": "pokeball"},
			{"generation": 3, "level": 11, "abilities": ["pickup"], "moves": ["refresh", "metalclaw", "lick", "return"]},
		],
		encounters: [
			{"generation": 2, "level": 2},
		],
		tier: "LC",
	},
	ursaring: {
		randomBattleMoves: ["swordsdance", "facade", "closecombat", "crunch", "protect"],
		randomDoubleBattleMoves: ["swordsdance", "facade", "closecombat", "earthquake", "crunch", "protect"],
		encounters: [
			{"generation": 2, "level": 25},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	slugma: {
		randomBattleMoves: ["stockpile", "recover", "lavaplume", "willowisp", "toxic", "hiddenpowergrass", "earthpower", "memento"],
		tier: "LC",
	},
	magcargo: {
		randomBattleMoves: ["recover", "lavaplume", "toxic", "hiddenpowergrass", "stealthrock", "fireblast", "earthpower", "shellsmash", "ancientpower"],
		randomDoubleBattleMoves: ["protect", "heatwave", "willowisp", "shellsmash", "hiddenpowergrass", "ancientpower", "stealthrock", "fireblast", "earthpower"],
		eventPokemon: [
			{"generation": 3, "level": 38, "moves": ["refresh", "heatwave", "earthquake", "flamethrower"]},
		],
		encounters: [
			{"generation": 3, "level": 25},
			{"generation": 6, "level": 30},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	swinub: {
		randomBattleMoves: ["earthquake", "iciclecrash", "iceshard", "superpower", "endeavor", "stealthrock"],
		eventPokemon: [
			{"generation": 3, "level": 22, "abilities": ["oblivious"], "moves": ["charm", "ancientpower", "mist", "mudshot"]},
		],
		tier: "LC",
	},
	piloswine: {
		randomBattleMoves: ["earthquake", "iciclecrash", "iceshard", "endeavor", "stealthrock"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "NU",
		doublesTier: "NFE",
	},
	mamoswine: {
		randomBattleMoves: ["iceshard", "earthquake", "endeavor", "iciclecrash", "stealthrock", "superpower", "knockoff"],
		randomDoubleBattleMoves: ["iceshard", "earthquake", "rockslide", "iciclecrash", "protect", "superpower", "knockoff"],
		eventPokemon: [
			{"generation": 5, "level": 34, "gender": "M", "isHidden": true, "moves": ["hail", "icefang", "takedown", "doublehit"]},
			{"generation": 6, "level": 50, "shiny": true, "gender": "M", "nature": "Adamant", "isHidden": true, "moves": ["iciclespear", "earthquake", "iciclecrash", "rockslide"], "pokeball": "pokeball"},
		],
		tier: "UU",
		doublesTier: "DUU",
	},
	corsola: {
		randomBattleMoves: ["recover", "toxic", "powergem", "scald", "stealthrock"],
		randomDoubleBattleMoves: ["protect", "icywind", "powergem", "scald", "stealthrock", "earthpower", "icebeam"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["tackle", "mudsport"], "pokeball": "pokeball"},
			{"generation": 7, "level": 50, "gender": "F", "nature": "Serious", "isHidden": false, "abilities": ["hustle"], "moves": ["tackle", "powergem"], "pokeball": "ultraball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	remoraid: {
		randomBattleMoves: ["waterspout", "hydropump", "fireblast", "hiddenpowerground", "icebeam", "seedbomb", "rockblast"],
		tier: "LC",
	},
	octillery: {
		randomBattleMoves: ["hydropump", "fireblast", "icebeam", "energyball", "rockblast", "gunkshot", "scald"],
		randomDoubleBattleMoves: ["hydropump", "surf", "fireblast", "icebeam", "energyball", "chargebeam", "protect"],
		eventPokemon: [
			{"generation": 4, "level": 50, "gender": "F", "nature": "Serious", "abilities": ["suctioncups"], "moves": ["octazooka", "icebeam", "signalbeam", "hyperbeam"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 4, "level": 19},
			{"generation": 7, "level": 10},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	delibird: {
		randomBattleMoves: ["defog", "iceshard", "icepunch", "aerialace", "spikes", "destinybond"],
		randomDoubleBattleMoves: ["fakeout", "iceshard", "icepunch", "aerialace", "brickbreak", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["present"], "pokeball": "pokeball"},
			{"generation": 6, "level": 10, "isHidden": false, "abilities": ["vitalspirit"], "moves": ["present", "happyhour"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	mantyke: {
		randomBattleMoves: ["raindance", "hydropump", "scald", "airslash", "icebeam", "rest", "sleeptalk", "toxic"],
		tier: "LC",
	},
	mantine: {
		randomBattleMoves: ["scald", "airslash", "roost", "toxic", "defog"],
		randomDoubleBattleMoves: ["raindance", "scald", "airslash", "icebeam", "tailwind", "wideguard", "helpinghand", "protect", "surf"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "bubble", "supersonic"], "pokeball": "pokeball"},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	skarmory: {
		randomBattleMoves: ["whirlwind", "bravebird", "roost", "spikes", "stealthrock", "defog"],
		randomDoubleBattleMoves: ["skydrop", "bravebird", "tailwind", "taunt", "feint", "protect", "ironhead"],
		tier: "OU",
		doublesTier: "(DUU)",
	},
	houndour: {
		randomBattleMoves: ["pursuit", "suckerpunch", "fireblast", "darkpulse", "hiddenpowerfighting", "nastyplot"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["leer", "ember", "howl"], "pokeball": "pokeball"},
			{"generation": 3, "level": 17, "moves": ["charm", "feintattack", "ember", "roar"]},
		],
		tier: "LC",
	},
	houndoom: {
		randomBattleMoves: ["nastyplot", "darkpulse", "suckerpunch", "fireblast", "hiddenpowergrass"],
		randomDoubleBattleMoves: ["nastyplot", "darkpulse", "suckerpunch", "heatwave", "hiddenpowerfighting", "protect"],
		eventPokemon: [
			{"generation": 6, "level": 50, "nature": "Timid", "isHidden": false, "abilities": ["flashfire"], "moves": ["flamethrower", "darkpulse", "solarbeam", "sludgebomb"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 4, "level": 20},
		],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	houndoommega: {
		randomBattleMoves: ["nastyplot", "darkpulse", "taunt", "fireblast", "hiddenpowergrass"],
		randomDoubleBattleMoves: ["nastyplot", "darkpulse", "taunt", "heatwave", "hiddenpowergrass", "protect"],
		requiredItem: "Houndoominite",
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	phanpy: {
		randomBattleMoves: ["stealthrock", "earthquake", "iceshard", "headsmash", "knockoff", "seedbomb", "superpower", "playrough"],
		encounters: [
			{"generation": 2, "level": 2},
		],
		tier: "LC",
	},
	donphan: {
		randomBattleMoves: ["stealthrock", "rapidspin", "iceshard", "earthquake", "knockoff", "stoneedge"],
		randomDoubleBattleMoves: ["stealthrock", "knockoff", "iceshard", "earthquake", "rockslide", "protect"],
		encounters: [
			{"generation": 6, "level": 24, "maxEggMoves": 1},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	stantler: {
		randomBattleMoves: ["doubleedge", "megahorn", "jumpkick", "earthquake", "suckerpunch"],
		randomDoubleBattleMoves: ["return", "megahorn", "jumpkick", "earthquake", "suckerpunch", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["intimidate"], "moves": ["tackle", "leer"], "pokeball": "pokeball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	smeargle: {
		randomBattleMoves: ["spore", "stealthrock", "destinybond", "whirlwind", "stickyweb"],
		randomDoubleBattleMoves: ["spore", "fakeout", "wideguard", "helpinghand", "followme", "tailwind", "kingsshield", "transform"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["owntempo"], "moves": ["sketch"], "pokeball": "pokeball"},
			{"generation": 5, "level": 50, "gender": "F", "nature": "Jolly", "ivs": {"atk": 31, "spe": 31}, "isHidden": false, "abilities": ["technician"], "moves": ["falseswipe", "spore", "odorsleuth", "meanlook"], "pokeball": "cherishball"},
			{"generation": 6, "level": 40, "gender": "M", "nature": "Jolly", "isHidden": false, "abilities": ["owntempo"], "moves": ["sketch", "furyswipes", "seismictoss", "flamethrower"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pokestarsmeargle: {
		isNonstandard: "Pokestar",
		eventPokemon: [
			{"generation": 5, "level": 60, "gender": "M", "abilities": ["owntempo"], "moves": ["mindreader", "guillotine", "tailwhip", "gastroacid"]},
			{"generation": 5, "level": 30, "gender": "M", "abilities": ["owntempo"], "moves": ["outrage", "magiccoat"]},
			{"generation": 5, "level": 99, "gender": "M", "abilities": ["owntempo"], "moves": ["nastyplot", "sheercold", "attract", "shadowball"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	miltank: {
		randomBattleMoves: ["milkdrink", "stealthrock", "bodyslam", "healbell", "curse", "earthquake", "toxic"],
		randomDoubleBattleMoves: ["protect", "helpinghand", "bodyslam", "milkdrink", "curse", "earthquake", "thunderwave"],
		eventPokemon: [
			{"generation": 6, "level": 20, "perfectIVs": 3, "isHidden": false, "abilities": ["scrappy"], "moves": ["rollout", "attract", "stomp", "milkdrink"], "pokeball": "cherishball"},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	raikou: {
		randomBattleMoves: ["thunderbolt", "hiddenpowerice", "aurasphere", "calmmind", "substitute", "voltswitch", "extrasensory"],
		randomDoubleBattleMoves: ["thunderbolt", "hiddenpowerice", "extrasensory", "calmmind", "substitute", "snarl", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 50, "shiny": 1, "moves": ["thundershock", "roar", "quickattack", "spark"]},
			{"generation": 3, "level": 70, "moves": ["quickattack", "spark", "reflect", "crunch"], "pokeball": "pokeball"},
			{"generation": 4, "level": 40, "shiny": 1, "moves": ["roar", "quickattack", "spark", "reflect"]},
			{"generation": 4, "level": 30, "shiny": true, "nature": "Rash", "moves": ["zapcannon", "aurasphere", "extremespeed", "weatherball"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["spark", "reflect", "crunch", "thunderfang"]},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["reflect", "crunch", "thunderfang", "discharge"]},
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["reflect", "crunch", "thunderfang", "discharge"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["thunderbolt", "voltswitch", "extrasensory", "calmmind"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 2, "level": 40},
			{"generation": 3, "level": 40},
		],
		eventOnly: true,
		tier: "RU",
		doublesTier: "(DUU)",
	},
	entei: {
		randomBattleMoves: ["extremespeed", "flareblitz", "stompingtantrum", "stoneedge", "sacredfire"],
		randomDoubleBattleMoves: ["extremespeed", "flareblitz", "ironhead", "bulldoze", "stoneedge", "sacredfire", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 50, "shiny": 1, "moves": ["ember", "roar", "firespin", "stomp"]},
			{"generation": 3, "level": 70, "moves": ["firespin", "stomp", "flamethrower", "swagger"], "pokeball": "pokeball"},
			{"generation": 4, "level": 40, "shiny": 1, "moves": ["roar", "firespin", "stomp", "flamethrower"]},
			{"generation": 4, "level": 30, "shiny": true, "nature": "Adamant", "moves": ["flareblitz", "howl", "extremespeed", "crushclaw"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["stomp", "flamethrower", "swagger", "firefang"]},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["stomp", "bite", "swagger", "lavaplume"]},
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["stomp", "bite", "swagger", "lavaplume"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["sacredfire", "stoneedge", "ironhead", "flamecharge"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 2, "level": 40},
			{"generation": 3, "level": 40},
		],
		eventOnly: true,
		tier: "RUBL",
		doublesTier: "DUU",
	},
	suicune: {
		randomBattleMoves: ["hydropump", "icebeam", "scald", "hiddenpowergrass", "rest", "sleeptalk", "calmmind"],
		randomDoubleBattleMoves: ["hydropump", "icebeam", "scald", "hiddenpowergrass", "snarl", "tailwind", "protect", "calmmind"],
		eventPokemon: [
			{"generation": 3, "level": 50, "shiny": 1, "moves": ["bubblebeam", "raindance", "gust", "aurorabeam"]},
			{"generation": 3, "level": 70, "moves": ["gust", "aurorabeam", "mist", "mirrorcoat"], "pokeball": "pokeball"},
			{"generation": 4, "level": 40, "shiny": 1, "moves": ["raindance", "gust", "aurorabeam", "mist"]},
			{"generation": 4, "level": 30, "shiny": true, "nature": "Relaxed", "moves": ["sheercold", "airslash", "extremespeed", "aquaring"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["aurorabeam", "mist", "mirrorcoat", "icefang"]},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["bubblebeam", "aurorabeam", "mist", "raindance"]},
		],
		encounters: [
			{"generation": 2, "level": 40},
			{"generation": 3, "level": 40},
		],
		eventOnly: true,
		tier: "UU",
		doublesTier: "DOU",
	},
	larvitar: {
		randomBattleMoves: ["earthquake", "stoneedge", "facade", "dragondance", "superpower", "crunch"],
		eventPokemon: [
			{"generation": 3, "level": 20, "moves": ["sandstorm", "dragondance", "bite", "outrage"], "pokeball": "pokeball"},
			{"generation": 5, "level": 5, "shiny": true, "gender": "M", "isHidden": false, "moves": ["bite", "leer", "sandstorm", "superpower"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	pupitar: {
		randomBattleMoves: ["earthquake", "stoneedge", "crunch", "dragondance", "superpower", "stealthrock"],
		tier: "NFE",
	},
	tyranitar: {
		randomBattleMoves: ["crunch", "stoneedge", "pursuit", "earthquake", "fireblast", "icebeam", "stealthrock"],
		randomDoubleBattleMoves: ["crunch", "stoneedge", "rockslide", "earthquake", "firepunch", "icepunch", "stealthrock", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["thrash", "scaryface", "crunch", "earthquake"], "pokeball": "pokeball"},
			{"generation": 5, "level": 100, "gender": "M", "isHidden": false, "moves": ["fireblast", "icebeam", "stoneedge", "crunch"], "pokeball": "cherishball"},
			{"generation": 5, "level": 55, "gender": "M", "isHidden": true, "moves": ["payback", "crunch", "earthquake", "seismictoss"]},
			{"generation": 6, "level": 50, "isHidden": false, "moves": ["stoneedge", "crunch", "earthquake", "icepunch"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "nature": "Jolly", "isHidden": false, "moves": ["rockslide", "earthquake", "crunch", "stoneedge"], "pokeball": "cherishball"},
			{"generation": 6, "level": 55, "shiny": true, "nature": "Adamant", "ivs": {"hp": 31, "atk": 31, "def": 31, "spa": 14, "spd": 31, "spe": 0}, "isHidden": false, "moves": ["crunch", "rockslide", "lowkick", "protect"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "isHidden": false, "moves": ["rockslide", "crunch", "icepunch", "lowkick"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 5, "level": 50, "isHidden": false},
		],
		tier: "OU",
		doublesTier: "DOU",
	},
	tyranitarmega: {
		randomBattleMoves: ["crunch", "stoneedge", "earthquake", "icepunch", "dragondance"],
		randomDoubleBattleMoves: ["crunch", "stoneedge", "earthquake", "icepunch", "dragondance", "rockslide", "protect"],
		requiredItem: "Tyranitarite",
		tier: "(OU)",
		doublesTier: "DOU",
	},
	lugia: {
		randomBattleMoves: ["toxic", "roost", "substitute", "whirlwind", "thunderwave", "psychic"],
		randomDoubleBattleMoves: ["aeroblast", "roost", "substitute", "tailwind", "icebeam", "psychic", "calmmind", "skydrop", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 70, "shiny": 1, "moves": ["recover", "hydropump", "raindance", "swift"]},
			{"generation": 3, "level": 50, "moves": ["psychoboost", "earthquake", "hydropump", "featherdance"]},
			{"generation": 4, "level": 45, "shiny": 1, "moves": ["extrasensory", "raindance", "hydropump", "aeroblast"]},
			{"generation": 4, "level": 70, "shiny": 1, "moves": ["aeroblast", "punishment", "ancientpower", "safeguard"]},
			{"generation": 5, "level": 5, "isHidden": true, "moves": ["whirlwind", "weatherball"], "pokeball": "dreamball"},
			{"generation": 6, "level": 50, "shiny": 1, "isHidden": false, "moves": ["raindance", "hydropump", "aeroblast", "punishment"]},
			{"generation": 6, "level": 50, "nature": "Timid", "isHidden": false, "moves": ["aeroblast", "hydropump", "dragonrush", "icebeam"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["skillswap", "aeroblast", "extrasensory", "ancientpower"]},
			{"generation": 7, "level": 100, "isHidden": true, "moves": ["aeroblast", "hurricane", "defog", "tailwind"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["skillswap", "aeroblast", "extrasensory", "ancientpower"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["aeroblast", "earthpower", "psychic", "tailwind"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 2, "level": 40},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	hooh: {
		randomBattleMoves: ["substitute", "sacredfire", "bravebird", "earthquake", "roost", "toxic", "flamecharge"],
		randomDoubleBattleMoves: ["substitute", "sacredfire", "bravebird", "earthquake", "roost", "toxic", "tailwind", "skydrop", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 70, "shiny": 1, "moves": ["recover", "fireblast", "sunnyday", "swift"]},
			{"generation": 4, "level": 45, "shiny": 1, "moves": ["extrasensory", "sunnyday", "fireblast", "sacredfire"]},
			{"generation": 4, "level": 70, "shiny": 1, "moves": ["sacredfire", "punishment", "ancientpower", "safeguard"]},
			{"generation": 5, "level": 5, "isHidden": true, "moves": ["whirlwind", "weatherball"], "pokeball": "dreamball"},
			{"generation": 6, "level": 50, "shiny": 1, "isHidden": false, "moves": ["sunnyday", "fireblast", "sacredfire", "punishment"]},
			{"generation": 6, "level": 50, "shiny": true, "isHidden": false, "moves": ["sacredfire", "bravebird", "recover", "celebrate"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["sacredfire", "bravebird", "recover", "safeguard"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["burnup", "sacredfire", "extrasensory", "ancientpower"]},
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["burnup", "sacredfire", "extrasensory", "ancientpower"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["sacredfire", "bravebird", "earthquake", "tailwind"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 2, "level": 40},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	celebi: {
		randomBattleMoves: ["nastyplot", "psychic", "gigadrain", "recover", "healbell", "earthpower", "hiddenpowerfire", "leafstorm", "uturn", "thunderwave"],
		randomDoubleBattleMoves: ["protect", "psychic", "gigadrain", "leechseed", "recover", "earthpower", "hiddenpowerfire", "nastyplot", "leafstorm", "uturn", "thunderwave"],
		eventPokemon: [
			{"generation": 3, "level": 10, "moves": ["confusion", "recover", "healbell", "safeguard"], "pokeball": "pokeball"},
			{"generation": 3, "level": 70, "moves": ["ancientpower", "futuresight", "batonpass", "perishsong"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "moves": ["leechseed", "recover", "healbell", "safeguard"], "pokeball": "pokeball"},
			{"generation": 3, "level": 30, "moves": ["healbell", "safeguard", "ancientpower", "futuresight"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "moves": ["leafstorm", "recover", "nastyplot", "healingwish"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "moves": ["recover", "healbell", "safeguard", "holdback"], "pokeball": "luxuryball"},
			{"generation": 6, "level": 100, "moves": ["confusion", "recover", "healbell", "safeguard"], "pokeball": "cherishball"},
			{"generation": 7, "level": 30, "moves": ["healbell", "safeguard", "ancientpower", "futuresight"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 2, "level": 30},
		],
		eventOnly: true,
		tier: "UU",
		doublesTier: "(DUU)",
	},
	treecko: {
		randomBattleMoves: ["substitute", "leechseed", "leafstorm", "hiddenpowerice", "hiddenpowerrock", "endeavor"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["pound", "leer", "absorb"], "pokeball": "pokeball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["pound", "leer", "absorb"]},
		],
		tier: "LC",
	},
	grovyle: {
		randomBattleMoves: ["substitute", "leechseed", "gigadrain", "leafstorm", "hiddenpowerice", "hiddenpowerrock", "endeavor"],
		tier: "NFE",
	},
	sceptile: {
		randomBattleMoves: ["gigadrain", "leafstorm", "hiddenpowerice", "focusblast", "hiddenpowerflying"],
		randomDoubleBattleMoves: ["gigadrain", "leafstorm", "hiddenpowerice", "focusblast", "hiddenpowerfire", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 50, "shiny": 1, "isHidden": false, "moves": ["leafstorm", "dragonpulse", "focusblast", "rockslide"], "pokeball": "cherishball"},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	sceptilemega: {
		randomBattleMoves: ["substitute", "gigadrain", "dragonpulse", "focusblast", "swordsdance", "outrage", "leafblade", "earthquake", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["substitute", "gigadrain", "leafstorm", "hiddenpowerice", "focusblast", "dragonpulse", "hiddenpowerfire", "protect"],
		requiredItem: "Sceptilite",
		tier: "RUBL",
		doublesTier: "DUU",
	},
	torchic: {
		randomBattleMoves: ["protect", "substitute", "hiddenpowergrass", "swordsdance", "firepledge"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["scratch", "growl", "focusenergy", "ember"], "pokeball": "pokeball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["scratch", "growl", "focusenergy", "ember"]},
			{"generation": 6, "level": 10, "gender": "M", "isHidden": true, "moves": ["scratch", "growl", "focusenergy", "ember"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	combusken: {
		randomBattleMoves: ["flareblitz", "skyuppercut", "protect", "swordsdance", "shadowclaw"],
		tier: "NFE",
	},
	blaziken: {
		randomBattleMoves: ["blazekick", "highjumpkick", "protect", "swordsdance", "stoneedge", "knockoff"],
		eventPokemon: [
			{"generation": 3, "level": 70, "moves": ["blazekick", "slash", "mirrormove", "skyuppercut"], "pokeball": "pokeball"},
			{"generation": 5, "level": 50, "shiny": 1, "isHidden": false, "moves": ["flareblitz", "highjumpkick", "thunderpunch", "stoneedge"], "pokeball": "cherishball"},
		],
		tier: "Uber",
		doublesTier: "(DUU)",
	},
	blazikenmega: {
		randomBattleMoves: ["flareblitz", "highjumpkick", "protect", "swordsdance", "stoneedge", "knockoff"],
		requiredItem: "Blazikenite",
		tier: "Uber",
		doublesTier: "DUU",
	},
	mudkip: {
		randomBattleMoves: ["hydropump", "earthpower", "hiddenpowerelectric", "icebeam", "sludgewave"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["tackle", "growl", "mudslap", "watergun"], "pokeball": "pokeball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tackle", "growl", "mudslap", "watergun"]},
		],
		tier: "LC",
	},
	marshtomp: {
		randomBattleMoves: ["waterfall", "earthquake", "superpower", "icepunch", "rockslide", "stealthrock"],
		tier: "NFE",
	},
	swampert: {
		randomBattleMoves: ["stealthrock", "earthquake", "scald", "icebeam", "roar", "toxic", "protect"],
		randomDoubleBattleMoves: ["waterfall", "earthquake", "icebeam", "stealthrock", "wideguard", "scald", "rockslide", "muddywater", "protect", "icywind"],
		eventPokemon: [
			{"generation": 5, "level": 50, "shiny": 1, "isHidden": false, "moves": ["earthquake", "icebeam", "hydropump", "hammerarm"], "pokeball": "cherishball"},
		],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	swampertmega: {
		randomBattleMoves: ["raindance", "waterfall", "earthquake", "icepunch", "superpower"],
		randomDoubleBattleMoves: ["waterfall", "earthquake", "raindance", "icepunch", "superpower", "protect"],
		requiredItem: "Swampertite",
		tier: "OU",
		doublesTier: "DOU",
	},
	poochyena: {
		randomBattleMoves: ["superfang", "foulplay", "suckerpunch", "toxic", "crunch", "firefang", "icefang", "poisonfang"],
		eventPokemon: [
			{"generation": 3, "level": 10, "abilities": ["runaway"], "moves": ["healbell", "dig", "poisonfang", "howl"]},
		],
		encounters: [
			{"generation": 3, "level": 2},
		],
		tier: "LC",
	},
	mightyena: {
		randomBattleMoves: ["crunch", "suckerpunch", "playrough", "firefang", "irontail"],
		randomDoubleBattleMoves: ["suckerpunch", "crunch", "playrough", "firefang", "taunt", "protect"],
		eventPokemon: [
			{"generation": 7, "level": 64, "gender": "M", "isHidden": false, "abilities": ["intimidate"], "moves": ["crunch", "firefang", "icefang", "thunderfang"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	zigzagoon: {
		randomBattleMoves: ["trick", "thunderwave", "icebeam", "thunderbolt", "gunkshot", "lastresort"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": true, "abilities": ["pickup"], "moves": ["tackle", "growl", "tailwhip"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "abilities": ["pickup"], "moves": ["tackle", "growl", "tailwhip", "extremespeed"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 3, "level": 2},
		],
		tier: "LC",
	},
	linoone: {
		randomBattleMoves: ["bellydrum", "extremespeed", "stompingtantrum", "shadowclaw"],
		randomDoubleBattleMoves: ["bellydrum", "extremespeed", "stompingtantrum", "protect", "shadowclaw"],
		eventPokemon: [
			{"generation": 6, "level": 50, "isHidden": false, "moves": ["extremespeed", "helpinghand", "babydolleyes", "protect"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 4, "level": 3},
			{"generation": 6, "level": 17, "maxEggMoves": 1},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	wurmple: {
		randomBattleMoves: ["bugbite", "poisonsting", "tackle", "electroweb"],
		encounters: [
			{"generation": 3, "level": 2},
		],
		tier: "LC",
	},
	silcoon: {
		randomBattleMoves: ["bugbite", "poisonsting", "tackle", "electroweb"],
		tier: "NFE",
		encounters: [
			{"generation": 3, "level": 5},
			{"generation": 4, "level": 5},
			{"generation": 6, "level": 2, "maxEggMoves": 1},
		],
	},
	beautifly: {
		randomBattleMoves: ["quiverdance", "bugbuzz", "aircutter", "psychic", "gigadrain", "hiddenpowerrock"],
		randomDoubleBattleMoves: ["quiverdance", "bugbuzz", "gigadrain", "hiddenpowerrock", "aircutter", "tailwind", "stringshot", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	cascoon: {
		randomBattleMoves: ["bugbite", "poisonsting", "tackle", "electroweb"],
		encounters: [
			{"generation": 3, "level": 5},
			{"generation": 4, "level": 5},
			{"generation": 6, "level": 2, "maxEggMoves": 1},
		],
		tier: "NFE",
	},
	dustox: {
		randomBattleMoves: ["roost", "defog", "bugbuzz", "sludgebomb", "quiverdance", "uturn", "shadowball"],
		randomDoubleBattleMoves: ["tailwind", "stringshot", "strugglebug", "bugbuzz", "protect", "sludgebomb", "quiverdance", "shadowball"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	lotad: {
		randomBattleMoves: ["gigadrain", "icebeam", "scald", "naturepower", "raindance"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["astonish", "growl", "absorb"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 3, "level": 3},
		],
		tier: "LC",
	},
	lombre: {
		randomBattleMoves: ["fakeout", "swordsdance", "waterfall", "seedbomb", "icepunch", "firepunch", "thunderpunch", "poweruppunch", "gigadrain", "icebeam"],
		encounters: [
			{"generation": 6, "level": 13, "maxEggMoves": 1},
		],
		tier: "NFE",
	},
	ludicolo: {
		randomBattleMoves: ["raindance", "hydropump", "scald", "gigadrain", "icebeam", "focusblast"],
		randomDoubleBattleMoves: ["raindance", "hydropump", "surf", "gigadrain", "icebeam", "fakeout", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 50, "shiny": 1, "isHidden": false, "abilities": ["swiftswim"], "moves": ["fakeout", "hydropump", "icebeam", "gigadrain"], "pokeball": "cherishball"},
			{"generation": 5, "level": 30, "gender": "M", "nature": "Calm", "isHidden": false, "abilities": ["swiftswim"], "moves": ["scald", "gigadrain", "icebeam", "sunnyday"], "pokeball": "pokeball"},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	seedot: {
		randomBattleMoves: ["defog", "naturepower", "seedbomb", "explosion", "foulplay"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["bide", "harden", "growth"], "pokeball": "pokeball"},
			{"generation": 3, "level": 17, "moves": ["refresh", "gigadrain", "bulletseed", "secretpower"]},
		],
		encounters: [
			{"generation": 3, "level": 3},
		],
		tier: "LC",
	},
	nuzleaf: {
		randomBattleMoves: ["naturepower", "seedbomb", "explosion", "swordsdance", "rockslide", "lowsweep"],
		encounters: [
			{"generation": 6, "level": 13, "maxEggMoves": 1},
		],
		tier: "NFE",
	},
	shiftry: {
		randomBattleMoves: ["leafstorm", "swordsdance", "leafblade", "suckerpunch", "defog", "lowkick", "knockoff"],
		randomDoubleBattleMoves: ["leafstorm", "swordsdance", "leafblade", "suckerpunch", "knockoff", "lowkick", "fakeout", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	taillow: {
		randomBattleMoves: ["bravebird", "facade", "quickattack", "uturn", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["peck", "growl", "focusenergy", "featherdance"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 3, "level": 4},
		],
		tier: "LC",
	},
	swellow: {
		randomBattleMoves: ["protect", "facade", "bravebird", "uturn", "quickattack"],
		randomDoubleBattleMoves: ["bravebird", "facade", "quickattack", "uturn", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 43, "moves": ["batonpass", "skyattack", "agility", "facade"]},
		],
		encounters: [
			{"generation": 4, "level": 20},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	wingull: {
		randomBattleMoves: ["scald", "icebeam", "tailwind", "uturn", "airslash", "knockoff", "defog"],
		encounters: [
			{"generation": 3, "level": 2},
		],
		tier: "LC Uber",
	},
	pelipper: {
		randomBattleMoves: ["scald", "uturn", "hurricane", "toxic", "roost", "defog", "knockoff"],
		randomDoubleBattleMoves: ["scald", "surf", "hurricane", "wideguard", "protect", "tailwind", "knockoff"],
		encounters: [
			{"generation": 4, "level": 15},
			{"generation": 6, "level": 18, "maxEggMoves": 1},
		],
		tier: "OU",
		doublesTier: "DOU",
	},
	ralts: {
		randomBattleMoves: ["trickroom", "destinybond", "psychic", "willowisp", "hypnosis", "dazzlinggleam", "substitute", "trick"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["growl", "wish"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["growl", "charm"], "pokeball": "pokeball"},
			{"generation": 3, "level": 20, "moves": ["sing", "shockwave", "reflect", "confusion"]},
			{"generation": 6, "level": 1, "isHidden": true, "moves": ["growl", "encore"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 3, "level": 4},
		],
		tier: "LC",
	},
	kirlia: {
		randomBattleMoves: ["trick", "dazzlinggleam", "psychic", "willowisp", "signalbeam", "thunderbolt", "destinybond", "substitute"],
		encounters: [
			{"generation": 4, "level": 6},
		],
		tier: "NFE",
	},
	gardevoir: {
		randomBattleMoves: ["psychic", "thunderbolt", "focusblast", "shadowball", "moonblast", "calmmind", "substitute", "willowisp"],
		randomDoubleBattleMoves: ["psyshock", "focusblast", "shadowball", "moonblast", "taunt", "willowisp", "thunderbolt", "trickroom", "helpinghand", "protect", "dazzlinggleam"],
		eventPokemon: [
			{"generation": 5, "level": 50, "shiny": 1, "isHidden": false, "abilities": ["trace"], "moves": ["hypnosis", "thunderbolt", "focusblast", "psychic"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": true, "gender": "F", "isHidden": false, "abilities": ["synchronize"], "moves": ["dazzlinggleam", "moonblast", "storedpower", "calmmind"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "DUU",
	},
	gardevoirmega: {
		randomBattleMoves: ["calmmind", "hypervoice", "psyshock", "focusblast", "substitute", "taunt", "willowisp"],
		randomDoubleBattleMoves: ["psyshock", "focusblast", "shadowball", "calmmind", "thunderbolt", "hypervoice", "protect"],
		requiredItem: "Gardevoirite",
		tier: "UUBL",
		doublesTier: "DOU",
	},
	gallade: {
		randomBattleMoves: ["bulkup", "drainpunch", "icepunch", "shadowsneak", "closecombat", "zenheadbutt", "knockoff", "trick"],
		randomDoubleBattleMoves: ["closecombat", "trick", "stoneedge", "shadowsneak", "drainpunch", "icepunch", "zenheadbutt", "knockoff", "trickroom", "protect", "helpinghand"],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	gallademega: {
		randomBattleMoves: ["swordsdance", "closecombat", "drainpunch", "knockoff", "zenheadbutt", "substitute"],
		randomDoubleBattleMoves: ["closecombat", "stoneedge", "drainpunch", "icepunch", "zenheadbutt", "swordsdance", "knockoff", "protect"],
		requiredItem: "Galladite",
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	surskit: {
		randomBattleMoves: ["hydropump", "signalbeam", "hiddenpowerfire", "stickyweb", "gigadrain", "powersplit"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["bubble", "mudsport"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["bubble", "quickattack"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 3, "level": 3},
		],
		tier: "LC",
	},
	masquerain: {
		randomBattleMoves: ["quiverdance", "bugbuzz", "airslash", "hydropump", "roost", "stickyweb"],
		randomDoubleBattleMoves: ["hydropump", "bugbuzz", "airslash", "quiverdance", "tailwind", "roost", "strugglebug", "protect"],
		encounters: [
			{"generation": 6, "level": 21, "maxEggMoves": 1},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	shroomish: {
		randomBattleMoves: ["spore", "substitute", "leechseed", "gigadrain", "protect", "toxic", "stunspore"],
		eventPokemon: [
			{"generation": 3, "level": 15, "abilities": ["effectspore"], "moves": ["refresh", "falseswipe", "megadrain", "stunspore"]},
		],
		tier: "LC",
	},
	breloom: {
		randomBattleMoves: ["spore", "machpunch", "bulletseed", "rocktomb", "swordsdance"],
		randomDoubleBattleMoves: ["spore", "helpinghand", "machpunch", "bulletseed", "rocktomb", "protect", "drainpunch"],
		tier: "UUBL",
		doublesTier: "DUU",
	},
	slakoth: {
		randomBattleMoves: ["doubleedge", "hammerarm", "firepunch", "counter", "retaliate", "toxic"],
		tier: "LC",
	},
	vigoroth: {
		randomBattleMoves: ["bulkup", "return", "earthquake", "firepunch", "suckerpunch", "slackoff", "icepunch", "lowkick"],
		tier: "NFE",
	},
	slaking: {
		randomBattleMoves: ["earthquake", "pursuit", "nightslash", "retaliate", "gigaimpact", "firepunch"],
		randomDoubleBattleMoves: ["earthquake", "nightslash", "doubleedge", "retaliate", "hammerarm", "rockslide"],
		eventPokemon: [
			{"generation": 4, "level": 50, "gender": "M", "nature": "Adamant", "moves": ["gigaimpact", "return", "shadowclaw", "aerialace"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	nincada: {
		randomBattleMoves: ["xscissor", "dig", "aerialace", "nightslash"],
		tier: "LC",
	},
	ninjask: {
		randomBattleMoves: ["swordsdance", "aerialace", "nightslash", "dig", "leechlife", "uturn"],
		randomDoubleBattleMoves: ["batonpass", "swordsdance", "substitute", "protect", "leechlife", "aerialace"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	shedinja: {
		randomBattleMoves: ["swordsdance", "willowisp", "xscissor", "shadowsneak", "shadowclaw"],
		randomDoubleBattleMoves: ["swordsdance", "willowisp", "xscissor", "shadowsneak", "shadowclaw", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 50, "moves": ["spite", "confuseray", "shadowball", "grudge"], "pokeball": "pokeball"},
			{"generation": 3, "level": 20, "shiny": 1, "moves": ["doubleteam", "furycutter", "screech"]},
			{"generation": 3, "level": 25, "shiny": 1, "moves": ["swordsdance"]},
			{"generation": 3, "level": 31, "shiny": 1, "moves": ["slash"]},
			{"generation": 3, "level": 38, "shiny": 1, "moves": ["agility"]},
			{"generation": 3, "level": 45, "shiny": 1, "moves": ["batonpass"]},
			{"generation": 4, "level": 52, "shiny": 1, "moves": ["xscissor"]},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	whismur: {
		randomBattleMoves: ["hypervoice", "fireblast", "shadowball", "icebeam", "extrasensory"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["pound", "uproar", "teeterdance"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	loudred: {
		randomBattleMoves: ["hypervoice", "fireblast", "shadowball", "icebeam", "circlethrow", "bodyslam"],
		encounters: [
			{"generation": 6, "level": 16, "maxEggMoves": 1},
		],
		tier: "NFE",
	},
	exploud: {
		randomBattleMoves: ["boomburst", "fireblast", "icebeam", "surf", "focusblast"],
		randomDoubleBattleMoves: ["boomburst", "fireblast", "icebeam", "surf", "focusblast", "protect", "hypervoice"],
		eventPokemon: [
			{"generation": 3, "level": 100, "moves": ["roar", "rest", "sleeptalk", "hypervoice"], "pokeball": "pokeball"},
			{"generation": 3, "level": 50, "moves": ["stomp", "screech", "hyperbeam", "roar"], "pokeball": "pokeball"},
		],
		tier: "NUBL",
		doublesTier: "(DUU)",
	},
	makuhita: {
		randomBattleMoves: ["crosschop", "bulletpunch", "closecombat", "icepunch", "bulkup", "fakeout", "earthquake"],
		eventPokemon: [
			{"generation": 3, "level": 18, "moves": ["refresh", "brickbreak", "armthrust", "rocktomb"]},
		],
		tier: "LC",
	},
	hariyama: {
		randomBattleMoves: ["bulletpunch", "closecombat", "icepunch", "stoneedge", "bulkup", "knockoff"],
		randomDoubleBattleMoves: ["bulletpunch", "closecombat", "icepunch", "stoneedge", "fakeout", "knockoff", "helpinghand", "wideguard", "protect"],
		encounters: [
			{"generation": 6, "level": 22, "isHidden": false},
		],
		tier: "NU",
		doublesTier: "DUU",
	},
	nosepass: {
		randomBattleMoves: ["powergem", "thunderwave", "stealthrock", "painsplit", "explosion", "voltswitch"],
		eventPokemon: [
			{"generation": 3, "level": 26, "moves": ["helpinghand", "thunderbolt", "thunderwave", "rockslide"]},
		],
		tier: "LC",
	},
	probopass: {
		randomBattleMoves: ["stealthrock", "thunderwave", "toxic", "flashcannon", "voltswitch", "earthpower"],
		randomDoubleBattleMoves: ["stealthrock", "thunderwave", "helpinghand", "earthpower", "powergem", "wideguard", "protect", "flashcannon"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	skitty: {
		randomBattleMoves: ["doubleedge", "zenheadbutt", "thunderwave", "fakeout", "playrough", "healbell"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "abilities": ["cutecharm"], "moves": ["tackle", "growl", "tailwhip", "payday"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "abilities": ["cutecharm"], "moves": ["growl", "tackle", "tailwhip", "rollout"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["cutecharm"], "moves": ["growl", "tackle", "tailwhip", "attract"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 3, "level": 3, "shiny": false, "gender": "F", "ivs": {"hp": 5, "atk": 4, "def": 4, "spa": 5, "spd": 4, "spe": 4}, "abilities": ["cutecharm"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	delcatty: {
		randomBattleMoves: ["doubleedge", "suckerpunch", "wildcharge", "fakeout", "thunderwave", "healbell"],
		randomDoubleBattleMoves: ["doubleedge", "suckerpunch", "playrough", "wildcharge", "fakeout", "thunderwave", "protect", "helpinghand"],
		eventPokemon: [
			{"generation": 3, "level": 18, "abilities": ["cutecharm"], "moves": ["sweetkiss", "secretpower", "attract", "shockwave"]},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	sableye: {
		randomBattleMoves: ["recover", "willowisp", "taunt", "toxic", "knockoff", "foulplay"],
		randomDoubleBattleMoves: ["recover", "willowisp", "taunt", "fakeout", "knockoff", "foulplay", "helpinghand", "snarl", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "abilities": ["keeneye"], "moves": ["leer", "scratch", "foresight", "nightshade"], "pokeball": "pokeball"},
			{"generation": 3, "level": 33, "abilities": ["keeneye"], "moves": ["helpinghand", "shadowball", "feintattack", "recover"]},
			{"generation": 5, "level": 50, "gender": "M", "isHidden": true, "moves": ["foulplay", "octazooka", "tickle", "trick"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "nature": "Relaxed", "ivs": {"hp": 31, "spa": 31}, "isHidden": true, "moves": ["calmmind", "willowisp", "recover", "shadowball"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "nature": "Bold", "isHidden": true, "moves": ["willowisp", "recover", "taunt", "shockwave"], "pokeball": "cherishball"},
		],
		tier: "PU",
		doublesTier: "DUU",
	},
	sableyemega: {
		randomBattleMoves: ["recover", "willowisp", "darkpulse", "calmmind", "shadowball"],
		randomDoubleBattleMoves: ["fakeout", "knockoff", "darkpulse", "shadowball", "willowisp", "protect"],
		requiredItem: "Sablenite",
		tier: "OU",
		doublesTier: "DUU",
	},
	mawile: {
		randomBattleMoves: ["swordsdance", "ironhead", "stealthrock", "playrough", "suckerpunch", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "ironhead", "firefang", "substitute", "playrough", "suckerpunch", "knockoff", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["astonish", "faketears"], "pokeball": "pokeball"},
			{"generation": 3, "level": 22, "moves": ["sing", "falseswipe", "vicegrip", "irondefense"]},
			{"generation": 6, "level": 50, "isHidden": false, "abilities": ["intimidate"], "moves": ["ironhead", "playrough", "firefang", "suckerpunch"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "isHidden": false, "abilities": ["intimidate"], "moves": ["suckerpunch", "protect", "playrough", "ironhead"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	mawilemega: {
		randomBattleMoves: ["swordsdance", "ironhead", "firefang", "substitute", "playrough", "suckerpunch", "knockoff", "focuspunch"],
		randomDoubleBattleMoves: ["swordsdance", "ironhead", "firefang", "substitute", "playrough", "suckerpunch", "knockoff", "protect"],
		requiredItem: "Mawilite",
		tier: "OU",
		doublesTier: "DOU",
	},
	aron: {
		randomBattleMoves: ["headsmash", "ironhead", "earthquake", "superpower", "stealthrock", "endeavor"],
		tier: "LC",
	},
	lairon: {
		randomBattleMoves: ["headsmash", "ironhead", "earthquake", "superpower", "stealthrock"],
		tier: "NFE",
	},
	aggron: {
		randomBattleMoves: ["autotomize", "headsmash", "earthquake", "lowkick", "heavyslam", "aquatail", "stealthrock"],
		randomDoubleBattleMoves: ["rockslide", "headsmash", "earthquake", "lowkick", "heavyslam", "aquatail", "stealthrock", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 100, "moves": ["irontail", "protect", "metalsound", "doubleedge"], "pokeball": "pokeball"},
			{"generation": 3, "level": 50, "moves": ["takedown", "irontail", "protect", "metalsound"], "pokeball": "pokeball"},
			{"generation": 6, "level": 50, "nature": "Brave", "isHidden": false, "abilities": ["rockhead"], "moves": ["ironhead", "earthquake", "headsmash", "rockslide"], "pokeball": "cherishball"},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	aggronmega: {
		randomBattleMoves: ["earthquake", "heavyslam", "rockslide", "stealthrock", "thunderwave", "roar", "toxic"],
		randomDoubleBattleMoves: ["rockslide", "earthquake", "lowkick", "heavyslam", "aquatail", "protect"],
		requiredItem: "Aggronite",
		tier: "UU",
		doublesTier: "(DUU)",
	},
	meditite: {
		randomBattleMoves: ["highjumpkick", "psychocut", "icepunch", "thunderpunch", "trick", "fakeout", "bulletpunch", "drainpunch", "zenheadbutt"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["bide", "meditate", "confusion"], "pokeball": "pokeball"},
			{"generation": 3, "level": 20, "moves": ["dynamicpunch", "confusion", "shadowball", "detect"], "pokeball": "pokeball"},
		],
		tier: "LC Uber",
	},
	medicham: {
		randomBattleMoves: ["highjumpkick", "drainpunch", "zenheadbutt", "icepunch", "bulletpunch"],
		randomDoubleBattleMoves: ["highjumpkick", "drainpunch", "zenheadbutt", "icepunch", "bulletpunch", "protect", "fakeout"],
		encounters: [
			{"generation": 4, "level": 35},
			{"generation": 6, "level": 34, "maxEggMoves": 1},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	medichammega: {
		randomBattleMoves: ["highjumpkick", "drainpunch", "icepunch", "fakeout", "zenheadbutt"],
		randomDoubleBattleMoves: ["highjumpkick", "drainpunch", "zenheadbutt", "icepunch", "bulletpunch", "protect", "fakeout"],
		requiredItem: "Medichamite",
		tier: "OU",
		doublesTier: "(DUU)",
	},
	electrike: {
		randomBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowerice", "switcheroo", "flamethrower", "hiddenpowergrass"],
		tier: "LC",
	},
	manectric: {
		randomBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowerice", "hiddenpowergrass", "overheat", "flamethrower"],
		randomDoubleBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowerice", "hiddenpowergrass", "overheat", "flamethrower", "snarl", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 44, "moves": ["refresh", "thunder", "raindance", "bite"]},
			{"generation": 6, "level": 50, "nature": "Timid", "isHidden": false, "abilities": ["lightningrod"], "moves": ["overheat", "thunderbolt", "voltswitch", "protect"], "pokeball": "cherishball"},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	manectricmega: {
		randomBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowerice", "hiddenpowergrass", "overheat"],
		randomDoubleBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowerice", "hiddenpowergrass", "overheat", "flamethrower", "snarl", "protect"],
		requiredItem: "Manectite",
		tier: "UU",
		doublesTier: "DOU",
	},
	plusle: {
		randomBattleMoves: ["nastyplot", "thunderbolt", "substitute", "hiddenpowerice", "encore"],
		randomDoubleBattleMoves: ["nastyplot", "thunderbolt", "substitute", "protect", "hiddenpowerice", "encore", "helpinghand"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["growl", "thunderwave", "mudsport"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["growl", "thunderwave", "quickattack"], "pokeball": "pokeball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	minun: {
		randomBattleMoves: ["nastyplot", "thunderbolt", "substitute", "hiddenpowerice", "encore"],
		randomDoubleBattleMoves: ["nastyplot", "thunderbolt", "substitute", "protect", "hiddenpowerice", "encore", "helpinghand"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["growl", "thunderwave", "watersport"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["growl", "thunderwave", "quickattack"], "pokeball": "pokeball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	volbeat: {
		randomBattleMoves: ["uturn", "roost", "thunderwave", "encore", "tailwind", "defog"],
		randomDoubleBattleMoves: ["stringshot", "strugglebug", "helpinghand", "thunderwave", "encore", "tailwind", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	illumise: {
		randomBattleMoves: ["uturn", "roost", "bugbuzz", "thunderwave", "encore", "wish", "defog"],
		randomDoubleBattleMoves: ["protect", "helpinghand", "bugbuzz", "encore", "thunderbolt", "tailwind", "uturn"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	budew: {
		randomBattleMoves: ["spikes", "sludgebomb", "sleeppowder", "gigadrain", "stunspore", "rest"],
		tier: "LC",
	},
	roselia: {
		randomBattleMoves: ["spikes", "toxicspikes", "sleeppowder", "gigadrain", "stunspore", "rest", "sludgebomb", "synthesis"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["absorb", "growth", "poisonsting"], "pokeball": "pokeball"},
			{"generation": 3, "level": 22, "moves": ["sweetkiss", "magicalleaf", "leechseed", "grasswhistle"]},
		],
		tier: "PU",
		doublesTier: "NFE",
	},
	roserade: {
		randomBattleMoves: ["sludgebomb", "gigadrain", "sleeppowder", "leafstorm", "spikes", "toxicspikes", "rest", "synthesis", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["sludgebomb", "gigadrain", "sleeppowder", "leafstorm", "protect", "hiddenpowerfire"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	gulpin: {
		randomBattleMoves: ["stockpile", "sludgebomb", "sludgewave", "icebeam", "toxic", "painsplit", "yawn", "encore"],
		eventPokemon: [
			{"generation": 3, "level": 17, "moves": ["sing", "shockwave", "sludge", "toxic"]},
		],
		tier: "LC",
	},
	swalot: {
		randomBattleMoves: ["sludgebomb", "icebeam", "toxic", "yawn", "encore", "painsplit", "earthquake"],
		randomDoubleBattleMoves: ["sludgebomb", "icebeam", "protect", "yawn", "encore", "gunkshot", "earthquake"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	carvanha: {
		randomBattleMoves: ["protect", "hydropump", "icebeam", "waterfall", "crunch", "aquajet", "destinybond"],
		eventPokemon: [
			{"generation": 3, "level": 15, "moves": ["refresh", "waterpulse", "bite", "scaryface"]},
			{"generation": 6, "level": 1, "isHidden": true, "moves": ["leer", "bite", "hydropump"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	sharpedo: {
		randomBattleMoves: ["protect", "icebeam", "crunch", "earthquake", "waterfall"],
		randomDoubleBattleMoves: ["protect", "icebeam", "crunch", "earthquake", "liquidation"],
		eventPokemon: [
			{"generation": 6, "level": 50, "nature": "Adamant", "isHidden": true, "moves": ["aquajet", "crunch", "icefang", "destinybond"], "pokeball": "cherishball"},
			{"generation": 6, "level": 43, "gender": "M", "perfectIVs": 2, "isHidden": false, "moves": ["scaryface", "slash", "poisonfang", "crunch"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 7, "level": 10},
		],
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	sharpedomega: {
		randomBattleMoves: ["protect", "crunch", "waterfall", "icefang", "psychicfangs", "destinybond"],
		randomDoubleBattleMoves: ["protect", "icefang", "crunch", "liquidation", "psychicfangs"],
		requiredItem: "Sharpedonite",
		tier: "UU",
		doublesTier: "(DUU)",
	},
	wailmer: {
		randomBattleMoves: ["waterspout", "surf", "hydropump", "icebeam", "hiddenpowergrass", "hiddenpowerelectric"],
		tier: "LC",
	},
	wailord: {
		randomBattleMoves: ["waterspout", "hydropump", "icebeam", "hiddenpowergrass", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["waterspout", "hydropump", "icebeam", "hiddenpowergrass", "hiddenpowerfire", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 100, "moves": ["rest", "waterspout", "amnesia", "hydropump"], "pokeball": "pokeball"},
			{"generation": 3, "level": 50, "moves": ["waterpulse", "mist", "rest", "waterspout"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 3, "level": 25},
			{"generation": 4, "level": 35},
			{"generation": 5, "level": 30, "isHidden": false},
			{"generation": 7, "level": 10},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	numel: {
		randomBattleMoves: ["curse", "earthquake", "rockslide", "fireblast", "flamecharge", "rest", "sleeptalk", "stockpile", "hiddenpowerelectric", "earthpower", "lavaplume"],
		eventPokemon: [
			{"generation": 3, "level": 14, "abilities": ["oblivious"], "moves": ["charm", "takedown", "dig", "ember"]},
			{"generation": 6, "level": 1, "isHidden": false, "moves": ["growl", "tackle", "ironhead"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	camerupt: {
		randomBattleMoves: ["rockpolish", "fireblast", "earthpower", "lavaplume", "stealthrock", "hiddenpowergrass", "roar", "stoneedge"],
		randomDoubleBattleMoves: ["rockpolish", "fireblast", "earthpower", "heatwave", "eruption", "hiddenpowergrass", "protect"],
		eventPokemon: [
			{"generation": 6, "level": 43, "gender": "M", "perfectIVs": 2, "isHidden": false, "abilities": ["solidrock"], "moves": ["curse", "takedown", "rockslide", "yawn"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	cameruptmega: {
		randomBattleMoves: ["stealthrock", "fireblast", "earthpower", "ancientpower", "willowisp", "toxic"],
		randomDoubleBattleMoves: ["fireblast", "earthpower", "heatwave", "eruption", "rockslide", "protect"],
		requiredItem: "Cameruptite",
		tier: "NUBL",
		doublesTier: "DOU",
	},
	torkoal: {
		randomBattleMoves: ["shellsmash", "fireblast", "earthpower", "solarbeam", "stealthrock", "rapidspin", "yawn", "lavaplume"],
		randomDoubleBattleMoves: ["protect", "heatwave", "earthpower", "willowisp", "shellsmash", "fireblast", "solarbeam"],
		tier: "(PU)",
		doublesTier: "DOU",
	},
	spoink: {
		randomBattleMoves: ["psychic", "reflect", "lightscreen", "thunderwave", "trick", "healbell", "calmmind", "hiddenpowerfighting", "shadowball"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "abilities": ["owntempo"], "moves": ["splash", "uproar"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	grumpig: {
		randomBattleMoves: ["psychic", "thunderwave", "healbell", "whirlwind", "toxic", "focusblast", "reflect", "lightscreen"],
		randomDoubleBattleMoves: ["psychic", "psyshock", "thunderwave", "trickroom", "taunt", "protect", "focusblast", "reflect", "lightscreen"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	spinda: {
		randomBattleMoves: ["return", "superpower", "suckerpunch", "trickroom"],
		randomDoubleBattleMoves: ["doubleedge", "return", "superpower", "suckerpunch", "trickroom", "fakeout", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["tackle", "uproar", "sing"], "pokeball": "pokeball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	trapinch: {
		randomBattleMoves: ["earthquake", "rockslide", "crunch", "quickattack", "superpower"],
		eventPokemon: [
			{"generation": 5, "level": 1, "shiny": true, "isHidden": false, "moves": ["bite"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	vibrava: {
		randomBattleMoves: ["substitute", "earthquake", "outrage", "roost", "uturn", "superpower", "defog"],
		tier: "NFE",
	},
	flygon: {
		randomBattleMoves: ["earthquake", "outrage", "uturn", "roost", "defog", "firepunch", "dragondance"],
		randomDoubleBattleMoves: ["earthquake", "protect", "dragonclaw", "uturn", "rockslide", "firepunch", "fireblast", "tailwind", "dragondance"],
		eventPokemon: [
			{"generation": 3, "level": 45, "moves": ["sandtomb", "crunch", "dragonbreath", "screech"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "gender": "M", "nature": "Naive", "moves": ["dracometeor", "uturn", "earthquake", "dragonclaw"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	cacnea: {
		randomBattleMoves: ["swordsdance", "spikes", "suckerpunch", "seedbomb", "drainpunch"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["poisonsting", "leer", "absorb", "encore"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	cacturne: {
		randomBattleMoves: ["swordsdance", "spikes", "suckerpunch", "seedbomb", "drainpunch", "substitute", "darkpulse", "focusblast", "gigadrain"],
		randomDoubleBattleMoves: ["swordsdance", "spikyshield", "suckerpunch", "seedbomb", "drainpunch", "substitute"],
		eventPokemon: [
			{"generation": 3, "level": 45, "moves": ["ingrain", "feintattack", "spikes", "needlearm"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	swablu: {
		randomBattleMoves: ["roost", "toxic", "cottonguard", "pluck", "hypervoice", "return"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["peck", "growl", "falseswipe"], "pokeball": "pokeball"},
			{"generation": 5, "level": 1, "shiny": true, "isHidden": false, "moves": ["peck", "growl"], "pokeball": "pokeball"},
			{"generation": 6, "level": 1, "isHidden": true, "moves": ["peck", "growl", "hypervoice"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	altaria: {
		randomBattleMoves: ["dragondance", "dracometeor", "outrage", "dragonclaw", "earthquake", "roost", "fireblast", "healbell"],
		randomDoubleBattleMoves: ["dragondance", "dracometeor", "protect", "dragonclaw", "earthquake", "fireblast", "tailwind"],
		eventPokemon: [
			{"generation": 3, "level": 45, "moves": ["takedown", "dragonbreath", "dragondance", "refresh"], "pokeball": "pokeball"},
			{"generation": 3, "level": 36, "moves": ["healbell", "dragonbreath", "solarbeam", "aerialace"]},
			{"generation": 5, "level": 35, "gender": "M", "isHidden": true, "moves": ["takedown", "naturalgift", "dragonbreath", "falseswipe"]},
			{"generation": 6, "level": 100, "nature": "Modest", "isHidden": true, "moves": ["hypervoice", "fireblast", "protect", "agility"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	altariamega: {
		randomBattleMoves: ["dragondance", "return", "hypervoice", "healbell", "earthquake", "roost", "dracometeor", "fireblast"],
		randomDoubleBattleMoves: ["dragondance", "return", "doubleedge", "dragonclaw", "earthquake", "protect", "fireblast"],
		requiredItem: "Altarianite",
		tier: "UU",
		doublesTier: "(DUU)",
	},
	zangoose: {
		randomBattleMoves: ["swordsdance", "closecombat", "knockoff", "quickattack", "facade"],
		randomDoubleBattleMoves: ["protect", "closecombat", "knockoff", "quickattack", "facade"],
		eventPokemon: [
			{"generation": 3, "level": 18, "moves": ["leer", "quickattack", "swordsdance", "furycutter"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["scratch", "leer", "quickattack", "swordsdance"], "pokeball": "pokeball"},
			{"generation": 3, "level": 28, "moves": ["refresh", "brickbreak", "counter", "crushclaw"]},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	seviper: {
		randomBattleMoves: ["flamethrower", "sludgewave", "gigadrain", "darkpulse", "switcheroo", "swordsdance", "earthquake", "poisonjab", "suckerpunch"],
		randomDoubleBattleMoves: ["flamethrower", "gigadrain", "earthquake", "suckerpunch", "aquatail", "protect", "glare", "poisonjab", "sludgebomb"],
		eventPokemon: [
			{"generation": 3, "level": 18, "moves": ["wrap", "lick", "bite", "poisontail"], "pokeball": "pokeball"},
			{"generation": 3, "level": 30, "moves": ["poisontail", "screech", "glare", "crunch"], "pokeball": "pokeball"},
			{"generation": 3, "level": 10, "gender": "M", "moves": ["wrap", "lick", "bite"], "pokeball": "pokeball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	lunatone: {
		randomBattleMoves: ["psychic", "earthpower", "stealthrock", "rockpolish", "calmmind", "icebeam", "powergem", "moonlight", "toxic"],
		randomDoubleBattleMoves: ["psychic", "earthpower", "rockpolish", "calmmind", "helpinghand", "icebeam", "powergem", "moonlight", "trickroom", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 10, "moves": ["tackle", "harden", "confusion"], "pokeball": "pokeball"},
			{"generation": 3, "level": 25, "moves": ["batonpass", "psychic", "raindance", "rocktomb"]},
			{"generation": 7, "level": 30, "moves": ["cosmicpower", "hiddenpower", "moonblast", "powergem"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	solrock: {
		randomBattleMoves: ["stealthrock", "explosion", "rockslide", "reflect", "lightscreen", "willowisp", "morningsun"],
		randomDoubleBattleMoves: ["protect", "helpinghand", "stoneedge", "zenheadbutt", "willowisp", "trickroom", "rockslide"],
		eventPokemon: [
			{"generation": 3, "level": 10, "moves": ["tackle", "harden", "confusion"], "pokeball": "pokeball"},
			{"generation": 3, "level": 41, "moves": ["batonpass", "psychic", "sunnyday", "cosmicpower"]},
			{"generation": 7, "level": 30, "moves": ["cosmicpower", "hiddenpower", "solarbeam", "stoneedge"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	barboach: {
		randomBattleMoves: ["dragondance", "waterfall", "earthquake", "return", "bounce"],
		tier: "LC",
	},
	whiscash: {
		randomBattleMoves: ["dragondance", "waterfall", "earthquake", "stoneedge", "zenheadbutt"],
		randomDoubleBattleMoves: ["dragondance", "waterfall", "earthquake", "stoneedge", "zenheadbutt", "protect"],
		eventPokemon: [
			{"generation": 4, "level": 51, "gender": "F", "nature": "Gentle", "abilities": ["oblivious"], "moves": ["earthquake", "aquatail", "zenheadbutt", "gigaimpact"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 4, "level": 10},
			{"generation": 7, "level": 10},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	corphish: {
		randomBattleMoves: ["dragondance", "waterfall", "crunch", "superpower", "swordsdance", "knockoff", "aquajet"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["bubble", "watersport"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	crawdaunt: {
		randomBattleMoves: ["dragondance", "crabhammer", "superpower", "swordsdance", "knockoff", "aquajet"],
		randomDoubleBattleMoves: ["dragondance", "liquidation", "crunch", "superpower", "swordsdance", "knockoff", "aquajet", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 100, "moves": ["taunt", "crabhammer", "swordsdance", "guillotine"], "pokeball": "pokeball"},
			{"generation": 3, "level": 50, "moves": ["knockoff", "taunt", "crabhammer", "swordsdance"], "pokeball": "pokeball"},
		],
		encounters: [
			{"generation": 7, "level": 10},
		],
		tier: "UU",
		doublesTier: "DUU",
	},
	baltoy: {
		randomBattleMoves: ["stealthrock", "earthquake", "toxic", "psychic", "reflect", "lightscreen", "icebeam", "rapidspin"],
		eventPokemon: [
			{"generation": 3, "level": 17, "moves": ["refresh", "rocktomb", "mudslap", "psybeam"]},
		],
		tier: "LC",
	},
	claydol: {
		randomBattleMoves: ["stealthrock", "toxic", "psychic", "icebeam", "earthquake", "rapidspin"],
		randomDoubleBattleMoves: ["earthpower", "trickroom", "psychic", "icebeam", "earthquake", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	lileep: {
		randomBattleMoves: ["stealthrock", "recover", "ancientpower", "hiddenpowerfire", "gigadrain", "stockpile"],
		eventPokemon: [
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "moves": ["recover", "rockslide", "constrict", "acid"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	cradily: {
		randomBattleMoves: ["stealthrock", "recover", "gigadrain", "toxic", "seedbomb", "rockslide", "curse"],
		randomDoubleBattleMoves: ["protect", "recover", "seedbomb", "rockslide", "earthquake", "curse", "swordsdance"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	anorith: {
		randomBattleMoves: ["stealthrock", "brickbreak", "toxic", "xscissor", "rockslide", "swordsdance", "rockpolish"],
		eventPokemon: [
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "moves": ["harden", "mudsport", "watergun", "crosspoison"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	armaldo: {
		randomBattleMoves: ["stealthrock", "stoneedge", "toxic", "xscissor", "knockoff", "rapidspin", "earthquake"],
		randomDoubleBattleMoves: ["rockslide", "stoneedge", "stringshot", "xscissor", "swordsdance", "knockoff", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	feebas: {
		randomBattleMoves: ["protect", "confuseray", "hypnosis", "scald", "toxic"],
		eventPokemon: [
			{"generation": 4, "level": 5, "gender": "F", "nature": "Calm", "moves": ["splash", "mirrorcoat"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	milotic: {
		randomBattleMoves: ["recover", "scald", "toxic", "icebeam", "dragontail", "rest", "sleeptalk"],
		randomDoubleBattleMoves: ["recover", "scald", "hydropump", "icebeam", "dragontail", "hypnosis", "protect", "hiddenpowergrass"],
		eventPokemon: [
			{"generation": 3, "level": 35, "moves": ["waterpulse", "twister", "recover", "raindance"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "gender": "F", "nature": "Bold", "moves": ["recover", "raindance", "icebeam", "hydropump"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "shiny": true, "gender": "M", "nature": "Timid", "moves": ["raindance", "recover", "hydropump", "icywind"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "shiny": 1, "isHidden": false, "moves": ["recover", "hydropump", "icebeam", "mirrorcoat"], "pokeball": "cherishball"},
			{"generation": 5, "level": 58, "gender": "M", "nature": "Lax", "ivs": {"hp": 30, "atk": 30, "def": 30, "spa": 30, "spd": 30, "spe": 30}, "isHidden": false, "moves": ["recover", "surf", "icebeam", "toxic"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	castform: {
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	castformsunny: {
		randomBattleMoves: ["sunnyday", "fireblast", "solarbeam", "icebeam"],
		requiredAbility: 'Forecast',
		battleOnly: true,
	},
	castformrainy: {
		randomBattleMoves: ["raindance", "hydropump", "thunder", "hurricane"],
		requiredAbility: 'Forecast',
		battleOnly: true,
	},
	castformsnowy: {
		randomBattleMoves: ["hail", "blizzard", "thunderbolt", "fireblast"],
		requiredAbility: 'Forecast',
		battleOnly: true,
	},
	kecleon: {
		randomBattleMoves: ["fakeout", "knockoff", "drainpunch", "suckerpunch", "shadowsneak", "stealthrock", "recover"],
		randomDoubleBattleMoves: ["knockoff", "fakeout", "trickroom", "recover", "drainpunch", "suckerpunch", "shadowsneak", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	shuppet: {
		randomBattleMoves: ["trickroom", "destinybond", "taunt", "shadowsneak", "suckerpunch", "willowisp"],
		eventPokemon: [
			{"generation": 3, "level": 45, "abilities": ["insomnia"], "moves": ["spite", "willowisp", "feintattack", "shadowball"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	banette: {
		randomBattleMoves: ["destinybond", "taunt", "shadowclaw", "suckerpunch", "willowisp", "shadowsneak", "knockoff"],
		randomDoubleBattleMoves: ["shadowclaw", "suckerpunch", "willowisp", "shadowsneak", "knockoff", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 37, "abilities": ["insomnia"], "moves": ["helpinghand", "feintattack", "shadowball", "curse"]},
			{"generation": 5, "level": 37, "gender": "F", "isHidden": true, "moves": ["feintattack", "hex", "shadowball", "cottonguard"]},
		],
		encounters: [
			{"generation": 5, "level": 32, "isHidden": false},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	banettemega: {
		randomBattleMoves: ["destinybond", "taunt", "shadowclaw", "suckerpunch", "willowisp", "knockoff"],
		randomDoubleBattleMoves: ["destinybond", "taunt", "shadowclaw", "suckerpunch", "willowisp", "knockoff", "protect"],
		requiredItem: "Banettite",
		tier: "RU",
		doublesTier: "(DUU)",
	},
	duskull: {
		randomBattleMoves: ["willowisp", "shadowsneak", "painsplit", "substitute", "nightshade", "destinybond", "trickroom"],
		eventPokemon: [
			{"generation": 3, "level": 45, "moves": ["pursuit", "curse", "willowisp", "meanlook"], "pokeball": "pokeball"},
			{"generation": 3, "level": 19, "moves": ["helpinghand", "shadowball", "astonish", "confuseray"]},
		],
		tier: "LC",
	},
	dusclops: {
		randomBattleMoves: ["willowisp", "shadowsneak", "icebeam", "painsplit", "substitute", "seismictoss", "toxic", "trickroom"],
		encounters: [
			{"generation": 4, "level": 16},
			{"generation": 6, "level": 30},
		],
		tier: "NFE",
	},
	dusknoir: {
		randomBattleMoves: ["willowisp", "shadowsneak", "icepunch", "painsplit", "substitute", "earthquake", "focuspunch"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "icepunch", "painsplit", "protect", "earthquake", "helpinghand", "trickroom"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	tropius: {
		randomBattleMoves: ["leechseed", "substitute", "airslash", "gigadrain", "toxic", "protect"],
		randomDoubleBattleMoves: ["leechseed", "protect", "airslash", "gigadrain", "earthquake", "hiddenpowerfire", "tailwind", "sunnyday", "roost"],
		eventPokemon: [
			{"generation": 4, "level": 53, "gender": "F", "nature": "Jolly", "abilities": ["chlorophyll"], "moves": ["airslash", "synthesis", "sunnyday", "solarbeam"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	chingling: {
		randomBattleMoves: ["hypnosis", "reflect", "lightscreen", "toxic", "recover", "psychic", "signalbeam", "healbell"],
		tier: "LC",
	},
	chimecho: {
		randomBattleMoves: ["psychic", "yawn", "recover", "calmmind", "shadowball", "healingwish", "healbell", "taunt"],
		randomDoubleBattleMoves: ["protect", "psychic", "thunderwave", "recover", "shadowball", "dazzlinggleam", "trickroom", "helpinghand", "taunt"],
		eventPokemon: [
			{"generation": 3, "level": 10, "gender": "M", "moves": ["wrap", "growl", "astonish"], "pokeball": "pokeball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	absol: {
		randomBattleMoves: ["swordsdance", "suckerpunch", "knockoff", "superpower", "pursuit", "playrough"],
		randomDoubleBattleMoves: ["swordsdance", "suckerpunch", "knockoff", "fireblast", "superpower", "protect", "playrough"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "abilities": ["pressure"], "moves": ["scratch", "leer", "wish"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "abilities": ["pressure"], "moves": ["scratch", "leer", "spite"], "pokeball": "pokeball"},
			{"generation": 3, "level": 35, "abilities": ["pressure"], "moves": ["razorwind", "bite", "swordsdance", "spite"], "pokeball": "pokeball"},
			{"generation": 3, "level": 70, "abilities": ["pressure"], "moves": ["doubleteam", "slash", "futuresight", "perishsong"], "pokeball": "pokeball"},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	absolmega: {
		randomBattleMoves: ["swordsdance", "suckerpunch", "knockoff", "fireblast", "superpower", "pursuit", "playrough", "icebeam"],
		randomDoubleBattleMoves: ["swordsdance", "suckerpunch", "knockoff", "fireblast", "superpower", "protect", "playrough"],
		requiredItem: "Absolite",
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	snorunt: {
		randomBattleMoves: ["spikes", "icebeam", "iceshard", "shadowball", "toxic"],
		eventPokemon: [
			{"generation": 3, "level": 20, "abilities": ["innerfocus"], "moves": ["sing", "waterpulse", "bite", "icywind"]},
		],
		tier: "LC",
	},
	glalie: {
		randomBattleMoves: ["spikes", "icebeam", "iceshard", "taunt", "earthquake", "explosion", "superfang"],
		randomDoubleBattleMoves: ["icebeam", "iceshard", "taunt", "earthquake", "freezedry", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	glaliemega: {
		randomBattleMoves: ["freezedry", "iceshard", "earthquake", "explosion", "return", "spikes"],
		randomDoubleBattleMoves: ["crunch", "iceshard", "freezedry", "earthquake", "explosion", "protect", "return"],
		requiredItem: "Glalitite",
		tier: "NU",
		doublesTier: "(DUU)",
	},
	froslass: {
		randomBattleMoves: ["icebeam", "spikes", "destinybond", "shadowball", "taunt", "thunderwave"],
		randomDoubleBattleMoves: ["icebeam", "protect", "destinybond", "shadowball", "taunt", "thunderwave"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	spheal: {
		randomBattleMoves: ["substitute", "protect", "toxic", "surf", "icebeam", "yawn", "superfang"],
		eventPokemon: [
			{"generation": 3, "level": 17, "abilities": ["thickfat"], "moves": ["charm", "aurorabeam", "watergun", "mudslap"]},
		],
		tier: "LC",
	},
	sealeo: {
		randomBattleMoves: ["substitute", "protect", "toxic", "surf", "icebeam", "yawn", "superfang"],
		encounters: [
			{"generation": 4, "level": 25, "isHidden": false},
			{"generation": 6, "level": 28, "maxEggMoves": 1},
		],
		tier: "NFE",
	},
	walrein: {
		randomBattleMoves: ["superfang", "protect", "toxic", "surf", "icebeam", "roar"],
		randomDoubleBattleMoves: ["protect", "icywind", "surf", "icebeam", "superfang", "roar"],
		eventPokemon: [
			{"generation": 5, "level": 50, "isHidden": false, "abilities": ["thickfat"], "moves": ["icebeam", "brine", "hail", "sheercold"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 5, "level": 30, "isHidden": false},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	clamperl: {
		randomBattleMoves: ["shellsmash", "icebeam", "surf", "hiddenpowergrass", "hiddenpowerelectric", "substitute"],
		tier: "LC",
	},
	huntail: {
		randomBattleMoves: ["shellsmash", "waterfall", "icebeam", "substitute", "suckerpunch"],
		randomDoubleBattleMoves: ["shellsmash", "waterfall", "icefang", "batonpass", "suckerpunch", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	gorebyss: {
		randomBattleMoves: ["shellsmash", "hydropump", "icebeam", "hiddenpowergrass", "substitute"],
		randomDoubleBattleMoves: ["shellsmash", "batonpass", "surf", "icebeam", "hiddenpowergrass", "substitute", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	relicanth: {
		randomBattleMoves: ["headsmash", "waterfall", "earthquake", "doubleedge", "stealthrock", "toxic"],
		randomDoubleBattleMoves: ["headsmash", "waterfall", "earthquake", "doubleedge", "rockslide", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	luvdisc: {
		randomBattleMoves: ["icebeam", "toxic", "sweetkiss", "protect", "scald"],
		randomDoubleBattleMoves: ["icebeam", "toxic", "sweetkiss", "protect", "scald", "icywind", "healpulse"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	bagon: {
		randomBattleMoves: ["outrage", "dragondance", "firefang", "rockslide", "dragonclaw"],
		eventPokemon: [
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["rage", "bite", "wish"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": 1, "moves": ["rage", "bite", "irondefense"], "pokeball": "pokeball"},
			{"generation": 5, "level": 1, "shiny": true, "isHidden": false, "moves": ["rage"], "pokeball": "pokeball"},
			{"generation": 6, "level": 1, "isHidden": false, "moves": ["rage", "thrash"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	shelgon: {
		randomBattleMoves: ["outrage", "brickbreak", "dragonclaw", "dragondance", "crunch", "zenheadbutt"],
		encounters: [
			{"generation": 7, "level": 15},
		],
		tier: "NFE",
	},
	salamence: {
		randomBattleMoves: ["outrage", "fireblast", "earthquake", "dracometeor", "dragondance", "dragonclaw", "fly"],
		randomDoubleBattleMoves: ["protect", "fireblast", "earthquake", "dracometeor", "tailwind", "dragondance", "dragonclaw", "hydropump", "rockslide"],
		eventPokemon: [
			{"generation": 3, "level": 50, "moves": ["protect", "dragonbreath", "scaryface", "fly"], "pokeball": "pokeball"},
			{"generation": 3, "level": 50, "moves": ["refresh", "dragonclaw", "dragondance", "aerialace"]},
			{"generation": 4, "level": 50, "gender": "M", "nature": "Naughty", "moves": ["hydropump", "stoneedge", "fireblast", "dragonclaw"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "shiny": 1, "isHidden": false, "moves": ["dragondance", "dragonclaw", "outrage", "aerialace"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 7, "level": 9},
		],
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	salamencemega: {
		randomBattleMoves: ["doubleedge", "return", "fireblast", "earthquake", "dracometeor", "roost", "dragondance"],
		randomDoubleBattleMoves: ["doubleedge", "return", "fireblast", "earthquake", "dracometeor", "protect", "dragondance", "dragonclaw"],
		requiredItem: "Salamencite",
		tier: "Uber",
		doublesTier: "DOU",
	},
	beldum: {
		randomBattleMoves: ["ironhead", "zenheadbutt", "headbutt", "irondefense"],
		eventPokemon: [
			{"generation": 6, "level": 5, "shiny": true, "isHidden": false, "moves": ["holdback", "ironhead", "zenheadbutt", "irondefense"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	metang: {
		randomBattleMoves: ["stealthrock", "meteormash", "toxic", "earthquake", "bulletpunch", "zenheadbutt"],
		eventPokemon: [
			{"generation": 3, "level": 30, "moves": ["takedown", "confusion", "metalclaw", "refresh"], "pokeball": "pokeball"},
		],
		tier: "NFE",
	},
	metagross: {
		randomBattleMoves: ["meteormash", "earthquake", "agility", "stealthrock", "zenheadbutt", "bulletpunch", "thunderpunch", "explosion", "icepunch"],
		randomDoubleBattleMoves: ["meteormash", "earthquake", "protect", "zenheadbutt", "bulletpunch", "thunderpunch", "explosion", "icepunch", "hammerarm"],
		eventPokemon: [
			{"generation": 4, "level": 62, "nature": "Brave", "moves": ["bulletpunch", "meteormash", "hammerarm", "zenheadbutt"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "shiny": 1, "isHidden": false, "moves": ["meteormash", "earthquake", "bulletpunch", "hammerarm"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "isHidden": false, "moves": ["bulletpunch", "zenheadbutt", "hammerarm", "icepunch"], "pokeball": "cherishball"},
			{"generation": 5, "level": 45, "shiny": true, "isHidden": false, "moves": ["meteormash", "zenheadbutt", "earthquake", "protect"], "pokeball": "pokeball"},
			{"generation": 5, "level": 45, "isHidden": true, "moves": ["irondefense", "agility", "hammerarm", "doubleedge"]},
			{"generation": 5, "level": 45, "isHidden": true, "moves": ["psychic", "meteormash", "hammerarm", "doubleedge"]},
			{"generation": 5, "level": 58, "nature": "Serious", "ivs": {"hp": 30, "atk": 30, "def": 30, "spa": 30, "spd": 30, "spe": 30}, "isHidden": false, "moves": ["earthquake", "hyperbeam", "psychic", "meteormash"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "nature": "Jolly", "ivs": {"hp": 31, "atk": 31, "def": 31, "spa": 31, "spd": 31, "spe": 31}, "isHidden": false, "moves": ["ironhead", "icepunch", "bulletpunch", "stompingtantrum"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "DUU",
	},
	metagrossmega: {
		randomBattleMoves: ["meteormash", "earthquake", "agility", "zenheadbutt", "hammerarm", "icepunch"],
		randomDoubleBattleMoves: ["meteormash", "earthquake", "protect", "zenheadbutt", "thunderpunch", "icepunch"],
		requiredItem: "Metagrossite",
		tier: "Uber",
		doublesTier: "DOU",
	},
	regirock: {
		randomBattleMoves: ["stealthrock", "thunderwave", "stoneedge", "drainpunch", "curse", "rest", "rockslide", "toxic"],
		randomDoubleBattleMoves: ["stealthrock", "thunderwave", "stoneedge", "drainpunch", "curse", "rockslide", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 40, "shiny": 1, "moves": ["rockthrow", "curse", "superpower", "ancientpower"]},
			{"generation": 3, "level": 40, "moves": ["curse", "superpower", "ancientpower", "hyperbeam"], "pokeball": "pokeball"},
			{"generation": 4, "level": 30, "shiny": 1, "moves": ["stomp", "rockthrow", "curse", "superpower"]},
			{"generation": 5, "level": 65, "shiny": 1, "moves": ["irondefense", "chargebeam", "lockon", "zapcannon"]},
			{"generation": 6, "level": 40, "shiny": 1, "isHidden": false, "moves": ["bulldoze", "curse", "ancientpower", "irondefense"]},
			{"generation": 6, "level": 50, "isHidden": true, "moves": ["explosion", "icepunch", "stoneedge", "hammerarm"], "pokeball": "pokeball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["stoneedge", "hammerarm", "lockon", "zapcannon"]},
		],
		eventOnly: true,
		tier: "PU",
		doublesTier: "(DUU)",
	},
	regice: {
		randomBattleMoves: ["thunderwave", "icebeam", "thunderbolt", "rest", "sleeptalk", "focusblast", "rockpolish"],
		randomDoubleBattleMoves: ["thunderwave", "icebeam", "thunderbolt", "icywind", "protect", "focusblast", "rockpolish"],
		eventPokemon: [
			{"generation": 3, "level": 40, "shiny": 1, "moves": ["icywind", "curse", "superpower", "ancientpower"]},
			{"generation": 3, "level": 40, "moves": ["curse", "superpower", "ancientpower", "hyperbeam"], "pokeball": "pokeball"},
			{"generation": 4, "level": 30, "shiny": 1, "moves": ["stomp", "icywind", "curse", "superpower"]},
			{"generation": 5, "level": 65, "shiny": 1, "moves": ["amnesia", "chargebeam", "lockon", "zapcannon"]},
			{"generation": 6, "level": 40, "shiny": 1, "isHidden": false, "moves": ["bulldoze", "curse", "ancientpower", "amnesia"]},
			{"generation": 6, "level": 50, "isHidden": true, "moves": ["thunderbolt", "amnesia", "icebeam", "hail"], "pokeball": "pokeball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["icebeam", "hammerarm", "lockon", "zapcannon"]},
		],
		eventOnly: true,
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	registeel: {
		randomBattleMoves: ["stealthrock", "thunderwave", "toxic", "protect", "seismictoss", "curse", "ironhead", "rest", "sleeptalk"],
		randomDoubleBattleMoves: ["stealthrock", "ironhead", "curse", "rest", "thunderwave", "protect", "seismictoss"],
		eventPokemon: [
			{"generation": 3, "level": 40, "shiny": 1, "moves": ["metalclaw", "curse", "superpower", "ancientpower"]},
			{"generation": 3, "level": 40, "moves": ["curse", "superpower", "ancientpower", "hyperbeam"], "pokeball": "pokeball"},
			{"generation": 4, "level": 30, "shiny": 1, "moves": ["stomp", "metalclaw", "curse", "superpower"]},
			{"generation": 5, "level": 65, "shiny": 1, "moves": ["amnesia", "chargebeam", "lockon", "zapcannon"]},
			{"generation": 6, "level": 40, "shiny": 1, "isHidden": false, "moves": ["curse", "ancientpower", "irondefense", "amnesia"]},
			{"generation": 6, "level": 50, "isHidden": true, "moves": ["ironhead", "rockslide", "gravity", "irondefense"], "pokeball": "pokeball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["flashcannon", "hammerarm", "lockon", "zapcannon"]},
		],
		eventOnly: true,
		tier: "RU",
		doublesTier: "(DUU)",
	},
	latias: {
		randomBattleMoves: ["dracometeor", "psyshock", "hiddenpowerfire", "roost", "thunderbolt", "healingwish", "defog"],
		randomDoubleBattleMoves: ["dragonpulse", "psychic", "tailwind", "helpinghand", "healpulse", "lightscreen", "reflect", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 40, "shiny": 1, "moves": ["watersport", "refresh", "mistball", "psychic"]},
			{"generation": 3, "level": 50, "shiny": 1, "moves": ["mistball", "psychic", "recover", "charm"]},
			{"generation": 3, "level": 70, "moves": ["mistball", "psychic", "recover", "charm"], "pokeball": "pokeball"},
			{"generation": 4, "level": 35, "shiny": 1, "moves": ["dragonbreath", "watersport", "refresh", "mistball"]},
			{"generation": 4, "level": 40, "shiny": 1, "moves": ["watersport", "refresh", "mistball", "zenheadbutt"]},
			{"generation": 5, "level": 68, "shiny": 1, "moves": ["psychoshift", "charm", "psychic", "healpulse"]},
			{"generation": 6, "level": 30, "shiny": 1, "moves": ["healpulse", "dragonbreath", "mistball", "psychoshift"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["mistball", "dragonpulse", "psychoshift", "wish"]},
			{"generation": 7, "level": 60, "moves": ["mistball", "dragonpulse", "psychoshift", "wish"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["mistball", "psychic", "dracometeor", "tailwind"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "UU",
		doublesTier: "(DUU)",
	},
	latiasmega: {
		randomBattleMoves: ["calmmind", "dragonpulse", "surf", "dracometeor", "roost", "hiddenpowerfire", "substitute", "psyshock"],
		randomDoubleBattleMoves: ["dragonpulse", "psychic", "tailwind", "helpinghand", "healpulse", "lightscreen", "reflect", "protect"],
		requiredItem: "Latiasite",
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	latios: {
		randomBattleMoves: ["dracometeor", "hiddenpowerfire", "surf", "thunderbolt", "psyshock", "roost", "trick", "defog"],
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "surf", "thunderbolt", "psyshock", "substitute", "trick", "tailwind", "protect", "hiddenpowerfire"],
		eventPokemon: [
			{"generation": 3, "level": 40, "shiny": 1, "moves": ["protect", "refresh", "lusterpurge", "psychic"]},
			{"generation": 3, "level": 50, "shiny": 1, "moves": ["lusterpurge", "psychic", "recover", "dragondance"]},
			{"generation": 3, "level": 70, "moves": ["lusterpurge", "psychic", "recover", "dragondance"], "pokeball": "pokeball"},
			{"generation": 4, "level": 35, "shiny": 1, "moves": ["dragonbreath", "protect", "refresh", "lusterpurge"]},
			{"generation": 4, "level": 40, "shiny": 1, "moves": ["protect", "refresh", "lusterpurge", "zenheadbutt"]},
			{"generation": 5, "level": 68, "shiny": 1, "moves": ["psychoshift", "dragondance", "psychic", "healpulse"]},
			{"generation": 6, "level": 30, "shiny": 1, "moves": ["healpulse", "dragonbreath", "lusterpurge", "psychoshift"]},
			{"generation": 6, "level": 50, "nature": "Modest", "moves": ["dragonpulse", "lusterpurge", "psychic", "healpulse"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["lusterpurge", "dragonpulse", "psychoshift", "dragonbreath"]},
			{"generation": 7, "level": 60, "moves": ["lusterpurge", "dragonpulse", "psychoshift", "dragonbreath"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["lusterpurge", "psychic", "dracometeor", "tailwind"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	latiosmega: {
		randomBattleMoves: ["calmmind", "dracometeor", "hiddenpowerfire", "psyshock", "roost", "defog"],
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "surf", "thunderbolt", "psyshock", "substitute", "tailwind", "protect", "hiddenpowerfire"],
		requiredItem: "Latiosite",
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	kyogre: {
		randomBattleMoves: ["waterspout", "originpulse", "scald", "thunder", "icebeam"],
		randomDoubleBattleMoves: ["waterspout", "muddywater", "originpulse", "thunder", "icebeam", "calmmind", "rest", "sleeptalk", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 45, "shiny": 1, "moves": ["bodyslam", "calmmind", "icebeam", "hydropump"]},
			{"generation": 3, "level": 70, "shiny": 1, "moves": ["hydropump", "rest", "sheercold", "doubleedge"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["aquaring", "icebeam", "ancientpower", "waterspout"]},
			{"generation": 5, "level": 80, "shiny": 1, "moves": ["icebeam", "ancientpower", "waterspout", "thunder"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "moves": ["waterspout", "thunder", "icebeam", "sheercold"], "pokeball": "cherishball"},
			{"generation": 6, "level": 45, "moves": ["bodyslam", "aquaring", "icebeam", "originpulse"]},
			{"generation": 6, "level": 100, "nature": "Timid", "moves": ["waterspout", "thunder", "sheercold", "icebeam"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["icebeam", "originpulse", "calmmind", "muddywater"]},
			{"generation": 7, "level": 60, "shiny": true, "moves": ["icebeam", "originpulse", "calmmind", "muddywater"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "moves": ["icebeam", "originpulse", "calmmind", "muddywater"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["originpulse", "icebeam", "waterspout", "calmmind"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	kyogreprimal: {
		randomBattleMoves: ["calmmind", "waterspout", "originpulse", "scald", "thunder", "icebeam", "rest", "sleeptalk"],
		randomDoubleBattleMoves: ["waterspout", "originpulse", "muddywater", "thunder", "icebeam", "calmmind", "rest", "sleeptalk", "protect"],
		requiredItem: "Blue Orb",
	},
	groudon: {
		randomBattleMoves: ["earthquake", "stealthrock", "lavaplume", "stoneedge", "roar", "toxic", "thunderwave", "dragonclaw", "firepunch"],
		randomDoubleBattleMoves: ["precipiceblades", "rockslide", "protect", "stoneedge", "swordsdance", "rockpolish", "dragonclaw", "firepunch"],
		eventPokemon: [
			{"generation": 3, "level": 45, "shiny": 1, "moves": ["slash", "bulkup", "earthquake", "fireblast"]},
			{"generation": 3, "level": 70, "shiny": 1, "moves": ["fireblast", "rest", "fissure", "solarbeam"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["rest", "earthquake", "ancientpower", "eruption"]},
			{"generation": 5, "level": 80, "shiny": 1, "moves": ["earthquake", "ancientpower", "eruption", "solarbeam"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "moves": ["eruption", "hammerarm", "earthpower", "solarbeam"], "pokeball": "cherishball"},
			{"generation": 6, "level": 45, "moves": ["lavaplume", "rest", "earthquake", "precipiceblades"]},
			{"generation": 6, "level": 100, "nature": "Adamant", "moves": ["firepunch", "solarbeam", "hammerarm", "rockslide"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["earthquake", "precipiceblades", "bulkup", "solarbeam"]},
			{"generation": 7, "level": 60, "shiny": true, "moves": ["earthquake", "precipiceblades", "bulkup", "solarbeam"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "moves": ["earthquake", "precipiceblades", "bulkup", "solarbeam"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["precipiceblades", "earthpower", "firepunch", "swordsdance"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	groudonprimal: {
		randomBattleMoves: ["stealthrock", "precipiceblades", "lavaplume", "stoneedge", "dragontail", "rockpolish", "swordsdance", "firepunch"],
		randomDoubleBattleMoves: ["precipiceblades", "lavaplume", "rockslide", "stoneedge", "swordsdance", "overheat", "rockpolish", "firepunch", "protect"],
		requiredItem: "Red Orb",
	},
	rayquaza: {
		randomBattleMoves: ["outrage", "vcreate", "extremespeed", "dragondance", "earthquake", "dracometeor", "dragonclaw"],
		randomDoubleBattleMoves: ["tailwind", "vcreate", "extremespeed", "dragondance", "earthquake", "dracometeor", "dragonclaw", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 70, "shiny": 1, "moves": ["fly", "rest", "extremespeed", "outrage"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["rest", "airslash", "ancientpower", "outrage"]},
			{"generation": 5, "level": 70, "shiny": true, "moves": ["dragonpulse", "ancientpower", "outrage", "dragondance"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "moves": ["extremespeed", "hyperbeam", "dragonpulse", "vcreate"], "pokeball": "cherishball"},
			{"generation": 6, "level": 70, "moves": ["extremespeed", "dragonpulse", "dragondance", "dragonascent"]},
			{"generation": 6, "level": 70, "shiny": true, "moves": ["dragonpulse", "thunder", "twister", "extremespeed"], "pokeball": "cherishball"},
			{"generation": 6, "level": 70, "shiny": true, "moves": ["dragonascent", "dragonclaw", "extremespeed", "dragondance"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "shiny": true, "moves": ["dragonascent", "dracometeor", "fly", "celebrate"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["rest", "extremespeed", "dragonpulse", "dragondance"]},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	rayquazamega: {
		// randomBattleMoves: ["vcreate", "extremespeed", "swordsdance", "earthquake", "dragonascent", "dragonclaw", "dragondance"],
		randomDoubleBattleMoves: ["vcreate", "extremespeed", "swordsdance", "earthquake", "dragonascent", "dragonclaw", "dragondance", "protect"],
		requiredMove: "Dragon Ascent",
		tier: "AG",
		doublesTier: "DUber",
	},
	jirachi: {
		randomBattleMoves: ["ironhead", "uturn", "firepunch", "icepunch", "trick", "stealthrock", "bodyslam", "toxic", "wish", "substitute"],
		randomDoubleBattleMoves: ["bodyslam", "ironhead", "icywind", "thunderwave", "helpinghand", "trickroom", "uturn", "followme", "zenheadbutt", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 5, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": true, "nature": "Bashful", "ivs": {"hp": 24, "atk": 3, "def": 30, "spa": 12, "spd": 16, "spe": 11}, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": true, "nature": "Careful", "ivs": {"hp": 10, "atk": 0, "def": 10, "spa": 10, "spd": 26, "spe": 12}, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": true, "nature": "Docile", "ivs": {"hp": 19, "atk": 7, "def": 10, "spa": 19, "spd": 10, "spe": 16}, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": true, "nature": "Hasty", "ivs": {"hp": 3, "atk": 12, "def": 12, "spa": 7, "spd": 11, "spe": 9}, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": true, "nature": "Jolly", "ivs": {"hp": 11, "atk": 8, "def": 6, "spa": 14, "spd": 5, "spe": 20}, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": true, "nature": "Lonely", "ivs": {"hp": 31, "atk": 23, "def": 26, "spa": 29, "spd": 18, "spe": 5}, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": true, "nature": "Naughty", "ivs": {"hp": 21, "atk": 31, "def": 31, "spa": 18, "spd": 24, "spe": 19}, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": true, "nature": "Serious", "ivs": {"hp": 29, "atk": 10, "def": 31, "spa": 25, "spd": 23, "spe": 21}, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 5, "shiny": true, "nature": "Timid", "ivs": {"hp": 15, "atk": 28, "def": 29, "spa": 3, "spd": 0, "spe": 7}, "moves": ["wish", "confusion", "rest"], "pokeball": "pokeball"},
			{"generation": 3, "level": 30, "moves": ["helpinghand", "psychic", "refresh", "rest"], "pokeball": "pokeball"},
			{"generation": 4, "level": 5, "moves": ["wish", "confusion", "rest"], "pokeball": "cherishball"},
			{"generation": 4, "level": 5, "moves": ["wish", "confusion", "rest", "dracometeor"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "moves": ["healingwish", "psychic", "swift", "meteormash"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "moves": ["dracometeor", "meteormash", "wish", "followme"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "moves": ["wish", "healingwish", "cosmicpower", "meteormash"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "moves": ["wish", "healingwish", "swift", "return"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "shiny": true, "moves": ["wish", "swift", "healingwish", "moonblast"], "pokeball": "cherishball"},
			{"generation": 6, "level": 15, "shiny": true, "moves": ["wish", "confusion", "helpinghand", "return"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["heartstamp", "playrough", "wish", "cosmicpower"], "pokeball": "cherishball"},
			{"generation": 6, "level": 25, "shiny": true, "moves": ["wish", "confusion", "swift", "happyhour"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["wish", "confusion", "rest"], "pokeball": "cherishball"},
			{"generation": 7, "level": 15, "moves": ["swift", "wish", "healingwish", "rest"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "OU",
		doublesTier: "DUber",
	},
	deoxys: {
		randomBattleMoves: ["psychoboost", "stealthrock", "spikes", "firepunch", "superpower", "extremespeed", "knockoff", "taunt"],
		randomDoubleBattleMoves: ["psychoboost", "superpower", "extremespeed", "icebeam", "thunderbolt", "firepunch", "protect", "knockoff", "psyshock"],
		eventPokemon: [
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["taunt", "pursuit", "psychic", "superpower"]},
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["knockoff", "spikes", "psychic", "snatch"]},
			{"generation": 3, "level": 30, "shiny": 1, "moves": ["knockoff", "pursuit", "psychic", "swift"]},
			{"generation": 3, "level": 70, "moves": ["cosmicpower", "recover", "psychoboost", "hyperbeam"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "moves": ["psychoboost", "zapcannon", "irondefense", "extremespeed"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "moves": ["psychoboost", "swift", "doubleteam", "extremespeed"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "moves": ["psychoboost", "detect", "counter", "mirrorcoat"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "moves": ["psychoboost", "meteormash", "superpower", "hyperbeam"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "moves": ["psychoboost", "leer", "wrap", "nightshade"], "pokeball": "pokeball"},
			{"generation": 5, "level": 100, "moves": ["nastyplot", "darkpulse", "recover", "psychoboost"], "pokeball": "duskball"},
			{"generation": 6, "level": 80, "moves": ["cosmicpower", "recover", "psychoboost", "hyperbeam"]},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "(DUU)",
	},
	deoxysattack: {
		randomBattleMoves: ["psychoboost", "superpower", "icebeam", "knockoff", "extremespeed", "firepunch", "stealthrock"],
		randomDoubleBattleMoves: ["psychoboost", "superpower", "extremespeed", "icebeam", "thunderbolt", "firepunch", "protect", "knockoff"],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DOU",
	},
	deoxysdefense: {
		randomBattleMoves: ["spikes", "stealthrock", "recover", "taunt", "toxic", "seismictoss", "knockoff"],
		randomDoubleBattleMoves: ["protect", "stealthrock", "recover", "taunt", "reflect", "seismictoss", "lightscreen", "trickroom", "psychic"],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "(DUU)",
	},
	deoxysspeed: {
		randomBattleMoves: ["spikes", "stealthrock", "superpower", "psychoboost", "taunt", "magiccoat", "knockoff"],
		randomDoubleBattleMoves: ["superpower", "icebeam", "psychoboost", "taunt", "lightscreen", "reflect", "protect", "knockoff"],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "(DUU)",
	},
	turtwig: {
		randomBattleMoves: ["reflect", "lightscreen", "stealthrock", "seedbomb", "substitute", "leechseed", "toxic"],
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tackle", "withdraw", "absorb"]},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["tackle", "withdraw", "absorb", "stockpile"]},
		],
		tier: "LC",
	},
	grotle: {
		randomBattleMoves: ["reflect", "lightscreen", "stealthrock", "seedbomb", "substitute", "leechseed", "toxic"],
		tier: "NFE",
	},
	torterra: {
		randomBattleMoves: ["stealthrock", "earthquake", "woodhammer", "stoneedge", "synthesis", "rockpolish"],
		randomDoubleBattleMoves: ["protect", "earthquake", "woodhammer", "stoneedge", "rockslide", "wideguard", "rockpolish"],
		eventPokemon: [
			{"generation": 5, "level": 100, "gender": "M", "isHidden": false, "moves": ["woodhammer", "earthquake", "outrage", "stoneedge"], "pokeball": "cherishball"},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	chimchar: {
		randomBattleMoves: ["stealthrock", "overheat", "hiddenpowergrass", "fakeout", "uturn", "gunkshot"],
		eventPokemon: [
			{"generation": 4, "level": 40, "gender": "M", "nature": "Mild", "moves": ["flamethrower", "thunderpunch", "grassknot", "helpinghand"], "pokeball": "cherishball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["scratch", "leer", "ember", "taunt"]},
			{"generation": 4, "level": 40, "gender": "M", "nature": "Hardy", "moves": ["flamethrower", "thunderpunch", "grassknot", "helpinghand"], "pokeball": "cherishball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["leer", "ember", "taunt", "fakeout"]},
		],
		tier: "LC",
	},
	monferno: {
		randomBattleMoves: ["stealthrock", "overheat", "hiddenpowergrass", "fakeout", "vacuumwave", "uturn", "gunkshot"],
		tier: "NFE",
	},
	infernape: {
		randomBattleMoves: ["stealthrock", "uturn", "earthquake", "closecombat", "flareblitz", "stoneedge", "machpunch", "nastyplot", "fireblast", "vacuumwave", "grassknot", "hiddenpowerice"],
		randomDoubleBattleMoves: ["fakeout", "heatwave", "closecombat", "uturn", "grassknot", "stoneedge", "machpunch", "feint", "taunt", "flareblitz", "hiddenpowerice", "thunderpunch", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 100, "gender": "M", "isHidden": false, "moves": ["fireblast", "closecombat", "uturn", "grassknot"], "pokeball": "cherishball"},
			{"generation": 6, "level": 88, "isHidden": true, "moves": ["fireblast", "closecombat", "firepunch", "focuspunch"], "pokeball": "cherishball"},
		],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	piplup: {
		randomBattleMoves: ["stealthrock", "hydropump", "scald", "icebeam", "hiddenpowerelectric", "hiddenpowerfire", "yawn", "defog"],
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["pound", "growl", "bubble"]},
			{"generation": 5, "level": 15, "shiny": 1, "isHidden": false, "moves": ["hydropump", "featherdance", "watersport", "peck"], "pokeball": "cherishball"},
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "moves": ["sing", "round", "featherdance", "peck"], "pokeball": "cherishball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["pound", "growl", "bubble", "featherdance"]},
			{"generation": 6, "level": 7, "isHidden": false, "moves": ["pound", "growl", "return"], "pokeball": "cherishball"},
			{"generation": 7, "level": 30, "gender": "M", "nature": "Hardy", "isHidden": false, "moves": ["hydropump", "bubblebeam", "whirlpool", "drillpeck"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	prinplup: {
		randomBattleMoves: ["stealthrock", "hydropump", "scald", "icebeam", "hiddenpowerelectric", "hiddenpowerfire", "yawn", "defog"],
		tier: "NFE",
	},
	empoleon: {
		randomBattleMoves: ["hydropump", "flashcannon", "grassknot", "defog", "icebeam", "scald", "toxic", "roar", "stealthrock"],
		randomDoubleBattleMoves: ["icywind", "scald", "surf", "icebeam", "hiddenpowerelectric", "protect", "grassknot", "flashcannon"],
		eventPokemon: [
			{"generation": 5, "level": 100, "gender": "M", "isHidden": false, "moves": ["hydropump", "icebeam", "aquajet", "grassknot"], "pokeball": "cherishball"},
		],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	starly: {
		randomBattleMoves: ["bravebird", "return", "uturn", "pursuit"],
		eventPokemon: [
			{"generation": 4, "level": 1, "gender": "M", "nature": "Mild", "moves": ["tackle", "growl"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	staravia: {
		randomBattleMoves: ["bravebird", "return", "uturn", "pursuit", "defog"],
		encounters: [
			{"generation": 4, "level": 4},
		],
		tier: "NFE",
	},
	staraptor: {
		randomBattleMoves: ["bravebird", "closecombat", "uturn", "quickattack", "roost", "doubleedge"],
		randomDoubleBattleMoves: ["bravebird", "closecombat", "uturn", "quickattack", "doubleedge", "tailwind", "protect"],
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	bidoof: {
		randomBattleMoves: ["return", "aquatail", "curse", "quickattack", "stealthrock", "superfang"],
		eventPokemon: [
			{"generation": 4, "level": 1, "gender": "M", "nature": "Lonely", "abilities": ["simple"], "moves": ["tackle"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	bibarel: {
		randomBattleMoves: ["return", "liquidation", "swordsdance", "quickattack", "aquajet"],
		randomDoubleBattleMoves: ["return", "liquidation", "curse", "aquajet", "quickattack", "protect", "rest"],
		encounters: [
			{"generation": 4, "level": 4},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	kricketot: {
		randomBattleMoves: ["endeavor", "mudslap", "bugbite", "strugglebug"],
		tier: "LC",
	},
	kricketune: {
		randomBattleMoves: ["leechlife", "endeavor", "taunt", "toxic", "stickyweb", "knockoff"],
		randomDoubleBattleMoves: ["leechlife", "protect", "taunt", "stickyweb", "knockoff"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	shinx: {
		randomBattleMoves: ["wildcharge", "icefang", "firefang", "crunch"],
		tier: "LC",
	},
	luxio: {
		randomBattleMoves: ["wildcharge", "icefang", "firefang", "crunch"],
		tier: "NFE",
	},
	luxray: {
		randomBattleMoves: ["wildcharge", "icefang", "voltswitch", "crunch", "superpower", "facade"],
		randomDoubleBattleMoves: ["wildcharge", "icefang", "voltswitch", "crunch", "superpower", "facade", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	cranidos: {
		randomBattleMoves: ["headsmash", "rockslide", "earthquake", "zenheadbutt", "firepunch", "rockpolish", "crunch"],
		eventPokemon: [
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "moves": ["pursuit", "takedown", "crunch", "headbutt"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	rampardos: {
		randomBattleMoves: ["headsmash", "earthquake", "rockpolish", "crunch", "rockslide", "firepunch"],
		randomDoubleBattleMoves: ["headsmash", "earthquake", "zenheadbutt", "rockslide", "crunch", "stoneedge", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	shieldon: {
		randomBattleMoves: ["stealthrock", "metalburst", "fireblast", "icebeam", "protect", "toxic", "roar"],
		eventPokemon: [
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "moves": ["metalsound", "takedown", "bodyslam", "protect"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	bastiodon: {
		randomBattleMoves: ["stealthrock", "rockblast", "metalburst", "protect", "toxic", "roar"],
		randomDoubleBattleMoves: ["stealthrock", "stoneedge", "metalburst", "protect", "wideguard", "guardsplit"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	burmy: {
		randomBattleMoves: ["bugbite", "hiddenpowerice", "electroweb", "protect"],
		tier: "LC",
	},
	wormadam: {
		randomBattleMoves: ["gigadrain", "bugbuzz", "quiverdance", "hiddenpowerrock", "leafstorm"],
		randomDoubleBattleMoves: ["leafstorm", "gigadrain", "bugbuzz", "hiddenpowerice", "hiddenpowerrock", "stringshot", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	wormadamsandy: {
		randomBattleMoves: ["earthquake", "toxic", "protect", "stealthrock"],
		randomDoubleBattleMoves: ["earthquake", "suckerpunch", "rockblast", "protect", "stringshot"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	wormadamtrash: {
		randomBattleMoves: ["stealthrock", "toxic", "gyroball", "protect"],
		randomDoubleBattleMoves: ["strugglebug", "stringshot", "gyroball", "bugbuzz", "flashcannon", "suckerpunch", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	mothim: {
		randomBattleMoves: ["quiverdance", "bugbuzz", "airslash", "gigadrain", "hiddenpowerground", "uturn"],
		randomDoubleBattleMoves: ["quiverdance", "bugbuzz", "airslash", "gigadrain", "roost", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	combee: {
		randomBattleMoves: ["bugbuzz", "aircutter", "endeavor", "ominouswind", "tailwind"],
		tier: "LC",
	},
	vespiquen: {
		randomBattleMoves: ["substitute", "healorder", "toxic", "attackorder", "defendorder", "infestation"],
		randomDoubleBattleMoves: ["tailwind", "healorder", "stringshot", "attackorder", "strugglebug", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pachirisu: {
		randomBattleMoves: ["nuzzle", "thunderbolt", "superfang", "toxic", "uturn"],
		randomDoubleBattleMoves: ["nuzzle", "thunderbolt", "superfang", "followme", "uturn", "helpinghand", "protect"],
		eventPokemon: [
			{"generation": 6, "level": 50, "nature": "Impish", "ivs": {"hp": 31, "atk": 31, "def": 31, "spa": 14, "spd": 31, "spe": 31}, "isHidden": true, "moves": ["nuzzle", "superfang", "followme", "protect"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	buizel: {
		randomBattleMoves: ["waterfall", "aquajet", "switcheroo", "brickbreak", "bulkup", "icepunch"],
		tier: "LC",
	},
	floatzel: {
		randomBattleMoves: ["bulkup", "liquidation", "icepunch", "substitute", "taunt", "aquajet", "brickbreak"],
		randomDoubleBattleMoves: ["liquidation", "aquajet", "switcheroo", "raindance", "protect", "icepunch", "crunch", "taunt"],
		encounters: [
			{"generation": 4, "level": 22},
			{"generation": 5, "level": 10, "isHidden": false},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	cherubi: {
		randomBattleMoves: ["sunnyday", "solarbeam", "weatherball", "hiddenpowerice", "aromatherapy", "dazzlinggleam"],
		tier: "LC",
	},
	cherrim: {
		randomBattleMoves: ["energyball", "dazzlinggleam", "hiddenpowerfire", "synthesis", "healingwish"],
		randomDoubleBattleMoves: ["sunnyday", "solarbeam", "weatherball", "gigadrain", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	cherrimsunshine: {
		randomBattleMoves: ["sunnyday", "solarbeam", "gigadrain", "weatherball", "hiddenpowerice"],
		randomDoubleBattleMoves: ["sunnyday", "solarbeam", "gigadrain", "weatherball", "protect"],
		requiredAbility: 'Flower Gift',
		battleOnly: true,
	},
	shellos: {
		randomBattleMoves: ["scald", "clearsmog", "recover", "toxic", "icebeam", "stockpile"],
		tier: "LC",
	},
	gastrodon: {
		randomBattleMoves: ["earthquake", "icebeam", "scald", "toxic", "recover", "clearsmog"],
		randomDoubleBattleMoves: ["earthpower", "icebeam", "scald", "muddywater", "recover", "icywind", "protect"],
		encounters: [
			{"generation": 4, "level": 20},
		],
		tier: "PU",
		doublesTier: "DOU",
	},
	drifloon: {
		randomBattleMoves: ["shadowball", "substitute", "calmmind", "hypnosis", "hiddenpowerfighting", "thunderbolt", "destinybond", "willowisp"],
		tier: "LC Uber",
	},
	drifblim: {
		randomBattleMoves: ["acrobatics", "willowisp", "substitute", "destinybond", "shadowball", "hex"],
		randomDoubleBattleMoves: ["shadowball", "substitute", "hypnosis", "hiddenpowerfighting", "thunderbolt", "destinybond", "willowisp", "protect"],
		encounters: [
			{"generation": 7, "level": 11, "isHidden": false, "pokeball": "pokeball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	buneary: {
		randomBattleMoves: ["fakeout", "return", "switcheroo", "thunderpunch", "jumpkick", "firepunch", "icepunch", "healingwish"],
		tier: "LC",
	},
	lopunny: {
		randomBattleMoves: ["return", "switcheroo", "highjumpkick", "icepunch", "healingwish"],
		randomDoubleBattleMoves: ["return", "switcheroo", "highjumpkick", "firepunch", "icepunch", "fakeout", "protect", "encore"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	lopunnymega: {
		randomBattleMoves: ["return", "highjumpkick", "substitute", "fakeout", "icepunch"],
		randomDoubleBattleMoves: ["return", "highjumpkick", "protect", "fakeout", "icepunch", "encore"],
		requiredItem: "Lopunnite",
		tier: "OU",
		doublesTier: "DUU",
	},
	glameow: {
		randomBattleMoves: ["fakeout", "uturn", "suckerpunch", "hypnosis", "quickattack", "return", "foulplay"],
		tier: "LC",
	},
	purugly: {
		randomBattleMoves: ["fakeout", "uturn", "suckerpunch", "quickattack", "return", "knockoff"],
		randomDoubleBattleMoves: ["fakeout", "uturn", "suckerpunch", "quickattack", "return", "knockoff", "protect"],
		encounters: [
			{"generation": 6, "level": 32, "maxEggMoves": 1},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	stunky: {
		randomBattleMoves: ["pursuit", "suckerpunch", "crunch", "fireblast", "explosion", "taunt", "playrough", "defog"],
		tier: "LC",
	},
	skuntank: {
		randomBattleMoves: ["pursuit", "suckerpunch", "crunch", "fireblast", "taunt", "poisonjab", "defog"],
		randomDoubleBattleMoves: ["protect", "suckerpunch", "crunch", "fireblast", "taunt", "poisonjab", "playrough", "snarl"],
		encounters: [
			{"generation": 4, "level": 29},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	bronzor: {
		randomBattleMoves: ["stealthrock", "psychic", "toxic", "hypnosis", "reflect", "lightscreen", "trickroom", "trick"],
		tier: "LC",
	},
	bronzong: {
		randomBattleMoves: ["stealthrock", "earthquake", "toxic", "reflect", "lightscreen", "trickroom", "explosion", "gyroball"],
		randomDoubleBattleMoves: ["earthquake", "protect", "reflect", "lightscreen", "trickroom", "explosion", "gyroball"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "RU",
		doublesTier: "DOU",
	},
	chatot: {
		randomBattleMoves: ["nastyplot", "boomburst", "heatwave", "hiddenpowerground", "substitute", "chatter", "uturn"],
		randomDoubleBattleMoves: ["nastyplot", "heatwave", "encore", "substitute", "chatter", "uturn", "protect", "hypervoice", "boomburst"],
		eventPokemon: [
			{"generation": 4, "level": 25, "gender": "M", "nature": "Jolly", "abilities": ["keeneye"], "moves": ["mirrormove", "furyattack", "chatter", "taunt"]},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	spiritomb: {
		randomBattleMoves: ["shadowsneak", "pursuit", "willowisp", "darkpulse", "rest", "sleeptalk", "foulplay", "calmmind"],
		randomDoubleBattleMoves: ["shadowsneak", "icywind", "willowisp", "snarl", "darkpulse", "protect", "foulplay", "painsplit"],
		eventPokemon: [
			{"generation": 5, "level": 61, "gender": "F", "nature": "Quiet", "ivs": {"hp": 30, "atk": 30, "def": 30, "spa": 30, "spd": 30, "spe": 30}, "isHidden": false, "moves": ["darkpulse", "psychic", "silverwind", "embargo"], "pokeball": "cherishball"},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	gible: {
		randomBattleMoves: ["outrage", "dragonclaw", "earthquake", "fireblast", "stoneedge", "stealthrock"],
		tier: "LC",
	},
	gabite: {
		randomBattleMoves: ["outrage", "dragonclaw", "earthquake", "fireblast", "stoneedge", "stealthrock"],
		tier: "NFE",
	},
	garchomp: {
		randomBattleMoves: ["outrage", "dragonclaw", "earthquake", "stoneedge", "fireblast", "swordsdance", "stealthrock", "firefang"],
		randomDoubleBattleMoves: ["substitute", "dragonclaw", "earthquake", "stoneedge", "rockslide", "swordsdance", "protect", "firefang"],
		eventPokemon: [
			{"generation": 5, "level": 100, "gender": "M", "isHidden": false, "moves": ["outrage", "earthquake", "swordsdance", "stoneedge"], "pokeball": "cherishball"},
			{"generation": 5, "level": 48, "gender": "M", "isHidden": true, "moves": ["dragonclaw", "dig", "crunch", "outrage"]},
			{"generation": 6, "level": 48, "gender": "M", "isHidden": false, "moves": ["dracometeor", "dragonclaw", "dig", "crunch"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "gender": "M", "isHidden": false, "moves": ["slash", "dragonclaw", "dig", "crunch"], "pokeball": "cherishball"},
			{"generation": 6, "level": 66, "gender": "F", "perfectIVs": 3, "isHidden": false, "moves": ["dragonrush", "earthquake", "brickbreak", "gigaimpact"], "pokeball": "cherishball"},
		],
		tier: "OU",
		doublesTier: "DOU",
	},
	garchompmega: {
		randomBattleMoves: ["outrage", "dracometeor", "earthquake", "stoneedge", "fireblast", "swordsdance"],
		randomDoubleBattleMoves: ["substitute", "dragonclaw", "earthquake", "stoneedge", "rockslide", "swordsdance", "protect", "fireblast"],
		requiredItem: "Garchompite",
		tier: "(OU)",
		doublesTier: "(DOU)",
	},
	riolu: {
		randomBattleMoves: ["crunch", "rockslide", "copycat", "drainpunch", "highjumpkick", "icepunch", "swordsdance"],
		eventPokemon: [
			{"generation": 4, "level": 30, "gender": "M", "nature": "Serious", "abilities": ["steadfast"], "moves": ["aurasphere", "shadowclaw", "bulletpunch", "drainpunch"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	lucario: {
		randomBattleMoves: ["swordsdance", "closecombat", "crunch", "extremespeed", "icepunch", "meteormash", "nastyplot", "aurasphere", "darkpulse", "vacuumwave", "flashcannon"],
		randomDoubleBattleMoves: ["followme", "closecombat", "crunch", "extremespeed", "icepunch", "bulletpunch", "aurasphere", "darkpulse", "vacuumwave", "flashcannon", "protect"],
		eventPokemon: [
			{"generation": 4, "level": 50, "gender": "M", "nature": "Modest", "abilities": ["steadfast"], "moves": ["aurasphere", "darkpulse", "dragonpulse", "waterpulse"], "pokeball": "cherishball"},
			{"generation": 4, "level": 30, "gender": "M", "nature": "Adamant", "abilities": ["innerfocus"], "moves": ["forcepalm", "bonerush", "sunnyday", "blazekick"], "pokeball": "cherishball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["detect", "metalclaw", "counter", "bulletpunch"]},
			{"generation": 5, "level": 50, "gender": "M", "nature": "Naughty", "ivs": {"atk": 31}, "isHidden": true, "moves": ["bulletpunch", "closecombat", "stoneedge", "shadowclaw"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "nature": "Jolly", "isHidden": false, "abilities": ["innerfocus"], "moves": ["closecombat", "aurasphere", "flashcannon", "quickattack"], "pokeball": "cherishball"},
			{"generation": 7, "level": 40, "gender": "M", "nature": "Serious", "isHidden": false, "abilities": ["steadfast"], "moves": ["aurasphere", "highjumpkick", "dragonpulse", "extremespeed"], "pokeball": "pokeball"},
		],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	lucariomega: {
		randomBattleMoves: ["swordsdance", "closecombat", "crunch", "icepunch", "bulletpunch", "meteormash", "nastyplot", "aurasphere", "darkpulse", "flashcannon"],
		randomDoubleBattleMoves: ["followme", "closecombat", "crunch", "extremespeed", "icepunch", "bulletpunch", "meteormash", "aurasphere", "darkpulse", "vacuumwave", "flashcannon", "protect"],
		requiredItem: "Lucarionite",
		tier: "Uber",
		doublesTier: "(DUU)",
	},
	hippopotas: {
		randomBattleMoves: ["earthquake", "slackoff", "whirlwind", "stealthrock", "protect", "toxic", "stockpile"],
		tier: "LC",
	},
	hippowdon: {
		randomBattleMoves: ["earthquake", "slackoff", "whirlwind", "stealthrock", "toxic", "stoneedge"],
		randomDoubleBattleMoves: ["earthquake", "slackoff", "rockslide", "stealthrock", "protect", "stoneedge", "whirlwind"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	skorupi: {
		randomBattleMoves: ["toxicspikes", "xscissor", "poisonjab", "knockoff", "pinmissile", "whirlwind"],
		tier: "LC",
	},
	drapion: {
		randomBattleMoves: ["knockoff", "taunt", "toxicspikes", "poisonjab", "whirlwind", "swordsdance", "aquatail", "earthquake"],
		randomDoubleBattleMoves: ["snarl", "taunt", "protect", "earthquake", "aquatail", "swordsdance", "poisonjab", "knockoff"],
		encounters: [
			{"generation": 4, "level": 22, "pokeball": "safariball"},
			{"generation": 6, "level": 30},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	croagunk: {
		randomBattleMoves: ["fakeout", "vacuumwave", "suckerpunch", "drainpunch", "darkpulse", "knockoff", "gunkshot", "toxic"],
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["astonish", "mudslap", "poisonsting", "taunt"]},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["mudslap", "poisonsting", "taunt", "poisonjab"]},
		],
		tier: "LC",
	},
	toxicroak: {
		randomBattleMoves: ["swordsdance", "gunkshot", "drainpunch", "suckerpunch", "icepunch", "substitute"],
		randomDoubleBattleMoves: ["suckerpunch", "drainpunch", "substitute", "swordsdance", "knockoff", "icepunch", "gunkshot", "fakeout", "protect"],
		encounters: [
			{"generation": 4, "level": 22, "pokeball": "safariball"},
			{"generation": 6, "level": 30},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	carnivine: {
		randomBattleMoves: ["swordsdance", "powerwhip", "return", "sleeppowder", "substitute", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "powerwhip", "return", "sleeppowder", "substitute", "leechseed", "knockoff", "ragepowder", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	finneon: {
		randomBattleMoves: ["surf", "uturn", "icebeam", "hiddenpowerelectric", "hiddenpowergrass"],
		tier: "LC",
	},
	lumineon: {
		randomBattleMoves: ["scald", "icebeam", "uturn", "toxic", "defog"],
		randomDoubleBattleMoves: ["surf", "uturn", "icebeam", "toxic", "raindance", "tailwind", "scald", "protect"],
		encounters: [
			{"generation": 4, "level": 20},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	snover: {
		randomBattleMoves: ["blizzard", "iceshard", "gigadrain", "leechseed", "substitute", "woodhammer"],
		tier: "LC",
	},
	abomasnow: {
		randomBattleMoves: ["woodhammer", "iceshard", "blizzard", "gigadrain", "leechseed", "substitute", "focuspunch", "earthquake"],
		randomDoubleBattleMoves: ["blizzard", "iceshard", "gigadrain", "protect", "focusblast", "woodhammer", "earthquake"],
		encounters: [
			{"generation": 4, "level": 38},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	abomasnowmega: {
		randomBattleMoves: ["blizzard", "gigadrain", "woodhammer", "earthquake", "iceshard", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["blizzard", "iceshard", "gigadrain", "protect", "focusblast", "woodhammer", "earthquake"],
		requiredItem: "Abomasite",
		tier: "NU",
		doublesTier: "DUU",
	},
	rotom: {
		randomBattleMoves: ["thunderbolt", "voltswitch", "shadowball", "substitute", "painsplit", "hiddenpowerice", "trick", "willowisp"],
		randomDoubleBattleMoves: ["thunderbolt", "voltswitch", "shadowball", "substitute", "painsplit", "hiddenpowerice", "trick", "willowisp", "electroweb", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 10, "nature": "Naughty", "moves": ["uproar", "astonish", "trick", "thundershock"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "nature": "Quirky", "moves": ["shockwave", "astonish", "trick", "thunderwave"], "pokeball": "cherishball"},
			{"generation": 7, "level": 10, "moves": ["uproar", "confide", "disarmingvoice"], "pokeball": "cherishball"},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	rotomheat: {
		randomBattleMoves: ["overheat", "thunderbolt", "voltswitch", "hiddenpowerice", "painsplit", "willowisp"],
		randomDoubleBattleMoves: ["overheat", "thunderbolt", "voltswitch", "substitute", "painsplit", "hiddenpowerice", "willowisp", "electroweb", "protect"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	rotomwash: {
		randomBattleMoves: ["hydropump", "thunderbolt", "voltswitch", "painsplit", "hiddenpowerice", "willowisp", "trick"],
		randomDoubleBattleMoves: ["hydropump", "thunderbolt", "voltswitch", "substitute", "painsplit", "hiddenpowerice", "willowisp", "trick", "electroweb", "protect", "hiddenpowergrass"],
		tier: "OU",
		doublesTier: "DUU",
	},
	rotomfrost: {
		randomBattleMoves: ["blizzard", "thunderbolt", "voltswitch", "substitute", "painsplit", "willowisp", "trick"],
		randomDoubleBattleMoves: ["blizzard", "thunderbolt", "voltswitch", "substitute", "painsplit", "willowisp", "trick", "electroweb", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	rotomfan: {
		randomBattleMoves: ["airslash", "thunderbolt", "voltswitch", "painsplit", "willowisp", "defog"],
		randomDoubleBattleMoves: ["airslash", "thunderbolt", "voltswitch", "substitute", "painsplit", "hiddenpowerice", "willowisp", "electroweb", "discharge", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	rotommow: {
		randomBattleMoves: ["leafstorm", "thunderbolt", "voltswitch", "defog", "hiddenpowerfire", "willowisp", "trick"],
		randomDoubleBattleMoves: ["leafstorm", "thunderbolt", "voltswitch", "substitute", "painsplit", "hiddenpowerfire", "willowisp", "trick", "electroweb", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	uxie: {
		randomBattleMoves: ["stealthrock", "thunderwave", "psychic", "uturn", "healbell", "knockoff", "yawn"],
		randomDoubleBattleMoves: ["uturn", "psyshock", "yawn", "healbell", "stealthrock", "thunderbolt", "protect", "helpinghand", "thunderwave"],
		eventPokemon: [
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["confusion", "yawn", "futuresight", "amnesia"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["swift", "yawn", "futuresight", "amnesia"]},
			{"generation": 5, "level": 65, "shiny": 1, "moves": ["futuresight", "amnesia", "extrasensory", "flail"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["yawn", "futuresight", "amnesia", "extrasensory"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["extrasensory", "yawn", "amnesia", "swift"]},
		],
		eventOnly: true,
		tier: "RU",
		doublesTier: "(DUU)",
	},
	mesprit: {
		randomBattleMoves: ["calmmind", "psychic", "psyshock", "energyball", "signalbeam", "hiddenpowerfire", "icebeam", "healingwish", "stealthrock", "uturn"],
		randomDoubleBattleMoves: ["calmmind", "psychic", "thunderbolt", "icebeam", "substitute", "uturn", "trick", "protect", "knockoff", "helpinghand"],
		eventPokemon: [
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["confusion", "luckychant", "futuresight", "charm"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["swift", "luckychant", "futuresight", "charm"]},
			{"generation": 5, "level": 50, "shiny": 1, "moves": ["futuresight", "charm", "extrasensory", "copycat"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["luckychant", "futuresight", "charm", "extrasensory"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["extrasensory", "charm", "futuresight", "swift"]},
		],
		eventOnly: true,
		tier: "PU",
		doublesTier: "(DUU)",
	},
	azelf: {
		randomBattleMoves: ["nastyplot", "psyshock", "fireblast", "dazzlinggleam", "stealthrock", "knockoff", "taunt", "explosion", "uturn"],
		randomDoubleBattleMoves: ["nastyplot", "psychic", "fireblast", "thunderbolt", "icepunch", "knockoff", "zenheadbutt", "uturn", "trick", "taunt", "protect", "dazzlinggleam"],
		eventPokemon: [
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["confusion", "uproar", "futuresight", "nastyplot"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["swift", "uproar", "futuresight", "nastyplot"]},
			{"generation": 5, "level": 50, "shiny": 1, "moves": ["futuresight", "nastyplot", "extrasensory", "lastresort"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["uproar", "futuresight", "nastyplot", "extrasensory"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["extrasensory", "nastyplot", "uproar", "swift"]},
		],
		eventOnly: true,
		tier: "UU",
		doublesTier: "(DUU)",
	},
	dialga: {
		randomBattleMoves: ["stealthrock", "toxic", "dracometeor", "fireblast", "flashcannon", "roar", "thunderbolt"],
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "protect", "thunderbolt", "flashcannon", "earthpower", "fireblast", "aurasphere"],
		eventPokemon: [
			{"generation": 4, "level": 47, "shiny": 1, "moves": ["metalclaw", "ancientpower", "dragonclaw", "roaroftime"]},
			{"generation": 4, "level": 70, "shiny": 1, "moves": ["roaroftime", "healblock", "earthpower", "slash"]},
			{"generation": 4, "level": 1, "shiny": 1, "moves": ["dragonbreath", "scaryface"]},
			{"generation": 5, "level": 5, "isHidden": true, "moves": ["dragonbreath", "scaryface"], "pokeball": "dreamball"},
			{"generation": 5, "level": 100, "shiny": true, "isHidden": false, "moves": ["dragonpulse", "dracometeor", "aurasphere", "roaroftime"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "isHidden": false, "moves": ["aurasphere", "irontail", "roaroftime", "flashcannon"]},
			{"generation": 6, "level": 100, "nature": "Modest", "isHidden": true, "moves": ["metalburst", "overheat", "roaroftime", "flashcannon"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["aurasphere", "irontail", "roaroftime", "flashcannon"]},
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["aurasphere", "irontail", "roaroftime", "flashcannon"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["roaroftime", "aurasphere", "dracometeor", "flashcannon"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "isHidden": false, "moves": ["flashcannon", "dracometeor", "roaroftime", "aurasphere"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	palkia: {
		randomBattleMoves: ["spacialrend", "dracometeor", "hydropump", "thunderwave", "dragontail", "fireblast"],
		randomDoubleBattleMoves: ["spacialrend", "dracometeor", "surf", "hydropump", "thunderbolt", "fireblast", "protect"],
		eventPokemon: [
			{"generation": 4, "level": 47, "shiny": 1, "moves": ["waterpulse", "ancientpower", "dragonclaw", "spacialrend"]},
			{"generation": 4, "level": 70, "shiny": 1, "moves": ["spacialrend", "healblock", "earthpower", "slash"]},
			{"generation": 4, "level": 1, "shiny": 1, "moves": ["dragonbreath", "scaryface"]},
			{"generation": 5, "level": 5, "isHidden": true, "moves": ["dragonbreath", "scaryface"], "pokeball": "dreamball"},
			{"generation": 5, "level": 100, "shiny": true, "isHidden": false, "moves": ["hydropump", "dracometeor", "spacialrend", "aurasphere"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "isHidden": false, "moves": ["earthpower", "aurasphere", "spacialrend", "hydropump"]},
			{"generation": 6, "level": 100, "nature": "Timid", "isHidden": true, "moves": ["earthpower", "aurasphere", "spacialrend", "hydropump"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["aurasphere", "aquatail", "spacialrend", "hydropump"]},
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["aurasphere", "aquatail", "spacialrend", "hydropump"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["spacialrend", "aurasphere", "dracometeor", "hydropump"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "isHidden": false, "moves": ["hydropump", "dracometeor", "spacialrend", "aurasphere"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	heatran: {
		randomBattleMoves: ["magmastorm", "lavaplume", "stealthrock", "earthpower", "flashcannon", "protect", "toxic", "roar"],
		randomDoubleBattleMoves: ["heatwave", "substitute", "earthpower", "protect", "eruption", "willowisp"],
		eventPokemon: [
			{"generation": 4, "level": 70, "shiny": 1, "moves": ["scaryface", "lavaplume", "firespin", "ironhead"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["metalsound", "crunch", "scaryface", "lavaplume"]},
			{"generation": 4, "level": 50, "nature": "Quiet", "moves": ["eruption", "magmastorm", "earthpower", "ancientpower"], "pokeball": "pokeball"},
			{"generation": 5, "level": 68, "shiny": 1, "isHidden": false, "moves": ["scaryface", "lavaplume", "firespin", "ironhead"]},
			{"generation": 6, "level": 50, "shiny": 1, "isHidden": false, "moves": ["metalsound", "crunch", "scaryface", "lavaplume"]},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["crunch", "scaryface", "lavaplume", "firespin"]},
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["crunch", "scaryface", "lavaplume", "firespin"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["magmastorm", "heatwave", "earthpower", "flashcannon"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		unreleasedHidden: true,
		tier: "OU",
		doublesTier: "DOU",
	},
	regigigas: {
		randomBattleMoves: ["thunderwave", "confuseray", "substitute", "return", "knockoff", "drainpunch"],
		randomDoubleBattleMoves: ["thunderwave", "substitute", "return", "icywind", "rockslide", "earthquake", "knockoff", "wideguard"],
		eventPokemon: [
			{"generation": 4, "level": 70, "shiny": 1, "moves": ["confuseray", "stomp", "superpower", "zenheadbutt"]},
			{"generation": 4, "level": 1, "shiny": 1, "moves": ["dizzypunch", "knockoff", "foresight", "confuseray"]},
			{"generation": 4, "level": 100, "moves": ["ironhead", "rockslide", "icywind", "crushgrip"], "pokeball": "cherishball"},
			{"generation": 5, "level": 68, "shiny": 1, "moves": ["revenge", "wideguard", "zenheadbutt", "payback"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["foresight", "revenge", "wideguard", "zenheadbutt"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["zenheadbutt", "revenge", "dizzypunch", "confuseray"]},
			{"generation": 7, "level": 60, "moves": ["zenheadbutt", "revenge", "dizzypunch", "confuseray"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["crushgrip", "drainpunch", "zenheadbutt", "heavyslam"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	giratina: {
		randomBattleMoves: ["rest", "sleeptalk", "dragontail", "roar", "willowisp", "shadowball", "dragonpulse"],
		randomDoubleBattleMoves: ["tailwind", "shadowsneak", "protect", "dragontail", "willowisp", "calmmind", "dragonpulse", "shadowball"],
		eventPokemon: [
			{"generation": 4, "level": 70, "shiny": 1, "moves": ["shadowforce", "healblock", "earthpower", "slash"]},
			{"generation": 4, "level": 47, "shiny": 1, "moves": ["ominouswind", "ancientpower", "dragonclaw", "shadowforce"]},
			{"generation": 4, "level": 1, "shiny": 1, "moves": ["dragonbreath", "scaryface"]},
			{"generation": 5, "level": 5, "isHidden": true, "moves": ["dragonbreath", "scaryface"], "pokeball": "dreamball"},
			{"generation": 5, "level": 100, "shiny": true, "isHidden": false, "moves": ["dragonpulse", "dragonclaw", "aurasphere", "shadowforce"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "isHidden": false, "moves": ["aurasphere", "shadowclaw", "shadowforce", "hex"]},
			{"generation": 6, "level": 100, "nature": "Brave", "isHidden": true, "moves": ["aurasphere", "dracometeor", "shadowforce", "ironhead"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["shadowforce", "aurasphere", "earthpower", "dragonclaw"]},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	giratinaorigin: {
		randomBattleMoves: ["dracometeor", "shadowsneak", "dragontail", "willowisp", "defog", "toxic", "shadowball", "earthquake"],
		randomDoubleBattleMoves: ["dracometeor", "shadowsneak", "tailwind", "hiddenpowerfire", "willowisp", "calmmind", "substitute", "dragonpulse", "shadowball", "aurasphere", "protect", "earthquake"],
		eventOnly: true,
		requiredItem: "Griseous Orb",
		tier: "Uber",
		doublesTier: "DUber",
	},
	cresselia: {
		randomBattleMoves: ["moonlight", "psychic", "icebeam", "thunderwave", "toxic", "substitute", "psyshock", "moonblast", "calmmind"],
		randomDoubleBattleMoves: ["psyshock", "icywind", "thunderwave", "trickroom", "moonblast", "moonlight", "skillswap", "reflect", "lightscreen", "icebeam", "protect", "helpinghand"],
		eventPokemon: [
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["mist", "aurorabeam", "futuresight", "slash"]},
			{"generation": 5, "level": 68, "shiny": 1, "moves": ["futuresight", "slash", "moonlight", "psychocut"]},
			{"generation": 5, "level": 68, "nature": "Modest", "moves": ["icebeam", "psyshock", "energyball", "hiddenpower"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["mist", "aurorabeam", "futuresight", "slash"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["aurorabeam", "futuresight", "slash", "moonlight"]},
		],
		eventOnly: true,
		tier: "RU",
		doublesTier: "DOU",
	},
	phione: {
		randomBattleMoves: ["raindance", "scald", "uturn", "rest", "icebeam"],
		randomDoubleBattleMoves: ["raindance", "scald", "uturn", "rest", "icebeam", "helpinghand", "icywind", "protect"],
		eventPokemon: [
			{"generation": 4, "level": 50, "moves": ["grassknot", "raindance", "rest", "surf"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	manaphy: {
		randomBattleMoves: ["tailglow", "surf", "icebeam", "energyball", "psychic"],
		randomDoubleBattleMoves: ["tailglow", "surf", "icebeam", "energyball", "protect", "scald", "icywind", "helpinghand"],
		eventPokemon: [
			{"generation": 4, "level": 5, "moves": ["tailglow", "bubble", "watersport"]},
			{"generation": 4, "level": 1, "shiny": 1, "moves": ["tailglow", "bubble", "watersport"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "moves": ["heartswap", "waterpulse", "whirlpool", "acidarmor"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "nature": "Impish", "moves": ["aquaring", "waterpulse", "watersport", "heartswap"], "pokeball": "cherishball"},
			{"generation": 6, "level": 1, "moves": ["tailglow", "bubble", "watersport", "heartswap"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["tailglow", "bubble", "watersport"], "pokeball": "cherishball"},
			{"generation": 7, "level": 15, "moves": ["tailglow", "waterpulse", "aquaring", "heartswap"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	darkrai: {
		randomBattleMoves: ["hypnosis", "darkpulse", "focusblast", "nastyplot", "substitute", "sludgebomb"],
		randomDoubleBattleMoves: ["darkpulse", "focusblast", "nastyplot", "substitute", "snarl", "icebeam", "protect"],
		eventPokemon: [
			{"generation": 4, "level": 40, "shiny": 1, "moves": ["quickattack", "hypnosis", "pursuit", "nightmare"]},
			{"generation": 4, "level": 50, "moves": ["roaroftime", "spacialrend", "nightmare", "hypnosis"], "pokeball": "cherishball"},
			{"generation": 4, "level": 50, "moves": ["darkvoid", "darkpulse", "shadowball", "doubleteam"], "pokeball": "pokeball"},
			{"generation": 4, "level": 50, "shiny": 1, "moves": ["hypnosis", "feintattack", "nightmare", "doubleteam"]},
			{"generation": 5, "level": 50, "moves": ["darkvoid", "ominouswind", "feintattack", "nightmare"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "moves": ["darkvoid", "darkpulse", "phantomforce", "dreameater"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["darkvoid", "ominouswind", "nightmare", "feintattack"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "moves": ["darkvoid", "feintattack", "nightmare", "ominouswind"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUU",
	},
	shaymin: {
		randomBattleMoves: ["seedflare", "earthpower", "airslash", "psychic", "rest", "substitute", "leechseed"],
		randomDoubleBattleMoves: ["seedflare", "earthpower", "airslash", "hiddenpowerfire", "rest", "substitute", "leechseed", "tailwind", "protect"],
		eventPokemon: [
			{"generation": 4, "level": 50, "moves": ["seedflare", "aromatherapy", "substitute", "energyball"], "pokeball": "cherishball"},
			{"generation": 4, "level": 30, "shiny": 1, "moves": ["growth", "magicalleaf", "leechseed", "synthesis"], "pokeball": "pokeball"},
			{"generation": 5, "level": 50, "moves": ["seedflare", "leechseed", "synthesis", "sweetscent"], "pokeball": "cherishball"},
			{"generation": 6, "level": 15, "moves": ["growth", "magicalleaf", "seedflare", "airslash"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["seedflare", "aromatherapy", "substitute", "energyball"], "pokeball": "cherishball"},
			{"generation": 7, "level": 20, "moves": ["return", "growth", "seedflare", "celebrate"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "RU",
		doublesTier: "(DUU)",
	},
	shayminsky: {
		randomBattleMoves: ["seedflare", "earthpower", "airslash", "hiddenpowerfire", "substitute", "leechseed", "healingwish"],
		randomDoubleBattleMoves: ["seedflare", "earthpower", "airslash", "hiddenpowerfire", "rest", "substitute", "leechseed", "tailwind", "protect", "hiddenpowerice"],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUU",
	},
	arceus: {
		randomBattleMoves: ["swordsdance", "extremespeed", "shadowclaw", "earthquake", "recover"],
		randomDoubleBattleMoves: ["swordsdance", "extremespeed", "shadowclaw", "earthquake", "recover", "protect"],
		eventPokemon: [
			{"generation": 4, "level": 100, "moves": ["judgment", "roaroftime", "spacialrend", "shadowforce"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "moves": ["recover", "hyperbeam", "perishsong", "judgment"]},
			{"generation": 6, "level": 100, "shiny": 1, "moves": ["judgment", "blastburn", "hydrocannon", "earthpower"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["judgment", "perishsong", "hyperbeam", "recover"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["judgment", "extremespeed", "recover", "hyperbeam"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	arceusbug: {
		randomBattleMoves: ["swordsdance", "xscissor", "stoneedge", "recover", "earthquake", "ironhead"],
		randomDoubleBattleMoves: ["swordsdance", "xscissor", "stoneedge", "recover", "earthquake", "ironhead", "protect"],
		eventOnly: true,
		requiredItems: ["Insect Plate", "Buginium Z"],
	},
	arceusdark: {
		randomBattleMoves: ["calmmind", "judgment", "recover", "fireblast", "toxic"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "recover", "focusblast", "safeguard", "snarl", "willowisp", "protect"],
		eventOnly: true,
		requiredItems: ["Dread Plate", "Darkinium Z"],
	},
	arceusdragon: {
		randomBattleMoves: ["swordsdance", "outrage", "extremespeed", "earthquake", "recover", "judgment", "fireblast", "willowisp", "defog"],
		randomDoubleBattleMoves: ["swordsdance", "dragonclaw", "extremespeed", "earthquake", "recover", "protect"],
		eventOnly: true,
		requiredItems: ["Draco Plate", "Dragonium Z"],
	},
	arceuselectric: {
		randomBattleMoves: ["calmmind", "judgment", "recover", "icebeam", "earthpower"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "recover", "icebeam", "protect"],
		eventOnly: true,
		requiredItems: ["Zap Plate", "Electrium Z"],
	},
	arceusfairy: {
		randomBattleMoves: ["calmmind", "judgment", "recover", "willowisp", "defog", "earthpower", "toxic"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "recover", "willowisp", "protect", "earthpower", "thunderbolt"],
		eventOnly: true,
		requiredItems: ["Pixie Plate", "Fairium Z"],
	},
	arceusfighting: {
		randomBattleMoves: ["calmmind", "judgment", "stoneedge", "shadowball", "recover", "roar", "icebeam"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "icebeam", "shadowball", "recover", "willowisp", "protect"],
		eventOnly: true,
		requiredItems: ["Fist Plate", "Fightinium Z"],
	},
	arceusfire: {
		randomBattleMoves: ["calmmind", "fireblast", "roar", "thunderbolt", "icebeam", "recover"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "thunderbolt", "recover", "heatwave", "protect", "willowisp"],
		eventOnly: true,
		requiredItems: ["Flame Plate", "Firium Z"],
	},
	arceusflying: {
		randomBattleMoves: ["calmmind", "judgment", "earthpower", "fireblast", "toxic", "recover"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "safeguard", "recover", "substitute", "tailwind", "protect"],
		eventOnly: true,
		requiredItems: ["Sky Plate", "Flyinium Z"],
	},
	arceusghost: {
		randomBattleMoves: ["swordsdance", "shadowforce", "shadowclaw", "brickbreak", "extremespeed", "recover", "judgment", "toxic", "defog"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "focusblast", "recover", "swordsdance", "shadowforce", "brickbreak", "willowisp", "protect"],
		eventOnly: true,
		requiredItems: ["Spooky Plate", "Ghostium Z"],
	},
	arceusgrass: {
		randomBattleMoves: ["judgment", "recover", "calmmind", "icebeam", "fireblast"],
		randomDoubleBattleMoves: ["calmmind", "icebeam", "judgment", "earthpower", "recover", "safeguard", "thunderwave", "protect"],
		eventOnly: true,
		requiredItems: ["Meadow Plate", "Grassium Z"],
	},
	arceusground: {
		randomBattleMoves: ["swordsdance", "earthquake", "stoneedge", "recover", "judgment", "icebeam", "toxic", "stealthrock"],
		randomDoubleBattleMoves: ["swordsdance", "earthquake", "stoneedge", "recover", "calmmind", "judgment", "icebeam", "rockslide", "protect"],
		eventOnly: true,
		requiredItems: ["Earth Plate", "Groundium Z"],
	},
	arceusice: {
		randomBattleMoves: ["calmmind", "judgment", "thunderbolt", "fireblast", "recover"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "thunderbolt", "focusblast", "recover", "protect", "icywind"],
		eventOnly: true,
		requiredItems: ["Icicle Plate", "Icium Z"],
	},
	arceuspoison: {
		randomBattleMoves: ["calmmind", "sludgebomb", "fireblast", "recover", "icebeam", "defog"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "sludgebomb", "heatwave", "recover", "willowisp", "protect", "earthpower"],
		eventOnly: true,
		requiredItems: ["Toxic Plate", "Poisonium Z"],
	},
	arceuspsychic: {
		randomBattleMoves: ["judgment", "calmmind", "fireblast", "recover", "icebeam", "toxic"],
		randomDoubleBattleMoves: ["calmmind", "psyshock", "focusblast", "recover", "willowisp", "judgment", "protect"],
		eventOnly: true,
		requiredItems: ["Mind Plate", "Psychium Z"],
	},
	arceusrock: {
		randomBattleMoves: ["swordsdance", "earthquake", "stoneedge", "recover", "judgment", "willowisp", "stealthrock"],
		randomDoubleBattleMoves: ["swordsdance", "stoneedge", "recover", "rockslide", "earthquake", "protect"],
		eventOnly: true,
		requiredItems: ["Stone Plate", "Rockium Z"],
	},
	arceussteel: {
		randomBattleMoves: ["judgment", "recover", "willowisp", "defog", "roar", "swordsdance", "ironhead", "earthquake", "stoneedge"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "recover", "protect", "willowisp"],
		eventOnly: true,
		requiredItems: ["Iron Plate", "Steelium Z"],
	},
	arceuswater: {
		randomBattleMoves: ["recover", "calmmind", "judgment", "icebeam", "toxic", "defog"],
		randomDoubleBattleMoves: ["recover", "calmmind", "judgment", "icebeam", "fireblast", "icywind", "surf", "protect"],
		eventOnly: true,
		requiredItems: ["Splash Plate", "Waterium Z"],
	},
	victini: {
		randomBattleMoves: ["vcreate", "boltstrike", "uturn", "zenheadbutt", "grassknot", "focusblast", "blueflare"],
		randomDoubleBattleMoves: ["vcreate", "boltstrike", "uturn", "psychic", "focusblast", "blueflare", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 15, "moves": ["quickattack", "incinerate", "confusion", "endure"]},
			{"generation": 5, "level": 50, "moves": ["vcreate", "fusionflare", "fusionbolt", "searingshot"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "moves": ["vcreate", "blueflare", "boltstrike", "glaciate"], "pokeball": "cherishball"},
			{"generation": 6, "level": 15, "moves": ["confusion", "quickattack", "vcreate", "searingshot"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["incinerate", "quickattack", "endure", "confusion"], "pokeball": "cherishball"},
			{"generation": 6, "level": 15, "moves": ["quickattack", "swagger", "vcreate"], "pokeball": "cherishball"},
			{"generation": 7, "level": 15, "moves": ["vcreate", "reversal", "storedpower", "celebrate"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "OU",
		doublesTier: "DOU",
	},
	snivy: {
		randomBattleMoves: ["leafstorm", "hiddenpowerfire", "substitute", "leechseed", "hiddenpowerice", "gigadrain"],
		eventPokemon: [
			{"generation": 5, "level": 5, "gender": "M", "nature": "Hardy", "isHidden": false, "moves": ["growth", "synthesis", "energyball", "aromatherapy"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	servine: {
		randomBattleMoves: ["leafstorm", "hiddenpowerfire", "substitute", "leechseed", "hiddenpowerice", "gigadrain"],
		tier: "NFE",
	},
	serperior: {
		randomBattleMoves: ["leafstorm", "dragonpulse", "hiddenpowerfire", "substitute", "leechseed", "glare"],
		randomDoubleBattleMoves: ["leafstorm", "hiddenpowerfire", "substitute", "taunt", "dragonpulse", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 100, "gender": "M", "isHidden": false, "moves": ["leafstorm", "substitute", "gigadrain", "leechseed"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "isHidden": true, "moves": ["leafstorm", "holdback", "wringout", "gigadrain"], "pokeball": "cherishball"},
		],
		tier: "OU",
		doublesTier: "(DUU)",
	},
	tepig: {
		randomBattleMoves: ["flamecharge", "flareblitz", "wildcharge", "superpower", "headsmash"],
		tier: "LC",
	},
	pignite: {
		randomBattleMoves: ["flamecharge", "flareblitz", "wildcharge", "superpower", "headsmash"],
		tier: "NFE",
	},
	emboar: {
		randomBattleMoves: ["flareblitz", "superpower", "wildcharge", "headsmash", "fireblast", "grassknot", "suckerpunch"],
		randomDoubleBattleMoves: ["flareblitz", "superpower", "flamecharge", "wildcharge", "headsmash", "protect", "heatwave", "rockslide"],
		eventPokemon: [
			{"generation": 5, "level": 100, "gender": "M", "isHidden": false, "moves": ["flareblitz", "hammerarm", "wildcharge", "headsmash"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "isHidden": true, "moves": ["flareblitz", "holdback", "headsmash", "takedown"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	oshawott: {
		randomBattleMoves: ["swordsdance", "waterfall", "aquajet", "xscissor"],
		tier: "LC",
	},
	dewott: {
		randomBattleMoves: ["swordsdance", "waterfall", "aquajet", "xscissor"],
		tier: "NFE",
	},
	samurott: {
		randomBattleMoves: ["swordsdance", "liquidation", "aquajet", "megahorn", "sacredsword", "hydropump", "icebeam", "grassknot"],
		randomDoubleBattleMoves: ["hydropump", "aquajet", "icebeam", "scald", "hiddenpowergrass", "taunt", "helpinghand", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 100, "gender": "M", "isHidden": false, "moves": ["hydropump", "icebeam", "megahorn", "superpower"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "isHidden": true, "moves": ["razorshell", "holdback", "confide", "hydropump"], "pokeball": "cherishball"},
		],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	patrat: {
		randomBattleMoves: ["swordsdance", "substitute", "hypnosis", "return", "superfang"],
		tier: "LC",
	},
	watchog: {
		randomBattleMoves: ["hypnosis", "substitute", "superfang", "swordsdance", "return", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "knockoff", "substitute", "hypnosis", "return", "superfang", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	lillipup: {
		randomBattleMoves: ["return", "wildcharge", "firefang", "crunch", "icefang"],
		tier: "LC",
	},
	herdier: {
		randomBattleMoves: ["return", "wildcharge", "firefang", "crunch", "icefang"],
		encounters: [
			{"generation": 5, "level": 20, "isHidden": true},
		],
		tier: "NFE",
	},
	stoutland: {
		randomBattleMoves: ["return", "crunch", "wildcharge", "superpower", "icefang"],
		randomDoubleBattleMoves: ["return", "wildcharge", "superpower", "crunch", "icefang", "protect"],
		encounters: [
			{"generation": 5, "level": 23, "isHidden": false},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	purrloin: {
		randomBattleMoves: ["encore", "taunt", "uturn", "knockoff", "thunderwave"],
		tier: "LC",
	},
	liepard: {
		randomBattleMoves: ["knockoff", "encore", "suckerpunch", "thunderwave", "uturn", "substitute", "nastyplot", "darkpulse", "copycat"],
		randomDoubleBattleMoves: ["encore", "thunderwave", "substitute", "knockoff", "playrough", "uturn", "suckerpunch", "fakeout", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 20, "gender": "F", "nature": "Jolly", "isHidden": true, "moves": ["fakeout", "foulplay", "encore", "swagger"]},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	pansage: {
		randomBattleMoves: ["leafstorm", "hiddenpowerfire", "hiddenpowerice", "gigadrain", "nastyplot", "substitute", "leechseed"],
		eventPokemon: [
			{"generation": 5, "level": 1, "shiny": 1, "gender": "M", "nature": "Brave", "ivs": {"spa": 31}, "isHidden": false, "moves": ["bulletseed", "bite", "solarbeam", "dig"], "pokeball": "pokeball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["leer", "lick", "vinewhip", "leafstorm"]},
			{"generation": 5, "level": 30, "gender": "M", "nature": "Serious", "isHidden": false, "moves": ["seedbomb", "solarbeam", "rocktomb", "dig"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	simisage: {
		randomBattleMoves: ["nastyplot", "gigadrain", "focusblast", "hiddenpowerice", "substitute", "leafstorm", "knockoff", "superpower"],
		randomDoubleBattleMoves: ["nastyplot", "leafstorm", "hiddenpowerfire", "hiddenpowerice", "gigadrain", "focusblast", "substitute", "taunt", "synthesis", "helpinghand", "spikyshield"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pansear: {
		randomBattleMoves: ["nastyplot", "fireblast", "hiddenpowerelectric", "hiddenpowerground", "sunnyday", "solarbeam", "overheat"],
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["leer", "lick", "incinerate", "heatwave"]},
		],
		tier: "LC",
	},
	simisear: {
		randomBattleMoves: ["substitute", "nastyplot", "fireblast", "focusblast", "grassknot", "hiddenpowerrock"],
		randomDoubleBattleMoves: ["nastyplot", "fireblast", "focusblast", "grassknot", "hiddenpowerground", "substitute", "heatwave", "taunt", "protect"],
		eventPokemon: [
			{"generation": 6, "level": 5, "perfectIVs": 2, "isHidden": false, "moves": ["workup", "honeclaws", "poweruppunch", "gigaimpact"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	panpour: {
		randomBattleMoves: ["nastyplot", "hydropump", "hiddenpowergrass", "substitute", "surf", "icebeam"],
		eventPokemon: [
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves": ["leer", "lick", "watergun", "hydropump"]},
		],
		tier: "LC",
	},
	simipour: {
		randomBattleMoves: ["substitute", "nastyplot", "hydropump", "icebeam", "focusblast"],
		randomDoubleBattleMoves: ["nastyplot", "hydropump", "icebeam", "substitute", "surf", "taunt", "helpinghand", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	munna: {
		randomBattleMoves: ["psychic", "hiddenpowerfighting", "hypnosis", "calmmind", "moonlight", "thunderwave", "psyshock", "healbell", "signalbeam"],
		tier: "LC",
	},
	musharna: {
		randomBattleMoves: ["calmmind", "psychic", "psyshock", "signalbeam", "moonlight", "healbell", "thunderwave"],
		randomDoubleBattleMoves: ["trickroom", "thunderwave", "moonlight", "psychic", "hiddenpowerfighting", "helpinghand", "psyshock", "hypnosis", "signalbeam", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 50, "isHidden": true, "moves": ["defensecurl", "luckychant", "psybeam", "hypnosis"]},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pidove: {
		randomBattleMoves: ["pluck", "uturn", "return", "detect", "roost", "wish"],
		eventPokemon: [
			{"generation": 5, "level": 1, "shiny": 1, "gender": "F", "nature": "Hardy", "ivs": {"atk": 31}, "isHidden": false, "abilities": ["superluck"], "moves": ["gust", "quickattack", "aircutter"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	tranquill: {
		randomBattleMoves: ["pluck", "uturn", "return", "detect", "roost", "wish"],
		tier: "NFE",
	},
	unfezant: {
		randomBattleMoves: ["return", "pluck", "hypnosis", "tailwind", "uturn", "roost", "nightslash"],
		randomDoubleBattleMoves: ["pluck", "uturn", "return", "protect", "tailwind", "taunt", "roost", "nightslash"],
		encounters: [
			{"generation": 5, "level": 22, "isHidden": false},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	blitzle: {
		randomBattleMoves: ["voltswitch", "hiddenpowergrass", "wildcharge", "mefirst"],
		tier: "LC",
	},
	zebstrika: {
		randomBattleMoves: ["voltswitch", "hiddenpowergrass", "overheat", "wildcharge", "thunderbolt"],
		randomDoubleBattleMoves: ["voltswitch", "hiddenpowergrass", "overheat", "wildcharge", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	roggenrola: {
		randomBattleMoves: ["autotomize", "stoneedge", "stealthrock", "rockblast", "earthquake", "explosion"],
		tier: "LC",
	},
	boldore: {
		randomBattleMoves: ["autotomize", "stoneedge", "stealthrock", "rockblast", "earthquake", "explosion"],
		encounters: [
			{"generation": 5, "level": 24, "isHidden": false},
		],
		tier: "NFE",
	},
	gigalith: {
		randomBattleMoves: ["stealthrock", "rockblast", "earthquake", "explosion", "stoneedge", "superpower"],
		randomDoubleBattleMoves: ["stealthrock", "rockslide", "earthquake", "explosion", "stoneedge", "autotomize", "superpower", "wideguard", "protect"],
		tier: "NUBL",
		doublesTier: "(DUU)",
	},
	woobat: {
		randomBattleMoves: ["calmmind", "psychic", "airslash", "gigadrain", "roost", "heatwave", "storedpower"],
		tier: "LC",
	},
	swoobat: {
		randomBattleMoves: ["substitute", "calmmind", "storedpower", "heatwave", "psychic", "airslash", "roost"],
		randomDoubleBattleMoves: ["calmmind", "psychic", "airslash", "gigadrain", "protect", "heatwave", "tailwind"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	drilbur: {
		randomBattleMoves: ["swordsdance", "rapidspin", "earthquake", "rockslide", "shadowclaw", "return", "xscissor"],
		tier: "LC",
	},
	excadrill: {
		randomBattleMoves: ["swordsdance", "earthquake", "ironhead", "rockslide", "rapidspin"],
		randomDoubleBattleMoves: ["swordsdance", "drillrun", "earthquake", "rockslide", "ironhead", "substitute", "protect"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "OU",
		doublesTier: "DOU",
	},
	audino: {
		randomBattleMoves: ["wish", "protect", "healbell", "toxic", "thunderwave", "reflect", "lightscreen", "doubleedge"],
		randomDoubleBattleMoves: ["healpulse", "protect", "healbell", "trickroom", "thunderwave", "reflect", "lightscreen", "doubleedge", "helpinghand", "hypervoice"],
		eventPokemon: [
			{"generation": 5, "level": 30, "gender": "F", "nature": "Calm", "isHidden": false, "abilities": ["healer"], "moves": ["healpulse", "helpinghand", "refresh", "doubleslap"], "pokeball": "cherishball"},
			{"generation": 5, "level": 30, "gender": "F", "nature": "Serious", "isHidden": false, "abilities": ["healer"], "moves": ["healpulse", "helpinghand", "refresh", "present"], "pokeball": "cherishball"},
			{"generation": 5, "level": 30, "gender": "F", "nature": "Jolly", "isHidden": false, "abilities": ["healer"], "moves": ["healpulse", "helpinghand", "refresh", "present"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "nature": "Relaxed", "isHidden": false, "abilities": ["regenerator"], "moves": ["trickroom", "healpulse", "simplebeam", "thunderbolt"], "pokeball": "cherishball"},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	audinomega: {
		randomBattleMoves: ["wish", "calmmind", "healbell", "dazzlinggleam", "hypervoice", "protect", "fireblast"],
		randomDoubleBattleMoves: ["healpulse", "protect", "healbell", "trickroom", "thunderwave", "hypervoice", "helpinghand", "dazzlinggleam"],
		requiredItem: "Audinite",
		tier: "NU",
		doublesTier: "(DUU)",
	},
	timburr: {
		randomBattleMoves: ["machpunch", "bulkup", "drainpunch", "icepunch", "knockoff"],
		tier: "LC",
	},
	gurdurr: {
		randomBattleMoves: ["bulkup", "machpunch", "drainpunch", "icepunch", "knockoff"],
		tier: "PU",
		doublesTier: "NFE",
	},
	conkeldurr: {
		randomBattleMoves: ["bulkup", "drainpunch", "icepunch", "knockoff", "machpunch"],
		randomDoubleBattleMoves: ["wideguard", "machpunch", "drainpunch", "icepunch", "knockoff", "protect"],
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	tympole: {
		randomBattleMoves: ["hydropump", "surf", "sludgewave", "earthpower", "hiddenpowerelectric"],
		tier: "LC",
	},
	palpitoad: {
		randomBattleMoves: ["hydropump", "surf", "sludgewave", "earthpower", "hiddenpowerelectric", "stealthrock"],
		tier: "NFE",
	},
	seismitoad: {
		randomBattleMoves: ["hydropump", "scald", "sludgewave", "earthquake", "knockoff", "stealthrock", "toxic", "raindance"],
		randomDoubleBattleMoves: ["hydropump", "muddywater", "sludgebomb", "earthquake", "hiddenpowerelectric", "icywind", "protect"],
		encounters: [
			{"generation": 5, "level": 15, "isHidden": false},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	throh: {
		randomBattleMoves: ["bulkup", "circlethrow", "icepunch", "stormthrow", "rest", "sleeptalk", "knockoff"],
		randomDoubleBattleMoves: ["helpinghand", "circlethrow", "icepunch", "stormthrow", "wideguard", "knockoff", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	sawk: {
		randomBattleMoves: ["closecombat", "earthquake", "icepunch", "poisonjab", "bulkup", "knockoff"],
		randomDoubleBattleMoves: ["closecombat", "knockoff", "icepunch", "rockslide", "protect"],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	sewaddle: {
		randomBattleMoves: ["calmmind", "gigadrain", "bugbuzz", "hiddenpowerfire", "hiddenpowerice", "airslash"],
		tier: "LC",
	},
	swadloon: {
		randomBattleMoves: ["calmmind", "gigadrain", "bugbuzz", "hiddenpowerfire", "hiddenpowerice", "airslash", "stickyweb"],
		encounters: [
			{"generation": 5, "level": 19, "isHidden": false},
		],
		tier: "NFE",
	},
	leavanny: {
		randomBattleMoves: ["stickyweb", "swordsdance", "leafblade", "xscissor", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "leafblade", "xscissor", "protect", "stickyweb", "poisonjab"],
		encounters: [
			{"generation": 5, "level": 20, "isHidden": true},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	venipede: {
		randomBattleMoves: ["toxicspikes", "infestation", "spikes", "endeavor", "protect"],
		tier: "LC",
	},
	whirlipede: {
		randomBattleMoves: ["toxicspikes", "infestation", "spikes", "endeavor", "protect"],
		tier: "NFE",
	},
	scolipede: {
		randomBattleMoves: ["protect", "spikes", "toxicspikes", "megahorn", "rockslide", "earthquake", "swordsdance", "poisonjab"],
		randomDoubleBattleMoves: ["substitute", "protect", "megahorn", "rockslide", "poisonjab", "swordsdance", "batonpass", "aquatail", "superpower"],
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	cottonee: {
		randomBattleMoves: ["encore", "taunt", "substitute", "leechseed", "toxic", "stunspore"],
		tier: "LC",
	},
	whimsicott: {
		randomBattleMoves: ["encore", "taunt", "leechseed", "uturn", "toxic", "stunspore", "memento", "tailwind", "moonblast", "defog"],
		randomDoubleBattleMoves: ["encore", "taunt", "substitute", "leechseed", "uturn", "helpinghand", "stunspore", "moonblast", "tailwind", "dazzlinggleam", "gigadrain", "protect", "defog"],
		eventPokemon: [
			{"generation": 5, "level": 50, "gender": "F", "nature": "Timid", "ivs": {"spe": 31}, "isHidden": false, "abilities": ["prankster"], "moves": ["swagger", "gigadrain", "beatup", "helpinghand"], "pokeball": "cherishball"},
		],
		tier: "NU",
		doublesTier: "DOU",
	},
	petilil: {
		randomBattleMoves: ["sunnyday", "sleeppowder", "solarbeam", "hiddenpowerfire", "hiddenpowerice", "healingwish"],
		tier: "LC",
	},
	lilligant: {
		randomBattleMoves: ["sleeppowder", "quiverdance", "petaldance", "gigadrain", "hiddenpowerfire", "hiddenpowerrock"],
		randomDoubleBattleMoves: ["quiverdance", "gigadrain", "sleeppowder", "hiddenpowerice", "hiddenpowerfire", "hiddenpowerrock", "petaldance", "helpinghand", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	basculin: {
		randomBattleMoves: ["liquidation", "aquajet", "superpower", "crunch", "headsmash"],
		randomDoubleBattleMoves: ["liquidation", "aquajet", "superpower", "crunch", "doubleedge", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	basculinbluestriped: {
		randomBattleMoves: ["liquidation", "aquajet", "superpower", "crunch", "headsmash"],
		randomDoubleBattleMoves: ["liquidation", "aquajet", "superpower", "crunch", "doubleedge", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	sandile: {
		randomBattleMoves: ["earthquake", "stoneedge", "pursuit", "crunch"],
		tier: "LC",
	},
	krokorok: {
		randomBattleMoves: ["earthquake", "stoneedge", "pursuit", "crunch"],
		tier: "NFE",
	},
	krookodile: {
		randomBattleMoves: ["earthquake", "stoneedge", "pursuit", "knockoff", "stealthrock", "superpower"],
		randomDoubleBattleMoves: ["earthquake", "stoneedge", "protect", "knockoff", "superpower"],
		tier: "UU",
		doublesTier: "DUU",
	},
	darumaka: {
		randomBattleMoves: ["uturn", "flareblitz", "firepunch", "rockslide", "superpower"],
		tier: "LC",
	},
	darmanitan: {
		randomBattleMoves: ["uturn", "flareblitz", "rockslide", "earthquake", "superpower"],
		randomDoubleBattleMoves: ["uturn", "flareblitz", "firepunch", "rockslide", "earthquake", "superpower", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 35, "isHidden": true, "moves": ["thrash", "bellydrum", "flareblitz", "hammerarm"]},
			{"generation": 6, "level": 35, "gender": "M", "nature": "Calm", "ivs": {"hp": 30, "atk": 30, "def": 30, "spa": 30, "spd": 30, "spe": 30}, "isHidden": true, "moves": ["thrash", "bellydrum", "flareblitz", "hammerarm"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 6, "level": 32, "maxEggMoves": 1},
		],
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	darmanitanzen: {
		requiredAbility: "Zen Mode",
		battleOnly: true,
	},
	maractus: {
		randomBattleMoves: ["spikes", "gigadrain", "leechseed", "hiddenpowerfire", "toxic", "suckerpunch", "spikyshield"],
		randomDoubleBattleMoves: ["grassyterrain", "gigadrain", "leechseed", "hiddenpowerfire", "helpinghand", "suckerpunch", "spikyshield"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	dwebble: {
		randomBattleMoves: ["stealthrock", "spikes", "shellsmash", "earthquake", "rockblast", "xscissor", "stoneedge"],
		tier: "LC",
	},
	crustle: {
		randomBattleMoves: ["stealthrock", "spikes", "shellsmash", "earthquake", "rockblast", "xscissor", "stoneedge"],
		randomDoubleBattleMoves: ["protect", "shellsmash", "earthquake", "rockslide", "xscissor", "stoneedge"],
		encounters: [
			{"generation": 6, "level": 33, "maxEggMoves": 1},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	scraggy: {
		randomBattleMoves: ["dragondance", "icepunch", "highjumpkick", "drainpunch", "rest", "bulkup", "crunch", "knockoff"],
		eventPokemon: [
			{"generation": 5, "level": 1, "gender": "M", "nature": "Adamant", "isHidden": false, "abilities": ["moxie"], "moves": ["headbutt", "leer", "highjumpkick", "lowkick"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	scrafty: {
		randomBattleMoves: ["dragondance", "icepunch", "highjumpkick", "drainpunch", "rest", "bulkup", "knockoff"],
		randomDoubleBattleMoves: ["fakeout", "drainpunch", "knockoff", "icepunch", "stoneedge", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 50, "gender": "M", "nature": "Brave", "isHidden": false, "abilities": ["moxie"], "moves": ["firepunch", "payback", "drainpunch", "substitute"], "pokeball": "cherishball"},
		],
		tier: "NU",
		doublesTier: "DOU",
	},
	sigilyph: {
		randomBattleMoves: ["cosmicpower", "roost", "storedpower", "psychoshift"],
		randomDoubleBattleMoves: ["psyshock", "heatwave", "icebeam", "airslash", "energyball", "shadowball", "tailwind", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	yamask: {
		randomBattleMoves: ["nastyplot", "trickroom", "shadowball", "hiddenpowerfighting", "willowisp", "haze", "rest", "sleeptalk", "painsplit"],
		tier: "LC",
	},
	cofagrigus: {
		randomBattleMoves: ["nastyplot", "trickroom", "shadowball", "hiddenpowerfighting", "willowisp", "haze", "painsplit"],
		randomDoubleBattleMoves: ["nastyplot", "trickroom", "shadowball", "hiddenpowerfighting", "willowisp", "protect", "painsplit"],
		eventPokemon: [
			{"generation": 7, "level": 66, "gender": "M", "moves": ["willowisp", "shadowball", "powersplit", "darkpulse"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 6, "level": 32, "maxEggMoves": 1},
		],
		tier: "NUBL",
		doublesTier: "DUU",
	},
	tirtouga: {
		randomBattleMoves: ["shellsmash", "aquajet", "liquidation", "stoneedge", "earthquake", "stealthrock"],
		eventPokemon: [
			{"generation": 5, "level": 15, "gender": "M", "isHidden": false, "abilities": ["sturdy"], "moves": ["bite", "protect", "aquajet", "bodyslam"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	carracosta: {
		randomBattleMoves: ["shellsmash", "aquajet", "liquidation", "stoneedge", "earthquake", "stealthrock"],
		randomDoubleBattleMoves: ["shellsmash", "aquajet", "liquidation", "stoneedge", "earthquake", "protect", "wideguard", "rockslide"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	archen: {
		randomBattleMoves: ["stoneedge", "rockslide", "earthquake", "uturn", "pluck", "headsmash"],
		eventPokemon: [
			{"generation": 5, "level": 15, "gender": "M", "moves": ["headsmash", "wingattack", "doubleteam", "scaryface"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	archeops: {
		randomBattleMoves: ["headsmash", "acrobatics", "stoneedge", "earthquake", "aquatail", "uturn", "tailwind"],
		randomDoubleBattleMoves: ["stoneedge", "rockslide", "earthquake", "uturn", "acrobatics", "tailwind", "taunt", "protect"],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	trubbish: {
		randomBattleMoves: ["clearsmog", "toxicspikes", "spikes", "gunkshot", "painsplit", "toxic"],
		tier: "LC",
	},
	garbodor: {
		randomBattleMoves: ["spikes", "toxicspikes", "gunkshot", "haze", "painsplit", "toxic", "drainpunch"],
		randomDoubleBattleMoves: ["protect", "painsplit", "gunkshot", "seedbomb", "drainpunch", "explosion", "rockblast"],
		encounters: [
			{"generation": 5, "level": 31, "isHidden": false},
			{"generation": 6, "level": 30},
			{"generation": 7, "level": 24},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	zorua: {
		randomBattleMoves: ["suckerpunch", "extrasensory", "darkpulse", "hiddenpowerfighting", "uturn", "knockoff"],
		tier: "LC",
	},
	zoroark: {
		randomBattleMoves: ["suckerpunch", "darkpulse", "focusblast", "flamethrower", "uturn", "nastyplot", "knockoff", "trick", "sludgebomb"],
		randomDoubleBattleMoves: ["suckerpunch", "darkpulse", "focusblast", "flamethrower", "uturn", "nastyplot", "knockoff", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 50, "gender": "M", "nature": "Quirky", "moves": ["agility", "embargo", "punishment", "snarl"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "moves": ["sludgebomb", "darkpulse", "flamethrower", "suckerpunch"], "pokeball": "ultraball"},
			{"generation": 6, "level": 45, "gender": "M", "nature": "Naughty", "moves": ["scaryface", "furyswipes", "nastyplot", "punishment"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 5, "level": 25, "isHidden": false},
		],
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	minccino: {
		randomBattleMoves: ["return", "tailslap", "wakeupslap", "uturn", "aquatail"],
		tier: "LC",
	},
	cinccino: {
		randomBattleMoves: ["tailslap", "aquatail", "uturn", "knockoff", "bulletseed", "rockblast"],
		randomDoubleBattleMoves: ["tailslap", "aquatail", "uturn", "knockoff", "bulletseed", "rockblast", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	gothita: {
		randomBattleMoves: ["psychic", "thunderbolt", "hiddenpowerfighting", "shadowball", "substitute", "calmmind", "trick", "grassknot"],
		tier: "LC Uber",
	},
	gothorita: {
		randomBattleMoves: ["psychic", "psyshock", "thunderbolt", "hiddenpowerfighting", "shadowball", "substitute", "calmmind", "trick", "grassknot"],
		eventPokemon: [
			{"generation": 5, "level": 32, "gender": "M", "isHidden": true, "moves": ["psyshock", "flatter", "futuresight", "mirrorcoat"]},
			{"generation": 5, "level": 32, "gender": "M", "isHidden": true, "moves": ["psyshock", "flatter", "futuresight", "imprison"]},
		],
		encounters: [
			{"generation": 5, "level": 31, "isHidden": false},
		],
		tier: "NFE",
	},
	gothitelle: {
		randomBattleMoves: ["psychic", "thunderbolt", "shadowball", "hiddenpowerfire", "hiddenpowerfighting", "substitute", "calmmind", "trick", "psyshock"],
		randomDoubleBattleMoves: ["psychic", "thunderbolt", "shadowball", "hiddenpowerfighting", "reflect", "lightscreen", "psyshock", "energyball", "trickroom", "taunt", "healpulse", "protect"],
		encounters: [
			{"generation": 5, "level": 34, "isHidden": false},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	solosis: {
		randomBattleMoves: ["calmmind", "recover", "psychic", "hiddenpowerfighting", "shadowball", "trickroom", "psyshock"],
		tier: "LC",
	},
	duosion: {
		randomBattleMoves: ["calmmind", "recover", "psychic", "hiddenpowerfighting", "shadowball", "trickroom", "psyshock"],
		encounters: [
			{"generation": 5, "level": 31, "isHidden": false},
		],
		tier: "NFE",
	},
	reuniclus: {
		randomBattleMoves: ["calmmind", "recover", "psychic", "focusblast", "shadowball", "trickroom", "psyshock"],
		randomDoubleBattleMoves: ["energyball", "helpinghand", "psychic", "focusblast", "shadowball", "trickroom", "psyshock", "hiddenpowerfire", "protect"],
		encounters: [
			{"generation": 5, "level": 34, "isHidden": false},
		],
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	ducklett: {
		randomBattleMoves: ["scald", "airslash", "roost", "hurricane", "icebeam", "hiddenpowergrass", "bravebird", "defog", "liquidation", "aquajet"],
		tier: "LC",
	},
	swanna: {
		randomBattleMoves: ["bravebird", "roost", "hurricane", "icebeam", "raindance", "defog", "scald"],
		randomDoubleBattleMoves: ["airslash", "roost", "hurricane", "surf", "icebeam", "raindance", "tailwind", "scald", "protect"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	vanillite: {
		randomBattleMoves: ["icebeam", "explosion", "hiddenpowerelectric", "hiddenpowerfighting", "autotomize"],
		tier: "LC",
	},
	vanillish: {
		randomBattleMoves: ["icebeam", "explosion", "hiddenpowerelectric", "hiddenpowerfighting", "autotomize"],
		tier: "NFE",
	},
	vanilluxe: {
		randomBattleMoves: ["blizzard", "explosion", "hiddenpowerground", "flashcannon", "autotomize", "freezedry"],
		randomDoubleBattleMoves: ["blizzard", "taunt", "hiddenpowerground", "flashcannon", "autotomize", "protect", "freezedry"],
		tier: "NUBL",
		doublesTier: "(DUU)",
	},
	deerling: {
		randomBattleMoves: ["agility", "seedbomb", "jumpkick", "synthesis", "return", "thunderwave"],
		eventPokemon: [
			{"generation": 5, "level": 30, "gender": "F", "isHidden": true, "moves": ["feintattack", "takedown", "jumpkick", "aromatherapy"]},
		],
		tier: "LC",
	},
	sawsbuck: {
		randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
		randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute", "synthesis", "protect"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	emolga: {
		randomBattleMoves: ["encore", "chargebeam", "uturn", "thunderbolt", "airslash", "roost"],
		randomDoubleBattleMoves: ["helpinghand", "tailwind", "encore", "substitute", "thunderbolt", "airslash", "roost", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	karrablast: {
		randomBattleMoves: ["swordsdance", "megahorn", "return", "substitute"],
		eventPokemon: [
			{"generation": 5, "level": 30, "isHidden": false, "moves": ["furyattack", "headbutt", "falseswipe", "bugbuzz"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "isHidden": false, "moves": ["megahorn", "takedown", "xscissor", "flail"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	escavalier: {
		randomBattleMoves: ["megahorn", "pursuit", "ironhead", "knockoff", "swordsdance", "drillrun"],
		randomDoubleBattleMoves: ["megahorn", "protect", "ironhead", "knockoff", "swordsdance", "drillrun"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	foongus: {
		randomBattleMoves: ["spore", "stunspore", "gigadrain", "clearsmog", "hiddenpowerfire", "synthesis", "sludgebomb"],
		tier: "LC",
	},
	amoonguss: {
		randomBattleMoves: ["spore", "stunspore", "gigadrain", "clearsmog", "hiddenpowerfire", "synthesis", "sludgebomb", "foulplay"],
		randomDoubleBattleMoves: ["spore", "stunspore", "gigadrain", "ragepowder", "hiddenpowerfire", "synthesis", "sludgebomb", "protect"],
		encounters: [
			{"generation": 5, "level": 37, "isHidden": false},
			{"generation": 5, "level": 35, "isHidden": true},
		],
		tier: "UU",
		doublesTier: "DOU",
	},
	frillish: {
		randomBattleMoves: ["scald", "willowisp", "recover", "toxic", "shadowball", "taunt"],
		tier: "LC",
	},
	jellicent: {
		randomBattleMoves: ["scald", "willowisp", "recover", "toxic", "shadowball", "icebeam", "taunt"],
		randomDoubleBattleMoves: ["scald", "willowisp", "recover", "trickroom", "shadowball", "icebeam", "waterspout", "icywind", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 40, "isHidden": true, "moves": ["waterpulse", "ominouswind", "brine", "raindance"]},
		],
		encounters: [
			{"generation": 5, "level": 5, "isHidden": false},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	alomomola: {
		randomBattleMoves: ["wish", "protect", "knockoff", "toxic", "scald"],
		randomDoubleBattleMoves: ["wish", "protect", "knockoff", "icywind", "scald", "helpinghand", "wideguard"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	joltik: {
		randomBattleMoves: ["thunderbolt", "bugbuzz", "hiddenpowerice", "gigadrain", "voltswitch"],
		tier: "LC",
	},
	galvantula: {
		randomBattleMoves: ["thunder", "hiddenpowerice", "gigadrain", "bugbuzz", "voltswitch", "stickyweb"],
		randomDoubleBattleMoves: ["thunder", "hiddenpowerice", "gigadrain", "bugbuzz", "voltswitch", "stickyweb", "protect"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	ferroseed: {
		randomBattleMoves: ["spikes", "stealthrock", "leechseed", "seedbomb", "protect", "thunderwave", "gyroball"],
		tier: "NU",
		doublesTier: "LC",
	},
	ferrothorn: {
		randomBattleMoves: ["spikes", "stealthrock", "leechseed", "powerwhip", "protect", "knockoff", "gyroball"],
		randomDoubleBattleMoves: ["gyroball", "stealthrock", "leechseed", "powerwhip", "knockoff", "protect"],
		tier: "OU",
		doublesTier: "DOU",
	},
	klink: {
		randomBattleMoves: ["shiftgear", "return", "geargrind", "wildcharge", "substitute"],
		tier: "LC",
	},
	klang: {
		randomBattleMoves: ["shiftgear", "return", "geargrind", "wildcharge", "substitute"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "NFE",
	},
	klinklang: {
		randomBattleMoves: ["shiftgear", "return", "geargrind", "wildcharge", "substitute"],
		randomDoubleBattleMoves: ["shiftgear", "return", "geargrind", "wildcharge", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	tynamo: {
		randomBattleMoves: ["spark", "chargebeam", "thunderwave", "tackle"],
		tier: "LC",
	},
	eelektrik: {
		randomBattleMoves: ["uturn", "voltswitch", "acidspray", "wildcharge", "thunderbolt", "gigadrain", "aquatail", "coil"],
		tier: "NFE",
	},
	eelektross: {
		randomBattleMoves: ["thunderbolt", "flamethrower", "uturn", "voltswitch", "acidspray", "gigadrain", "knockoff", "superpower", "aquatail"],
		randomDoubleBattleMoves: ["thunderbolt", "flamethrower", "uturn", "voltswitch", "knockoff", "gigadrain", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	elgyem: {
		randomBattleMoves: ["nastyplot", "psychic", "thunderbolt", "hiddenpowerfighting", "recover", "trickroom", "signalbeam"],
		tier: "LC",
	},
	beheeyem: {
		randomBattleMoves: ["nastyplot", "psychic", "psyshock", "thunderbolt", "hiddenpowerfighting", "trick", "trickroom", "signalbeam"],
		randomDoubleBattleMoves: ["nastyplot", "psychic", "thunderbolt", "hiddenpowerfighting", "recover", "trick", "trickroom", "signalbeam", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	litwick: {
		randomBattleMoves: ["shadowball", "energyball", "fireblast", "hiddenpowerground", "trickroom", "substitute", "painsplit"],
		tier: "LC",
	},
	lampent: {
		randomBattleMoves: ["calmmind", "shadowball", "energyball", "fireblast", "hiddenpowerground", "substitute", "painsplit"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "NFE",
	},
	chandelure: {
		randomBattleMoves: ["calmmind", "shadowball", "energyball", "fireblast", "hiddenpowerground", "trick", "substitute", "painsplit"],
		randomDoubleBattleMoves: ["shadowball", "energyball", "overheat", "heatwave", "hiddenpowerice", "trick", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 50, "gender": "F", "nature": "Modest", "ivs": {"spa": 31}, "isHidden": false, "abilities": ["flashfire"], "moves": ["heatwave", "shadowball", "energyball", "psychic"], "pokeball": "cherishball"},
		],
		tier: "UU",
		doublesTier: "DUU",
	},
	axew: {
		randomBattleMoves: ["dragondance", "outrage", "dragonclaw", "swordsdance", "aquatail", "superpower", "poisonjab", "taunt", "substitute"],
		eventPokemon: [
			{"generation": 5, "level": 1, "shiny": 1, "gender": "M", "nature": "Naive", "ivs": {"spe": 31}, "isHidden": false, "abilities": ["moldbreaker"], "moves": ["scratch", "dragonrage"], "pokeball": "pokeball"},
			{"generation": 5, "level": 10, "gender": "F", "isHidden": false, "abilities": ["moldbreaker"], "moves": ["dragonrage", "return", "endure", "dragonclaw"], "pokeball": "cherishball"},
			{"generation": 5, "level": 30, "gender": "M", "nature": "Naive", "isHidden": false, "abilities": ["rivalry"], "moves": ["dragonrage", "scratch", "outrage", "gigaimpact"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	fraxure: {
		randomBattleMoves: ["dragondance", "swordsdance", "outrage", "dragonclaw", "aquatail", "superpower", "poisonjab", "taunt", "substitute"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "NFE",
	},
	haxorus: {
		randomBattleMoves: ["dragondance", "swordsdance", "outrage", "earthquake", "poisonjab", "taunt"],
		randomDoubleBattleMoves: ["dragondance", "swordsdance", "protect", "dragonclaw", "earthquake", "poisonjab", "taunt"],
		eventPokemon: [
			{"generation": 5, "level": 59, "gender": "F", "nature": "Naive", "ivs": {"hp": 30, "atk": 30, "def": 30, "spa": 30, "spd": 30, "spe": 30}, "isHidden": false, "abilities": ["moldbreaker"], "moves": ["earthquake", "dualchop", "xscissor", "dragondance"], "pokeball": "cherishball"},
		],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	cubchoo: {
		randomBattleMoves: ["icebeam", "surf", "hiddenpowergrass", "superpower"],
		eventPokemon: [
			{"generation": 5, "level": 15, "isHidden": false, "moves": ["powdersnow", "growl", "bide", "icywind"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	beartic: {
		randomBattleMoves: ["iciclecrash", "superpower", "nightslash", "stoneedge", "swordsdance", "aquajet"],
		randomDoubleBattleMoves: ["iciclecrash", "superpower", "nightslash", "stoneedge", "swordsdance", "aquajet", "protect"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	cryogonal: {
		randomBattleMoves: ["icebeam", "recover", "toxic", "rapidspin", "haze", "freezedry", "hiddenpowerground"],
		randomDoubleBattleMoves: ["icebeam", "recover", "icywind", "protect", "reflect", "freezedry", "hiddenpowerground"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	shelmet: {
		randomBattleMoves: ["spikes", "yawn", "substitute", "acidarmor", "recover", "toxic", "bugbuzz", "infestation", "toxicspikes"],
		eventPokemon: [
			{"generation": 5, "level": 30, "isHidden": false, "moves": ["strugglebug", "megadrain", "yawn", "protect"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "isHidden": false, "moves": ["encore", "gigadrain", "bodyslam", "bugbuzz"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	accelgor: {
		randomBattleMoves: ["spikes", "yawn", "bugbuzz", "focusblast", "gigadrain", "hiddenpowerrock", "encore", "toxicspikes"],
		randomDoubleBattleMoves: ["protect", "yawn", "bugbuzz", "focusblast", "gigadrain", "hiddenpowerrock", "encore", "sludgebomb"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	stunfisk: {
		randomBattleMoves: ["discharge", "earthpower", "scald", "toxic", "rest", "sleeptalk", "stealthrock"],
		randomDoubleBattleMoves: ["discharge", "earthpower", "scald", "electroweb", "protect", "stealthrock"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	mienfoo: {
		randomBattleMoves: ["uturn", "drainpunch", "stoneedge", "swordsdance", "highjumpkick", "fakeout", "knockoff"],
		tier: "LC",
	},
	mienshao: {
		randomBattleMoves: ["uturn", "fakeout", "highjumpkick", "stoneedge", "poisonjab", "swordsdance", "knockoff"],
		randomDoubleBattleMoves: ["uturn", "fakeout", "highjumpkick", "stoneedge", "drainpunch", "swordsdance", "wideguard", "knockoff", "feint", "protect"],
		eventPokemon: [
			{"generation": 7, "level": 65, "gender": "M", "isHidden": false, "abilities": ["innerfocus"], "moves": ["fakeout", "dualchop", "highjumpkick", "uturn"], "pokeball": "cherishball"},
		],
		tier: "RUBL",
		doublesTier: "DUU",
	},
	druddigon: {
		randomBattleMoves: ["outrage", "earthquake", "suckerpunch", "dragonclaw", "dragontail", "substitute", "glare", "stealthrock", "firepunch", "gunkshot"],
		randomDoubleBattleMoves: ["superpower", "earthquake", "suckerpunch", "dragonclaw", "glare", "protect", "firepunch", "thunderpunch"],
		eventPokemon: [
			{"generation": 5, "level": 1, "shiny": true, "isHidden": false, "moves": ["leer", "scratch"], "pokeball": "pokeball"},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	golett: {
		randomBattleMoves: ["earthquake", "shadowpunch", "dynamicpunch", "icepunch", "stealthrock", "rockpolish"],
		tier: "LC",
	},
	golurk: {
		randomBattleMoves: ["earthquake", "shadowpunch", "dynamicpunch", "icepunch", "stealthrock", "rockpolish"],
		randomDoubleBattleMoves: ["earthquake", "shadowpunch", "dynamicpunch", "icepunch", "stoneedge", "protect", "rockpolish"],
		eventPokemon: [
			{"generation": 5, "level": 70, "shiny": true, "isHidden": false, "abilities": ["ironfist"], "moves": ["shadowpunch", "hyperbeam", "gyroball", "hammerarm"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	pawniard: {
		randomBattleMoves: ["swordsdance", "substitute", "suckerpunch", "ironhead", "brickbreak", "knockoff"],
		tier: "LC",
	},
	bisharp: {
		randomBattleMoves: ["swordsdance", "knockoff", "ironhead", "suckerpunch", "lowkick"],
		randomDoubleBattleMoves: ["swordsdance", "substitute", "suckerpunch", "ironhead", "brickbreak", "knockoff", "protect"],
		encounters: [
			{"generation": 7, "level": 33, "isHidden": false},
		],
		tier: "UU",
		doublesTier: "DUU",
	},
	bouffalant: {
		randomBattleMoves: ["headcharge", "earthquake", "stoneedge", "megahorn", "swordsdance", "superpower"],
		randomDoubleBattleMoves: ["headcharge", "earthquake", "stoneedge", "megahorn", "swordsdance", "superpower", "protect"],
		eventPokemon: [
			{"generation": 6, "level": 50, "nature": "Adamant", "ivs": {"hp": 31, "atk": 31}, "isHidden": true, "moves": ["headcharge", "facade", "earthquake", "rockslide"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	rufflet: {
		randomBattleMoves: ["bravebird", "rockslide", "return", "uturn", "substitute", "bulkup", "roost"],
		tier: "LC",
	},
	braviary: {
		randomBattleMoves: ["bravebird", "superpower", "return", "uturn", "substitute", "rockslide", "bulkup", "roost"],
		randomDoubleBattleMoves: ["bravebird", "superpower", "return", "uturn", "tailwind", "rockslide", "bulkup", "roost", "skydrop", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 25, "gender": "M", "isHidden": true, "moves": ["wingattack", "honeclaws", "scaryface", "aerialace"]},
		],
		encounters: [
			{"generation": 6, "level": 45, "isHidden": false},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	vullaby: {
		randomBattleMoves: ["knockoff", "roost", "taunt", "whirlwind", "toxic", "defog", "uturn", "bravebird"],
		tier: "LC",
	},
	mandibuzz: {
		randomBattleMoves: ["foulplay", "knockoff", "roost", "taunt", "whirlwind", "toxic", "uturn", "bravebird", "defog"],
		randomDoubleBattleMoves: ["knockoff", "roost", "taunt", "tailwind", "snarl", "uturn", "bravebird", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 25, "gender": "F", "isHidden": true, "moves": ["pluck", "nastyplot", "flatter", "feintattack"]},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	heatmor: {
		randomBattleMoves: ["fireblast", "suckerpunch", "focusblast", "gigadrain", "knockoff"],
		randomDoubleBattleMoves: ["fireblast", "suckerpunch", "focusblast", "gigadrain", "heatwave", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	durant: {
		randomBattleMoves: ["honeclaws", "ironhead", "xscissor", "stoneedge", "superpower"],
		randomDoubleBattleMoves: ["honeclaws", "ironhead", "xscissor", "rockslide", "protect", "superpower"],
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	deino: {
		randomBattleMoves: ["outrage", "crunch", "firefang", "dragontail", "thunderwave", "superpower"],
		eventPokemon: [
			{"generation": 5, "level": 1, "shiny": true, "moves": ["tackle", "dragonrage"], "pokeball": "pokeball"},
		],
		tier: "LC",
	},
	zweilous: {
		randomBattleMoves: ["outrage", "crunch", "headsmash", "dragontail", "superpower", "rest", "sleeptalk"],
		encounters: [
			{"generation": 5, "level": 49},
		],
		tier: "NFE",
	},
	hydreigon: {
		randomBattleMoves: ["uturn", "dracometeor", "dragonpulse", "earthpower", "fireblast", "darkpulse", "roost", "flashcannon", "superpower"],
		randomDoubleBattleMoves: ["uturn", "dracometeor", "dragonpulse", "earthpower", "fireblast", "darkpulse", "roost", "flashcannon", "superpower", "tailwind", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 70, "shiny": true, "gender": "M", "moves": ["hypervoice", "dragonbreath", "flamethrower", "focusblast"], "pokeball": "cherishball"},
			{"generation": 6, "level": 52, "gender": "M", "perfectIVs": 2, "moves": ["dragonrush", "crunch", "rockslide", "frustration"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 6, "level": 59},
		],
		tier: "UU",
		doublesTier: "DUU",
	},
	larvesta: {
		randomBattleMoves: ["flareblitz", "uturn", "wildcharge", "zenheadbutt", "morningsun", "willowisp"],
		tier: "LC",
	},
	volcarona: {
		randomBattleMoves: ["quiverdance", "fierydance", "fireblast", "bugbuzz", "roost", "gigadrain", "hiddenpowerice", "hiddenpowerground"],
		randomDoubleBattleMoves: ["quiverdance", "fierydance", "fireblast", "bugbuzz", "roost", "gigadrain", "hiddenpowerice", "heatwave", "willowisp", "ragepowder", "tailwind", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 35, "isHidden": false, "moves": ["stringshot", "leechlife", "gust", "firespin"]},
			{"generation": 5, "level": 77, "gender": "M", "nature": "Calm", "ivs": {"hp": 30, "atk": 30, "def": 30, "spa": 30, "spd": 30, "spe": 30}, "isHidden": false, "moves": ["bugbuzz", "overheat", "hyperbeam", "quiverdance"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 7, "level": 41},
		],
		tier: "OU",
		doublesTier: "DOU",
	},
	cobalion: {
		randomBattleMoves: ["closecombat", "ironhead", "swordsdance", "substitute", "stoneedge", "voltswitch", "hiddenpowerice", "taunt", "stealthrock"],
		randomDoubleBattleMoves: ["closecombat", "ironhead", "swordsdance", "substitute", "stoneedge", "thunderwave", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 42, "shiny": 1, "moves": ["helpinghand", "retaliate", "ironhead", "sacredsword"]},
			{"generation": 5, "level": 45, "shiny": 1, "moves": ["helpinghand", "retaliate", "ironhead", "sacredsword"]},
			{"generation": 5, "level": 65, "shiny": 1, "moves": ["sacredsword", "swordsdance", "quickguard", "workup"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["retaliate", "ironhead", "sacredsword", "swordsdance"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["sacredsword", "swordsdance", "quickattack", "ironhead"]},
		],
		eventOnly: true,
		tier: "UU",
		doublesTier: "(DUU)",
	},
	terrakion: {
		randomBattleMoves: ["stoneedge", "closecombat", "swordsdance", "substitute", "stealthrock", "earthquake"],
		randomDoubleBattleMoves: ["stoneedge", "closecombat", "substitute", "rockslide", "earthquake", "taunt", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 42, "shiny": 1, "moves": ["helpinghand", "retaliate", "rockslide", "sacredsword"]},
			{"generation": 5, "level": 45, "shiny": 1, "moves": ["helpinghand", "retaliate", "rockslide", "sacredsword"]},
			{"generation": 5, "level": 65, "shiny": 1, "moves": ["sacredsword", "swordsdance", "quickguard", "workup"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["retaliate", "rockslide", "sacredsword", "swordsdance"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["sacredsword", "swordsdance", "rockslide", "stoneedge"]},
		],
		eventOnly: true,
		tier: "UU",
		doublesTier: "(DUU)",
	},
	virizion: {
		randomBattleMoves: ["swordsdance", "closecombat", "leafblade", "stoneedge", "calmmind", "focusblast", "gigadrain", "hiddenpowerice", "substitute"],
		randomDoubleBattleMoves: ["taunt", "closecombat", "stoneedge", "leafblade", "swordsdance", "synthesis", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 42, "shiny": 1, "moves": ["helpinghand", "retaliate", "gigadrain", "sacredsword"]},
			{"generation": 5, "level": 45, "shiny": 1, "moves": ["helpinghand", "retaliate", "gigadrain", "sacredsword"]},
			{"generation": 5, "level": 65, "shiny": 1, "moves": ["sacredsword", "swordsdance", "quickguard", "workup"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["retaliate", "gigadrain", "sacredsword", "swordsdance"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["sacredsword", "swordsdance", "gigadrain", "leafblade"]},
		],
		eventOnly: true,
		tier: "RU",
		doublesTier: "(DUU)",
	},
	tornadus: {
		randomBattleMoves: ["bulkup", "acrobatics", "hurricane", "heatwave", "superpower", "uturn", "defog", "tailwind"],
		randomDoubleBattleMoves: ["hurricane", "airslash", "uturn", "superpower", "focusblast", "taunt", "substitute", "heatwave", "tailwind", "protect", "skydrop"],
		eventPokemon: [
			{"generation": 5, "level": 40, "shiny": 1, "isHidden": false, "moves": ["revenge", "aircutter", "extrasensory", "agility"]},
			{"generation": 5, "level": 5, "isHidden": true, "moves": ["uproar", "astonish", "gust"], "pokeball": "dreamball"},
			{"generation": 5, "level": 70, "isHidden": false, "moves": ["hurricane", "hammerarm", "airslash", "hiddenpower"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "isHidden": false, "moves": ["extrasensory", "agility", "airslash", "crunch"]},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["airslash", "crunch", "tailwind", "raindance"]},
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["airslash", "crunch", "tailwind", "raindance"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["hurricane", "heatwave", "grassknot", "tailwind"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	tornadustherian: {
		randomBattleMoves: ["hurricane", "heatwave", "knockoff", "superpower", "uturn", "taunt"],
		randomDoubleBattleMoves: ["hurricane", "airslash", "focusblast", "uturn", "heatwave", "skydrop", "tailwind", "taunt", "protect"],
		eventOnly: true,
		tier: "OU",
		doublesTier: "(DUU)",
	},
	thundurus: {
		randomBattleMoves: ["thunderwave", "nastyplot", "thunderbolt", "hiddenpowerice", "hiddenpowerflying", "focusblast", "substitute", "knockoff", "taunt"],
		randomDoubleBattleMoves: ["thunderwave", "nastyplot", "thunderbolt", "hiddenpowerice", "hiddenpowerflying", "focusblast", "substitute", "knockoff", "taunt", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 40, "shiny": 1, "isHidden": false, "moves": ["revenge", "shockwave", "healblock", "agility"]},
			{"generation": 5, "level": 5, "isHidden": true, "moves": ["uproar", "astonish", "thundershock"], "pokeball": "dreamball"},
			{"generation": 5, "level": 70, "isHidden": false, "moves": ["thunder", "hammerarm", "focusblast", "wildcharge"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "isHidden": false, "moves": ["healblock", "agility", "discharge", "crunch"]},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["discharge", "crunch", "charge", "nastyplot"]},
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["discharge", "crunch", "charge", "nastyplot"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "isHidden": false, "moves": ["thunderbolt", "focusblast", "grassknot", "nastyplot"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "UUBL",
		doublesTier: "DUU",
	},
	thundurustherian: {
		randomBattleMoves: ["nastyplot", "thunderbolt", "hiddenpowerflying", "hiddenpowerice", "focusblast", "voltswitch"],
		randomDoubleBattleMoves: ["nastyplot", "thunderbolt", "hiddenpowerflying", "hiddenpowerice", "focusblast", "voltswitch", "protect"],
		eventOnly: true,
		tier: "UUBL",
		doublesTier: "DUU",
	},
	reshiram: {
		randomBattleMoves: ["blueflare", "dracometeor", "dragonpulse", "toxic", "flamecharge", "stoneedge", "roost"],
		randomDoubleBattleMoves: ["blueflare", "dracometeor", "dragonpulse", "heatwave", "flamecharge", "roost", "protect", "tailwind"],
		eventPokemon: [
			{"generation": 5, "level": 50, "moves": ["dragonbreath", "slash", "extrasensory", "fusionflare"]},
			{"generation": 5, "level": 70, "moves": ["extrasensory", "fusionflare", "dragonpulse", "imprison"]},
			{"generation": 5, "level": 100, "moves": ["blueflare", "fusionflare", "mist", "dracometeor"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["dragonbreath", "slash", "extrasensory", "fusionflare"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["slash", "extrasensory", "fusionflare", "dragonpulse"]},
			{"generation": 7, "level": 60, "moves": ["slash", "extrasensory", "fusionflare", "dragonpulse"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["fusionflare", "blueflare", "dracometeor", "earthpower"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	zekrom: {
		randomBattleMoves: ["boltstrike", "outrage", "dragonclaw", "dracometeor", "voltswitch", "honeclaws", "substitute", "roost"],
		randomDoubleBattleMoves: ["voltswitch", "protect", "dragonclaw", "boltstrike", "honeclaws", "substitute", "dracometeor", "fusionbolt", "roost", "tailwind"],
		eventPokemon: [
			{"generation": 5, "level": 50, "moves": ["dragonbreath", "slash", "zenheadbutt", "fusionbolt"]},
			{"generation": 5, "level": 70, "moves": ["zenheadbutt", "fusionbolt", "dragonclaw", "imprison"]},
			{"generation": 5, "level": 100, "moves": ["boltstrike", "fusionbolt", "haze", "outrage"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["dragonbreath", "slash", "zenheadbutt", "fusionbolt"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["slash", "zenheadbutt", "fusionbolt", "dragonclaw"]},
			{"generation": 7, "level": 60, "moves": ["slash", "zenheadbutt", "fusionbolt", "dragonclaw"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["fusionbolt", "boltstrike", "outrage", "stoneedge"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	landorus: {
		randomBattleMoves: ["calmmind", "rockpolish", "earthpower", "focusblast", "psychic", "sludgewave", "stealthrock", "knockoff", "rockslide"],
		randomDoubleBattleMoves: ["earthpower", "focusblast", "hiddenpowerice", "psychic", "sludgebomb", "rockslide", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 70, "shiny": 1, "isHidden": false, "moves": ["rockslide", "earthquake", "sandstorm", "fissure"]},
			{"generation": 5, "level": 5, "isHidden": true, "moves": ["block", "mudshot", "rocktomb"], "pokeball": "dreamball"},
			{"generation": 6, "level": 65, "shiny": 1, "isHidden": false, "moves": ["extrasensory", "swordsdance", "earthpower", "rockslide"]},
			{"generation": 6, "level": 50, "nature": "Adamant", "ivs": {"hp": 31, "atk": 31, "def": 31, "spa": 1, "spd": 31, "spe": 24}, "isHidden": false, "moves": ["earthquake", "knockoff", "uturn", "rocktomb"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "isHidden": false, "moves": ["earthpower", "rockslide", "earthquake", "sandstorm"]},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUU",
	},
	landorustherian: {
		randomBattleMoves: ["swordsdance", "rockpolish", "earthquake", "stoneedge", "uturn", "superpower", "stealthrock", "fly"],
		randomDoubleBattleMoves: ["rockslide", "earthquake", "stoneedge", "uturn", "superpower", "knockoff", "protect"],
		eventOnly: true,
		tier: "OU",
		doublesTier: "DOU",
	},
	kyurem: {
		randomBattleMoves: ["dracometeor", "icebeam", "earthpower", "outrage", "substitute", "focusblast", "roost"],
		randomDoubleBattleMoves: ["substitute", "icebeam", "dracometeor", "dragonpulse", "focusblast", "glaciate", "earthpower", "roost", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 75, "shiny": 1, "moves": ["glaciate", "dragonpulse", "imprison", "endeavor"]},
			{"generation": 5, "level": 70, "shiny": 1, "moves": ["scaryface", "glaciate", "dragonpulse", "imprison"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["dragonbreath", "slash", "scaryface", "glaciate"]},
			{"generation": 6, "level": 100, "moves": ["glaciate", "scaryface", "dracometeor", "ironhead"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["slash", "scaryface", "glaciate", "dragonpulse"]},
		],
		eventOnly: true,
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	kyuremblack: {
		randomBattleMoves: ["outrage", "fusionbolt", "icebeam", "roost", "substitute", "earthpower", "dragonclaw"],
		randomDoubleBattleMoves: ["protect", "fusionbolt", "icebeam", "roost", "substitute", "honeclaws", "earthpower", "dragonclaw"],
		eventPokemon: [
			{"generation": 5, "level": 75, "shiny": 1, "moves": ["freezeshock", "dragonpulse", "imprison", "endeavor"]},
			{"generation": 5, "level": 70, "shiny": 1, "moves": ["fusionbolt", "freezeshock", "dragonpulse", "imprison"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["dragonbreath", "slash", "fusionbolt", "freezeshock"]},
			{"generation": 6, "level": 100, "moves": ["freezeshock", "fusionbolt", "dracometeor", "ironhead"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["slash", "fusionbolt", "freezeshock", "dragonpulse"]},
		],
		eventOnly: true,
		tier: "OU",
		doublesTier: "DOU",
	},
	kyuremwhite: {
		randomBattleMoves: ["dracometeor", "icebeam", "fusionflare", "earthpower", "focusblast", "dragonpulse", "substitute", "roost", "toxic"],
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "icebeam", "fusionflare", "earthpower", "focusblast", "roost", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 75, "shiny": 1, "moves": ["iceburn", "dragonpulse", "imprison", "endeavor"]},
			{"generation": 5, "level": 70, "shiny": 1, "moves": ["fusionflare", "iceburn", "dragonpulse", "imprison"]},
			{"generation": 6, "level": 50, "shiny": 1, "moves": ["dragonbreath", "slash", "fusionflare", "iceburn"]},
			{"generation": 6, "level": 100, "moves": ["iceburn", "fusionflare", "dracometeor", "ironhead"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["slash", "fusionflare", "iceburn", "dragonpulse"]},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	keldeo: {
		randomBattleMoves: ["hydropump", "secretsword", "calmmind", "hiddenpowerflying", "hiddenpowerelectric", "substitute", "scald", "icywind"],
		randomDoubleBattleMoves: ["hydropump", "secretsword", "protect", "hiddenpowerflying", "hiddenpowerelectric", "substitute", "surf", "icywind", "taunt"],
		eventPokemon: [
			{"generation": 5, "level": 15, "moves": ["aquajet", "leer", "doublekick", "bubblebeam"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "moves": ["sacredsword", "hydropump", "aquajet", "swordsdance"], "pokeball": "cherishball"},
			{"generation": 6, "level": 15, "moves": ["aquajet", "leer", "doublekick", "hydropump"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["aquajet", "leer", "doublekick", "bubblebeam"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "OU",
		doublesTier: "(DUU)",
	},
	keldeoresolute: {
		eventOnly: true,
		requiredMove: "Secret Sword",
	},
	meloetta: {
		randomBattleMoves: ["uturn", "calmmind", "psyshock", "hypervoice", "shadowball", "focusblast"],
		randomDoubleBattleMoves: ["calmmind", "psyshock", "thunderbolt", "hypervoice", "shadowball", "focusblast", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 15, "moves": ["quickattack", "confusion", "round"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "moves": ["round", "teeterdance", "psychic", "closecombat"], "pokeball": "cherishball"},
			{"generation": 7, "level": 15, "moves": ["sing", "psychic", "closecombat"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "moves": ["sing", "celebrate", "round", "relicsong"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	meloettapirouette: {
		randomBattleMoves: ["relicsong", "closecombat", "knockoff", "return"],
		randomDoubleBattleMoves: ["relicsong", "closecombat", "knockoff", "return", "protect"],
		requiredMove: "Relic Song",
		battleOnly: true,
	},
	genesect: {
		randomBattleMoves: ["technoblast", "uturn", "icebeam", "flamethrower", "thunderbolt", "ironhead", "shiftgear", "extremespeed", "blazekick"],
		randomDoubleBattleMoves: ["uturn", "bugbuzz", "icebeam", "flamethrower", "thunderbolt", "ironhead", "shiftgear", "extremespeed", "blazekick", "protect"],
		eventPokemon: [
			{"generation": 5, "level": 50, "moves": ["technoblast", "magnetbomb", "solarbeam", "signalbeam"], "pokeball": "cherishball"},
			{"generation": 5, "level": 15, "moves": ["technoblast", "magnetbomb", "solarbeam", "signalbeam"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "shiny": true, "nature": "Hasty", "ivs": {"atk": 31, "spe": 31}, "moves": ["extremespeed", "technoblast", "blazekick", "shiftgear"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "moves": ["technoblast", "magnetbomb", "solarbeam", "signalbeam"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DOU",
	},
	genesectburn: {
		eventOnly: true,
		requiredItem: "Burn Drive",
	},
	genesectchill: {
		eventOnly: true,
		requiredItem: "Chill Drive",
	},
	genesectdouse: {
		eventOnly: true,
		requiredItem: "Douse Drive",
	},
	genesectshock: {
		eventOnly: true,
		requiredItem: "Shock Drive",
	},
	chespin: {
		randomBattleMoves: ["curse", "gyroball", "seedbomb", "stoneedge", "spikes", "synthesis"],
		tier: "LC",
	},
	quilladin: {
		randomBattleMoves: ["curse", "gyroball", "seedbomb", "stoneedge", "spikes", "synthesis"],
		tier: "NFE",
	},
	chesnaught: {
		randomBattleMoves: ["leechseed", "synthesis", "spikes", "drainpunch", "spikyshield", "woodhammer"],
		randomDoubleBattleMoves: ["leechseed", "synthesis", "hammerarm", "spikyshield", "stoneedge", "woodhammer", "rockslide"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	fennekin: {
		randomBattleMoves: ["fireblast", "psychic", "psyshock", "grassknot", "willowisp", "hypnosis", "hiddenpowerrock", "flamecharge"],
		eventPokemon: [
			{"generation": 6, "level": 15, "gender": "F", "nature": "Hardy", "isHidden": false, "moves": ["scratch", "flamethrower", "hiddenpower"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	braixen: {
		randomBattleMoves: ["fireblast", "flamethrower", "psychic", "psyshock", "grassknot", "willowisp", "hiddenpowerrock"],
		tier: "NFE",
	},
	delphox: {
		randomBattleMoves: ["calmmind", "fireblast", "psyshock", "grassknot", "switcheroo", "shadowball"],
		randomDoubleBattleMoves: ["calmmind", "fireblast", "psyshock", "grassknot", "switcheroo", "shadowball", "heatwave", "dazzlinggleam", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	froakie: {
		randomBattleMoves: ["quickattack", "hydropump", "icebeam", "waterfall", "toxicspikes", "poweruppunch", "uturn"],
		eventPokemon: [
			{"generation": 6, "level": 7, "isHidden": false, "moves": ["pound", "growl", "bubble", "return"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	frogadier: {
		randomBattleMoves: ["hydropump", "surf", "icebeam", "uturn", "taunt", "toxicspikes"],
		tier: "NFE",
	},
	greninja: {
		randomBattleMoves: ["hydropump", "icebeam", "darkpulse", "gunkshot", "uturn", "spikes", "toxicspikes", "taunt"],
		randomDoubleBattleMoves: ["hydropump", "uturn", "surf", "icebeam", "matblock", "taunt", "darkpulse", "protect"],
		eventPokemon: [
			{"generation": 6, "level": 36, "ivs": {"spe": 31}, "isHidden": true, "moves": ["watershuriken", "shadowsneak", "hydropump", "substitute"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "isHidden": true, "moves": ["hydrocannon", "gunkshot", "matblock", "happyhour"], "pokeball": "cherishball"},
		],
		tier: "OU",
		doublesTier: "DUU",
	},
	greninjaash: {
		randomBattleMoves: ["hydropump", "icebeam", "darkpulse", "watershuriken", "uturn"],
		eventPokemon: [
			{"generation": 7, "level": 36, "ivs": {"hp": 20, "atk": 31, "def": 20, "spa": 31, "spd": 20, "spe": 31}, "moves": ["watershuriken", "aerialace", "doubleteam", "nightslash"], "pokeball": "pokeball"},
		],
		eventOnly: true,
		gen: 7,
		requiredAbility: "Battle Bond",
		battleOnly: true,
		tier: "OU",
		doublesTier: "DUU",
	},
	bunnelby: {
		randomBattleMoves: ["agility", "earthquake", "return", "quickattack", "uturn", "stoneedge", "spikes", "bounce"],
		tier: "LC",
	},
	diggersby: {
		randomBattleMoves: ["earthquake", "return", "wildcharge", "uturn", "swordsdance", "quickattack", "knockoff", "agility"],
		randomDoubleBattleMoves: ["earthquake", "uturn", "return", "wildcharge", "protect", "quickattack"],
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	fletchling: {
		randomBattleMoves: ["roost", "swordsdance", "uturn", "return", "overheat", "flamecharge"],
		tier: "LC",
	},
	fletchinder: {
		randomBattleMoves: ["roost", "swordsdance", "uturn", "return", "overheat", "flamecharge", "acrobatics"],
		encounters: [
			{"generation": 7, "level": 16},
		],
		tier: "NFE",
	},
	talonflame: {
		randomBattleMoves: ["bravebird", "flareblitz", "roost", "swordsdance", "uturn", "willowisp"],
		randomDoubleBattleMoves: ["bravebird", "flareblitz", "roost", "swordsdance", "uturn", "willowisp", "tailwind", "taunt", "protect"],
		tier: "RUBL",
		doublesTier: "DUU",
	},
	scatterbug: {
		randomBattleMoves: ["tackle", "stringshot", "stunspore", "bugbite", "poisonpowder"],
		tier: "LC",
	},
	spewpa: {
		randomBattleMoves: ["tackle", "stringshot", "stunspore", "bugbite", "poisonpowder"],
		tier: "NFE",
	},
	vivillon: {
		randomBattleMoves: ["sleeppowder", "quiverdance", "hurricane", "bugbuzz", "substitute"],
		randomDoubleBattleMoves: ["sleeppowder", "quiverdance", "hurricane", "bugbuzz", "roost", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	vivillonfancy: {
		eventPokemon: [
			{"generation": 6, "level": 12, "isHidden": false, "moves": ["gust", "lightscreen", "strugglebug", "holdhands"], "pokeball": "cherishball"},
		],
		eventOnly: true,
	},
	vivillonpokeball: {
		eventPokemon: [
			{"generation": 6, "level": 12, "isHidden": false, "moves": ["stunspore", "gust", "lightscreen", "strugglebug"], "pokeball": "pokeball"},
		],
		eventOnly: true,
	},
	litleo: {
		randomBattleMoves: ["hypervoice", "fireblast", "willowisp", "bulldoze", "yawn"],
		tier: "LC",
	},
	pyroar: {
		randomBattleMoves: ["sunnyday", "fireblast", "hypervoice", "solarbeam", "willowisp", "darkpulse"],
		randomDoubleBattleMoves: ["hypervoice", "fireblast", "willowisp", "protect", "sunnyday", "solarbeam"],
		eventPokemon: [
			{"generation": 6, "level": 49, "gender": "M", "perfectIVs": 2, "isHidden": false, "abilities": ["unnerve"], "moves": ["hypervoice", "fireblast", "darkpulse"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	flabebe: {
		randomBattleMoves: ["moonblast", "toxic", "wish", "psychic", "aromatherapy", "protect", "calmmind"],
		tier: "LC",
	},
	floette: {
		randomBattleMoves: ["moonblast", "toxic", "wish", "psychic", "aromatherapy", "protect", "calmmind"],
		tier: "NFE",
	},
	floetteeternal: {
		randomBattleMoves: ["lightofruin", "psychic", "hiddenpowerfire", "hiddenpowerground", "moonblast"],
		randomDoubleBattleMoves: ["lightofruin", "dazzlinggleam", "wish", "psychic", "aromatherapy", "protect", "calmmind"],
		isUnreleased: true,
		tier: "Unreleased",
	},
	florges: {
		randomBattleMoves: ["calmmind", "moonblast", "synthesis", "aromatherapy", "wish", "toxic", "protect", "defog"],
		randomDoubleBattleMoves: ["moonblast", "dazzlinggleam", "wish", "psychic", "aromatherapy", "protect", "calmmind", "defog"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	skiddo: {
		randomBattleMoves: ["hornleech", "brickbreak", "bulkup", "leechseed", "milkdrink", "rockslide"],
		tier: "LC",
	},
	gogoat: {
		randomBattleMoves: ["bulkup", "hornleech", "earthquake", "rockslide", "substitute", "leechseed", "milkdrink"],
		randomDoubleBattleMoves: ["hornleech", "earthquake", "brickbreak", "bulkup", "leechseed", "milkdrink", "rockslide", "protect"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pancham: {
		randomBattleMoves: ["partingshot", "skyuppercut", "crunch", "stoneedge", "bulldoze", "shadowclaw", "bulkup"],
		eventPokemon: [
			{"generation": 6, "level": 30, "gender": "M", "nature": "Adamant", "isHidden": false, "abilities": ["moldbreaker"], "moves": ["armthrust", "stoneedge", "darkpulse"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	pangoro: {
		randomBattleMoves: ["knockoff", "superpower", "gunkshot", "icepunch", "partingshot", "drainpunch"],
		randomDoubleBattleMoves: ["partingshot", "hammerarm", "crunch", "circlethrow", "icepunch", "earthquake", "poisonjab", "protect"],
		encounters: [
			{"generation": 7, "level": 24},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	furfrou: {
		randomBattleMoves: ["return", "cottonguard", "thunderwave", "substitute", "toxic", "suckerpunch", "uturn", "rest"],
		randomDoubleBattleMoves: ["return", "cottonguard", "uturn", "thunderwave", "suckerpunch", "snarl", "wildcharge", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	espurr: {
		randomBattleMoves: ["fakeout", "yawn", "thunderwave", "psychic", "trick", "darkpulse"],
		tier: "LC",
	},
	meowstic: {
		randomBattleMoves: ["toxic", "yawn", "thunderwave", "psychic", "reflect", "lightscreen", "healbell"],
		randomDoubleBattleMoves: ["fakeout", "thunderwave", "psychic", "reflect", "lightscreen", "safeguard", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	meowsticf: {
		randomBattleMoves: ["calmmind", "psychic", "psyshock", "shadowball", "energyball", "thunderbolt"],
		randomDoubleBattleMoves: ["psyshock", "darkpulse", "fakeout", "energyball", "signalbeam", "thunderbolt", "protect", "helpinghand"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	honedge: {
		randomBattleMoves: ["swordsdance", "shadowclaw", "shadowsneak", "ironhead", "rockslide", "aerialace", "destinybond"],
		tier: "LC",
	},
	doublade: {
		randomBattleMoves: ["swordsdance", "shadowclaw", "shadowsneak", "ironhead", "sacredsword"],
		randomDoubleBattleMoves: ["swordsdance", "shadowclaw", "shadowsneak", "ironhead", "sacredsword", "rockslide", "protect"],
		tier: "UU",
		doublesTier: "NFE",
	},
	aegislash: {
		randomBattleMoves: ["kingsshield", "swordsdance", "shadowclaw", "sacredsword", "ironhead", "shadowsneak", "hiddenpowerice", "shadowball", "flashcannon"],
		randomDoubleBattleMoves: ["kingsshield", "swordsdance", "shadowclaw", "sacredsword", "ironhead", "shadowsneak", "wideguard", "hiddenpowerice", "shadowball", "flashcannon"],
		eventPokemon: [
			{"generation": 6, "level": 50, "gender": "F", "nature": "Quiet", "moves": ["wideguard", "kingsshield", "shadowball", "flashcannon"], "pokeball": "cherishball"},
		],
		tier: "Uber",
		doublesTier: "DOU",
	},
	aegislashblade: {
		requiredAbility: 'Stance Change',
		battleOnly: true,
	},
	spritzee: {
		randomBattleMoves: ["calmmind", "drainingkiss", "moonblast", "psychic", "aromatherapy", "wish", "trickroom", "thunderbolt", "nastyplot"],
		tier: "LC",
	},
	aromatisse: {
		randomBattleMoves: ["wish", "protect", "moonblast", "aromatherapy", "reflect", "lightscreen"],
		randomDoubleBattleMoves: ["moonblast", "aromatherapy", "wish", "trickroom", "thunderbolt", "protect", "healpulse"],
		eventPokemon: [
			{"generation": 6, "level": 50, "nature": "Relaxed", "isHidden": true, "moves": ["trickroom", "healpulse", "disable", "moonblast"], "pokeball": "cherishball"},
		],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	swirlix: {
		randomBattleMoves: ["calmmind", "drainingkiss", "dazzlinggleam", "surf", "psychic", "flamethrower", "bellydrum", "thunderbolt", "return", "thief", "cottonguard"],
		tier: "LC Uber",
	},
	slurpuff: {
		randomBattleMoves: ["substitute", "bellydrum", "playrough", "return", "drainpunch", "calmmind", "drainingkiss", "dazzlinggleam", "flamethrower", "surf"],
		randomDoubleBattleMoves: ["substitute", "bellydrum", "playrough", "return", "drainpunch", "dazzlinggleam", "surf", "psychic", "flamethrower", "protect"],
		tier: "NUBL",
		doublesTier: "(DUU)",
	},
	inkay: {
		randomBattleMoves: ["topsyturvy", "switcheroo", "superpower", "psychocut", "flamethrower", "rockslide", "trickroom"],
		eventPokemon: [
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["happyhour", "foulplay", "hypnosis", "topsyturvy"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	malamar: {
		randomBattleMoves: ["superpower", "knockoff", "psychocut", "rest", "sleeptalk", "happyhour"],
		randomDoubleBattleMoves: ["superpower", "psychocut", "rockslide", "trickroom", "knockoff", "protect"],
		eventPokemon: [
			{"generation": 6, "level": 50, "nature": "Adamant", "ivs": {"hp": 31, "atk": 31}, "isHidden": false, "abilities": ["contrary"], "moves": ["superpower", "knockoff", "facade", "rockslide"], "pokeball": "cherishball"},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	binacle: {
		randomBattleMoves: ["shellsmash", "liquidation", "stoneedge", "earthquake", "crosschop", "poisonjab", "xscissor", "rockslide"],
		tier: "LC",
	},
	barbaracle: {
		randomBattleMoves: ["shellsmash", "stoneedge", "liquidation", "earthquake", "crosschop", "stealthrock"],
		randomDoubleBattleMoves: ["shellsmash", "liquidation", "earthquake", "crosschop", "rockslide", "protect"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "NUBL",
		doublesTier: "(DUU)",
	},
	skrelp: {
		randomBattleMoves: ["scald", "sludgebomb", "thunderbolt", "shadowball", "toxicspikes", "hydropump"],
		tier: "LC",
	},
	dragalge: {
		randomBattleMoves: ["dracometeor", "sludgewave", "focusblast", "scald", "hiddenpowerfire", "toxicspikes", "dragonpulse"],
		randomDoubleBattleMoves: ["dracometeor", "sludgebomb", "focusblast", "scald", "hiddenpowerfire", "protect", "dragonpulse"],
		encounters: [
			{"generation": 6, "level": 35, "isHidden": false},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	clauncher: {
		randomBattleMoves: ["waterpulse", "flashcannon", "uturn", "crabhammer", "aquajet", "sludgebomb"],
		tier: "LC",
	},
	clawitzer: {
		randomBattleMoves: ["scald", "waterpulse", "darkpulse", "aurasphere", "icebeam", "uturn"],
		randomDoubleBattleMoves: ["waterpulse", "icebeam", "uturn", "darkpulse", "aurasphere", "muddywater", "helpinghand", "protect"],
		encounters: [
			{"generation": 6, "level": 35, "isHidden": false},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	helioptile: {
		randomBattleMoves: ["surf", "voltswitch", "hiddenpowerice", "raindance", "thunder", "darkpulse", "thunderbolt"],
		tier: "LC",
	},
	heliolisk: {
		randomBattleMoves: ["raindance", "thunder", "hypervoice", "surf", "darkpulse", "hiddenpowerice", "voltswitch", "thunderbolt"],
		randomDoubleBattleMoves: ["surf", "voltswitch", "hiddenpowerice", "raindance", "thunder", "darkpulse", "thunderbolt", "electricterrain", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	tyrunt: {
		randomBattleMoves: ["stealthrock", "dragondance", "stoneedge", "dragonclaw", "earthquake", "icefang", "firefang"],
		eventPokemon: [
			{"generation": 6, "level": 10, "isHidden": true, "moves": ["tailwhip", "tackle", "roar", "stomp"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	tyrantrum: {
		randomBattleMoves: ["stealthrock", "dragondance", "dragonclaw", "earthquake", "superpower", "outrage", "headsmash"],
		randomDoubleBattleMoves: ["rockslide", "dragondance", "headsmash", "dragonclaw", "earthquake", "icefang", "firefang", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	amaura: {
		randomBattleMoves: ["naturepower", "hypervoice", "ancientpower", "thunderbolt", "darkpulse", "thunderwave", "dragontail", "flashcannon"],
		eventPokemon: [
			{"generation": 6, "level": 10, "isHidden": true, "moves": ["growl", "powdersnow", "thunderwave", "rockthrow"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	aurorus: {
		randomBattleMoves: ["ancientpower", "blizzard", "thunderwave", "earthpower", "freezedry", "hypervoice", "stealthrock"],
		randomDoubleBattleMoves: ["hypervoice", "ancientpower", "thunderwave", "flashcannon", "freezedry", "icywind", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	sylveon: {
		randomBattleMoves: ["hypervoice", "calmmind", "wish", "protect", "psyshock", "shadowball"],
		randomDoubleBattleMoves: ["hypervoice", "calmmind", "wish", "protect", "psyshock", "helpinghand", "shadowball", "hiddenpowerground"],
		eventPokemon: [
			{"generation": 6, "level": 10, "isHidden": false, "moves": ["celebrate", "helpinghand", "sandattack", "fairywind"], "pokeball": "cherishball"},
			{"generation": 6, "level": 10, "gender": "F", "isHidden": false, "moves": ["disarmingvoice", "babydolleyes", "quickattack", "drainingkiss"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "gender": "F", "isHidden": true, "moves": ["hyperbeam", "drainingkiss", "psyshock", "calmmind"], "pokeball": "cherishball"},
		],
		tier: "UU",
		doublesTier: "DUU",
	},
	hawlucha: {
		randomBattleMoves: ["substitute", "swordsdance", "highjumpkick", "acrobatics", "roost", "stoneedge"],
		randomDoubleBattleMoves: ["swordsdance", "highjumpkick", "uturn", "stoneedge", "skydrop", "encore", "protect"],
		tier: "OU",
		doublesTier: "(DUU)",
	},
	dedenne: {
		randomBattleMoves: ["substitute", "recycle", "thunderbolt", "nuzzle", "grassknot", "hiddenpowerice", "toxic"],
		randomDoubleBattleMoves: ["voltswitch", "thunderbolt", "nuzzle", "grassknot", "hiddenpowerice", "uturn", "helpinghand", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	carbink: {
		randomBattleMoves: ["stealthrock", "lightscreen", "reflect", "explosion", "powergem", "moonblast"],
		randomDoubleBattleMoves: ["trickroom", "lightscreen", "reflect", "explosion", "powergem", "moonblast", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	goomy: {
		randomBattleMoves: ["sludgebomb", "thunderbolt", "toxic", "protect", "infestation"],
		eventPokemon: [
			{"generation": 7, "level": 1, "shiny": 1, "isHidden": true, "moves": ["bodyslam", "dragonpulse", "counter"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	sliggoo: {
		randomBattleMoves: ["sludgebomb", "thunderbolt", "toxic", "protect", "infestation", "icebeam"],
		encounters: [
			{"generation": 6, "level": 30},
		],
		tier: "NFE",
	},
	goodra: {
		randomBattleMoves: ["dracometeor", "dragonpulse", "fireblast", "sludgebomb", "thunderbolt", "earthquake", "dragontail"],
		randomDoubleBattleMoves: ["thunderbolt", "icebeam", "dragonpulse", "fireblast", "muddywater", "dracometeor", "focusblast", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	klefki: {
		randomBattleMoves: ["reflect", "lightscreen", "spikes", "magnetrise", "playrough", "thunderwave", "foulplay", "toxic"],
		randomDoubleBattleMoves: ["reflect", "lightscreen", "safeguard", "playrough", "substitute", "thunderwave", "protect", "flashcannon", "dazzlinggleam"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	phantump: {
		randomBattleMoves: ["hornleech", "leechseed", "phantomforce", "substitute", "willowisp", "rest"],
		tier: "LC",
	},
	trevenant: {
		randomBattleMoves: ["hornleech", "shadowclaw", "leechseed", "willowisp", "rest", "substitute", "phantomforce"],
		randomDoubleBattleMoves: ["hornleech", "woodhammer", "leechseed", "shadowclaw", "willowisp", "trickroom", "earthquake", "rockslide", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pumpkaboo: {
		randomBattleMoves: ["willowisp", "shadowsneak", "destinybond", "synthesis", "seedbomb", "leechseed"],
		tier: "LC",
	},
	pumpkaboosmall: {
		randomBattleMoves: ["willowisp", "shadowsneak", "destinybond", "synthesis", "seedbomb"],
		unreleasedHidden: true,
		tier: "LC",
	},
	pumpkaboolarge: {
		randomBattleMoves: ["willowisp", "shadowsneak", "leechseed", "synthesis", "seedbomb"],
		unreleasedHidden: true,
		tier: "LC",
	},
	pumpkaboosuper: {
		randomBattleMoves: ["willowisp", "shadowsneak", "leechseed", "synthesis", "seedbomb"],
		eventPokemon: [
			{"generation": 6, "level": 50, "moves": ["trickortreat", "astonish", "scaryface", "shadowsneak"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	gourgeist: {
		randomBattleMoves: ["willowisp", "seedbomb", "leechseed", "shadowsneak", "substitute", "synthesis"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "painsplit", "seedbomb", "leechseed", "phantomforce", "explosion", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	gourgeistsmall: {
		randomBattleMoves: ["willowisp", "seedbomb", "leechseed", "shadowsneak", "substitute", "synthesis"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "painsplit", "seedbomb", "leechseed", "phantomforce", "explosion", "protect"],
		unreleasedHidden: true,
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	gourgeistlarge: {
		randomBattleMoves: ["willowisp", "seedbomb", "leechseed", "shadowsneak", "substitute", "synthesis"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "painsplit", "seedbomb", "leechseed", "phantomforce", "explosion", "protect", "trickroom"],
		unreleasedHidden: true,
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	gourgeistsuper: {
		randomBattleMoves: ["willowisp", "seedbomb", "leechseed", "shadowsneak", "substitute", "synthesis"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "painsplit", "seedbomb", "leechseed", "phantomforce", "explosion", "protect", "trickroom"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	bergmite: {
		randomBattleMoves: ["avalanche", "recover", "stoneedge", "curse", "gyroball", "rapidspin"],
		tier: "LC",
	},
	avalugg: {
		randomBattleMoves: ["avalanche", "recover", "toxic", "rapidspin", "roar", "earthquake"],
		randomDoubleBattleMoves: ["avalanche", "recover", "earthquake", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	noibat: {
		randomBattleMoves: ["airslash", "hurricane", "dracometeor", "uturn", "roost", "switcheroo"],
		tier: "LC",
	},
	noivern: {
		randomBattleMoves: ["dracometeor", "hurricane", "flamethrower", "boomburst", "switcheroo", "uturn", "roost", "taunt"],
		randomDoubleBattleMoves: ["airslash", "hurricane", "dragonpulse", "dracometeor", "focusblast", "flamethrower", "uturn", "roost", "boomburst", "switcheroo", "tailwind", "taunt", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	xerneas: {
		randomBattleMoves: ["geomancy", "moonblast", "focusblast", "thunderbolt", "hiddenpowerfire", "psyshock", "rockslide", "closecombat"],
		randomDoubleBattleMoves: ["geomancy", "dazzlinggleam", "thunder", "focusblast", "thunderbolt", "hiddenpowerfire", "psyshock", "rockslide", "closecombat", "protect"],
		eventPokemon: [
			{"generation": 6, "level": 50, "moves": ["gravity", "geomancy", "moonblast", "megahorn"]},
			{"generation": 6, "level": 100, "shiny": true, "moves": ["geomancy", "moonblast", "aromatherapy", "focusblast"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["geomancy", "hornleech", "nightslash", "moonblast"]},
			{"generation": 7, "level": 60, "moves": ["geomancy", "hornleech", "nightslash", "moonblast"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["geomancy", "focusblast", "grassknot", "moonblast"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	yveltal: {
		randomBattleMoves: ["darkpulse", "oblivionwing", "focusblast", "uturn", "foulplay", "suckerpunch", "toxic", "taunt", "roost"],
		randomDoubleBattleMoves: ["darkpulse", "oblivionwing", "taunt", "focusblast", "hurricane", "roost", "suckerpunch", "snarl", "skydrop", "protect"],
		eventPokemon: [
			{"generation": 6, "level": 50, "moves": ["snarl", "oblivionwing", "disable", "darkpulse"]},
			{"generation": 6, "level": 100, "shiny": true, "moves": ["oblivionwing", "suckerpunch", "darkpulse", "foulplay"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["oblivionwing", "darkpulse", "phantomforce", "psychic"]},
			{"generation": 7, "level": 60, "moves": ["oblivionwing", "darkpulse", "phantomforce", "psychic"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "moves": ["oblivionwing", "darkpulse", "heatwave", "tailwind"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	zygarde: {
		randomBattleMoves: ["dragondance", "thousandarrows", "outrage", "extremespeed", "irontail"],
		randomDoubleBattleMoves: ["dragondance", "thousandarrows", "extremespeed", "rockslide", "coil", "stoneedge", "glare", "protect"],
		eventPokemon: [
			{"generation": 6, "level": 70, "moves": ["crunch", "earthquake", "camouflage", "dragonpulse"]},
			{"generation": 6, "level": 100, "moves": ["landswrath", "extremespeed", "glare", "outrage"], "pokeball": "cherishball"},
			{"generation": 7, "level": 30, "moves": ["safeguard", "dig", "bind", "landswrath"]},
			{"generation": 7, "level": 50, "moves": ["bind", "landswrath", "sandstorm", "haze"]},
			{"generation": 7, "level": 50, "isHidden": true, "moves": ["bind", "landswrath", "sandstorm", "haze"]},
			{"generation": 7, "level": 60, "shiny": true, "moves": ["landswrath", "glare", "safeguard", "dragonbreath"], "pokeball": "cherishball"},
			{"generation": 7, "level": 60, "shiny": true, "isHidden": true, "moves": ["landswrath", "glare", "safeguard", "dragonbreath"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "shiny": true, "moves": ["thousandarrows", "outrage", "extremespeed", "dragondance"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "shiny": true, "isHidden": true, "moves": ["thousandarrows", "outrage", "extremespeed", "dragondance"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DOU",
	},
	zygarde10: {
		randomBattleMoves: ["dragondance", "thousandarrows", "outrage", "extremespeed", "irontail", "substitute"],
		randomDoubleBattleMoves: ["dragondance", "thousandarrows", "extremespeed", "irontail", "protect"],
		eventPokemon: [
			{"generation": 7, "level": 30, "moves": ["safeguard", "dig", "bind", "landswrath"]},
			{"generation": 7, "level": 50, "isHidden": true, "moves": ["safeguard", "dig", "bind", "landswrath"]},
			{"generation": 7, "level": 60, "shiny": true, "isHidden": true, "moves": ["landswrath", "glare", "safeguard", "dragonbreath"], "pokeball": "cherishball"},
			{"generation": 7, "level": 100, "shiny": true, "isHidden": true, "moves": ["thousandarrows", "outrage", "extremespeed", "dragondance"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		gen: 7,
		tier: "RU",
		doublesTier: "(DUU)",
	},
	zygardecomplete: {
		gen: 7,
		requiredAbility: "Power Construct",
		battleOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	diancie: {
		randomBattleMoves: ["reflect", "lightscreen", "stealthrock", "diamondstorm", "moonblast", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["diamondstorm", "moonblast", "reflect", "lightscreen", "safeguard", "substitute", "calmmind", "psychic", "dazzlinggleam", "protect"],
		eventPokemon: [
			{"generation": 6, "level": 50, "perfectIVs": 0, "moves": ["diamondstorm", "reflect", "return", "moonblast"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "shiny": true, "moves": ["diamondstorm", "moonblast", "reflect", "return"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "NU",
		doublesTier: "DOU",
	},
	dianciemega: {
		randomBattleMoves: ["calmmind", "moonblast", "earthpower", "hiddenpowerfire", "psyshock", "diamondstorm"],
		randomDoubleBattleMoves: ["diamondstorm", "moonblast", "calmmind", "psyshock", "earthpower", "hiddenpowerfire", "dazzlinggleam", "protect"],
		requiredItem: "Diancite",
		tier: "OU",
		doublesTier: "DOU",
	},
	hoopa: {
		randomBattleMoves: ["nastyplot", "psyshock", "shadowball", "focusblast", "trick"],
		randomDoubleBattleMoves: ["hyperspacehole", "shadowball", "focusblast", "protect", "psychic", "trickroom"],
		eventPokemon: [
			{"generation": 6, "level": 50, "moves": ["hyperspacehole", "nastyplot", "psychic", "astonish"], "pokeball": "cherishball"},
			{"generation": 7, "level": 15, "moves": ["shadowball", "nastyplot", "psychic", "hyperspacehole"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "NUBL",
		doublesTier: "(DUU)",
	},
	hoopaunbound: {
		randomBattleMoves: ["nastyplot", "substitute", "psychic", "darkpulse", "focusblast", "hyperspacefury", "zenheadbutt", "icepunch", "drainpunch", "gunkshot", "knockoff", "trick"],
		randomDoubleBattleMoves: ["psychic", "darkpulse", "focusblast", "protect", "hyperspacefury", "zenheadbutt", "icepunch", "drainpunch", "gunkshot"],
		eventOnly: true,
		tier: "UUBL",
		doublesTier: "DOU",
	},
	volcanion: {
		randomBattleMoves: ["substitute", "steameruption", "fireblast", "sludgewave", "hiddenpowerice", "earthpower", "superpower"],
		randomDoubleBattleMoves: ["substitute", "steameruption", "heatwave", "sludgebomb", "rockslide", "earthquake", "protect"],
		eventPokemon: [
			{"generation": 6, "level": 70, "moves": ["steameruption", "overheat", "hydropump", "mist"], "pokeball": "cherishball"},
			{"generation": 6, "level": 70, "moves": ["steameruption", "flamethrower", "hydropump", "explosion"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "UU",
		doublesTier: "DOU",
	},
	rowlet: {
		tier: "LC",
	},
	dartrix: {
		tier: "NFE",
	},
	decidueye: {
		randomBattleMoves: ["spiritshackle", "uturn", "leafblade", "roost", "swordsdance", "suckerpunch"],
		randomDoubleBattleMoves: ["spiritshackle", "leafblade", "bravebird", "protect", "suckerpunch"],
		eventPokemon: [
			{"generation": 7, "level": 50, "isHidden": true, "moves": ["leafblade", "phantomforce", "shadowsneak", "bravebird"], "pokeball": "pokeball"},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	litten: {
		tier: "LC",
	},
	torracat: {
		tier: "NFE",
	},
	incineroar: {
		randomBattleMoves: ["fakeout", "darkestlariat", "flareblitz", "uturn", "earthquake", "knockoff"],
		randomDoubleBattleMoves: ["fakeout", "darkestlariat", "flareblitz", "crosschop", "willowisp", "taunt", "snarl"],
		eventPokemon: [
			{"generation": 7, "level": 50, "isHidden": true, "moves": ["fakeout", "uturn", "darkestlariat", "flareblitz"], "pokeball": "pokeball"},
		],
		tier: "NU",
		doublesTier: "DOU",
	},
	popplio: {
		tier: "LC",
	},
	brionne: {
		tier: "NFE",
	},
	primarina: {
		randomBattleMoves: ["hydropump", "moonblast", "scald", "psychic", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["hypervoice", "moonblast", "substitute", "protect", "icebeam"],
		eventPokemon: [
			{"generation": 7, "level": 50, "isHidden": true, "moves": ["hypervoice", "moonblast", "icywind", "perishsong"], "pokeball": "pokeball"},
		],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	pikipek: {
		tier: "LC",
	},
	trumbeak: {
		tier: "NFE",
	},
	toucannon: {
		randomBattleMoves: ["return", "beakblast", "swordsdance", "roost", "brickbreak", "bulletseed"],
		randomDoubleBattleMoves: ["bulletseed", "rockblast", "bravebird", "tailwind", "protect"],
		encounters: [
			{"generation": 7, "level": 26},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	yungoos: {
		tier: "LC",
	},
	gumshoos: {
		randomBattleMoves: ["uturn", "return", "crunch", "earthquake", "firepunch"],
		randomDoubleBattleMoves: ["uturn", "return", "superfang", "protect", "crunch"],
		encounters: [
			{"generation": 7, "level": 17},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	gumshoostotem: {
		eventPokemon: [
			{"generation": 7, "level": 20, "perfectIVs": 3, "moves": ["sandattack", "odorsleuth", "bide", "bite"], "pokeball": "pokeball"},
		],
		eventOnly: true,
	},
	grubbin: {
		tier: "LC",
	},
	charjabug: {
		tier: "NFE",
	},
	vikavolt: {
		randomBattleMoves: ["agility", "bugbuzz", "thunderbolt", "voltswitch", "energyball", "hiddenpowerice"],
		randomDoubleBattleMoves: ["thunderbolt", "bugbuzz", "stringshot", "protect", "voltswitch", "hiddenpowerice"],
		tier: "NU",
		doublesTier: "DUU",
	},
	vikavolttotem: {
		eventPokemon: [
			{"generation": 7, "level": 35, "perfectIVs": 3, "moves": ["spark", "acrobatics", "guillotine", "bugbuzz"], "pokeball": "pokeball"},
		],
		eventOnly: true,
	},
	crabrawler: {
		tier: "LC",
	},
	crabominable: {
		randomBattleMoves: ["icehammer", "closecombat", "earthquake", "stoneedge"],
		randomDoubleBattleMoves: ["icehammer", "closecombat", "stoneedge", "protect", "wideguard", "earthquake"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	oricorio: {
		randomBattleMoves: ["calmmind", "revelationdance", "hurricane", "toxic", "roost", "uturn"],
		randomDoubleBattleMoves: ["revelationdance", "airslash", "hurricane", "tailwind", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	oricoriopompom: {
		randomBattleMoves: ["calmmind", "revelationdance", "hurricane", "toxic", "roost", "uturn"],
		randomDoubleBattleMoves: ["revelationdance", "airslash", "hurricane", "tailwind", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	oricoriopau: {
		randomBattleMoves: ["calmmind", "revelationdance", "hurricane", "toxic", "roost", "uturn"],
		randomDoubleBattleMoves: ["revelationdance", "airslash", "hurricane", "tailwind", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	oricoriosensu: {
		randomBattleMoves: ["calmmind", "revelationdance", "hurricane", "toxic", "roost", "uturn"],
		randomDoubleBattleMoves: ["revelationdance", "airslash", "hurricane", "tailwind", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	cutiefly: {
		tier: "LC Uber",
	},
	ribombee: {
		randomBattleMoves: ["quiverdance", "bugbuzz", "moonblast", "hiddenpowerfire", "roost"],
		randomDoubleBattleMoves: ["quiverdance", "pollenpuff", "moonblast", "protect", "batonpass"],
		tier: "NUBL",
		doublesTier: "(DUU)",
	},
	ribombeetotem: {
		eventPokemon: [
			{"generation": 7, "level": 50, "perfectIVs": 3, "moves": ["bugbuzz", "dazzlinggleam", "aromatherapy", "quiverdance"], "pokeball": "pokeball"},
		],
		eventOnly: true,
	},
	rockruff: {
		tier: "LC",
	},
	rockruffdusk: {
		eventPokemon: [
			{"generation": 7, "level": 10, "moves": ["tackle", "bite", "firefang", "happyhour"], "pokeball": "cherishball"},
			{"generation": 7, "level": 10, "moves": ["tackle", "bite", "thunderfang", "happyhour"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	lycanroc: {
		randomBattleMoves: ["swordsdance", "accelerock", "stoneedge", "drillrun", "firefang"],
		randomDoubleBattleMoves: ["accelerock", "stoneedge", "crunch", "firefang", "protect", "taunt"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	lycanrocmidnight: {
		randomBattleMoves: ["stoneedge", "stealthrock", "suckerpunch", "swordsdance", "firepunch"],
		randomDoubleBattleMoves: ["stoneedge", "suckerpunch", "swordsdance", "protect", "taunt"],
		eventPokemon: [
			{"generation": 7, "level": 50, "isHidden": true, "moves": ["stoneedge", "firefang", "suckerpunch", "swordsdance"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	lycanrocdusk: {
		randomBattleMoves: ["swordsdance", "accelerock", "stoneedge", "drillrun", "firefang", "return"],
		randomDoubleBattleMoves: ["accelerock", "stoneedge", "rockslide", "drillrun", "firefang", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	wishiwashi: {
		randomBattleMoves: ["scald", "hydropump", "icebeam", "hiddenpowergrass", "earthquake"],
		randomDoubleBattleMoves: ["hydropump", "icebeam", "endeavor", "protect", "hiddenpowergrass", "earthquake", "helpinghand"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	wishiwashischool: {
		requiredAbility: 'Schooling',
		battleOnly: true,
	},
	mareanie: {
		eventPokemon: [
			{"generation": 7, "level": 1, "shiny": 1, "isHidden": true, "moves": ["toxic", "stockpile", "swallow"], "pokeball": "cherishball"},
		],
		tier: "LC",
	},
	toxapex: {
		randomBattleMoves: ["toxicspikes", "banefulbunker", "recover", "scald", "haze"],
		randomDoubleBattleMoves: ["scald", "banefulbunker", "haze", "wideguard", "lightscreen"],
		tier: "OU",
		doublesTier: "(DUU)",
	},
	mudbray: {
		tier: "LC",
	},
	mudsdale: {
		randomBattleMoves: ["earthquake", "closecombat", "rockslide", "heavyslam", "stealthrock"],
		randomDoubleBattleMoves: ["highhorsepower", "heavyslam", "closecombat", "rockslide", "protect", "earthquake", "rocktomb"],
		encounters: [
			{"generation": 7, "level": 29},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	dewpider: {
		tier: "LC",
	},
	araquanid: {
		randomBattleMoves: ["liquidation", "leechlife", "lunge", "toxic", "mirrorcoat", "stickyweb"],
		randomDoubleBattleMoves: ["liquidation", "leechlife", "lunge", "poisonjab", "protect", "wideguard"],
		tier: "RU",
		doublesTier: "DUU",
	},
	araquanidtotem: {
		eventPokemon: [
			{"generation": 7, "level": 25, "perfectIVs": 3, "moves": ["spiderweb", "bugbite", "bubblebeam", "bite"], "pokeball": "pokeball"},
		],
		eventOnly: true,
	},
	fomantis: {
		tier: "LC",
	},
	lurantis: {
		randomBattleMoves: ["leafstorm", "hiddenpowerice", "superpower", "knockoff", "synthesis"],
		randomDoubleBattleMoves: ["leafstorm", "gigadrain", "hiddenpowerice", "hiddenpowerfire", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	lurantistotem: {
		eventPokemon: [
			{"generation": 7, "level": 30, "perfectIVs": 3, "moves": ["growth", "ingrain", "leafblade", "synthesis"], "pokeball": "pokeball"},
		],
		eventOnly: true,
	},
	morelull: {
		tier: "LC",
	},
	shiinotic: {
		randomBattleMoves: ["spore", "strengthsap", "moonblast", "substitute", "leechseed"],
		randomDoubleBattleMoves: ["spore", "gigadrain", "moonblast", "sludgebomb", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	salandit: {
		tier: "LC",
	},
	salazzle: {
		randomBattleMoves: ["nastyplot", "fireblast", "sludgewave", "hiddenpowergrass"],
		randomDoubleBattleMoves: ["protect", "flamethrower", "sludgebomb", "hiddenpowerground", "hiddenpowerice", "fakeout", "encore", "willowisp", "taunt"],
		eventPokemon: [
			{"generation": 7, "level": 50, "isHidden": false, "moves": ["fakeout", "toxic", "sludgebomb", "flamethrower"], "pokeball": "cherishball"},
		],
		encounters: [
			{"generation": 7, "level": 16},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	salazzletotem: {
		eventPokemon: [
			{"generation": 7, "level": 30, "perfectIVs": 3, "moves": ["smog", "doubleslap", "flameburst", "toxic"], "pokeball": "pokeball"},
		],
		eventOnly: true,
	},
	stufful: {
		tier: "LC",
	},
	bewear: {
		randomBattleMoves: ["hammerarm", "icepunch", "swordsdance", "return", "shadowclaw", "doubleedge"],
		randomDoubleBattleMoves: ["hammerarm", "icepunch", "doubleedge", "protect", "wideguard"],
		eventPokemon: [
			{"generation": 7, "level": 50, "gender": "F", "isHidden": true, "moves": ["babydolleyes", "brutalswing", "superpower", "bind"], "pokeball": "cherishball"},
		],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	bounsweet: {
		tier: "LC",
	},
	steenee: {
		eventPokemon: [
			{"generation": 7, "level": 20, "nature": "Naive", "isHidden": false, "abilities": ["leafguard"], "moves": ["magicalleaf", "doubleslap", "sweetscent"], "pokeball": "cherishball"},
		],
		tier: "NFE",
	},
	tsareena: {
		randomBattleMoves: ["powerwhip", "highjumpkick", "knockoff", "uturn", "rapidspin", "synthesis"],
		randomDoubleBattleMoves: ["highjumpkick", "playrough", "tropkick", "uturn", "feint", "protect"],
		tier: "RU",
		doublesTier: "DUU",
	},
	comfey: {
		randomBattleMoves: ["aromatherapy", "drainingkiss", "toxic", "synthesis", "uturn"],
		randomDoubleBattleMoves: ["floralhealing", "drainingkiss", "uturn", "lightscreen", "taunt"],
		eventPokemon: [
			{"generation": 7, "level": 10, "nature": "Jolly", "isHidden": false, "moves": ["celebrate", "leechseed", "drainingkiss", "magicalleaf"], "pokeball": "cherishball"},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	oranguru: {
		randomBattleMoves: ["nastyplot", "psyshock", "focusblast", "thunderbolt", "trickroom"],
		randomDoubleBattleMoves: ["trickroom", "foulplay", "instruct", "psychic", "protect", "lightscreen", "reflect"],
		eventPokemon: [
			{"generation": 7, "level": 1, "shiny": 1, "isHidden": false, "abilities": ["telepathy"], "moves": ["instruct", "psychic", "psychicterrain"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "isHidden": true, "moves": ["instruct", "foulplay", "trickroom", "allyswitch"], "pokeball": "pokeball"},
		],
		tier: "(PU)",
		doublesTier: "DOU",
	},
	passimian: {
		randomBattleMoves: ["rockslide", "closecombat", "earthquake", "ironhead", "uturn", "knockoff"],
		randomDoubleBattleMoves: ["closecombat", "uturn", "rockslide", "protect", "ironhead", "taunt"],
		eventPokemon: [
			{"generation": 7, "level": 1, "shiny": 1, "isHidden": false, "moves": ["bestow", "fling", "feint"], "pokeball": "cherishball"},
			{"generation": 7, "level": 50, "isHidden": true, "moves": ["closecombat", "uturn", "knockoff", "gunkshot"], "pokeball": "pokeball"},
		],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	wimpod: {
		tier: "LC",
	},
	golisopod: {
		randomBattleMoves: ["spikes", "firstimpression", "liquidation", "aquajet", "toxic", "leechlife"],
		randomDoubleBattleMoves: ["firstimpression", "aquajet", "liquidation", "leechlife", "protect", "suckerpunch", "wideguard"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	sandygast: {
		tier: "LC",
	},
	palossand: {
		randomBattleMoves: ["shoreup", "earthpower", "shadowball", "protect", "toxic", "stealthrock"],
		randomDoubleBattleMoves: ["shoreup", "protect", "shadowball", "earthpower"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	pyukumuku: {
		randomBattleMoves: ["toxic", "recover", "counter", "reflect", "lightscreen"],
		randomDoubleBattleMoves: ["reflect", "lightscreen", "counter", "helpinghand", "safeguard", "memento"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	typenull: {
		randomBattleMoves: ["return", "uturn", "swordsdance", "rest", "sleeptalk"],
		eventPokemon: [
			{"generation": 7, "level": 40, "shiny": 1, "perfectIVs": 3, "moves": ["crushclaw", "scaryface", "xscissor", "takedown"]},
			{"generation": 7, "level": 60, "shiny": 1, "perfectIVs": 3, "moves": ["metalsound", "ironhead", "doublehit", "airslash"]},
		],
		eventOnly: true,
		tier: "(PU)",
		doublesTier: "NFE",
	},
	silvally: {
		randomBattleMoves: ["swordsdance", "return", "doubleedge", "crunch", "flamecharge", "flamethrower", "icebeam", "uturn", "ironhead"],
		randomDoubleBattleMoves: ["protect", "doubleedge", "uturn", "crunch", "icebeam", "partingshot", "flamecharge", "swordsdance", "explosion"],
		eventPokemon: [
			{"generation": 7, "level": 100, "shiny": true, "moves": ["multiattack", "partingshot", "punishment", "scaryface"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallybug: {
		randomBattleMoves: ["flamethrower", "icebeam", "thunderbolt", "uturn", "defog"],
		randomDoubleBattleMoves: ["protect", "uturn", "flamethrower", "icebeam", "thunderbolt", "thunderwave"],
		requiredItem: "Bug Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallydark: {
		randomBattleMoves: ["multiattack", "swordsdance", "flamecharge", "ironhead"],
		randomDoubleBattleMoves: ["protect", "multiattack", "icebeam", "partingshot", "uturn", "snarl", "thunderwave"],
		requiredItem: "Dark Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallydragon: {
		randomBattleMoves: ["multiattack", "ironhead", "flamecharge", "flamethrower", "icebeam", "dracometeor", "swordsdance", "uturn"],
		randomDoubleBattleMoves: ["protect", "dracometeor", "icebeam", "flamethrower", "partingshot", "uturn", "thunderwave"],
		requiredItem: "Dragon Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallyelectric: {
		randomBattleMoves: ["multiattack", "flamethrower", "icebeam", "partingshot", "toxic"],
		randomDoubleBattleMoves: ["protect", "thunderbolt", "icebeam", "uturn", "partingshot", "snarl", "thunderwave"],
		requiredItem: "Electric Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallyfairy: {
		randomBattleMoves: ["multiattack", "flamethrower", "rockslide", "thunderwave", "partingshot"],
		randomDoubleBattleMoves: ["protect", "multiattack", "uturn", "icebeam", "partingshot", "flamethrower", "thunderwave"],
		requiredItem: "Fairy Memory",
		tier: "PU",
		doublesTier: "(DUU)",
	},
	silvallyfighting: {
		randomBattleMoves: ["swordsdance", "multiattack", "shadowclaw", "flamecharge", "ironhead"],
		randomDoubleBattleMoves: ["protect", "multiattack", "rockslide", "swordsdance", "flamecharge"],
		requiredItem: "Fighting Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallyfire: {
		randomBattleMoves: ["multiattack", "icebeam", "thunderbolt", "uturn", "defog"],
		randomDoubleBattleMoves: ["protect", "flamethrower", "snarl", "uturn", "thunderbolt", "icebeam", "thunderwave"],
		requiredItem: "Fire Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallyflying: {
		randomBattleMoves: ["multiattack", "flamethrower", "ironhead", "partingshot", "thunderwave"],
		randomDoubleBattleMoves: ["protect", "multiattack", "partingshot", "swordsdance", "flamecharge", "uturn", "ironhead", "thunderwave"],
		requiredItem: "Flying Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallyghost: {
		randomBattleMoves: ["multiattack", "flamethrower", "icebeam", "partingshot", "toxic"],
		randomDoubleBattleMoves: ["protect", "multiattack", "uturn", "icebeam", "partingshot"],
		requiredItem: "Ghost Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallygrass: {
		randomBattleMoves: ["multiattack", "flamethrower", "icebeam", "partingshot", "toxic"],
		randomDoubleBattleMoves: ["protect", "flamethrower", "multiattack", "icebeam", "uturn", "partingshot", "thunderwave"],
		requiredItem: "Grass Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallyground: {
		randomBattleMoves: ["multiattack", "swordsdance", "flamecharge", "rockslide"],
		randomDoubleBattleMoves: ["protect", "multiattack", "icebeam", "thunderbolt", "flamecharge", "rockslide", "swordsdance"],
		requiredItem: "Ground Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallyice: {
		randomBattleMoves: ["multiattack", "thunderbolt", "flamethrower", "uturn", "toxic"],
		randomDoubleBattleMoves: ["protect", "icebeam", "thunderbolt", "partingshot", "uturn", "thunderwave"],
		requiredItem: "Ice Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallypoison: {
		randomBattleMoves: ["multiattack", "flamethrower", "icebeam", "partingshot", "toxic"],
		randomDoubleBattleMoves: ["protect", "multiattack", "uturn", "partingshot", "flamethrower", "icebeam", "thunderwave"],
		requiredItem: "Poison Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallypsychic: {
		randomBattleMoves: ["multiattack", "flamethrower", "rockslide", "partingshot", "thunderwave"],
		randomDoubleBattleMoves: ["protect", "multiattack", "partingshot", "uturn", "flamethrower", "thunderwave"],
		requiredItem: "Psychic Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallyrock: {
		randomBattleMoves: ["multiattack", "flamethrower", "icebeam", "partingshot", "toxic"],
		randomDoubleBattleMoves: ["protect", "rockslide", "uturn", "icebeam", "flamethrower", "partingshot"],
		requiredItem: "Rock Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallysteel: {
		randomBattleMoves: ["multiattack", "crunch", "flamethrower", "thunderbolt", "defog"],
		randomDoubleBattleMoves: ["protect", "multiattack", "swordsdance", "rockslide", "flamecharge", "uturn", "partingshot"],
		requiredItem: "Steel Memory",
		tier: "NU",
		doublesTier: "(DUU)",
	},
	silvallywater: {
		randomBattleMoves: ["multiattack", "icebeam", "thunderbolt", "partingshot", "defog"],
		randomDoubleBattleMoves: ["protect", "multiattack", "icebeam", "thunderbolt", "flamethrower", "partingshot", "uturn", "thunderwave"],
		requiredItem: "Water Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	minior: {
		randomBattleMoves: ["shellsmash", "powergem", "acrobatics", "earthquake"],
		randomDoubleBattleMoves: ["shellsmash", "powergem", "acrobatics", "earthquake", "protect"],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	miniormeteor: {
		requiredAbility: 'Shields Down',
		battleOnly: true,
	},
	komala: {
		randomBattleMoves: ["return", "suckerpunch", "woodhammer", "earthquake", "playrough", "uturn"],
		randomDoubleBattleMoves: ["protect", "return", "uturn", "suckerpunch", "woodhammer", "shadowclaw", "playrough", "swordsdance"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	turtonator: {
		randomBattleMoves: ["fireblast", "shellsmash", "earthquake", "dragontail", "explosion", "dragonpulse", "dracometeor"],
		randomDoubleBattleMoves: ["dragonpulse", "dracometeor", "fireblast", "shellsmash", "protect", "focusblast", "explosion"],
		eventPokemon: [
			{"generation": 7, "level": 1, "shiny": 1, "moves": ["flamethrower", "bodyslam", "wideguard"], "pokeball": "cherishball"},
			{"generation": 7, "level": 30, "gender": "M", "nature": "Brave", "moves": ["flamethrower", "shelltrap", "dragontail"], "pokeball": "cherishball"},
		],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	togedemaru: {
		randomBattleMoves: ["ironhead", "spikyshield", "zingzap", "nuzzle", "uturn", "wish"],
		randomDoubleBattleMoves: ["ironhead", "zingzap", "nuzzle", "spikyshield", "encore", "fakeout", "uturn"],
		tier: "NU",
		doublesTier: "DOU",
	},
	togedemarutotem: {
		eventPokemon: [
			{"generation": 7, "level": 30, "perfectIVs": 3, "moves": ["nuzzle", "magnetrise", "discharge", "zingzap"], "pokeball": "pokeball"},
		],
		eventOnly: true,
	},
	mimikyu: {
		randomBattleMoves: ["swordsdance", "shadowsneak", "playrough", "taunt", "shadowclaw"],
		randomDoubleBattleMoves: ["trickroom", "shadowclaw", "playrough", "woodhammer", "willowisp", "shadowsneak", "swordsdance", "protect"],
		eventPokemon: [
			{"generation": 7, "level": 10, "moves": ["copycat", "babydolleyes", "splash", "astonish"], "pokeball": "cherishball"},
			{"generation": 7, "level": 10, "shiny": true, "moves": ["astonish", "playrough", "copycat", "substitute"], "pokeball": "cherishball"},
		],
		tier: "OU",
		doublesTier: "DOU",
	},
	mimikyubusted: {
		requiredAbility: 'Disguise',
		battleOnly: true,
	},
	mimikyutotem: {
		eventPokemon: [
			{"generation": 7, "level": 40, "perfectIVs": 3, "moves": ["feintattack", "charm", "slash", "shadowclaw"], "pokeball": "pokeball"},
		],
		eventOnly: true,
	},
	mimikyubustedtotem: {
		requiredAbility: 'Disguise',
		battleOnly: true,
	},
	bruxish: {
		randomBattleMoves: ["psychicfangs", "crunch", "liquidation", "icefang", "aquajet", "swordsdance"],
		randomDoubleBattleMoves: ["trickroom", "psychicfangs", "crunch", "liquidation", "protect", "swordsdance"],
		tier: "NUBL",
		doublesTier: "DUU",
	},
	drampa: {
		randomBattleMoves: ["dracometeor", "dragonpulse", "hypervoice", "fireblast", "thunderbolt", "glare", "substitute", "roost"],
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "hypervoice", "fireblast", "icebeam", "energyball", "thunderbolt", "protect", "roost"],
		eventPokemon: [
			{"generation": 7, "level": 1, "shiny": 1, "isHidden": true, "moves": ["playnice", "echoedvoice", "hurricane"], "pokeball": "cherishball"},
		],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	dhelmise: {
		randomBattleMoves: ["powerwhip", "anchorshot", "knockoff", "earthquake", "rapidspin", "synthesis"],
		randomDoubleBattleMoves: ["powerwhip", "shadowclaw", "anchorshot", "protect", "gyroball"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	jangmoo: {
		tier: "LC",
	},
	hakamoo: {
		tier: "NFE",
	},
	kommoo: {
		randomBattleMoves: ["dragondance", "outrage", "closecombat", "poisonjab", "clangingscales"],
		randomDoubleBattleMoves: ["clangingscales", "focusblast", "flashcannon", "substitute", "protect", "dracometeor"],
		encounters: [
			{"generation": 7, "level": 41},
		],
		tier: "UU",
		doublesTier: "DOU",
	},
	kommoototem: {
		eventPokemon: [
			{"generation": 7, "level": 50, "perfectIVs": 3, "moves": ["workup", "screech", "irondefense", "dragonclaw"], "pokeball": "pokeball"},
		],
		eventOnly: true,
	},
	tapukoko: {
		randomBattleMoves: ["wildcharge", "voltswitch", "naturesmadness", "bravebird", "uturn", "dazzlinggleam"],
		randomDoubleBattleMoves: ["wildcharge", "voltswitch", "dazzlinggleam", "bravebird", "protect", "thunderbolt", "hiddenpowerice", "taunt", "skydrop", "naturesmadness", "uturn"],
		eventPokemon: [
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["naturesmadness", "discharge", "agility", "electroball"]},
			{"generation": 7, "level": 60, "shiny": true, "nature": "Timid", "isHidden": false, "moves": ["naturesmadness", "discharge", "agility", "electroball"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		unreleasedHidden: true,
		tier: "OU",
		doublesTier: "DOU",
	},
	tapulele: {
		randomBattleMoves: ["moonblast", "psychic", "psyshock", "calmmind", "focusblast", "hiddenpowerfire", "taunt"],
		randomDoubleBattleMoves: ["moonblast", "psychic", "dazzlinggleam", "focusblast", "protect", "taunt", "shadowball", "thunderbolt"],
		eventPokemon: [
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["naturesmadness", "extrasensory", "flatter", "moonblast"]},
			{"generation": 7, "level": 60, "shiny": true, "isHidden": false, "moves": ["naturesmadness", "extrasensory", "flatter", "moonblast"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		unreleasedHidden: true,
		tier: "OU",
		doublesTier: "DOU",
	},
	tapubulu: {
		randomBattleMoves: ["woodhammer", "hornleech", "stoneedge", "superpower", "megahorn", "bulkup"],
		randomDoubleBattleMoves: ["woodhammer", "hornleech", "stoneedge", "superpower", "leechseed", "protect", "naturesmadness"],
		eventPokemon: [
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["naturesmadness", "zenheadbutt", "megahorn", "skullbash"]},
			{"generation": 7, "level": 60, "shiny": true, "isHidden": false, "moves": ["naturesmadness", "zenheadbutt", "megahorn", "skullbash"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		unreleasedHidden: true,
		tier: "OU",
		doublesTier: "DOU",
	},
	tapufini: {
		randomBattleMoves: ["calmmind", "moonblast", "scald", "taunt", "icebeam", "hydropump"],
		randomDoubleBattleMoves: ["muddywater", "moonblast", "calmmind", "icebeam", "healpulse", "protect", "taunt", "swagger"],
		eventPokemon: [
			{"generation": 7, "level": 60, "isHidden": false, "moves": ["naturesmadness", "muddywater", "aquaring", "hydropump"]},
		],
		eventOnly: true,
		unreleasedHidden: true,
		tier: "OU",
		doublesTier: "DOU",
	},
	cosmog: {
		eventPokemon: [
			{"generation": 7, "level": 5, "moves": ["splash"]},
		],
		eventOnly: true,
		tier: "LC",
	},
	cosmoem: {
		tier: "NFE",
	},
	solgaleo: {
		randomBattleMoves: ["sunsteelstrike", "zenheadbutt", "flareblitz", "morningsun", "stoneedge", "earthquake"],
		randomDoubleBattleMoves: ["wideguard", "protect", "sunsteelstrike", "morningsun", "zenheadbutt", "flareblitz"],
		eventPokemon: [
			{"generation": 7, "level": 55, "moves": ["sunsteelstrike", "cosmicpower", "crunch", "zenheadbutt"]},
			{"generation": 7, "level": 60, "moves": ["sunsteelstrike", "cosmicpower", "crunch", "zenheadbutt"]},
		],
		tier: "Uber",
		doublesTier: "DUber",
	},
	lunala: {
		randomBattleMoves: ["moongeistbeam", "psyshock", "calmmind", "focusblast", "roost"],
		randomDoubleBattleMoves: ["wideguard", "protect", "roost", "moongeistbeam", "psychic", "focusblast"],
		eventPokemon: [
			{"generation": 7, "level": 55, "moves": ["moongeistbeam", "cosmicpower", "nightdaze", "shadowball"]},
			{"generation": 7, "level": 60, "moves": ["moongeistbeam", "cosmicpower", "nightdaze", "shadowball"]},
		],
		tier: "Uber",
		doublesTier: "DUber",
	},
	nihilego: {
		randomBattleMoves: ["stealthrock", "toxicspikes", "sludgewave", "powergem", "thunderbolt", "grassknot"],
		randomDoubleBattleMoves: ["powergem", "sludgebomb", "grassknot", "protect", "thunderbolt", "hiddenpowerice"],
		eventPokemon: [
			{"generation": 7, "level": 55, "moves": ["powergem", "mirrorcoat", "acidspray", "venomdrench"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["powergem", "acidspray", "stealthrock", "mirrorcoat"]},
		],
		eventOnly: true,
		tier: "UU",
		doublesTier: "(DUU)",
	},
	buzzwole: {
		randomBattleMoves: ["superpower", "drainpunch", "leechlife", "stoneedge", "poisonjab", "earthquake"],
		randomDoubleBattleMoves: ["drainpunch", "superpower", "leechlife", "icepunch", "poisonjab", "protect"],
		eventPokemon: [
			{"generation": 7, "level": 65, "moves": ["counter", "hammerarm", "lunge", "dynamicpunch"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["counter", "hammerarm", "lunge", "dynamicpunch"]},
		],
		eventOnly: true,
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	pheromosa: {
		randomBattleMoves: ["highjumpkick", "uturn", "icebeam", "poisonjab", "bugbuzz"],
		randomDoubleBattleMoves: ["highjumpkick", "uturn", "icebeam", "poisonjab", "bugbuzz", "protect", "speedswap"],
		eventPokemon: [
			{"generation": 7, "level": 60, "moves": ["triplekick", "lunge", "bugbuzz", "mefirst"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["triplekick", "lunge", "bugbuzz", "mefirst"]},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUU",
	},
	xurkitree: {
		randomBattleMoves: ["thunderbolt", "voltswitch", "energyball", "dazzlinggleam", "hiddenpowerice", "electricterrain"],
		randomDoubleBattleMoves: ["thunderbolt", "hiddenpowerice", "tailglow", "protect", "energyball", "hypnosis"],
		eventPokemon: [
			{"generation": 7, "level": 65, "moves": ["hypnosis", "discharge", "electricterrain", "powerwhip"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["hypnosis", "discharge", "electricterrain", "powerwhip"]},
		],
		eventOnly: true,
		tier: "UUBL",
		doublesTier: "DUU",
	},
	celesteela: {
		randomBattleMoves: ["autotomize", "heavyslam", "airslash", "fireblast", "earthquake", "leechseed", "protect"],
		randomDoubleBattleMoves: ["protect", "heavyslam", "fireblast", "earthquake", "wideguard", "leechseed", "flamethrower", "substitute"],
		eventPokemon: [
			{"generation": 7, "level": 65, "moves": ["autotomize", "seedbomb", "skullbash", "irondefense"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["autotomize", "seedbomb", "skullbash", "irondefense"]},
		],
		eventOnly: true,
		tier: "OU",
		doublesTier: "DOU",
	},
	kartana: {
		randomBattleMoves: ["leafblade", "sacredsword", "smartstrike", "knockoff", "swordsdance"],
		randomDoubleBattleMoves: ["leafblade", "sacredsword", "smartstrike", "psychocut", "protect", "knockoff"],
		eventPokemon: [
			{"generation": 7, "level": 60, "moves": ["leafblade", "xscissor", "detect", "airslash"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["leafblade", "xscissor", "detect", "airslash"]},
		],
		eventOnly: true,
		tier: "OU",
		doublesTier: "DOU",
	},
	guzzlord: {
		randomBattleMoves: ["dracometeor", "hammerarm", "knockoff", "earthquake", "fireblast"],
		randomDoubleBattleMoves: ["dracometeor", "crunch", "darkpulse", "wideguard", "fireblast", "protect"],
		eventPokemon: [
			{"generation": 7, "level": 70, "moves": ["thrash", "gastroacid", "heavyslam", "wringout"]},
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["hammerarm", "thrash", "gastroacid", "heavyslam"]},
		],
		eventOnly: true,
		tier: "NU",
		doublesTier: "(DUU)",
	},
	necrozma: {
		randomBattleMoves: ["calmmind", "photongeyser", "darkpulse", "moonlight", "stealthrock", "storedpower"],
		randomDoubleBattleMoves: ["calmmind", "trickroom", "moonlight", "storedpower", "psyshock", "darkpulse"],
		eventPokemon: [
			{"generation": 7, "level": 75, "moves": ["stealthrock", "irondefense", "wringout", "prismaticlaser"]},
			{"generation": 7, "level": 65, "moves": ["photongeyser", "irondefense", "powergem", "nightslash"]},
		],
		eventOnly: true,
		tier: "RU",
		doublesTier: "(DUU)",
	},
	necrozmaduskmane: {
		randomBattleMoves: ["swordsdance", "sunsteelstrike", "photongeyser", "earthquake", "knockoff", "autotomize"],
		randomDoubleBattleMoves: ["swordsdance", "sunsteelstrike", "photongeyser", "earthquake", "knockoff", "rockslide"],
		eventPokemon: [
			{"generation": 7, "level": 65, "moves": ["sunsteelstrike"]},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	necrozmadawnwings: {
		randomBattleMoves: ["calmmind", "moongeistbeam", "photongeyser", "heatwave", "powergem", "trickroom"],
		eventPokemon: [
			{"generation": 7, "level": 65, "moves": ["moongeistbeam"]},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	necrozmaultra: {
		requiredItem: "Ultranecrozium Z",
		battleOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	magearna: {
		randomBattleMoves: ["shiftgear", "ironhead", "calmmind", "fleurcannon", "flashcannon", "thunderbolt", "focusblast"],
		randomDoubleBattleMoves: ["dazzlinggleam", "flashcannon", "substitute", "protect", "trickroom", "fleurcannon", "aurasphere", "voltswitch"],
		eventPokemon: [
			{"generation": 7, "level": 50, "moves": ["fleurcannon", "flashcannon", "luckychant", "helpinghand"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "OU",
		doublesTier: "DUber",
	},
	magearnaoriginal: {
		isUnreleased: true,
		tier: "Unreleased",
	},
	marshadow: {
		randomBattleMoves: ["bulkup", "spectralthief", "closecombat", "rocktomb", "shadowsneak", "icepunch"],
		randomDoubleBattleMoves: ["spectralthief", "closecombat", "shadowsneak", "icepunch", "protect"],
		eventPokemon: [
			{"generation": 7, "level": 50, "moves": ["spectralthief", "closecombat", "forcepalm", "shadowball"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	poipole: {
		eventPokemon: [
			{"generation": 7, "level": 40, "shiny": 1, "perfectIVs": 3, "moves": ["charm", "venomdrench", "nastyplot", "poisonjab"], "pokeball": "pokeball"},
			{"generation": 7, "level": 40, "shiny": true, "nature": "Modest", "perfectIVs": 3, "moves": ["venomdrench", "nastyplot", "poisonjab", "dragonpulse"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		tier: "NFE",
	},
	naganadel: {
		randomBattleMoves: ["nastyplot", "dragonpulse", "sludgewave", "fireblast", "dracometeor", "uturn"],
		randomDoubleBattleMoves: ["tailwind", "dragonpulse", "sludgebomb", "fireblast", "dracometeor", "uturn", "protect"],
		tier: "Uber",
		doublesTier: "DUU",
	},
	stakataka: {
		randomBattleMoves: ["gyroball", "stoneedge", "trickroom", "earthquake", "superpower", "stealthrock"],
		randomDoubleBattleMoves: ["gyroball", "stoneedge", "trickroom", "earthquake", "superpower", "stealthrock", "rockslide"],
		eventPokemon: [
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["irondefense", "ironhead", "rockblast", "wideguard"]},
		],
		eventOnly: true,
		tier: "RUBL",
		doublesTier: "DOU",
	},
	blacephalon: {
		randomBattleMoves: ["mindblown", "fireblast", "shadowball", "hiddenpowerice", "trick", "willowisp", "calmmind"],
		randomDoubleBattleMoves: ["mindblown", "fireblast", "shadowball", "hiddenpowerice", "heatwave", "protect"],
		eventPokemon: [
			{"generation": 7, "level": 60, "shiny": 1, "moves": ["fireblast", "shadowball", "trick", "mindblown"]},
		],
		eventOnly: true,
		tier: "OU",
		doublesTier: "DUU",
	},
	zeraora: {
		randomBattleMoves: ["plasmafists", "closecombat", "voltswitch", "hiddenpowerice", "knockoff", "grassknot", "workup"],
		randomDoubleBattleMoves: ["plasmafists", "closecombat", "voltswitch", "hiddenpowerice", "knockoff", "grassknot", "fakeout", "protect"],
		eventPokemon: [
			{"generation": 7, "level": 50, "moves": ["plasmafists", "thunderpunch", "closecombat", "thunder"]},
		],
		eventOnly: true,
		tier: "UU",
		doublesTier: "(DUU)",
	},
	meltan: {
		isNonstandard: "LGPE",
		tier: "Illegal",
	},
	melmetal: {
		isNonstandard: "LGPE",
		tier: "Illegal",
	},
	missingno: {
		randomBattleMoves: ["watergun", "skyattack", "doubleedge", "metronome"],
		isNonstandard: "Glitch",
		tier: "Illegal",
	},
	tomohawk: {
		randomBattleMoves: ["aurasphere", "roost", "stealthrock", "rapidspin", "hurricane", "airslash", "taunt", "substitute", "toxic", "naturepower", "earthpower"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	necturna: {
		randomBattleMoves: ["powerwhip", "hornleech", "willowisp", "shadowsneak", "stoneedge", "sacredfire", "boltstrike", "vcreate", "extremespeed", "closecombat", "shellsmash", "spore", "milkdrink", "stickyweb"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	mollux: {
		randomBattleMoves: ["fireblast", "thunderbolt", "sludgebomb", "thunderwave", "willowisp", "recover", "rapidspin", "trick", "stealthrock", "toxicspikes", "lavaplume"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	aurumoth: {
		randomBattleMoves: ["dragondance", "quiverdance", "closecombat", "bugbuzz", "hydropump", "megahorn", "psychic", "blizzard", "thunder", "focusblast", "zenheadbutt"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	malaconda: {
		randomBattleMoves: ["powerwhip", "glare", "toxic", "suckerpunch", "rest", "substitute", "uturn", "synthesis", "rapidspin", "knockoff"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	cawmodore: {
		randomBattleMoves: ["bellydrum", "bulletpunch", "drainpunch", "acrobatics", "drillpeck", "substitute", "ironhead", "quickattack"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	volkraken: {
		randomBattleMoves: ["scald", "powergem", "hydropump", "memento", "hiddenpowerice", "fireblast", "willowisp", "uturn", "substitute", "flashcannon", "surf"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	plasmanta: {
		randomBattleMoves: ["sludgebomb", "thunderbolt", "substitute", "hiddenpowerice", "psyshock", "dazzlinggleam", "flashcannon"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	naviathan: {
		randomBattleMoves: ["dragondance", "waterfall", "ironhead", "iciclecrash"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	crucibelle: {
		randomBattleMoves: ["headsmash", "gunkshot", "coil", "lowkick", "uturn", "stealthrock"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	crucibellemega: {
		randomBattleMoves: ["headsmash", "gunkshot", "coil", "woodhammer", "lowkick", "uturn"],
		requiredItem: "Crucibellite",
		isNonstandard: "CAP",
		tier: "CAP",
	},
	kerfluffle: {
		randomBattleMoves: ["aurasphere", "moonblast", "taunt", "partingshot", "gigadrain", "yawn"],
		isNonstandard: "CAP",
		eventPokemon: [
			{"generation": 6, "level": 16, "isHidden": false, "abilities": ["naturalcure"], "moves": ["celebrate", "holdhands", "fly", "metronome"], "pokeball": "cherishball"},
		],
		tier: "CAP",
	},
	pajantom: {
		randomBattleMoves: ["spiritshackle", "dragonclaw", "toxicspikes", "psychicfangs", "earthquake", "substitute", "leechlife"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	jumbao: {
		randomBattleMoves: ["moonblast", "flameburst", "focusblast", "synthesis", "solarbeam", "hiddenpowerground", "healingwish"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	caribolt: {
		randomBattleMoves: ["swordsdance", "quickattack", "powerwhip", "return", "voltswitch"],
		isNonstandard: "CAP",
		eventPokemon: [
			{"generation": 7, "level": 50, "moves": ["celebrate", "hornleech", "wildcharge", "metronome"], "pokeball": "cherishball"},
		],
		tier: "CAP",
	},
	smokomodo: {
		randomBattleMoves: ["flareblitz", "earthquake", "hiddenpowerice", "toxic", "stealthrock"],
		isNonstandard: "CAP",
		eventPokemon: [
			{"generation": 7, "level": 50, "moves": ["celebrate", "eruption", "magnitude", "camouflage"], "pokeball": "cherishball"},
		],
		tier: "CAP",
	},
	snaelstrom: {
		randomBattleMoves: ["stealthrock", "icebeam", "toxic", "spikyshield", "scald", "rapidspin"],
		isNonstandard: "CAP",
		eventPokemon: [
			{"generation": 7, "level": 50, "moves": ["celebrate", "liquidation", "leechlife", "metronome"], "pokeball": "cherishball"},
		],
		tier: "CAP",
	},
	syclant: {
		randomBattleMoves: ["bugbuzz", "icebeam", "blizzard", "earthpower", "spikes", "superpower", "tailglow", "uturn", "focusblast"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	revenankh: {
		randomBattleMoves: ["bulkup", "shadowsneak", "drainpunch", "rest", "moonlight", "icepunch", "glare"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	pyroak: {
		randomBattleMoves: ["leechseed", "lavaplume", "substitute", "protect", "gigadrain"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	fidgit: {
		randomBattleMoves: ["spikes", "stealthrock", "toxicspikes", "wish", "rapidspin", "encore", "uturn", "sludgebomb", "earthpower"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	stratagem: {
		randomBattleMoves: ["paleowave", "earthpower", "fireblast", "gigadrain", "calmmind", "substitute"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	arghonaut: {
		randomBattleMoves: ["recover", "bulkup", "waterfall", "drainpunch", "crosschop", "stoneedge", "thunderpunch", "aquajet", "machpunch"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	kitsunoh: {
		randomBattleMoves: ["shadowstrike", "earthquake", "superpower", "meteormash", "uturn", "icepunch", "trick", "willowisp"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	cyclohm: {
		randomBattleMoves: ["slackoff", "dracometeor", "dragonpulse", "fireblast", "thunderbolt", "hydropump", "discharge", "healbell"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	colossoil: {
		randomBattleMoves: ["earthquake", "crunch", "suckerpunch", "uturn", "rapidspin", "encore", "pursuit", "knockoff"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	krilowatt: {
		randomBattleMoves: ["surf", "thunderbolt", "icebeam", "earthpower"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	voodoom: {
		randomBattleMoves: ["aurasphere", "darkpulse", "taunt", "painsplit", "substitute", "hiddenpowerice", "vacuumwave", "flashcannon"],
		isNonstandard: "CAP",
		tier: "CAP",
	},
	syclar: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	embirch: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	flarelm: {
		isNonstandard: "CAP",
		tier: "CAP NFE",
	},
	breezi: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	scratchet: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	necturine: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	cupra: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	argalis: {
		isNonstandard: "CAP",
		tier: "CAP NFE",
	},
	brattler: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	cawdet: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	volkritter: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	snugglow: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	floatoy: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	caimanoe: {
		isNonstandard: "CAP",
		tier: "CAP NFE",
	},
	pluffle: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	rebble: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	tactite: {
		isNonstandard: "CAP",
		tier: "CAP NFE",
	},
	privatyke: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	voodoll: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	mumbao: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	pokestarufo: {
		isNonstandard: "Pokestar",
		eventPokemon: [
			{"generation": 5, "level": 38, "moves": ["bubblebeam", "counter", "recover", "signalbeam"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarufo2: {
		isNonstandard: "Pokestar",
		eventPokemon: [
			{"generation": 5, "level": 47, "moves": ["darkpulse", "flamethrower", "hyperbeam", "icebeam"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarbrycenman: {
		isNonstandard: "Pokestar",
		eventPokemon: [
			{"generation": 5, "level": 56, "moves": ["icebeam", "nightshade", "psychic", "uturn"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarmt: {
		isNonstandard: "Pokestar",
		eventPokemon: [
			{"generation": 5, "level": 63, "moves": ["earthquake", "ironhead", "spark", "surf"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarmt2: {
		isNonstandard: "Pokestar",
		eventPokemon: [
			{"generation": 5, "level": 72, "moves": ["dragonpulse", "flamethrower", "metalburst", "thunderbolt"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestartransport: {
		isNonstandard: "Pokestar",
		eventPokemon: [
			{"generation": 5, "level": 20, "moves": ["clearsmog", "flameburst", "discharge"]},
			{"generation": 5, "level": 50, "moves": ["iciclecrash", "overheat", "signalbeam"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestargiant: {
		isNonstandard: "Pokestar",
		eventPokemon: [
			{"generation": 5, "level": 99, "moves": ["crushgrip", "focuspunch", "growl", "rage"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestargiant2: {
		isNonstandard: "Pokestar",
		eventPokemon: [
			{"generation": 5, "level": 99, "moves": ["crushgrip", "doubleslap", "teeterdance", "stomp"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarhumanoid: {
		isNonstandard: "Pokestar",
		eventPokemon: [
			{"generation": 5, "level": 20, "gender": "M", "moves": ["scratch", "shadowclaw", "acid"]},
			{"generation": 5, "level": 30, "gender": "M", "moves": ["darkpulse", "shadowclaw", "slash"]},
			{"generation": 5, "level": 20, "gender": "F", "moves": ["acid", "nightslash"]},
			{"generation": 5, "level": 20, "gender": "M", "moves": ["acid", "doubleedge"]},
			{"generation": 5, "level": 20, "gender": "F", "moves": ["acid", "rockslide"]},
			{"generation": 5, "level": 20, "gender": "M", "moves": ["acid", "thudnerpunch"]},
			{"generation": 5, "level": 20, "gender": "F", "moves": ["acid", "icepunch"]},
			{"generation": 5, "level": 40, "gender": "F", "moves": ["explosion", "selfdestruct"]},
			{"generation": 5, "level": 40, "gender": "F", "moves": ["shadowclaw", "scratch"]},
			{"generation": 5, "level": 40, "gender": "M", "moves": ["nightslash", "scratch"]},
			{"generation": 5, "level": 40, "gender": "M", "moves": ["doubleedge", "scratch"]},
			{"generation": 5, "level": 40, "gender": "F", "moves": ["rockslide", "scratch"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarmonster: {
		isNonstandard: "Pokestar",
		eventPokemon: [
			{"generation": 5, "level": 50, "moves": ["darkpulse", "confusion"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarf00: {
		isNonstandard: "Pokestar",
		eventPokemon: [
			{"generation": 5, "level": 10, "moves": ["teeterdance", "growl", "flail", "chatter"]},
			{"generation": 5, "level": 58, "moves": ["needlearm", "headsmash", "headbutt", "defensecurl"]},
			{"generation": 5, "level": 60, "moves": ["hammerarm", "perishsong", "ironhead", "thrash"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarf002: {
		isNonstandard: "Pokestar",
		eventPokemon: [
			{"generation": 5, "level": 52, "moves": ["flareblitz", "ironhead", "psychic", "wildcharge"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarspirit: {
		isNonstandard: "Pokestar",
		eventPokemon: [
			{"generation": 5, "level": 99, "moves": ["crunch", "dualchop", "slackoff", "swordsdance"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarblackdoor: {
		isNonstandard: "Pokestar",
		eventPokemon: [
			{"generation": 5, "level": 53, "moves": ["luckychant", "amnesia", "ingrain", "rest"]},
			{"generation": 5, "level": 70, "moves": ["batonpass", "counter", "flamecharge", "toxic"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarwhitedoor: {
		isNonstandard: "Pokestar",
		eventPokemon: [
			{"generation": 5, "level": 7, "moves": ["batonpass", "inferno", "mirrorcoat", "toxic"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarblackbelt: {
		isNonstandard: "Pokestar",
		eventPokemon: [
			{"generation": 5, "level": 30, "moves": ["focuspunch", "machpunch", "taunt"]},
			{"generation": 5, "level": 40, "moves": ["machpunch", "hammerarm", "jumpkick"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestargiantpropo2: {
		isNonstandard: "Pokestar",
		eventPokemon: [
			{"generation": 5, "level": 99, "moves": ["crushgrip", "doubleslap", "teeterdance", "stomp"]},
		],
		gen: 5,
		tier: "Illegal",
	},
	pokestarufopropu2: {
		isNonstandard: "Pokestar",
		eventPokemon: [
			{"generation": 5, "level": 47, "moves": ["darkpulse", "flamethrower", "hyperbeam", "icebeam"]},
		],
		gen: 5,
		tier: "Illegal",
	},
};

exports.BattleFormatsData = BattleFormatsData;
