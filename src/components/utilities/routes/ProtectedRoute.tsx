import { Navigate, useLocation } from "react-router-dom";
import {useAuth} from "../../../hooks/useAuth.tsx";
import React from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const { isLogged } = useAuth();

    return isLogged() ? children : <Navigate to="/" state={{ from: location.pathname }} />;
};

export default ProtectedRoute;