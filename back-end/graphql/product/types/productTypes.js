import { gql } from 'apollo-server';

const product = gql`

input productInput {
    productName: String,
    description: String,
    category: String,
    mark: String,
    picture: String,
    price: Float
}

type product{
   id: ID!
   productName: String,
   description: String,
   category: String,
   mark: String!,
   picture: String,
   price: Float,
}
`;
export default [product];
