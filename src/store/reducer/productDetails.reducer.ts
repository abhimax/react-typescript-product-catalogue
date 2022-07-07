import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProductDetailsInitialState, IProductDetailsPayload } from "./types/productDetails.d";

const initialState: IProductDetailsInitialState = {
        product: null
};

export const slice = createSlice({
        name: "productDetails",
        initialState,
        reducers: {
                setProduct: (state, action: PayloadAction<IProductDetailsPayload>) => {
                        state.product = action.payload.product
                },
        },
});

export const { setProduct } = slice.actions;

export default slice.reducer;
