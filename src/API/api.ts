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
    follow(id: number) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    unFollow(id:number){
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}
