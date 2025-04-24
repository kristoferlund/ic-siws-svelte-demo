import type { Adapter } from "@solana/wallet-adapter-base";
import { writable } from "svelte/store";

export const adapterStore = writable<Adapter | null>(null);
