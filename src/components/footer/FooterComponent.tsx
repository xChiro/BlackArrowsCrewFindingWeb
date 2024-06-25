import styled from 'styled-components';
import {colors} from "../../themes/Colors.ts";
import {Link} from "react-router-dom";

const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.primary};
    padding: 1rem 0 1rem 0;
    gap: 1rem;
    
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const LeftAlignedDiv = styled.div`
    text-align: left;
    margin-left: 1rem;
`;

const CenterAlignedDiv = styled.div`
    text-align: center;
`;

const RightAlignedDiv = styled.div`
    text-align: right;
    margin-right: 1rem;
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
                <span style={{fontSize: ".8rem"}}>Not endorsed or affiliated with Cloud Imperium Games (CIG) or Star Citizen. All trademarks are property of their respective owners.</span>
            </CenterAlignedDiv>
            <RightAlignedDiv>
                <StyledLink to="/terms">Terms of Service</StyledLink> · <StyledLink to="/privacy">Privacy Policy</StyledLink>
            </RightAlignedDiv>
        </StyledFooter>
    );
};

export default Footer;