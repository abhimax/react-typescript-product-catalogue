import React from "react";

import { ProductCard } from "../ProductCard/index";

import { Section } from "./ProductCards.styled";

import { IProductCardsProps } from "./ProductCards.d"

import productsData from "../../data/products.json"

const ProductCards: React.FC<IProductCardsProps> = ({ cardsData }) => {
  return (
    <Section>
      {
        productsData.map((item, key)=>{
          return <ProductCard
            key={ key }
            productName={item.productName}
            tags={item.tags}
            category={item.category}
          />
        })
      }
    </Section>
  );
};

export default ProductCards;