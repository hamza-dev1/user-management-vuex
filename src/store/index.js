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
    getTopUsers: (state) => {
      return state.usersState.users.slice().reverse().slice(0, 5);
    },
    getUser: (state) => (id) => {
      const userById = state.usersState.users.find(user => {
        return parseInt(user.id) === parseInt(id);
      });
      return userById;
    },
    getUsersCount: (state) => {
      return state.usersState.users.length;
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
