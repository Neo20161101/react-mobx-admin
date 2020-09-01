import React, { Component } from 'react';
import { Provider, observer, inject } from "mobx-react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Router, Switch, Route } from 'react-router';
// import router from "../../router/router";
import './style.less';

@inject("store") @observer
class NormalLoginForm extends Component {
  handleSubmit = (values) => {
    //e.preventDefault();
    const { match, location, history } = this.props

    const { store: { fetchLogin,ApiKey } } = this.props;
  //   fetchLogin(values).then(res => {
  //       sessionStorage.setItem("ApiKey","88d85d8a6b9d4e409e817dca1c2cd1fb");
  //       this.props.store.ApiKey = "88d85d8a6b9d4e409e817dca1c2cd1fb";
  //       history.push("/tacos");
  // //          window.location.href = "/tacos";
  //   }).catch(error => { console.error(error); })
      sessionStorage.setItem("ApiKey","88d85d8a6b9d4e409e817dca1c2cd1fb");
      this.props.store.ApiKey = "88d85d8a6b9d4e409e817dca1c2cd1fb";
      history.push("/tacos");
  };

  render() {
    return (
        <div className="login-form">
            <Form onFinish={this.handleSubmit} >
                <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
                    <Input prefix={< Icon type="user"
                                          style={{ color: 'rgba(0,0,0,.25)' }}
                    />}
                           placeholder="Username" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                    <Input prefix={< Icon type="lock"
                                          style={
                                              { color: 'rgba(0,0,0,.25)' }
                                          }
                    />} type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item >
                    <a className="login-form-forgot" href="">
                        忘记密码
                    </a>
                    <Button type="primary"
                            htmlType="submit"
                            className="login-form-button" >
                        登陆
                    </Button>Or
                    <a href="#"> 注册! </a>
                </Form.Item>
            </Form>
        </div>

    );
  }
}
export default NormalLoginForm;





