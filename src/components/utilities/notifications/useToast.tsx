import { toast } from 'react-toastify';

const useToast = () => {
    const showToast = (message: string, options = {}) => {
        toast(message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            ...options,
        });
    };

    return showToast;
};

export default useToast;