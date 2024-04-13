import { forest, forestDescription } from './forest'

export const startDescription = 'Приветствую добрый путник. Ты ведь чего-то подобного ждал. Ну не надейся, я не придумал вступления, так что к правилам. Цель - выжить. Ты можешь выбирать локации, путешевствовать по ним, зарабатывая деньги которые помогут тебе выживать комфортно. Но на большинстве локаций тебя могут убить. И еще, в этом мире тебе не надо срать, так что не ищи сортир, а вот на еду придется потратиться. Кстати на каждой локации можно найти некое сокровище, может какой ключ или типо того, разберешься. Куда важнее то, что в большинство мест тебе не пробиться без этих самых сокровищ, так что ебашь. Удачи вообщем'
export const start = () => ({
    imgSrc: new URL('@/assets/img/locations/start.png', import.meta.url).href,

    text: 'Куда хочешь пойти, добрый путник?',
    buttons: [
        { text: 'Лес', click: forest, description: forestDescription, isDescription: true },
        { text: 'Чилл', click: () => {}, description: '', isDescription: true },
        { text: 'Город', click: () => {}, description: '', isDescription: true },
        { text: 'Гробницы', click: () => {}, description: '', isDescription: true }
    ]
})

export const suicideDescription = 'Тип дед инсайд да? Столько возможноситей проебал если честно. Ну твой выбор конечно, мне мне похуй, ты долбаёб'
export const dead = {
    imgSrc: new URL('@/assets/img/locations/suicide.png', import.meta.url).href,

    text: 'Ещё разок?',
    buttons: [ { text: 'Отправиться снова дорогой приключений, боли, насилия и мерзости', click: start, description: startDescription, isDescription: true } ]
}