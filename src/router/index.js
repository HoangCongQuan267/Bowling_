import Vue from 'vue'
import Router from 'vue-router'
import BowlingGame from '@/components/BowlingGame'
import MainGame from "@/components/MainGame"
Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            name: 'BowlingGame',
            component: BowlingGame
        },
        {
            path: '/started_',
            name: 'MainGame',
            component: MainGame
        }
    ]
})