import { toast } from "react-toastify";

export const showToast = (message) => {
  toast.info(message, {
    autoClose: 3000,
    position: "bottom-center",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: false,
  });
};
