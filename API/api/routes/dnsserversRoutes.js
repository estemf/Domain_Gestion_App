const express = require('express');
const {
  getAllDnsServers,
  getDnsServerById,
  getDnsServersByDomainId,
  createDnsServer,
  updateDnsServer,
  deleteDnsServer
} = require('../controllers/dnsservers');
const router = express.Router();

router.get('/', getAllDnsServers);
router.get('/:id', getDnsServerById);
router.get('/domain/:domainId', getDnsServersByDomainId);
router.post('/', createDnsServer);
router.put('/:id', updateDnsServer);
router.delete('/:id', deleteDnsServer);

module.exports = router;
