INSERT INTO passive (id, name, description,	effect,	base_activation,	rate_activation,	is_unique) VALUES
(1, 'Nocturne', 'Vis la nuit, mais myope comme une taupe',	'each 2 turn: speed+50 attack+20% luck+10', 100,	80,	false),
(2, 'Borgne',	'Oeil de verre effrayant',	'enemy: speed-20 defense -20',	20,	100,	true),
(3, 'Tout ou rien',	'Force et Honneur',	'when attaking: damage*2, die if fail', 100,	100,	true),
(4, 'Dépressif',	'Rien ne va plus', 'refuse to attack',	30,	100,	true),
(5, 'Chiant',	'Impossible pour l\'adversaire de se concentrer',	'enemy: defense-70%',	15,	100, true),
(6, 'Réunion Saucisse',	'Gave de saucisse l\'adversaire',	'enemy: attack-30%',	20,	70,	true),
(7, 'Bien droit',	'Bien dressé',	'if enemy.hp < 40 attack+20%',	20,	80,	true),
(8, 'Gras du bide',	'Epaisse brioche encaissant les coups', 'next enemy attack deal -40% damage',	15,	80,	false),
(9, 'Immature',	'Jeune et con',	'50% chance speed+20, 50% speed-10 attack-20',	45,	90,	false);
