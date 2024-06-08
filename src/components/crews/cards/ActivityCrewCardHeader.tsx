import styled from "styled-components";
import mining from "../../../assets/activities/mining.jpg";
import trading from "../../../assets/activities/trading.jpeg";

const activityImages: { [key: string]: string } = {
    mining,
    trading
};

const StyledActivityCrewCardHeader = styled.div<{ activity: string }>`
    height: 7rem;
    background-image:  url(${props => activityImages[props.activity] || mining});
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