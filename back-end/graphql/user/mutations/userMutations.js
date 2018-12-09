import { gql } from 'apollo-server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const SECRET_APP = 'xxxxx';

function generateToken(userId) {
  return jwt.sign({
    userid: userId,
  }, SECRET_APP, { expiresIn: '1h' });
}

export const userMutations = gql`
  register(input: userInput): UserLogged,
  login(input: LoginInput): UserLogged
`;

export const Resolvers = {
  register: (_, { input }, { models }) => {
    const passwordHash = bcrypt.hashSync(input.password, 10);
    const user = new models.User({ ...input, password: passwordHash });
    user.save();
    const token = generateToken(user.id);
    return {
      user,
      token,
    };
  },
  login: async (_, { input }, { models }) => {
    const user = await models.User.findOne({ email: input.email });
    if (!user) {
      throw new Error('wrong email');
    }
    if (!bcrypt.compareSync(input.password, user.password)) {
      throw new Error('Wrong password');
    }
    const token = generateToken(user.id);
    return {
      user,
      token,
    };
  },
};
