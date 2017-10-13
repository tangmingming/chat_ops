import Vue from 'vue'
import Router from 'vue-router'
import foo from '../components/foo.vue'
import bar from '../components/bar.vue'
import user from '../components/user.vue'

import head_1 from '../components/user/head_1.vue'
import head_2 from '../components/user/head_2.vue'


import dashboard from "../components/dashboard.vue"
import host from "../components/index_pages/host.vue"
import readme from "../components/index_pages/readme.vue"
import chart_1 from "../components/index_pages/chart_1.vue"
import chart_2 from "../components/index_pages/chart_2.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/foo',
      name: 'foo',
        component: foo
    },
    {
      path: '/bar',
      name: 'bar',
      component: bar
    },
      {
        path: '/username/:username/age/:age',
        component: user,
          children:[{
            path: 'head_1',
              component: head_1
          },
          {
            path: 'head_2',
              component: head_2
          }]
      },
      {
        path: "/",
          component: dashboard,
          children:[
              {
                path: "host",
                  component: host
              },
              {
                path: "readme",
                  component: readme
              },
              {
                path: "chart_2",
                  component: chart_2
              }

          ]
      }
  ]
})
