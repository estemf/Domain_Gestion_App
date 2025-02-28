const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Récupère tous les domaines
exports.getAllDomains = async (req, res, next) => {
  try {
    const domains = await prisma.domains.findMany();
    res.status(200).json(domains);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des domaines' });
  }
};

// Récupère tous les domaines par user ID
exports.getDomainsByUserId = async (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    const domains = await prisma.domains.findMany({
      where: { user_id: userId }
    });
    res.status(200).json(domains);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des domaines' });
  }
};

// Récupère un domaine par son id
exports.getDomainById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const domain = await prisma.domains.findUnique({
      where: { id: id }
    });
    console.log(domain);
    if (!domain) return res.status(404).json({ error: 'Domaine non trouvé' });
    res.status(200).json(domain);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du domaine' });
  }
};

// Récupère tous les domaines associés à un serveur DNS par son ID
exports.getDomainsByDnsServerId = async (req, res) => {
  try {
    const dnsServerId = parseInt(req.params.dnsServerId);
    const domains = await prisma.domain_dns_server.findMany({
      where: { dns_server_id: dnsServerId },
      include: { domains: true }
    });
    console.log(domains);
    res.status(200).json(domains.map((domainDns) => domainDns.domains));
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des domaines pour le serveur DNS' });
  }
};

// Crée un nouveau domaine
exports.createDomain = async (req, res) => {
  try {
    const { userId, name } = req.body;
    console.log(req.body);
    const newDomain = await prisma.domains.create({
      data: {
        user_id: parseInt(userId),
        name: name,
        created_at: new Date()
      }
    });
    res.status(201).json(newDomain);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du domaine' });
  }
};

// Met à jour un domaine
exports.updateDomain = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    const updatedDomain = await prisma.domains.update({
      where: { id: id },
      data: { name: name }
    });
    console.log(updatedDomain);
    res.status(200).json(updatedDomain);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour du domaine' });
  }
};

// Supprime un domaine
exports.deleteDomain = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deletedDomain = await prisma.domains.delete({
      where: { id: id }
    });
    console.log(deletedDomain);
    res.status(200).json(deletedDomain);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression du domaine' });
  }
};

// Vérifie si un domaine existe par nom
exports.checkIfDomainExists = async (req, res) => {
  try {
    const name = req.params.name;
    const domain = await prisma.domains.findUnique({
      where: { name: name }
    });
    console.log(domain);
    res.status(200).json({ exists: domain !== null });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la vérification du domaine' });
  }
};
