import {useState, useCallback} from 'react';
import styled from 'styled-components';
import {colors} from "../../themes/Colors.ts";

const Modal = styled.div`
    background-color: ${colors.primary};
    border-radius: 1rem;
    color: ${colors.fontColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    text-align: left;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 30rem;
    
    @media (max-width: 510px) {
        width: 90%;
    }
`;

const Button = styled.button`
    width: 50%;
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
`;


const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const YesButton = styled(Button)`
    background-color: ${colors.greenColor};
    color: ${colors.fontColor};
    border-bottom-right-radius: 1rem;
`;

const NoButton = styled(Button)`
    background-color: ${colors.redAlertColor};
    color: ${colors.fontColor};
    border-bottom-left-radius: 1rem;
`;

const YesNoModal = ({message, isOpen, onYes, onNo}: {
    message: string,
    isOpen: boolean,
    onYes: () => void,
    onNo: () => void
}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <ModalBackground>
            <Modal>
                <h2 style={{margin: "1rem"}}>{message}</h2>
                <ButtonContainer>
                    <NoButton onClick={onNo}>No</NoButton>
                    <YesButton onClick={onYes}>Yes</YesButton>
                </ButtonContainer>
            </Modal>
        </ModalBackground>
    );
};

const useYesNoModal = (message: string, onYes: () => void, onNo?: () => void) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);

    const handlerYes = useCallback(() => {
        onYes();
        closeModal();
    }, [closeModal]);

    const handlerNo = useCallback(() => {
        if (onNo) {
            onNo();
        }

        closeModal();
    }, [closeModal]);

    const ModalComponent = useCallback(() => (
        <YesNoModal message={message} isOpen={isOpen} onYes={handlerYes} onNo={handlerNo}/>
    ), [message, isOpen, onYes, onNo]);

    return {openModal, ModalComponent};
};

export default useYesNoModal;