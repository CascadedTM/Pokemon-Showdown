'use strict';

// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

/**@type {(FormatsData | {section: string, column?: number})[]} */
let Formats = [

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	// {
		// section: "OM of the Month",
		// column: 2,
	// },
	
	// {
		// section: "Other Metagames",
		// column: 3,
	// },


	// Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "Randomized Metas",
		column: 3,
	},

	{
		name: "[Gen 2] Random Battle",

		mod: 'gen2',
		team: 'random',
		ruleset: ['Pokemon', 'Standard'],
	},

	// RoA Spotlight
	///////////////////////////////////////////////////////////////////

	{
		section: "RoA Spotlight",
		column: 2,
	},
	
	{
		name: "[Gen 2] Inverse OU",

		mod: 'gen2',
		ruleset: ['[Gen 2] OU', 'Inverse Mod'],
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////
	
	{
		section: "Past Generations",
		column: 1,
	},
	
	{
		name: "[Gen 2] Anything Goes",

		mod: 'gen2',
		searchShow: false,
		defaultLevel: 50,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 2] Custom Game",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "Custom Game",

		mod: 'gen2',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		trunc(n) { return Math.trunc(n); },
		defaultLevel: 100,
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
	},
];

exports.Formats = Formats;
