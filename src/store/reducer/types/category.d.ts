interface ICategoryInitialState {
  category: Array<string>;
}

interface ICategoryPayload {
  category: string;
}

interface ICategoryRootState {
  category: {
    category: Array<string>;
  };
}

export { ICategoryInitialState, ICategoryPayload, ICategoryRootState };
