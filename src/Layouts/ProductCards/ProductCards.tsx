import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import { ProductCard } from "../ProductCard/index";

import { Section } from "./ProductCards.styled";

import { setProduct } from "../../store/reducer/productDetails.reducer";

import { IProductCardsProps } from "./ProductCards.d";
import { IProduct } from "../../types/types";

const ProductCards: FC<IProductCardsProps> = ({ cardsData }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const dispatch = useDispatch();

  const cardClickHandel = (product: IProduct, cardIndex: number) => {
    setActiveCard(cardIndex + 1);

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
          <ProductCard
            key={i}
            index={i}
            props={item}
            onCardClick={cardClickHandel}
            isActive={
              activeCard ? (activeCard === i + 1 ? true : false) : false
            }
          />
        );
      })}
    </Section>
  );
};

export default ProductCards;
