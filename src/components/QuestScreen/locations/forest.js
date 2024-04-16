import store from '@/store'
import { getRandom } from '@/utils/utils'
import { dead } from './start'

let forestDepth = 0

const getKnife = isGetKnife => {
    store.state.inventory.knifes = +isGetKnife

    return [ events[3], events[1] ][+(getRandom(3) === 2)]
}

const getMoney = isProbabilityBandits => {
    store.state.inventory.money += getRandom(100, 10)

    return isProbabilityBandits ? [ events[3], events[1] ][getRandom(2)] : events[3]
}

const bandits = action => {
    if (action === 'fight') {
        if (store.state.inventory.knifes > 0 && action === 'fight') {
            store.state.inventory.knifes--
            if (getRandom(10) > 1)
                return events[6]
        }
        else if (getRandom(2))
            return events[5]
    }
    else if (getRandom(3) > 0)
        return events[5]

    return dead
}

const getRich = () => {
    store.state.inventory.riches.forest.isHave = true
}

export const forest = () => forestDepth < 10 || store.state.inventory.riches.forest.isHave && !!getRandom(4)
    ? events[getRandom(3)]
    : events[4]

export const forestDescription = 'Добро пожаловать в лес. Не надейся - он не магический, ты тут не встретишь феечку или принца на белом коне, а вот столкнуться с местной гопотой вполне можешь'

const events = [
    {
        imgSrc: new URL('@/assets/img/locations/forest/knife.png', import.meta.url).href,
        text: 'Гуляя по лесу ты заметил спящего человека, но подойдя поближе ты понял, что он мертв. Думаешь что же там блестит в нём? Это не украшения, це нож. Возможно он поможет тебе выжить, если ты решишь его взять конечно',

        buttons: [
            { text: 'Взять', click: () => getKnife(true) },
            { text: 'Отказываюсь', click: () => getKnife(false) }
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

        buttons: [ { text: 'Озолотиться', click: () => getMoney(true) } ]
    },
    {
        imgSrc: new URL('@/assets/img/locations/forest/forest.png', import.meta.url).href,
        text: 'Вернёшься, или же продолжишь свой путь, авантюрист?',

        buttons: [
            { text: 'Я должен сделать больше', click: forest },
            { text: 'Доомоой', click: () => {} }
        ]
    },
    {
        imgSrc: new URL('@/assets/img/locations/forest/forest.png', import.meta.url).href,
        text: 'Ебаный абобаный, ежевика светится',

        buttons: [ { text: 'Моя прелесть', click: () => getRich() } ]
    },
    {
        imgSrc: new URL('@/assets/img/locations/forest/forest.png', import.meta.url).href,
        text: 'Ты смог выжить, но повезёт ли тебе так в следующий раз?',

        buttons: [
            { text: 'Продолжить свой нелёгкий ', click: forest },
            { text: 'По съёбам отсюда', click: () => {} }
        ]
    },
    {
        imgSrc: new URL('@/assets/img/locations/forest/bloody_gold.png', import.meta.url).href,
        text: 'Очешуеть, ты зарубил их!? Убийца! Но у одного из них висит мешок с золотишком, что они вестимо награбили. Возьмёшь ли ты эти грязные деньги?',

        buttons: [
            { text: 'Озолотиться', click: () => getMoney(false) },
            { text: 'Не брать грех на душу', click: () => forest }
        ]
    }
]