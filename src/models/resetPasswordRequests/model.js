import { model } from 'mongoose';

import resetPasswordRequestsSchema from './schema';

resetPasswordRequestsSchema.statics.disableAllUserRequests = async function (userId) {
  const { nModified } = await this.updateMany(
    { userId, used: false, disabled: false },
    { disabled: true }
  );

  return nModified;
};


export default model('resetPasswordRequests', resetPasswordRequestsSchema);