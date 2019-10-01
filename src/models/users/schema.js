import { Schema } from 'mongoose';

const usersSchema = new Schema({
  name: { type: String, required: true, unique: false },
  email: { type: String, lowercase: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

export default usersSchema;
