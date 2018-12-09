import { gql } from 'apollo-server';

export const Query = gql`
  getProducts: [product]
  getProductById(id: ID!): product
  getProductByMark(input: String!): [product]
`;

export const Resolvers = {
  getProducts: (_, $, { models }) => models.Product.find(),
  getProductById: (_, { id }, { models }) => models.Product.findOne({ _id: id }),
  getProductByMark: (_, { input }, { models }) => models.Product.find({ mark: input }),
};
