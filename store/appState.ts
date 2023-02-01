import { appStateInterface } from "../interfaces/interfaces";

export const appState: appStateInterface = {
  loading: false,
  notification: {
    status: false,
    type: null,
    message: "",
  },
};