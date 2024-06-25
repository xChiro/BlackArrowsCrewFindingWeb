import {toast, ToastOptions} from 'react-toastify';

const useToast = () => {
    return (message: string, options: ToastOptions) => {
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
};

export default useToast;