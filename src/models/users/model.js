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
    address,
    phone,
  } = user;

  const passwordHash = await encryptionHelper.hashPassword(password);

  return this.create({ name, email, password: passwordHash, address, phone });
};

export default model('users', usersSchema);
