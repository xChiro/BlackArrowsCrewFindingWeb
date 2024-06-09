import {colors} from "../../themes/Colors.ts";
import styled from "styled-components";

const StyledButton = styled.button<{ $buttonBackgroundColor: string; $canClick: boolean; }>`
    background-color: ${({ $buttonBackgroundColor = colors.primary }) => $buttonBackgroundColor};
    border: none;
    color: white;
    text-align: center;
    display: inline-block;
    padding: 1px 5px;
    font-size: 1rem;
    border-radius: 10px;
    min-width: 8rem;
    height: 80%;
    cursor: ${({ $canClick }) => $canClick ? 'pointer' : 'not-allowed'};
`;

export interface MenuButtonProps {
    onClick: () => void;
    text: string;
}

export const MenuButton = ({onClick, text}: MenuButtonProps) => (
    <StyledButton $canClick={true} $buttonBackgroundColor={colors.lightBlueColor} onClick={onClick}>
        {text}
    </StyledButton>
);