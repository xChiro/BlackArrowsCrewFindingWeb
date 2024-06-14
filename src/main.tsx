import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {AppRouter} from "./AppRouter.tsx";
import {Provider} from "react-redux";
import {store} from "./stores/Store.ts";
import {AuthProvider, TAuthConfig, TRefreshTokenExpiredEvent} from "react-oauth2-code-pkce";

const authConfig: TAuthConfig = {
    clientId: import.meta.env.VITE_CLIENT_ID,
    authorizationEndpoint: import.meta.env.VITE_AUTHORIZATION_ENDPOINT,
    tokenEndpoint: import.meta.env.VITE_TOKEN_ENDPOINT,
    redirectUri: window.location.origin + "/",
    scope: import.meta.env.VITE_SCOPE,
    autoLogin: false,
    clearURL: true,
    decodeToken: true,
    onRefreshTokenExpire: (event: TRefreshTokenExpiredEvent) => event.logIn(undefined, undefined, "popup"),
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <AuthProvider authConfig={authConfig}>
            <React.StrictMode>
                <RouterProvider router={AppRouter}/>
            </React.StrictMode>
        </AuthProvider>
    </Provider>
)