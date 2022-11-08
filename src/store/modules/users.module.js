import { UsersService } from "@/services/UsersService"
export default {
    namespaced: true,
    state: {
        users: UsersService.getAllUsers()
    },
    mutations: {

    },
    actions: {
        
    }
}