import instance from "../instance.js";

export const authApi = {
    getUser(payload) {
        return instance.post('/user/login', payload);
    }
}