import { gql } from 'apollo-server';

export const Query = gql`
   me: user
`;

export const Resolvers = {
  me: (_, $, { models, userid }) => models.User.findOne({ _id: userid }),
};
