const getKnife = isGetKnife => {
    console.log(isGetKnife)
}

const getMoney = () => {
    console.log('Money')
}

const bandits = action => {
    console.log(action)
}

const events = [
    {
        imgSrc: new URL('@/assets/img/locations/forest/knife.png', import.meta.url).href,
        text: 'Гуляя по лесу ты заметил спящего человека, но подойдя поближе ты понял, что он мертв. Думаешь что же там блестит в нём? Это не украшения, це нож. Возможно он поможет тебе выжить, если ты решишь его взять конечно',
        buttons: [
            { text: 'Взять', click: () => getKnife(true) },
            { text: 'Не брать', click: () => getKnife(false) }
        ]
    },
    {
        imgSrc: new URL('@/assets/img/locations/forest/bandits.png', import.meta.url).href,
        text: 'Хм, что это за люди? Да это бандиты ебаные.',
        buttons: [
            { text: 'Попробовать убежать', click: () => bandits('run') },
            { text: 'Дать бой', click: () => bandits('fight') }
        ]
    },
    {
        imgSrc: new URL('@/assets/img/locations/forest/money.png', import.meta.url).href,
        text: 'Вау, в твоей жизни бывают радости. Ты нашел пару монет. Мб этого хватит на дошик',
        buttons: [ { text: 'Озолотиться', click: () => getMoney() } ]
    }
]

export const forest = () => events[~~(Math.random() * 3)]

export const forestDescription = 'Добро пожаловать в лес. Не надейся - он не магический, ты тут не встретишь феечку или принца на белом коне, а вот столкнуться с местной гопотой вполне можешь'