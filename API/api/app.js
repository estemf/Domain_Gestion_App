const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dnsserversRoutes = require('./routes/dnsserversRoutes');
const domainsRoutes = require('./routes/domainsRoutes');
const recordsRoutes = require('./routes/recordsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const loginRoutes = require('./routes/loginRoutes');
const registerRoutes = require('./routes/registerRoutes');
const authenticateToken = require('./authMiddleware');

// ajoute prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();

// Middlewares (pour les tokens)
app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:5173', // Autorise uniquement ce domaine (ton frontend)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Méthodes HTTP autorisées
  allowedHeaders: ['Content-Type', 'Authorization'], // En-têtes autorisés
};

app.use(cors(corsOptions));

// Routes publiques
app.use('/api/login', loginRoutes);
app.use('/api/register', registerRoutes);

// Inject Prisma into request
app.use((req, res, next) => {
  req.prisma = prisma;
  next();
});

// Middleware d'authentification pour les routes protégées
app.use(authenticateToken);

// Routes protégées
app.use('/api/dnsservers', dnsserversRoutes);
app.use('/api/domains', domainsRoutes);
app.use('/api/records', recordsRoutes);
app.use('/api/users', usersRoutes);

// Démarre le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});