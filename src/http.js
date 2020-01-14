import {fetchRequest,hearder} from "./service";
import store from "./AppStore";

const setHearder = () => {
    const { userInfo } = store;
    hearder.ApiKey = userInfo.ApiKey;
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
        return fetchRequest("/users/test", "post", body);
    }
}

export default new Http()