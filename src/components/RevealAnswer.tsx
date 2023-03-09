import React, { useState } from "react";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <button onClick={toggleVisible}>Reveal Answer</button>
            {visible && <p>The answer is 42.</p>}
        </div>
    );
}
