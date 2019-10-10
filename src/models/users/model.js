import { model } from 'mongoose';

import usersSchema from './schema';
import { encryptionHelper } from '../../services';

usersSchema.statics.findUserByEmail = async function (email) {
  return this.findOne({ email });
};

usersSchema.statics.addNewUser = async function (user) {
  const {
    name,
    email,
    password,
  } = user;

  const passwordHash = await encryptionHelper.hashPassword(password);

  return this.create({ name, email, password: passwordHash, });
};

export default model('users', usersSchema);
