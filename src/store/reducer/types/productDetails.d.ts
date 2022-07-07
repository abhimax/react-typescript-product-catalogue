import { IProduct } from '../../../types/types.d'

interface IProductDetailsInitialState {
        product: IProduct | null
}

interface IProductDetailsPayload {
        product: IProduct | null
}

interface IProductDetailsRootState {
        productDetails: {
                product: IProduct | null
        }
}

export { IProductDetailsInitialState, IProductDetailsPayload, IProductDetailsRootState }