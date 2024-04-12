
const getKnife = isGetKnife => {
    console.log(isGetKnife)
}

export const forest = () => {
    return {
        imgSrc: new URL('@/assets/img/locations/forest/forest.png', import.meta.url).href,
        text: 'Гуляя по лесу ты заметил спящего человека, но подойдя поближе ты понял, что он мертв. Думаешь что же там блестит в нём? Это не украшения, це нож. Возможно он поможет тебе выжить, если ты решишь его взять конечно',
        buttons: [
            { text: 'Взять', click: () => getKnife(true) },
            { text: 'Не брать', click: () => getKnife(false) }
        ]
    }
}

export const forestDescription = 'Добро пожаловать в лес. Не надейся - он не магический, ты тут не встретишь феечку или принца на белом коне, а вот столкнуться с местной гопотой вполне можешь'