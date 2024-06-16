import React, {useState} from "react";
import {StyledCard} from "../../utilities/cards/StyledCard.tsx";
import {StyledBodyCard} from "../../utilities/cards/StyledBodyCard.tsx";
import {StyledCardButton} from "../../utilities/cards/StyledCardButton.tsx";
import {StyledForm} from "../../utilities/forms/StyledForm.tsx";
import {CrewCreation} from "../../../services/models/crews/CrewCreation.ts";
import ComboBoxField from "../../utilities/forms/ComboBoxField.tsx";
import styled from "styled-components";
import TextAreaField from "../../utilities/forms/TextAreaField.tsx";
import MultiComboBoxField from "../../utilities/forms/MultiComboBoxField.tsx";
import {useCreateCrew} from "../../../hooks/crews/useCreateCrew.tsx";
import ActivityCrewCardHeader from "../cards/ActivityCrewCardHeader.tsx";

const StyledLabel = styled.label`
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
`;

const ACTIVITY_OPTIONS = ["Mining", "Trading", "Exploration", "Transportation", "Security", "Rescue", "Salvaging", "Piracy", "Other"];
const CREW_SIZE_OPTIONS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const LANGUAGES_OPTIONS = ["EN", "FR", "DE", "ES", "IT", "PT", "RU", "ZH", "JA", "KO"];

const SYSTEM_OPTIONS = [
    {
        name: "Stanton",
        planetarySystems: [
            {
                name: "Microtech",
                moons: [
                    {name: "Microtech", places: ["New Babbage", "Port Tressler"]},
                ]
            },
            {
                name: "Hurston",
                moons: [
                    {name: "Hurston", places: ["Lorville", "Everus Harbor"]},
                ]
            },
            {
                name: "ArcCorp",
                moons: [
                    {name: "ArcCorp", places: ["Area 18", "Baijini Point"]},
                ]
            },
            {
                name: "Crusader",
                moons: [
                    {name: "Crusader", places: ["Orison", "Port Olisar"]},
                    {name: "Yela", places: ["GrimHex"]},
                ]
            }
        ]
    }
];

const CreateCrewComponent = () => {
    const [selectedSystem, setSelectedSystem] = useState(SYSTEM_OPTIONS[0]);
    const [selectedPlanetarySystem, setSelectedPlanetarySystem] = useState(SYSTEM_OPTIONS[0].planetarySystems[0]);
    const [selectedMoon, setSelectedMoon] = useState(SYSTEM_OPTIONS[0].planetarySystems[0].moons[0]);
    const [places, setPlaces] = useState(SYSTEM_OPTIONS[0].planetarySystems[0].moons[0].places);
    const [selectedPlace, setSelectedPlace] = useState(places[0]);

    const handleSystemChange = (value: string) => {
        const system = SYSTEM_OPTIONS.find(system => system.name === value);
        if (system) {
            setSelectedSystem(system);
            const firstPlanetarySystem = system.planetarySystems[0];
            setSelectedPlanetarySystem(firstPlanetarySystem);
            const firstMoon = firstPlanetarySystem.moons[0];
            setSelectedMoon(firstMoon);
            setPlaces(firstMoon.places);
        }
    };

    const handlePlanetarySystemChange = (value: string) => {
        const planetarySystem = selectedSystem.planetarySystems.find(ps => ps.name === value);
        if (planetarySystem) {
            setSelectedPlanetarySystem(planetarySystem);
            const firstMoon = planetarySystem.moons[0];
            setSelectedMoon(firstMoon);
            setPlaces(firstMoon.places);
        }
    };

    const handleMoonChange = (value: string) => {
        const moon = selectedPlanetarySystem.moons.find(moon => moon.name === value);
        if (moon) {
            setSelectedMoon(moon);
            setPlaces(moon.places);
        }
    };

    const handlePlaceChange = (value: string) => {
        setSelectedPlace(value);
    };

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

    const updateCrew = (Attr: keyof CrewCreation, value: string | number | string[]) => {
        setCrew({...crew, [Attr]: value});
    };

    const onCreateCrewClick = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await createCrew(crew);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <StyledCard $maxWidth="30rem" $minHeight="9rem" $maxHeight="90rem">
            <ActivityCrewCardHeader activity={crew.activityName}/>
            <StyledForm onSubmit={onCreateCrewClick}>
                <StyledBodyCard>
                    <StyledLabel>Crew Activity:</StyledLabel>
                    <ComboBoxField inputName="activityName" value={crew.activityName} options={ACTIVITY_OPTIONS}
                                   onChange={(value) => updateCrew("activityName", value)}/>

                    <StyledLabel>Description (optional):</StyledLabel>
                    <TextAreaField inputName="description" value={crew.description}
                                   onChange={(value) => updateCrew("description", value)} minLength={10}
                                   maxLength={100} height="8rem" width="100%"/>

                    <StyledLabel>Members Size:</StyledLabel>
                    <ComboBoxField inputName="crewSize" value={crew.crewSize.toString()} options={CREW_SIZE_OPTIONS}
                                   onChange={(value) => updateCrew("crewSize", Number(value))}/>

                    <StyledLabel>System:</StyledLabel>
                    <ComboBoxField
                        inputName="system"
                        value={selectedSystem.name}
                        options={SYSTEM_OPTIONS.map(system => system.name)}
                        onChange={(value) => {
                            updateCrew("system", value);
                            handleSystemChange(value);
                        }}
                    />

                    <StyledLabel>Planetary System:</StyledLabel>
                    <ComboBoxField
                        inputName="planetarySystem"
                        value={selectedPlanetarySystem.name}
                        options={selectedSystem.planetarySystems.map(ps => ps.name)}
                        onChange={(value) => {
                            updateCrew("planetarySystem", value);
                            handlePlanetarySystemChange(value);
                        }}
                    />

                    <StyledLabel>Planet/Moon:</StyledLabel>
                    <ComboBoxField
                        inputName="moon"
                        value={selectedMoon.name}
                        options={selectedPlanetarySystem.moons.map(moon => moon.name)}
                        onChange={(value) => {
                            updateCrew("planetMoon", value);
                            handleMoonChange(value);
                        }}
                    />

                    <StyledLabel>Place:</StyledLabel>
                    <ComboBoxField
                        inputName="place"
                        value={selectedPlace}
                        options={places}
                        onChange={(value) => {
                            updateCrew("place", value);
                            handlePlaceChange(value);
                        }}
                    />

                    <StyledLabel>Languages:</StyledLabel>
                    <MultiComboBoxField inputName="languagesAbbrevs" value={crew.languagesAbbrevs}
                                        options={LANGUAGES_OPTIONS}
                                        onChange={(value) => updateCrew("languagesAbbrevs", value)}/>
                </StyledBodyCard>

                <StyledCardButton type="submit" $buttonBackgroundColor={"green"}
                                  $canClick={true}>Create</StyledCardButton>
            </StyledForm>
        </StyledCard>
    );
};

export default CreateCrewComponent;