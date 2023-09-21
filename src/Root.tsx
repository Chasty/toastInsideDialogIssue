import "@tamagui/core/reset.css";
import "@tamagui/polyfill-dev";

import { Button, TamaguiProvider, YStack } from "tamagui";

import config from "./tamagui.config";
import { DialogDemo } from "./dialog-demo";
import { ToastDemo } from "./toast-demo";
import { ToastProvider, ToastViewport } from "@tamagui/toast";
import { CustomToastProvider } from "./custom-toast.provider";

export const Root = () => {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <ToastProvider
        swipeDirection="horizontal"
        duration={6000}
        native={
          [
            /* uncomment the next line to do native toasts on mobile. NOTE: it'll require you making a dev build and won't work with Expo Go */
            //'mobile',
          ]
        }
      >
        <CustomToastProvider>
          <YStack f={1} ai="center" jc="center">
            <Button>Hello world</Button>
          </YStack>
          Dialog Demo
          <DialogDemo />
          Toast Demo
          <ToastDemo />
        </CustomToastProvider>

        <ToastViewport />
      </ToastProvider>
    </TamaguiProvider>
  );
};
