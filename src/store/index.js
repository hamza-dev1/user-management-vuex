import { createStore } from 'vuex'
import usersModule from './modules/users.module'

export default createStore({
  state: {
    usersState: usersModule.state
  },
  getters: {
    getUsersState: (state) => {
      return state.usersState.users;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    usersModule
  }
})
