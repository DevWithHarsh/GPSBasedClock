const rideModel = require('../models/ride.model');
const haversine = require('haversine');

module.exports.createRide = async ({
    user, pickup, destination
}) => {
    if (!user || !pickup || !destination) {
        throw new Error('Missing required ride data');
    }

    const ride = await rideModel.create({
        userId: user, // Corrected to use 'user' instead of 'userId'
        pickup,
        destination,
    });

    return ride;
};

module.exports.checkProximity = async ({ userId, currentLocation }) => {
    const ride = await rideModel.findOne({ userId });

    if (!ride) {
        throw new Error('Ride not found');
    }

    const destination = {
        latitude: parseFloat(ride.destination.split(',')[0]),
        longitude: parseFloat(ride.destination.split(',')[1]),
    };

    const distance = haversine(currentLocation, destination, { unit: 'meter' });

    const threshold = 500; // Distance threshold in meters

    return {
        isNear: distance <= threshold,
        distance,
    };
};