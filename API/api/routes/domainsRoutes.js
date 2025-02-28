const express = require('express');
const {
  getAllDomains,
  getDomainById,
  checkIfDomainExists,
  getDomainsByDnsServerId,
  getDomainsByUserId,
  createDomain,
  updateDomain,
  deleteDomain,
} = require('../controllers/domains');
const router = express.Router();

router.get('/', getAllDomains);
router.get('/user/:id', getDomainsByUserId);
router.get('/:id', getDomainById);
router.get('/name/:name', checkIfDomainExists);
router.get('/dnsserver/:dnsServerId', getDomainsByDnsServerId);
router.post('/', createDomain);
router.put('/:id', updateDomain);
router.delete('/:id', deleteDomain);

module.exports = router;