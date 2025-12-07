const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authMiddleware = require('../middleware/auth.middleware');
const rideService = require('../services/ride.service');

router.post('/check-proximity',
    authMiddleware.authUser,
    body('currentLocation').isString().withMessage('Invalid location format'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { currentLocation } = req.body;
        const userId = req.user._id;

        try {
            const proximityData = await rideService.checkProximity({ userId, currentLocation });
            res.status(200).json(proximityData);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
);

module.exports = router;