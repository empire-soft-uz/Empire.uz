import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "../screens/blog/Blog";
import Developers from "../screens/developers/Developers";
import Home from "../screens/home/Home";
import { APP_ROUTES } from "./app-routes";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={APP_ROUTES.HOME} element={<Home />} />
                <Route path={APP_ROUTES.BLOG} element={<Blog />} />
                <Route path={APP_ROUTES.DEVELOPERS} element={<Developers />} />
            </Routes>
        </BrowserRouter>
    )

};

export default Router;