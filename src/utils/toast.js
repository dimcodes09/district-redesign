import { toast } from "react-toastify";

export const showToast = (message, type = "info") => {
  const options = {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  };

  if (type === "success") toast.success(message, options);
  else if (type === "error") toast.error(message, options);
  else toast.info(message, options);
};
