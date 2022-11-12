import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import UsersView from '@/views/UsersView'
import UserDetailView from '@/views/UserDetailView'
import UserEditView from '@/views/UserEditView'
import UserAddView from '@/views/UserAddView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView
  },
  {
    path: '/user/add',
    name: 'userAdd',
    component: UserAddView
  },
  {
    path: '/user/details/:id',
    name: 'userDetail',
    component: UserDetailView
  },
  {
    path: '/user/edit/:id',
    name: 'userUpdate',
    component: UserEditView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
