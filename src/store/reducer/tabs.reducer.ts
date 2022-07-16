import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITabsInitialState, ITabsPayload } from "./types/tabs.d";

const initialState: ITabsInitialState = {
        activeTab: 0
};

export const slice = createSlice({
        name: "tabs",
        initialState,
        reducers: {
                setTab: (state, action: PayloadAction<ITabsPayload>) => {
                        state.activeTab = action.payload.activeTab
                },
        },
});

export const { setTab } = slice.actions;
export default slice.reducer;
