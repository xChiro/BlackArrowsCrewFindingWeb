import {colors} from "../../themes/Colors.ts";
import styled from "styled-components";
import React from "react";

const StyledButton = styled.button<{
    $buttonBackgroundColor: string;
    $canClick: boolean;
    $fontSize?: string,
    $minFontSize?: string
}>`
    background-color: ${({$buttonBackgroundColor = colors.primary}) => $buttonBackgroundColor};
    border: none;
    color: white;
    text-align: center;
    display: inline-block;
    padding: 1px 5px;
    font-size: ${({$fontSize}) => $fontSize || '1rem'};
    border-radius: .5rem;
    min-width: 7rem;
    height: 2.0rem;
    cursor: ${({$canClick}) => $canClick ? 'pointer' : 'not-allowed'};

    @media (max-width: 600px) {
        font-size: ${({$minFontSize}) => $minFontSize || '.6rem'};
    }
`;

export interface MenuButtonProps {
    onClick?: () => void;
    backgroundColor: string;
    fontSize?: string;
    minFontSize?: string;
    children: React.ReactNode;
}

export const MenuButton = ({
                               onClick,
                               backgroundColor,
                               fontSize = "1rem",
                               minFontSize = ".8rem",
                               children
                           }: MenuButtonProps) => (
    <StyledButton $canClick={true} $fontSize={fontSize} $minFontSize={minFontSize}
                  $buttonBackgroundColor={backgroundColor} onClick={onClick}>
        {children}
    </StyledButton>
);