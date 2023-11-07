import { useLocalStorage, useSessionStorage } from "react-use";
import { App } from "../types/app";
import { useMemo } from "react";

/**
 * Custom hook that provides the app services for the given APP_ID.
 *
 * All apps will have their own set of services pre-built for their configuration
 * at boot time. This hook is used to return those services as-needed.
 *
 * This works with `AppServicesContext`.
 */
export function useAppService(appId: App["id"]) {
  const [localStorageValue, setLocalStorageValue, removeLocalStorageValue] =
    useLocalStorage(`app:${appId}`, {});

  const localStorageService = useMemo(
    () => ({
      // alias to make simpler
      value: localStorageValue,
      set: setLocalStorageValue,
      remove: removeLocalStorageValue,
    }),
    [localStorageValue, setLocalStorageValue, removeLocalStorageValue]
  );

  const [sessionStorageValue, setSessionStorageValue] = useSessionStorage(
    `app:${appId}`,
    {}
  );

  const sessionStorageService = useMemo(
    () => ({
      // alias to make simpler
      value: sessionStorageValue,
      set: setSessionStorageValue,
    }),
    [sessionStorageValue, setSessionStorageValue]
  );

  // TODO: add other services
  // - notification-"bus" - displays desktop notifications
  // - background/daemon - runs things in the background? Complex feature!
  // - "app-tray" settings - handles things in the "app-bar"???

  return { localStorageService, sessionStorageService };
}
