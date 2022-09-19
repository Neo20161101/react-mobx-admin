
import { observer } from "mobx-react" // Or "mobx-react".
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import myStore from '../../AppStore';
function App(props) {
    const navigate = useNavigate();
    return (
        <div className="App">
            测试页面
            <Button type="primary" onClick={()=>navigate("/asd")}>Button</Button>
        </div>
    );
}

export default observer(App);
