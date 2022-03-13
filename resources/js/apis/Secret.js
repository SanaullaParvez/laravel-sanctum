import Api from "./Api";

export default {
    getSecret(form){
        return Api.get("/secrets")
    }
};
