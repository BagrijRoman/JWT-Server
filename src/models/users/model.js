import { model } from 'mongoose';

import usersSchema from './schema';

usersSchema.statics.findUserByEmail = async function (email) {
  return this.findOne({ email });
};

export default model('users', usersSchema);
