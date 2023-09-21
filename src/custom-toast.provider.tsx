import { isWeb } from "tamagui";
import { useToastController } from "@tamagui/toast";
import { ReactNode, createContext, useContext, useMemo } from "react";

type CustomToastContext = {
  showToast: ({ title, message }: { title: string; message: string }) => void;
  hideToast: () => void;
};

const CustomToastContext = createContext<CustomToastContext>(
  {} as CustomToastContext
);

type ToastProviderProps = {
  children: ReactNode;
};

export const CustomToastProvider = ({ children }: ToastProviderProps) => {
  const toast = useToastController();

  const showToast = ({
    title,
    message,
  }: {
    title: string;
    message: string;
  }) => {
    alert("Show Toast Alert!!");
    /*toast.show &&
      toast.show(title, {
        message,
        native: isWeb ? false : true,
      });*/
  };

  const hideToast = () => {
    alert("Hide Toast Alert!!");
    /*if (toast.hide != null) {
      toast.hide();
    }*/
  };

  return (
    <CustomToastContext.Provider
      value={{
        showToast,
        hideToast,
      }}
    >
      {children}
    </CustomToastContext.Provider>
  );
};

export const useCustomToast = () => {
  return useContext(CustomToastContext);
};
