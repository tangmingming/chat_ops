import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        person_infos: [
            {"name": "yun.ma", "income": 100},
            {"name": "huateng.ma", "income": 90},
        ]
    }
})
