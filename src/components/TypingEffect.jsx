import { useEffect, useState } from "react";

export function useTypingEffect(textToType, interKeyStrokeDurationInMs) {
    const [currentPosition, setCurrentPosition] = useState(0);

    useEffect(() => {

        setCurrentPosition(0);

        const intervalId = setInterval(() => {
            setCurrentPosition((prevPosition) => {
                if (prevPosition < textToType.length) {
                return prevPosition + 1;
                }
                return prevPosition;
            });
        }, interKeyStrokeDurationInMs);

        return () => {
            clearInterval(intervalId);
        };
    }, [textToType, interKeyStrokeDurationInMs]);

    return textToType.substring(0, currentPosition);
}