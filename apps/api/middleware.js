export function authMiddleware(req, res, next) {
    const authHeader = req.headers['authorization'];
    req.userId = "1";
    next();
}
