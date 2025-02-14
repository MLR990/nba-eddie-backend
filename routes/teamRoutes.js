const express = require('express');
const teamController = require('../controllers/teamController');

const router = express.Router();

router
  .route('/missing-colors')
  .get(teamController.aliasMissingColors, teamController.getAllTeams);

router.route('/').get(teamController.getAllTeams).post(teamController.addTeam);

router
  .route('/:id')
  .get(teamController.getTeam)
  .patch(teamController.updateTeam)
  .delete(teamController.deleteTeam);

module.exports = router;
