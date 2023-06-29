import React, { useState, useEffect } from 'react';

const Timer = ({ initialHours }) => {
    const [remainingTime, setRemainingTime] = useState(initialHours * 3600); // Convert hours to seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer); // Clean up the timer on component unmount

    }, []);

    const formatTime = time => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div>
            <h3>Countdown Timer</h3>
            <p>Remaining Time: {formatTime(remainingTime)}</p>
        </div>
    );
};

export default Timer;
