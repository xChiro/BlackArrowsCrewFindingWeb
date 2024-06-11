import {colors} from "../../themes/Colors.ts";
import styled from "styled-components";

const StyledButton = styled.button<{ $buttonBackgroundColor: string; $canClick: boolean; $fontSize?: string}>`
    background-color: ${({ $buttonBackgroundColor = colors.primary }) => $buttonBackgroundColor};
    border: none;
    color: white;
    text-align: center;
    display: inline-block;
    padding: 1px 5px;
    font-size: ${({ $fontSize }) => $fontSize || '1rem'};
    border-radius: .5rem;
    min-width: 6rem;
    height: 2.2rem;
    cursor: ${({ $canClick }) => $canClick ? 'pointer' : 'not-allowed'};

    @media (max-width: 400px) {
        font-size: 0.8rem;
    }
`;

export interface MenuButtonProps {
    onClick: () => void;
    text: string;
    backgroundColor: string;
    fontSize?: string;
}

export const MenuButton = ({onClick, text, backgroundColor, fontSize = "1rem"}: MenuButtonProps) => (
    <StyledButton $canClick={true} $fontSize={fontSize} $buttonBackgroundColor={backgroundColor} onClick={onClick}>
        {text}
    </StyledButton>
);