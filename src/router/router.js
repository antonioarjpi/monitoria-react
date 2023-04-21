import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../pages/signup/signup";
import Login from "../pages/login/login";
import Home from "../pages/home/home";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;