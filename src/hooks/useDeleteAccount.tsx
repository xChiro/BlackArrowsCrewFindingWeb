import useYesNoModal from "./modals/useYesNoModal.tsx";
import {useCallback, useEffect, useRef} from "react";
import {useAuth} from "./useAuth.tsx";
import PlayerService from "../services/PlayerService.ts";

export const useDeleteAccount = () => {
    const {getAccessToken, logout} = useAuth();
    const playerServiceRef = useRef<PlayerService>(new PlayerService(getAccessToken()));

    useEffect(() => {
        const token = getAccessToken();
        playerServiceRef.current = new PlayerService(token);
    }, [getAccessToken]);

    const onDeleteAccount = useCallback(() => {
        playerServiceRef.current.deleteAccount().then(() => {
            logout();
        });
    }, [logout]);

    const {openModal, ModalComponent} = useYesNoModal("Are you sure you want to delete your account?", onDeleteAccount);

    const deleteAccount = useCallback(() => {
        openModal();
    }, [openModal]);

    return {deleteAccount, ModalComponent};
};