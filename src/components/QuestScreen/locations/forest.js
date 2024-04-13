import store from '@/store'
import { getRandom } from '@/utils/utils'
import { dead } from './start'

let forestDepth = 0 //riches logic

const getKnife = isGetKnife => {
    store.state.inventory.knifes = +isGetKnife

    return [ events[3], events[1] ][+(getRandom(3) === 2)]
}

const getMoney = () => {
    store.state.inventory.money += getRandom(100, 10)

    return [ events[3], events[1] ][getRandom(2)]
}

const bandits = action => {
    return [ dead, events[5] ][+!!getRandom(action === 'run' ? 3 : 2)]
}

const getRich = () => {
    console.log('aboba')
}

export const forest = () => forestDepth < 50 ? events[getRandom(3)] : events[4] //надо добавить проверку на то что нет сокровища

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

        buttons: [ { text: 'Озолотиться', click: getMoney } ]
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

        buttons: [ { text: 'Я должен сделать больше', click: getRich() } ]
    },
    {
        imgSrc: new URL('@/assets/img/locations/forest/forest.png', import.meta.url).href,
        text: 'Ты смог выжить, но повезёт ли тебе так в следующий раз?',

        buttons: [
            { text: 'Продолжить свой нелёгкий ', click: forest },
            { text: 'По съёбам отсюда', click: () => {} }
        ]
    }
]