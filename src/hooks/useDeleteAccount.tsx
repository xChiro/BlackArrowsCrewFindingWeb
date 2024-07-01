import useYesNoModal from "./modals/useYesNoModal.tsx";
import {useCallback} from "react";
import {useAuth} from "./useAuth.tsx";
import PlayerService from "../services/PlayerService.ts";

export const useDeleteAccount = () => {
    const {getAccessToken, logout} = useAuth();

    const onDeleteAccount = useCallback(() => {
        const playerService = new PlayerService(getAccessToken());
        playerService.deleteAccount().then(() => {
            logout();
        });
    }, [getAccessToken, logout]);

    const { openModal, ModalComponent } = useYesNoModal("Are you sure you want to delete your account?", onDeleteAccount);

    const deleteAccount = useCallback(() => {
        openModal();
    }, [openModal]);

    return { deleteAccount, ModalComponent };
};