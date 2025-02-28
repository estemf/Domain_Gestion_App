const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Récupère tous les records avec leur type
exports.getAllRecords = async (req, res) => {
  try {
    const records = await prisma.records.findMany({
      include: {
        record_type: true,
      },
    });
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupère un record par son ID
exports.getRecordById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const record = await prisma.records.findUnique({
      where: { id: id },
      include: { record_type: true },
    });
    if (record) {
      res.json(record);
    } else {
      res.status(404).json({ error: 'Record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupère tous les records associés à un domaine donné
exports.getRecordsByDomain = async (req, res) => {
  try {
    const domainId = parseInt(req.params.domainId);
    const records = await prisma.records.findMany({
      where: { domain_id: domainId },
    });
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crée un nouveau record
exports.createRecord = async (req, res) => {
  try {
    const { domainId, recordName, target, priority, ttl, recordTypeId } = req.body;
    const newRecord = await prisma.records.create({
      data: {
        domain_id: parseInt(domainId),
        record_name: recordName,
        target: target,
        priority: priority ? parseInt(priority) : null,
        ttl: ttl ? parseInt(ttl) : 3600,
        record_type_id: parseInt(recordTypeId),
      },
    });
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Met à jour un record
exports.updateRecord = async (req, res) => {
  try {
    const { id, recordName, target, priority, ttl, recordTypeId } = req.body;
    const updatedRecord = await prisma.records.update({
      where: { id: parseInt(id) },
      data: {
        record_name: recordName,
        target: target,
        priority: priority ? parseInt(priority) : null,
        ttl: ttl ? parseInt(ttl) : 3600,
        record_type_id: parseInt(recordTypeId),
      },
    });
    res.json(updatedRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprime un record
exports.deleteRecord = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deletedRecord = await prisma.records.delete({
      where: { id: id },
    });
    res.json({ message: 'Record deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
