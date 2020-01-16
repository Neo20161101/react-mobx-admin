import { decorate, observable, action } from "mobx";
import {Fetch} from "./.common/service";
//import List from './Mock/list.json';

class Todo {
    constructor() {

    }
    id = Math.random();
    title = "app全局";
    loggedIn = false; //是否登陆
    userInfo = {name:"name"};
    ApiKey = null;
    //以下公共接口
    fetchPro = (body) => {
        this.title = "更改全局";
        return new Promise(function (reslove, reject) {
            
            reslove({ code: 200 })  //状态由等待变为成功，传的参数作为then函数中成功函数的实参

            //reject('失败')  //状态由等待变为失败，传的参数作为then函数中失败函数的实参

        });
    };
    fetchTest = (body) => {
        // 测试
        return Fetch("/users/test", "post", body);
    };
		fetchMenu = (body) => {
        // 导航菜单
        return Fetch("/users/menu", "post", body);
		};
    fetchLoginout = (body) => {
        // 退出
        return Fetch("/users/loginout", "post", body);
    };
    fetchLogin = (body) => {
        // 登录
        return Fetch("/users/login", "post", body);
    }

}
decorate(Todo, {
    title: observable,
    collapsed: observable,
    fetchLogin: action,
    fetchLoginout: action,
    fetchPro: action
});
export default new Todo();