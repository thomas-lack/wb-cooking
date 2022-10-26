import { derived, writable } from "svelte/store";
import type { AppConfig } from "./app-config";

const DEVELOPMENT_HOSTS = ['localhost:4200'];

const store = writable<AppConfig>({
  devMode: DEVELOPMENT_HOSTS.includes(window.location.host),
});

export const appConfig = {
  subscribe: store.subscribe,
  devMode: derived(store, ($store) => $store.devMode),
};
