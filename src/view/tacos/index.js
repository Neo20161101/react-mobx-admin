import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("store") @observer
class App extends Component {
    
    
  componentDidMount() {

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





