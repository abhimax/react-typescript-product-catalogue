import React from "react";

import { ProductCard } from "../ProductCard/index";

import { Section } from "./ProductCards.styled";

const ProductCards: React.FC = () => {
  return (
    <Section>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Section>
  );
};

export default ProductCards;