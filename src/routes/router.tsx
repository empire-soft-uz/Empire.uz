import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "../screens/blog/Blog";
import Developers from "../screens/developers/Developers";
import Home from "../screens/home/Home";
import { APP_ROUTES } from "./app-routes";
import { useEffect } from "react";
import i18n from "../translations";
import { observer } from "mobx-react-lite";
import useRootStore from "../Hooks/useRootStore";
import NotFound from "../screens/notFound/NotFound";
import ThankYou from "../screens/thankYou/ThankYou";

const Router = () => {
    const path = window.location.pathname;
    const { show } = useRootStore().visibleStore;
    const { getUserData } = useRootStore().userStore;
    const pathSearch = window.location;
    const userId = Number(pathSearch.search.split("/")[1]);
    useEffect(() => {
        if (userId) {
            show("viewProfile");
            getUserData(userId);
            document.body.style.overflow = "hidden";
        }
    }, []);

    useEffect(() => {
        switch (path) {
            case "/en":
                relaodPath("en", false);
                break;
            case "/ru":
                relaodPath("ru", false);
                break;
            case "/uz":
                relaodPath("uz", false);
                break;
            case "/":
                relaodPath("en", true);
                break;
            default:
                relaodPath("en", false, path);
        }
    }, []);

    const relaodPath = (lang: string, reload: boolean, path?: string) => {
        i18n.changeLanguage(path ? path.slice(1, 3) : lang);
        window.history.pushState(
            {},
            "",
            `${path ? path : lang}${pathSearch.search}`
        );
        if (reload) window.location.reload();
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/:lang" element={<Home />} />
                <Route path="/:lang/blog" element={<Blog />} />
                <Route path="/:lang/developers" element={<Developers />} />
                <Route path="/:lang/thank-you" element={<ThankYou />} />
                <Route path="/:lang/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default observer(Router);
