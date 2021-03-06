let userHp = parseInt(20);
let racHp = parseInt(10);
let inquirer = require('inquirer');
let turn = 0;
let prompt = [
	'Holy @$%! a raccoon is attacking you! Guess a number between 1 and 5!',
	'Keep the attacks up to defeat the raccoon!',
];
let racArray = [
	'The raccoon bites your face!',
	'Raccoon cavalry charge!!',
	'The raccoon throws a trash can at you!',
	'The raccoon bites your foot!',
	'The raccoon insults your mothers intelligence!',
];
// main game function logic
function round() {
	setTimeout(() => {
		inquirer
			.prompt([
				{
					type: 'checkbox',
					message:
						'Holy Moley! A raccoon is attacking you! Guess a number between 1 and 5! \n Use the arrow keys to highlight your number. \n Press the spacbar to make your selection \n Then hit enter to see if you hit. \n Guess the correct number to keep the attacks up to defeat the raccoon!',
					choices: ['1', '2', '3', '4', '5'],
					name: 'userAttack',
				},
			])
			.then(function(data) {
				let raccoonChoices = [1, 2, 3, 4, 5];
				let raccoonAttack =
					raccoonChoices[Math.floor(Math.random() * raccoonChoices.length)];
				let attack = parseInt(data.userAttack);

				if (attack == raccoonAttack) {
					racHp = racHp - attack;
					line();
					console.log(`You hit for ${attack} damage to the raccoon!`);
					line();
					check();
				} else if (attack != raccoonAttack) {
					let raccoon = racArray[Math.floor(Math.random() * racArray.length)];
					userHp = userHp - raccoonAttack;
					line();
					console.log(`${raccoon}! ${raccoonAttack} damage to you!`);
					line();
					check();
				}
			});
	}, 2000);
}
//checks if user or raccoon is dead. Then calls appropriate function
function check() {
	if (userHp <= 0) {
		line();
		console.log('You LOST to a racoon! How sad for you. :(');
		line();
		rematch();
	} else if (racHp <= 0) {
		line();
		console.log('You WON! You live to fight another day!');
		line();
		rematch();
	} else {
		line();
		console.log(`You have ${userHp}Hp left. The raccoon has ${racHp}Hp left`);
		line();
		round();
	}
}

function line() {
	console.log('==============================================================');
}
//calls for game reset and continue without closing node command line
function rematch() {
	inquirer
		.prompt([
			{
				type: 'checkbox',
				message: 'Would you like a rematch?',
				choices: ['yes', 'no'],
				name: 'fight',
			},
		])
		.then(function(data) {
			if (String(data.fight) === 'yes') {
				turn = 0;
				userHp = parseInt(20);
				racHp = parseInt(10);
				line();
				console.log('Lets Do This!!!');
				line();
				round();
			} else {
				process.exit();
			}
		});
}

round();
