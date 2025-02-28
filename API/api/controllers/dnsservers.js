const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Récupère tous les serveurs DNS
exports.getAllDnsServers = async (req, res) => {
  try {
    const dnsServers = await prisma.dnsservers.findMany();
    res.status(200).json(dnsServers);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des serveurs DNS' });
  }
};

// Récupère un serveur DNS par ID
exports.getDnsServerById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const dnsServer = await prisma.dnsservers.findUnique({ where: { id } });
    if (!dnsServer) return res.status(404).json({ error: 'Serveur DNS non trouvé' });
    res.status(200).json(dnsServer);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du serveur DNS' });
  }
};

// Récupère les serveurs DNS associés à un domaine par son ID
exports.getDnsServersByDomainId = async (req, res) => {
  try {
    const domainId = parseInt(req.params.domainId);
    const dnsServers = await prisma.domain_dns_server.findMany({
      where: { domain_id: domainId },
      include: { dnsservers: true, status: true }
    });
    if (!dnsServers.length) return res.status(404).json({ error: 'Aucun serveur DNS trouvé pour ce domaine' });
    res.status(200).json(dnsServers.map((entry) => entry.dnsservers));
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des serveurs DNS pour ce domaine' });
  }
};

// Crée un nouveau serveur DNS
exports.createDnsServer = async (req, res) => {
  try {
    const { ipAddress, url } = req.body;
    const newDnsServer = await prisma.dnsservers.create({
      data: { ip_address: parseInt(ipAddress), url, created_at: new Date() }
    });
    res.status(201).json(newDnsServer);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du serveur DNS' });
  }
};

// Met à jour un serveur DNS
exports.updateDnsServer = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { ipAddress, url } = req.body;
    const updatedDnsServer = await prisma.dnsservers.update({
      where: { id },
      data: { ip_address: parseInt(ipAddress), url }
    });
    res.status(200).json(updatedDnsServer);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour du serveur DNS' });
  }
};

// Supprime un serveur DNS
exports.deleteDnsServer = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deletedDnsServer = await prisma.dnsservers.delete({ where: { id } });
    res.status(200).json(deletedDnsServer);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression du serveur DNS' });
  }
};
