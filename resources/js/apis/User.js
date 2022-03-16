import Api from "./Api";
import Csrf from "./Csrf";
//
// let Api = axios.create({
//     baseURL:'http://localhost:8000/api'
// });
export default {
      async login(form){
        await Csrf.getCookie()
        return Api.post("/login",form)
    },

    async logout(){
        await Csrf.getCookie()
        return Api.post("/logout")
    },

    async register(form){
        await Csrf.getCookie()
        return Api.post("/register",form)
    },

    async auth(){
        // await Csrf.getCookie()
        return Api.get("/user")
    }
};
