import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/home/Home";
import { APP_ROUTES } from "./app-routes";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={APP_ROUTES.HOME} element={<Home />} />
            </Routes>
        </BrowserRouter>
    )

};

export default Router;