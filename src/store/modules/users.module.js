import { UsersService } from "@/services/UsersService"
export default {
    namespaced: true,
    state: {
        users: UsersService.getAllUsers()
    },
    mutations: {
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
        updateUser({ commit }, payload) {
            return commit('UPDATE_USER', payload);
        }
    }
}