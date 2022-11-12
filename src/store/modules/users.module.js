import { UsersService } from "@/services/UsersService"
export default {
    namespaced: true,
    state: {
        users: UsersService.getAllUsers()
    },
    mutations: {
        ADD_USER: (state, payload) => {
            console.log(payload);
            state.users.push(payload);
        },
        UPDATE_USER: (state, payload) => {
            state.users = state.users.map((user) => {
                if (user.id == payload.id) {
                    console.log("user: ", user);
                    return { ...payload }
                }
                return user;
            });
        }
    },
    actions: {
        addUser({ commit }, payload) {
            return commit('ADD_USER', payload);
        },
        updateUser({ commit }, payload) {
            return commit('UPDATE_USER', payload);
        }
    }
}