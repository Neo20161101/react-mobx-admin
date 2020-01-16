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
    fetchPro = (body) =>{
        return new Promise(function (reslove, reject) {
            reslove({ code: 200 })  //状态由等待变为成功，传的参数作为then函数中成功函数的实参
            //reject('失败')  //状态由等待变为失败，传的参数作为then函数中失败函数的实参
        });
    };
    // 测试
    fetchTest = (body) =>{
        setHearder();
        return Fetch("/users/test", "post", body);
    }
}

export default new Http()