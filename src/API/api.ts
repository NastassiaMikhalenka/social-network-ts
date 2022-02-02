import axios from "axios";


const instance =  axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "1816a1c5-7ed6-402d-b14d-8887ab743f36",
    },
})

// export const getUsers = (currentPage: number, pageSize: number) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(response => response.data)
// }
//
// export const deleteFollow = (id: string) => {
//     return instance.delete(`follow/${id}`)
//         .then(response => response.data)
// }

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}` )
            .then(response => response.data)
    },
    getProfile(userId: string){
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unFollow(userId:number){
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    me ()  {
        return instance.get(`auth/me`,)
            .then(response => response.data)
    },
}
