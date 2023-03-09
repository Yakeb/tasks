/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";

type Holiday =
    | "Christmas"
    | "Halloween"
    | "Thanksgiving"
    | "New Year"
    | "Easter";
const holidayList: Holiday[] = [
    "Christmas",
    "Halloween",
    "Thanksgiving",
    "New Year",
    "Easter"
];
const holidayEmojis = {
    Christmas: "🎄",
    Halloween: "🎃",
    Thanksgiving: "🦃",
    "New Year": "🎉",
    Easter: "🐰"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");

    const getNextHolidayAlphabetical = (currentHoliday: Holiday): Holiday => {
        const currentIndex = holidayList.indexOf(currentHoliday);
        if (currentIndex === holidayList.length - 1) {
            return holidayList[0];
        } else {
            return holidayList[currentIndex + 1];
        }
    };

    const getNextHolidayByYear = (currentHoliday: Holiday): Holiday => {
        switch (currentHoliday) {
            case "New Year":
                return "Easter";
            case "Easter":
                return "Halloween";
            case "Halloween":
                return "Thanksgiving";
            case "Thanksgiving":
                return "Christmas";
            case "Christmas":
                return "New Year";
            default:
                return "Christmas";
        }
    };

    const handleAlphabeticalClick = () => {
        const nextHoliday = getNextHolidayAlphabetical(holiday);
        setHoliday(nextHoliday);
    };

    const handleYearClick = () => {
        const nextHoliday = getNextHolidayByYear(holiday);
        setHoliday(nextHoliday);
    };

    return (
        <div>
            <p>Holiday: {holidayEmojis[holiday]}</p>
            <button onClick={handleAlphabeticalClick}>
                Advance by Alphabet
            </button>
            <button onClick={handleYearClick}>Advance by Year</button>
        </div>
    );
}
