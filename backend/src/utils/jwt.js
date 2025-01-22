import jwt from 'jsonwebtoken';

const secretKey = 'asdfgh200416';

export const generateToken = (mech) => {
    return jwt.sign(mech, secretKey, {expiresIn: '1h'})
};