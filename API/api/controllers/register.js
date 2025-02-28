const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

// Crée un nouvel utilisateur
exports.createUser = async (req, res) => {
  const { username, firstName, lastName, email, password, roleId } = req.body;

  // Vérifie que tous les champs nécessaires sont présents
  if (!username || !password || !roleId) {
    return res.status(400).json({ error: "Les champs 'username', 'password' et 'roleId' sont requis" });
  }

  try {
    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création de l'utilisateur dans la base de données
    const newUser = await prisma.users.create({
      data: {
        username: username,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: hashedPassword,
        role_id: parseInt(roleId),
      },
    });

    // Retourne l'utilisateur créé
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Erreur lors de la création de l\'utilisateur:', err);
    res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
  }
};
