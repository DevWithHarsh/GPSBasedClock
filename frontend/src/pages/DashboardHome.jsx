import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import RidePopUp from '../components/RidePopUp';

const DashboardHome = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [notificationDistance, setNotificationDistance] = useState(1); // Default 1 km
    const [showAlarmPopup, setShowAlarmPopup] = useState(false);

    const navigate = useNavigate();
    const { user } = React.useContext(UserDataContext);

    const handleStartRide = () => {
        if (pickup && destination) {
            setTimeout(() => {
                setShowAlarmPopup(true);
                // Trigger alarm sound
                const alarm = new Audio('/alarm.mp3');
                alarm.play();
            }, notificationDistance * 1000); // Simulate distance-based alarm
        } else {
            alert('Please set both pickup and destination locations.');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-slate-800 mb-4">Set Your Smart Alarm</h2>

                {/* Pickup Location */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-slate-700 mb-2">From Location</label>
                    <input
                        type="text"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter pickup location"
                    />
                </div>

                {/* Destination Location */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Destination Location</label>
                    <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter destination location"
                    />
                </div>

                {/* Notification Distance Slider */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Notify Me Before (in km)</label>
                    <input
                        type="range"
                        min="0.1"
                        max="10"
                        step="0.1"
                        value={notificationDistance}
                        onChange={(e) => setNotificationDistance(e.target.value)}
                        className="w-full"
                    />
                    <p className="text-sm text-slate-600 mt-2">{notificationDistance} km</p>
                </div>

                {/* Start Ride Button */}
                <button
                    onClick={handleStartRide}
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-all"
                >
                    Start Ride
                </button>
            </div>

            {/* Alarm Popup */}
            {showAlarmPopup && (
                <RidePopUp
                    ride={{ pickup, destination, fare: 'Wake Up!' }}
                    setRidePopupPanel={setShowAlarmPopup}
                />
            )}
        </div>
    );
};

export default DashboardHome;