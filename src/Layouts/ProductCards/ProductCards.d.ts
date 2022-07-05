interface IProductCardsProps {
  cardsData: Array<{
    productName: string;
    tags: Array<string>;
    category: string;
  }>;
}

export { IProductCardsProps };
