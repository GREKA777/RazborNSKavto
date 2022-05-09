import {
    ABOUT_US_ROUTE, AUTH_ROUTE, BASKET_ROUTE,
    CATALOG_ROUTE,
    FAVOURITE_ROUTE, HISTORY_ROUTE, LOGIN_ROUTE,
    MAIN_ROUTE,
    ONE_ITEM_ROUTE, ONE_ORDER_ROUTE, ORDERS_ROUTE,
    PROFILE_ROUTE,
    TIRES_ROUTE
} from "../utils/const";
import Main from "../pages/Main/Main";
import Tiers from "../pages/Tiers/Tiers";
import About from "../pages/About/About";
import Catalog from "../pages/Catalog/Catalog";
import OneItem from "../pages/OneItem/OneItem";
import Profile from "../pages/Profile/Profile";
import Favourite from "../pages/Favourite/Favourite";
import Basket from "../pages/Basket/Basket";
import History from "../pages/History/History";
import Orders from "../pages/Orders/Orders";
import OneOrder from "../pages/OneOrder/OneOrder";
import Auth from "../pages/Auth/Auth";
import AuthLogin from "../pages/Auth/AuthLogin/AuthLogin";
export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        element: <Main/>
    },
    {
        path: TIRES_ROUTE,
        element: <Tiers/>
    },
    {
        path: CATALOG_ROUTE,
        element: <Catalog/>
    },
    {
        path: ABOUT_US_ROUTE,
        element: <About/>
    },
    {
        path: ONE_ITEM_ROUTE + '/:id',
        element: <OneItem/>
    },
    {
        path: PROFILE_ROUTE,
        element: <Profile/>
    },
    {
        path: FAVOURITE_ROUTE,
        element: <Favourite/>
    },
    {
        path: BASKET_ROUTE,
        element: <Basket/>
    },
    {
        path: HISTORY_ROUTE,
        element: <History/>
    },
    {
        path: ORDERS_ROUTE,
        element: <Orders/>
    },
    {
        path: ONE_ORDER_ROUTE,
        element: <OneOrder/>
    },
    {
        path: AUTH_ROUTE,
        element: <Auth/>
    },
    {
        path: LOGIN_ROUTE,
        element: <AuthLogin/>
    },
]
export const authRoutes = []