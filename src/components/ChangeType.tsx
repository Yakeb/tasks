import React, { useState } from "react";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    const toggleType = () => {
        setType(
            type === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };

    return (
        <div>
            <button onClick={toggleType}>Change Type</button>
            {type === "short_answer_question" && <p>Short Answer</p>}
            {type === "multiple_choice_question" && <p>Multiple Choice</p>}
        </div>
    );
}
