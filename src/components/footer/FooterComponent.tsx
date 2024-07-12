import styled from 'styled-components';
import {colors} from "../../themes/Colors.ts";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub, faReddit} from "@fortawesome/free-brands-svg-icons";

const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    background-color: ${colors.primary};
    padding: 1rem;
    box-sizing: border-box;

    @media (max-width: 775px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const SocialMediaDiv = styled.div`
    display: flex;
    gap: .5rem;
    text-align: right;
    margin-top: .5rem;

    a {
        color: white;
    }

    span {
        font-size: .8rem;
    }

    @media (max-width: 775px) {
        justify-content: center;
        text-align: center;
    }
`;

const LeftAlignedDiv = styled.div`
    text-align: left;
    
    @media (max-width: 775px) {
        flex-direction: row;
        align-items: center;
        text-align: center;
        align-content: center;
        margin-bottom: 1rem;
    }
`;

const CenterAlignedDiv = styled.div`
    text-align: center;
    margin-bottom: 1rem;
`;

const RightAlignedDiv = styled.div`
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
                <SocialMediaDiv>
                    <a href="https://www.reddit.com/r/StarCitizen_Crews/">
                        <FontAwesomeIcon icon={faReddit}/>
                    </a>
                    <a href="https://discord.gg/K74phC2Kfh">
                        <FontAwesomeIcon icon={faDiscord}/>
                    </a>
                    <a href="https://github.com/xChiro/BlackArrowsCrewFinding">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </SocialMediaDiv>
            </LeftAlignedDiv>
            <CenterAlignedDiv>
                <span style={{fontSize: ".8rem"}}>
                    Star Citizen®, Roberts Space Industries® and Cloud Imperium® are trademarks of
                    Cloud Imperium Rights LLC. This is a fan-site and not affiliated with CIG.
                </span>
            </CenterAlignedDiv>
            <RightAlignedDiv>
                <StyledLink to="/terms">Terms of Service</StyledLink> · <StyledLink to="/privacy">Privacy
                Policy</StyledLink>
            </RightAlignedDiv>
        </StyledFooter>
    );
};

export default Footer;