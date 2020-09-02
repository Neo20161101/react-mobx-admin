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
    @observable panes:[];
    @observable todos = [
        { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
        { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' }
    ];
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
    fetchLogin: action,
    fetchLoginout: action,
    fetchPro: action
});
export default new Todo();