
import { createStore } from 'vuex'

import inventory from './modules/inventory'

export default createStore({
    modules: { inventory }
})