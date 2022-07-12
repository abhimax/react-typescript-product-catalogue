import { IProduct } from "../../types/types.d"

interface IProductCardProps {
        props: IProduct
        onCardClick: (product: IProduct, cardIndex: number) => void
        isActive: boolean
        index: number
}

export { IProductCardProps }