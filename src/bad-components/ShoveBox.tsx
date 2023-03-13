import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ShoveBox() {
    const [position, setPosition] = useState<number>(10);

    function MoveableBox(): JSX.Element {
        return (
            <div
                data-testid="moveable-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "lightblue",
                    border: "1px solid blue",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: position + "px"
                }}
            ></div>
        );
    }

    return (
        <div>
            <h3>Shove Box</h3>
            <MoveableBox />
            <Button onClick={() => setPosition(4 + position)}>
                Shove the Box
            </Button>
        </div>
    );
}
