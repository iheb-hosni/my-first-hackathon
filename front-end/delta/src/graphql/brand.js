import gql from "graphql-tag";

const lunchQuery = gql `
query getProductByMark($input: String!){
  getProductByMark(input: $input) {
    productName,
    category,
    mark,
    picture,
    price,
    }
}
`
export default lunchQuery;
