import { model } from 'mongoose';

import usersSchema from './schema';

export default model('users', usersSchema);
