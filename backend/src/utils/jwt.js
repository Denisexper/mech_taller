import jwt from 'jsonwebtoken';

const secretKey = 'mysecretkey';

export const generateToken = (mech) => {
    return jwt.sign(mech, secretKey, {expiresIn: '2h'})
};