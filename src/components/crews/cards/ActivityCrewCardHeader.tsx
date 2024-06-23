import styled from "styled-components";
import mining from "../../../assets/activities/mining.jpg";
import trading from "../../../assets/activities/trading.jpg";
import exploration from "../../../assets/activities/exploration.jpg";
import piracy from "../../../assets/activities/piracy.jpg";
import salvaging from "../../../assets/activities/salvaging.jpg";
import security from "../../../assets/activities/security.jpg";
import transportation from "../../../assets/activities/transportation.jpg";
import rescue from "../../../assets/activities/rescue.jpg";
import other from "../../../assets/activities/other.jpg";

const activityImages: { [key: string]: string } = {
    mining,
    trading,
    exploration,
    "bounty hunting": security,
    piracy,
    salvaging,
    security,
    transportation,
    rescue,
    other
};

const StyledActivityCrewCardHeader = styled.div<{ activity: string }>`
    height: 10rem;
    background-image:  url(${(props) => activityImages[props.activity] || other});
    background-size: cover;
    background-position: center; 
    border-radius: 1rem 1rem 0 0;
    width: 100%;
    box-shadow: inset 0 0 100px rgba(0, 0, 0, 4); 
`;

export interface ImageCardHeaderHeaderProps {
    activity: string;
}

const ActivityCrewCardHeader = (props: ImageCardHeaderHeaderProps) => {
    return (
        <StyledActivityCrewCardHeader activity={props.activity.trim().toLowerCase()}>
        </StyledActivityCrewCardHeader>
    );

}

export default ActivityCrewCardHeader;