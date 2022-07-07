import { IProduct } from "../../types/types.d";
interface IProductCardProps {
  props: IProduct;
  onCardClick: (product: IProduct) => void;
}

export { IProductCardProps };
