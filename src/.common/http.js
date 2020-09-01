import {Fetch,hearder} from "./service";
import store from "../AppStore";

const setHearder = () => {
    const { ApiKey } = store;
    if(ApiKey){
        hearder.ApiKey = ApiKey;
    }else{
        // 防刷新处理
        hearder.ApiKey = sessionStorage.getItem("ApiKey");
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