import { Navigate } from "react-router-dom";
import {useAuth} from "../../../hooks/useAuth.tsx";
import React from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isLogged } = useAuth();

    return isLogged() ? children : <Navigate to="/"/>;
};

export default ProtectedRoute;