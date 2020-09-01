import {decorate, observable, action} from "mobx";
import {Fetch} from "./.common/service";

//import List from './Mock/list.json';

class Todo {
    constructor() {

    }

    id = Math.random();
    title = "app全局";
    loggedIn = false; //是否登陆
    userInfo = {name: "name"};
    ApiKey = null;
    //以下公共接口
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