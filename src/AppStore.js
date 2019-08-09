import { decorate, observable, action } from "mobx";
import Fetch from "./service";
//import List from './Mock/list.json';

class Todo {
    constructor() {

    }
    id = Math.random();
    title = "app全局";
    loggedIn = true;
    collapsed = false;
    fetchProjectsSuccess=()=>{

    };
    fetchPro = () =>{
        Fetch("webapi/api/login","post",{login_name:"12345678911",password:"123456"}).then(function (res) {
            console.dir(res)
        })
        // 获取远端图片


    }

}
decorate(Todo, {
    title: observable,
    collapsed: observable,
    fetchProjectsSuccess:action,
    fetchPro:action
});
export default new Todo();