import { decorate, observable, action } from "mobx";

class Todo {
    id = Math.random();
    title = "关于";
    finished = false;
    fetchProjectsSuccess=()=>{console.log("执行动作关于，",this.id)}
}
decorate(Todo, {
    title: observable,
    finished: observable,
    fetchProjectsSuccess:action
});
export default new Todo();