import React from 'react';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {StyledNavBarIcon} from "./StyledNavBarIcon.tsx";


export const NavUserComponent: React.FC = () => {
    return (
        <>
            <StyledNavBarIcon icon={faUser} />
        </>
    );
};