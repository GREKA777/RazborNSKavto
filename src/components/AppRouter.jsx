import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {publicRoutes} from "../routes/routes";

const AppRouter = () => {
    return (
        <Routes>
            {
                publicRoutes.map(({path, element}) =>
                    <Route path={path} element={element} key={path}/>
                )
            }
        </Routes>
    );
};

export default AppRouter;