import React from "react";
import { useDispatch } from "react-redux";
import { ProductCard } from "../ProductCard/index";
import { Section } from "./ProductCards.styled";
import { setProduct } from "../../store/reducer/productDetails.reducer";
import { IProductCardsProps } from "./ProductCards.d";
import { IProduct } from "../../types/types.d";



const ProductCards: React.FC<IProductCardsProps> = ({ cardsData }) => {
  const dispatch = useDispatch();

  const cardClickHandel = (product: IProduct) => {
    return dispatch(
      setProduct({
        product: product,
      })
    );
  };

  return (
    <Section>
      {cardsData?.map((item, i) => {
        return (
          <ProductCard key={i} props={item} onCardClick={cardClickHandel} />
        );
      })}
    </Section>
  );
};

export default ProductCards;