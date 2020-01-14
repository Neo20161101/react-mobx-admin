import React, { Component } from 'react';
import { Provider, observer, inject } from "mobx-react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Router, Switch, Route } from 'react-router';
// import router from "../../router/router";

@inject("store") @observer
class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { match, location, history } = this.props

    const { store: { fetchLogin, fetchPro } } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        fetchLogin(values).then(res => {
            sessionStorage.setItem("loggedIn",1)
            history.push("/tacos");
//          window.location.href = "/tacos";
        }).catch(error => { console.error(error); })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" >
        <Form.Item >
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(<Input prefix={< Icon type="user"
            style={{ color: 'rgba(0,0,0,.25)' }}
          />}
            placeholder="Username" />
          )
          }
        </Form.Item>
        <Form.Item >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={< Icon type="lock"
              style={
                { color: 'rgba(0,0,0,.25)' }
              }
            />} type="password" placeholder="Password" />
          )
          }
        </Form.Item>
        <Form.Item >
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary"
            htmlType="submit"
            className="login-form-button" >
            Log in
          </Button>Or
          <a href=""> register now! </a>
        </Form.Item>
      </Form>
    );
  }
}
export default Form.create({ name: 'normal_login' })(NormalLoginForm);





