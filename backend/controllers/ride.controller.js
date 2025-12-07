const rideServiece = require('../services/ride.service');
const { validationResult } = require('express-validator');

module.exports.createRide = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, pickup, destination } = req.body;

    try {
        const ride = await rideServiece.createRide({
            user: req.user._id,
            pickup,
            destination
        });
        return res.status(201).json(ride);
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};