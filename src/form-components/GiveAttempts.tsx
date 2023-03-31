import React, { useState } from "react";

export const GiveAttempts: React.FC = () => {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft((prevAttempts) => prevAttempts - 1);
        }
    };

    const handleGainAttempts = () => {
        const parsedAttempts = parseInt(String(requestedAttempts), 10);
        if (!isNaN(parsedAttempts) && parsedAttempts > 0) {
            setAttemptsLeft((prevAttempts) => prevAttempts + parsedAttempts);
            setRequestedAttempts(0);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputVal = event.target.value;
        if (/^\d*$/.test(inputVal)) {
            setRequestedAttempts(parseInt(inputVal, 10));
        }
    };

    return (
        <div>
            <p>Attempts left: {attemptsLeft}</p>
            <button onClick={handleUseAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleInputChange}
            />
            <button onClick={handleGainAttempts}>Gain</button>
        </div>
    );
};
