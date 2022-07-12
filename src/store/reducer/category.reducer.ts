import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICategoryInitialState, ICategoryPayload } from "./types/category.d";

const initialState: ICategoryInitialState = {
        category: []
};

export const slice = createSlice({
        name: "category",
        initialState,
        reducers: {
                setCategory: (state, action: PayloadAction<ICategoryPayload>) => {
                        const hasCategory = state.category.find(
                                (item) => item.toLocaleLowerCase() === action.payload.category?.toLocaleLowerCase()
                        );

                        if (hasCategory) {
                                state.category = state.category.filter(
                                        (item) => item.toLocaleLowerCase() !== action.payload.category?.toLocaleLowerCase()
                                )
                        } else {
                                state.category = [...state.category, action.payload.category];
                        }
                },
        },
});

export const { setCategory } = slice.actions;

export default slice.reducer;
