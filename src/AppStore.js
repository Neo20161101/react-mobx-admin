import { decorate, observable, action } from "mobx";
import Fetch from "./service";
//import List from './Mock/list.json';

class Todo {
    constructor() {

    }
    id = Math.random();
    title = "app全局";
    loggedIn = false; //是否登陆
    collapsed = false;
    fetchProjectsSuccess = () => {

    };
    fetchPro = (body) => {
        console.log(body)
        return Fetch("/login", "post", body);
        // 获取远端图片


    }

}
decorate(Todo, {
    title: observable,
    collapsed: observable,
    fetchProjectsSuccess: action,
    fetchPro: action
});
export default new Todo();