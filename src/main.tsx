import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {AppRouter} from "./AppRouter.tsx";
import {Auth0Provider} from '@auth0/auth0-react';
import {Provider} from "react-redux";
import {store} from "./stores/Store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <Auth0Provider
            domain="dev-wy8zvh844hvwj3zv.us.auth0.com"
            clientId="WgieeVjL8bkx4PfydRnQAcMlHizUUfRW"
            authorizationParams={{
                redirect_uri: window.location.origin,
                audience: "https://bka-api.com"
            }}
            useRefreshTokens
            cacheLocation="localstorage"
        >
            <React.StrictMode>
                <RouterProvider router={AppRouter}/>
            </React.StrictMode>
        </Auth0Provider>
    </Provider>
)