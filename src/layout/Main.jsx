import {Outlet} from "react-router-dom";
import Header from "../components/Header.jsx";
import App from "../App.jsx";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <App></App>
        </div>
    );
};

export default Main;