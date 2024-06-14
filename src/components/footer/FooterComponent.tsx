import styled from 'styled-components';
import {colors} from "../../themes/Colors.ts";
import {Link} from "react-router-dom";

const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.primary};
    margin: 0;
    padding: 0 1rem;
    box-sizing: border-box;

    @media (max-width: 600px) {
        flex-direction: row;
        height: 3rem;
    }
`;

const LeftAlignedDiv = styled.div`
    width: 33%;
    text-align: left;
`;

const CenterAlignedDiv = styled.div`
    width: 34%;
    text-align: center;
`;

const RightAlignedDiv = styled.div`
    width: 33%;
    text-align: right;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:visited {
    color: white;
  }
`;


const Footer = () => {
    return (
        <StyledFooter>
            <LeftAlignedDiv>
                <StyledLink to="/">SC Crew Finding by Black Arrows</StyledLink>
            </LeftAlignedDiv>
            <CenterAlignedDiv>
            </CenterAlignedDiv>
            <RightAlignedDiv>
                <StyledLink to="/privacy">Privacy Policy</StyledLink>
            </RightAlignedDiv>
        </StyledFooter>
    );
};

export default Footer;