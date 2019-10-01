import { model } from 'mongoose';

import resetPasswordRequestsSchema from './schema';

export default model('resetPasswordRequests', resetPasswordRequestsSchema);