import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "../screens/blog/Blog";
import Home from "../screens/home/Home";
import { APP_ROUTES } from "./app-routes";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={APP_ROUTES.HOME} element={<Home />} />
                <Route path={APP_ROUTES.BLOG} element={<Blog />} />
            </Routes>
        </BrowserRouter>
    )

};

export default Router;