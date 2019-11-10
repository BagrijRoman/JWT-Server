import { model } from 'mongoose';

import usersSchema from './schema';
import { encryptionHelper } from '../../services';

usersSchema.statics.findUserByEmail = async function (email) {
  return this.findOne({ email });
};

usersSchema.statics.addNewUser = async function (user) {
  const { name, email, password } = user;
  const passwordHash = await encryptionHelper.hashPassword(password);

  return this.create({ name, email, password: passwordHash, });
};

usersSchema.statics.setUserPassword = async function (_id, password) {
  const passwordHash = await encryptionHelper.hashPassword(password);

  return this.findByIdAndUpdate(
    _id,
    { password: passwordHash },
    { new: true, useFindAndModify: false }
  );
};


export default model('users', usersSchema);
