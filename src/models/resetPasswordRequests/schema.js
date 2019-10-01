import { Schema } from 'mongoose';

const resetPasswordRequestsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  used: {
    type: Boolean,
    required: true,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: true,
    default: false,
  },
  expiredAt: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

export default resetPasswordRequestsSchema;
