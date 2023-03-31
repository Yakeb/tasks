import React, { useState } from "react";
import { Form } from "react-bootstrap";

type Color = {
    name: string;
    value: string;
};

const colors: Color[] = [
    { name: "Red", value: "#ff0000" },
    { name: "Green", value: "#00ff00" },
    { name: "Blue", value: "#0000ff" },
    { name: "Yellow", value: "#ffff00" },
    { name: "Cyan", value: "#00ffff" },
    { name: "Magenta", value: "#ff00ff" },
    { name: "Black", value: "#000000" },
    { name: "White", value: "#ffffff" }
];

export function ChangeColor() {
    const [selectedColor, setSelectedColor] = useState<string>(colors[0].value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <>
            {colors.map((color) => (
                <Form.Check
                    key={color.value}
                    inline
                    type="radio"
                    label={color.name}
                    name="color"
                    value={color.value}
                    checked={selectedColor === color.value}
                    onChange={handleChange}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    padding: "1rem",
                    marginTop: "1rem"
                }}
            >
                You have selected this color:{" "}
                <span style={{ color: selectedColor }}>{selectedColor}</span>
            </div>
        </>
    );
}
