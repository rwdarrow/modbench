import { Store } from "tauri-plugin-store-api";

const settingsStore = new Store(".settings.dat");
export default settingsStore;
