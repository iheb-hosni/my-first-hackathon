import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

export default async function dbConnect() {
  mongoose.connection
    .on('error', (error) => { console.log(`MongoDB Connection error ${error}`); }) // eslint-disable-line  no-console
    .on('close', () => { console.log('Mongodb closed!'); }) // eslint-disable-line no-console
    .once('open', () => { console.log('Mongodb connected!'); }); // eslint-disable-line no-console

  await mongoose.connect('mongodb://localhost/fashion');
}
