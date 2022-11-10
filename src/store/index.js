import { toNumber } from '@vue/shared';
import { createStore } from 'vuex'
import usersModule from './modules/users.module'

export default createStore({
  state: {
    usersState: usersModule.state
  },
  getters: {
    getUsersState: (state) => {
      return state.usersState;
    },
    getUser: (state) => (id) => {
      const userById = state.usersState.users.find(user => {
        return parseInt(user.id) === parseInt(id);
      });
      return userById;
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
