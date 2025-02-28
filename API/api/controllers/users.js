const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

// Récupère tous les utilisateurs avec leur rôle
exports.getAllUsers = async () => {
  try {
    const users = await prisma.users.findMany({
      include: {
        role: true,
      },
    });
    return users;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des utilisateurs');
  }
};

// Récupère un utilisateur par son id
exports.getUserById = async (id) => {
  try {
    const user = await prisma.users.findUnique({
      where: { id: parseInt(id) },
      include: { role: true },
    });
    return user;
  } catch (error) {
    throw new Error('Erreur lors de la récupération de l\'utilisateur');
  }
};

// Met à jour un utilisateur
exports.updateUser = async (id, username, firstName, lastName, email, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await prisma.users.update({
      where: { id: parseInt(id) },
      data: {
        username: username,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: hashedPassword,
      },
    });

    return updatedUser;
  } catch (error) {
    throw new Error('Erreur lors de la mise à jour de l\'utilisateur');
  }
};

// Supprime un utilisateur
exports.deleteUser = async (id) => {
  try {
    const deletedUser = await prisma.users.delete({
      where: { id: parseInt(id) },
    });
    return deletedUser;
  } catch (error) {
    throw new Error('Erreur lors de la suppression de l\'utilisateur');
  }
};
