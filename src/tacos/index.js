import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Http from '@/http';

@inject("store") @observer
class App extends Component {
    
    
  componentDidMount() {
      Http.fetchTest().then(res=>{

      })
  }
    
  onClick = () => {
      const { history } = this.props;
      history.push("/about");
  }
  
  render() {
    return (
      <div>
				这是tacos <button onClick={this.onClick}> 跳转关于页面</button>
			</div>
    );
  }
}
export default App;





