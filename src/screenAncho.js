import { writable } from "svelte/store";

export const esPC = writable(screen.width > 500 ? true : false);