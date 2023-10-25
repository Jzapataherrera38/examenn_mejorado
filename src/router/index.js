import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/EntradaApli.vue'),
  },
  {
    path: '/docente',
    name: 'docente',
    component: () => import(/* webpackChunkName: "about" */ '../views/DashBoard.vue'),
    children: [
      {
        path: '/',
        name: 'crearexamen',
        component: () => import(/* webpackChunkName: "about" */ '../views/CrearExamen.vue'),

      },
      {
        path: '/crear_usuario',
        name: 'crear_usuario',
        component: () => import(/* webpackChunkName: "about" */ '../views/CrearUsuario.vue')
      
      },
      {
        path: '/docente/listar',
        name: 'listar',
        component: () => import(/* webpackChunkName: "about" */ '../views/ListarExamen.vue')
      
      },
      {
        path: '/preview/:id',
        name: 'preview',
        component: () => import(/* webpackChunkName: "about" */ '../views/Preview_Examen.vue')
      
      },
     

    ]
  },
  {
    path: '/alumno',
    name: 'almuno',
    component: () => import(/* webpackChunkName: "about" */ '../views/DashBoard.vue'),
    children: [
       {
        path: '/',
        name: 'listar',
        component: () => import(/* webpackChunkName: "about" */ '../views/ListarExamen.vue')
      
      },
      {
        path: '/alumno/realizarexamen/:id',
        name: 'preview',
        component: () => import(/* webpackChunkName: "about" */ '../views/RealizarExamen.vue')
      
      },

    ]
  },
 

  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
