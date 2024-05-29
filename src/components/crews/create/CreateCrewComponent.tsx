import {StyledCard} from "../../utilities/cards/StyledCard.tsx";
import {StyledBodyCard} from "../../utilities/cards/StyledBodyCard.tsx";
import {StyledCardButton} from "../../utilities/cards/StyledCardButton.tsx";
import {StyledForm} from "../../utilities/forms/StyledForm.tsx";
import {CrewCreation} from "../../../services/models/crews/CrewCreation.ts";
import React from "react";
import ComboBoxField from "../../utilities/forms/ComboBoxField.tsx";
import {StyledCardImageHeader} from "../../utilities/cards/StyledCardImageHeader.tsx";
import styled from "styled-components";
import TextAreaField from "../../utilities/forms/TextAreaField.tsx";
import MultiComboBoxField from "../../utilities/forms/MultiComboBoxField.tsx";
import {useCreateCrew} from "../../../hooks/useCreateCrew.tsx";

const StyledLabel = styled.label`
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
`;

const ACTIVITY_OPTIONS = ["Mining", "Trading", "Exploration", "Transportation", "Security", "Medical", "Science", "Refueling", "Repairing", "Salvaging", "Racing", "Tourism", "Other"];
const CREW_SIZE_OPTIONS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const SYSTEM_OPTIONS = ["Stanton"];
const PLANETARY_SYSTEM_OPTIONS = ["Microtech", "Hurston", "ArcCorp", "Crusader"];
const PLANET_MOON_OPTIONS = ["Microtech", "Hurston", "ArcCorp", "Crusader", "Delamar", "Yela", "Daymar", "Cellin", "Aberdeen", "Magda", "Ita", "Calliope", "Clio"];
const PLACE_OPTIONS = ["New Babbage", "Lorville", "Area 18", "GrimHex", "Port Tressler", "Baijini Point", "Everus Harbor", "seraphim Station"];
const LANGUAGES_OPTIONS = ["EN", "FR", "DE", "ES", "IT", "PT", "RU", "ZH", "JA", "KO"];

const CreateCrewComponent = () => {
    const initialCrew: CrewCreation = {
        crewSize: 1,
        system: 'Stanton',
        planetarySystem: 'Microtech',
        planetMoon: 'Microtech',
        place: 'New Babbage',
        languagesAbbrevs: ["EN"],
        activityName: 'Mining',
        description: ''
    };

    const {crew, setCrew, createCrew} = useCreateCrew(initialCrew);

    const updateCrew = (Attr: keyof CrewCreation, value: any) => {
        setCrew((prevCrew: CrewCreation) => ({...prevCrew, [Attr]: value}));
    };

    const onCreateCrewClick = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await createCrew(crew);
        } catch(e) {
            console.error(e);
        }
    };

    return (
        <StyledCard maxWidth="30rem" minHeight="9rem" maxHeight="15rem">
            <StyledForm onSubmit={onCreateCrewClick}>
                <StyledCardImageHeader/>

                <StyledBodyCard>
                    <StyledLabel>Crew Activity:</StyledLabel>
                    <ComboBoxField inputName="activityName" value={crew.activityName} options={ACTIVITY_OPTIONS}
                                   onChange={(value) => updateCrew("activityName", value)}/>

                    <StyledLabel>Description:</StyledLabel>
                    <TextAreaField inputName="description" value={crew.description}
                                   onChange={(value) => updateCrew("description", value)} minLength={50}
                                   maxLength={155} height="8rem" width="100%"/>

                    <StyledLabel>Members Size:</StyledLabel>
                    <ComboBoxField inputName="crewSize" value={crew.crewSize.toString()} options={CREW_SIZE_OPTIONS}
                                   onChange={(value) => updateCrew("crewSize", Number(value))}/>

                    <StyledLabel>System:</StyledLabel>
                    <ComboBoxField inputName="system" value={crew.system} options={SYSTEM_OPTIONS}
                                   onChange={(value) => updateCrew("system", value)}/>

                    <StyledLabel>Planetary System:</StyledLabel>
                    <ComboBoxField inputName="planetarySystem" value={crew.planetarySystem}
                                   options={PLANETARY_SYSTEM_OPTIONS}
                                   onChange={(value) => updateCrew("planetarySystem", value)}/>

                    <StyledLabel>Planet/Moon:</StyledLabel>
                    <ComboBoxField inputName="planetMoon" value={crew.planetMoon} options={PLANET_MOON_OPTIONS}
                                   onChange={(value) => updateCrew("planetMoon", value)}/>

                    <StyledLabel>Place:</StyledLabel>
                    <ComboBoxField inputName="place" value={crew.place} options={PLACE_OPTIONS}
                                   onChange={(value) => updateCrew("place", value)}/>

                    <StyledLabel>Languages:</StyledLabel>
                    <MultiComboBoxField inputName="languagesAbbrevs" value={crew.languagesAbbrevs}
                                        options={LANGUAGES_OPTIONS}
                                        onChange={(value) => updateCrew("languagesAbbrevs", value)}/>
                </StyledBodyCard>

                <StyledCardButton blackgroundcolor={"green"} canClick={true}>Create</StyledCardButton>
            </StyledForm>
        </StyledCard>
    );
};

export default CreateCrewComponent;