import {colors} from "../../themes/Colors.ts";
import {useAuth} from "../../hooks/useAuth.tsx";
import {usePlayer} from "../../hooks/usePlayerProfile.tsx";
import {MenuButton} from "./MenuButton.tsx";
import {useDeleteAccount} from "../../hooks/useDeleteAccount.tsx";
import {StyledTopMenuLabel} from "./StyledTopMenuLabel.tsx";
import Notifications from "./notifications/NotificationsComponent.tsx";
import styled from "styled-components";
import {UserIconMenu} from "./UserIconMenu.tsx";


const StyledSeparator = styled.span`
    margin: 0 .3rem;
    border-left: 1px solid ${colors.secondary};
`;

const UserNotificationsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const ProfileNavComponent = () => {
    const {isLogged, login} = useAuth();
    const {profile} = usePlayer();
    const {ModalComponent} = useDeleteAccount();

    return (
        <>
            {isLogged() ? (
                <>
                    <StyledTopMenuLabel style={{textAlign: "right"}}>
                        {profile?.CitizenName || "Loading..."}
                    </StyledTopMenuLabel>
                    <StyledSeparator></StyledSeparator>
                    <UserNotificationsContainer>
                        <Notifications/>
                        <UserIconMenu/>
                    </UserNotificationsContainer>
                </>
            ) : (
                <MenuButton
                    fontSize={".8rem"}
                    minFontSize={".6rem"}
                    onClick={login}
                    backgroundColor={colors.discordBackground}
                >
                    Sign In with Discord
                </MenuButton>
            )}
            <ModalComponent/>
        </>
    );
};
