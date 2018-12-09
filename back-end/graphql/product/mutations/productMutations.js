import { gql } from 'apollo-server';

export const productMutations = gql`
  addProduct(input: productInput): product
`;

export const Resolvers = {
  addProduct: (_, { input }, { models }) => {
    const product = new models.Product({ ...input });
    product.save();
    return product;
  },
};
