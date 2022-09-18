import {Fetch,hearder} from "./service";
import store from "../AppStore";

const setHearder = () => {
    const { token } = store;
    if(token){
        hearder.token = token;
    }else{
        // 防刷新处理
        hearder.token = sessionStorage.getItem("token");
    }
}


class Http {
    // 测试
    fetchTest = (body) =>{
        setHearder();
        return Fetch("/users/test", "post", body);
    }
}

export default new Http()