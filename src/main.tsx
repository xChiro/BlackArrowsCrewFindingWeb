import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {AppRouter} from "./AppRouter.tsx";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Auth0Provider
        domain="dev-wy8zvh844hvwj3zv.us.auth0.com"
        clientId="WgieeVjL8bkx4PfydRnQAcMlHizUUfRW"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <React.StrictMode>
            <RouterProvider router={AppRouter}/>
        </React.StrictMode>
    </Auth0Provider>
)