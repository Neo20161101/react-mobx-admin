import { Outlet } from "react-router-dom";
function App() {
    return (
        <div className="App">
            首页
            <Outlet />
        </div>
    );
}

export default App;
