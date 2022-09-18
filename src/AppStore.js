import { makeAutoObservable } from "mobx";


class Store {
    id = Math.random();
    title = "app全局";
    loggedIn = false; //是否登陆
    userInfo = {name: "name"};
    token = null;
    todos = [
        { title: 'Tab 1', content: ['Content of Tab Pane 0'], key: 0 }
    ];
    count = 0; // 这些属性会被自动标记为observable
    price = 0;
    amount = 1;

    constructor() {
        makeAutoObservable(this);
    }
    add() {
        this.count += 1;
    }
    // 使用get set的方法，会被自动标记为computed
    get total() {
        console.log("computed render");
        return this.price + this.amount;
    }

    set total(value) {
        this.price = value;
    }
}
export default new Store();
