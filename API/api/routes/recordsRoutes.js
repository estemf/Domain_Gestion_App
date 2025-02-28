const express = require('express');
const {
  getAllRecords,
  getRecordsByDomain,
  getRecordById,
  createRecord,
  updateRecord,
  deleteRecord,
} = require('../controllers/records');
const router = express.Router();

router.get('/', getAllRecords);
router.get('/domain/:domainId', getRecordsByDomain);
router.get('/:id', getRecordById);
router.post('/', createRecord);
router.put('/:id', updateRecord);
router.delete('/:id', deleteRecord);

module.exports = router;
