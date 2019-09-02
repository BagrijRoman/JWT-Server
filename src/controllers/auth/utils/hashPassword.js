import bcrypt from 'bcryptjs';

const hashPassword = async (password, saltRounds = 10) => {
  const salt = await bcrypt.genSalt(saltRounds);
  return bcrypt.hash(password, salt);
};

export default hashPassword;