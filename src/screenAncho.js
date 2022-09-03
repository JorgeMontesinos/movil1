import { writable } from 'svelte/store';

export const esMovil = writable(screen.width>500 ? false:true);