import React, { useState } from "react";

type CheckAnswerProps = {
    expectedAnswer: string;
};

export function CheckAnswer({ expectedAnswer }: CheckAnswerProps): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    const handleUserAnswerChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUserAnswer(event.target.value);
    };

    const isAnswerCorrect = userAnswer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <label>
                Your Answer:
                <input
                    type="text"
                    value={userAnswer}
                    onChange={handleUserAnswerChange}
                />
            </label>
            <div>{isAnswerCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
