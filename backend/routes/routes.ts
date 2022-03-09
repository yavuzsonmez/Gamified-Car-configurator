import { avatarConfigurationSchema, validateAvatarConfigurationMiddleware } from "../interfaces/provideAvatar.interface";
import ScoringManager from "../managers/ScoringManager.manager";

const express = require('express');

const router = express.Router();

// The scoring manager
const scoringManager = ScoringManager.instance

/**
 * Returns the status of the system
 */

router.get('/', async (req, res) => {
	res.send({ success: true, message: "Refer to the documentation for valid endpoints." });
});

/**
 * Returns the status of the system
 */
router.get('/status', async (req, res) => {
	res.send({ success: true });
});

/**
 * This is the main route for providing an Avatar to the server
 */
router.post('/getConfiguration', async (req, res) => {
	res.send({ success: true, carConfiguration: scoringManager.calculateScore(req.body) });
});

module.exports = router