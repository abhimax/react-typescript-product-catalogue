import { configureStore } from '@reduxjs/toolkit'

import categoryReducer from './reducer/category.reducer'
import productDetailsReducer from './reducer/productDetails.reducer'

export const store = configureStore({
        reducer: {
                category: categoryReducer,
                productDetails: productDetailsReducer,
        },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch