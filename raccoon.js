let userHp = parseInt(20)
let racHp = parseInt(10)
let inquirer = require('inquirer')
let racArray = ['The raccoon bites your face', 'Raccoon cavalry charge!!', 'The raccoon throws a trash can at you', 'The raccoon bites your butt', 'The raccoon insults your mothers intelligence']

function round() {
    inquirer
        .prompt([{
            type: 'checkbox',
            message: 'Holy Moley! a raccoon is attacking you guess a number between 1 and 5!',
            choices: ['1', '2', '3', '4', '5'],
            name: 'userAttack'
        }, ])
        .then(function (data) {
            let raccoonChoices = [1, 2, 3, 4, 5]
            let raccoonAttack = raccoonChoices[Math.floor(Math.random() * raccoonChoices.length)]
            let attack = parseInt(data.userAttack)

            if (attack == raccoonAttack) {
                racHp = racHp - attack
                line()
                console.log(`Hit ${attack} damage to the raccoon!`)
                line()
                check()
            } else if (attack != raccoonAttack) {
                let raccoon = racArray[Math.floor(Math.random() * racArray.length)]
                userHp = userHp - raccoonAttack
                line()
                console.log(`${raccoon}! ${raccoonAttack} damage to you!`)
                line()
                check()
            }
        })
}

function check() {
    if (userHp <= 0) {
        line()
        console.log('You have been beaten by a raccoon! How sad for you.')
        line()
        process.exit()
    } else if (racHp <= 0) {
        line()
        console.log('You live to fight another day!')
        line()
        process.exit()
    } else {
        line()
        console.log(`You have ${userHp}Hp left. The raccoon has ${racHp}Hp left`)
        line()
        round()
    }
}

function line() {
    console.log('==============================================================')
}

round()