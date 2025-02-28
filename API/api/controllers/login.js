const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = "" + process.env.SECRET_KEY + "";

// Récupère un utilisateur par son username et son mot de passe
exports.getUserByUsernameAndPassword = async (req, res) => {
  const { username, password } = req.params;
  
  try {
    const user = await prisma.users.findUnique({
      where: { username: username }
    });

    if (user && await bcrypt.compare(password, user.password)) {
      // Génère un token JWT
      const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
      return res.json({ token, userId: user.id });
    } else {
      return res.status(404).json({ error: 'Utilisateur non trouvé ou mot de passe incorrect' });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
  }
};
