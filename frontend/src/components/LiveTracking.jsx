import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LiveTracking = () => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [proximityData, setProximityData] = useState(null);

    useEffect(() => {
        const fetchLocation = () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCurrentLocation({ latitude, longitude });
                },
                (error) => console.error(error),
                { enableHighAccuracy: true }
            );
        };

        const interval = setInterval(fetchLocation, 5000); // Fetch location every 5 seconds
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const checkProximity = async () => {
            if (currentLocation) {
                try {
                    const response = await axios.post('/proximity/check-proximity', {
                        currentLocation: `${currentLocation.latitude},${currentLocation.longitude}`,
                    });
                    setProximityData(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
        };

        checkProximity();
    }, [currentLocation]);

    return (
        <div>
            <h2>Live Tracking</h2>
            {proximityData && proximityData.isNear ? (
                <div style={{ color: 'red' }}>
                    <h3>Alarm: You are near your destination!</h3>
                </div>
            ) : (
                <div>
                    <h3>Distance to destination: {proximityData?.distance} meters</h3>
                </div>
            )}
        </div>
    );
};

export default LiveTracking;