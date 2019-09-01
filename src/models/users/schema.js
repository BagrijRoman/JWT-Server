import { Schema } from 'mongoose';

const usersSchema = new Schema({
  createdAt: {  type: Date, required: true, default: Date.now },
  updatedAt: {  type: Date, required: true, default: Date.now },

  name: { type: String, required: true, unique: false },
  email: { type: String, lowercase: true, unique: true },
  password: { type: String, required: true },
});

export default usersSchema;
