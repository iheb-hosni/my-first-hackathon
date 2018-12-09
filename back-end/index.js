import { ApolloServer } from 'apollo-server';
import dbConnect from './db/connect';
import Product from './db/models/product';
import User from './db/models/user';
import schema from './graphql/schema';

dbConnect()
  .then(() => {
    const server = new ApolloServer({
      schema,
      context: {
        models: {
          Product,
          User,
        },
      },
    });

    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  });
