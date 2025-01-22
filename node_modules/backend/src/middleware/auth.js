import jwt from 'jsonwebtoken';

const secretKey = 'asdfgh200416';

export const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')

    if (!token) {
        return res.status(401).send({
            message: "Acceso denegado no token"
        })
    }

    try {
        const decoded = jwt.verify(token, secretKey);

        req.mech = decoded;

        next();

    } catch (error) {
        res.status(400).send({
            message: "Token invalido"
        })
    }
}
