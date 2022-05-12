import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes/routes";
import {useSelector} from "react-redux";

const AppRouter = () => {
    const isAuth = useSelector(state => state.userData.isAuth)
    return (
        <Routes>
            {
                publicRoutes.map(({path, element}) =>
                    <Route path={path} element={element} key={path}/>
                )
            }

            {isAuth &&
                authRoutes.map(({path, element}) =>
                    <Route path={path} element={element} key={path}/>
                )
            }
        </Routes>
    );
};

export default AppRouter;