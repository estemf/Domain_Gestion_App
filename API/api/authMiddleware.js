const jwt = require('jsonwebtoken');
const secretKey = ""+process.env.SECRET_KEY+"";

// Comment ça marche ?
// 1. Le client envoie une requête à une route protégée
// 2. Le middleware d'authentification vérifie si le token est présent
// 3. Si le token est présent, il est vérifié avec la clé secrète
// 4. Si le token est valide, le middleware continue le traitement
// 5. Sinon, le middleware renvoie une erreur 403 (Forbidden)

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;