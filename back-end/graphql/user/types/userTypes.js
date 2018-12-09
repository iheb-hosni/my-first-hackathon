import { gql } from 'apollo-server';

const user = gql`

input userInput {
    firstName: String,
    lastName:String,
    email: String,
    password: String,
    avatar:String,
}

type user{
   id: ID!
   firstName: String,
   lastName:String,
   email: String,
   password: String,
   avatar:String,
}
type UserLogged {
    user: user!
    token: String!
}

 input LoginInput {
    email: String!
    password: String!
}
`;
export default [user];
