import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home/Home"
import Cart from "./Cart/Cart"



const RouteSwitch = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cart" element={<Cart inventory={props.inventory} onClick={props.onClick}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch