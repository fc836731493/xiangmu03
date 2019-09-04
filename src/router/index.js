import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'
import Proddetails from '@/pages/proddetails'
import Car from "../pages/details/car"
import Earth from "../pages/details/earth"
import Hill from "../pages/details/hill"
import Loud from "../pages/details/loud"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: "/proddetails",
      name: "Proddetails",
      component: Proddetails,

      children:[
        {
          path: "/car",
          name: "Car",
          component:Car
        },
        {
          path: "/earth",
          name: "Earth",
          component:Earth
        },
        {
          path: "/hill",
          name: "Hill",
          component:Hill
        },
        {
          path: "/loud",
          name: "Loud",
          component:Loud
        }
      ]
    }
  ]
})
