module.exports = {
    login: {
        num1:
        {
            id: 1,
            identifiant: "test",
            mdp: "test"
        },
        num2:
        {
            identifiant: "admin",
            mdp: "admin"
        }
    },
    battleLog: [{
        id: 1,
        source: 'Player 1',
        message: 'attaque et inflige',
        effect: '10 points de dégats.',
    },
    {
        id: 2,
        source: 'Player 2',
        message: 'attaque et inflige',
        effect: '5 points de dégats.',
    },
    {
        id: 3,
        source: 'Player 1',
        message: 'attaque et inflige',
        effect: '8 points de dégats.',
    },
    {
        id: 4,
        source: 'Player 2',
        message: 'attaque et inflige',
        effect: '15 points de dégats.',
    },
    {
        id: 5,
        source: 'Player 1',
        message: 'est mort!',
        effect: null,
    }],
    room: {
        id:1,
        player: {
            id: 1,
            name: 'JEAN CLAUDE VAN FLY',
            catchphrase: 'Quand tu fais le calcul, je suis mon meilleur modèle car il faut se recréer... pour recréer... a better you et ça, c\'est très dur, et, et, et... c\'est très facile en même temps. Ça respire le meuble de Provence, hein ?',
            hp: 80,
            maxHp: 100,
            attack: 10,
            defense: 10,
            luck: 10,
            speed: 10,
            mortality: 0.1,
            unique_skill: 1,
            pic: 'image2.png',
            attacks: [{
                id: 1,
            },
            {

            },
            {

            },
            {

            }]
        },
        enemy: {
            id: 2,
            name: 'Le Greviste',
            catchphrase: 'Quand tu fais le calcul, je suis mon meilleur modèle car il faut se recréer... pour recréer... a better you et ça, c\'est très dur, et, et, et... c\'est très facile en même temps. Ça respire le meuble de Provence, hein ?',
            pic: 'image4.png',
            hp: 50,
            maxHp: 100
        }
    },
}