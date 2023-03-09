import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState(1);
    const [rightDie, setRightDie] = useState(5);
    const [winOrLose, setWinOrLose] = useState("");

    function rollLeft() {
        setLeftDie(d6());
    }

    function rollRight() {
        setRightDie(d6());
    }

    function checkWinOrLose() {
        if (leftDie === 1 && rightDie === 1) {
            setWinOrLose("Lose");
        } else if (leftDie === rightDie) {
            setWinOrLose("Win");
        } else {
            setWinOrLose("");
        }
    }

    React.useEffect(() => {
        checkWinOrLose();
    }, [leftDie, rightDie]);

    return (
        <div className="TwoDice">
            <div className="dice-container">
                <div className="dice" data-testid="left-die">
                    {leftDie}
                </div>
                <div className="dice" data-testid="right-die">
                    {rightDie}
                </div>
            </div>
            <div className="button-container">
                <button onClick={rollLeft} aria-label="Roll Left">
                    Roll Left
                </button>
                <button onClick={rollRight} aria-label="Roll Right">
                    Roll Right
                </button>
            </div>
            <div className={`win-or-lose ${winOrLose}`}>{winOrLose}</div>
        </div>
    );
}
