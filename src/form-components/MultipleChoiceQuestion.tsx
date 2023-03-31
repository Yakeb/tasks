import React, { useState } from "react";

type MultipleChoiceQuestionsProps = {
    expectedAnswer: string;
    options: string[];
};
export function MultipleChoiceQuestion({
    expectedAnswer,
    options
}: MultipleChoiceQuestionsProps) {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div>
            <select value={selectedOption} onChange={handleOptionChange}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {selectedOption === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
