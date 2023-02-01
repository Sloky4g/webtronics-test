import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {appState} from "../appState";
import {notificationInterface} from "../../interfaces/interfaces";

export const appSlice = createSlice({
    name: "app",
    initialState: appState,
    reducers: {
        changeLoadingStatus(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        changeNotification(state, action: PayloadAction<notificationInterface>) {
            state.notification = action.payload;
        },
    }
});

export const {
    changeLoadingStatus,
    changeNotification,
} = appSlice.actions;
export default appSlice.reducer;