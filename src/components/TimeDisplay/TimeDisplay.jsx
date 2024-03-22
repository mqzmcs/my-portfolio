import { useState, useEffect } from "react";
import "./TimeDisplay.css";

function TimeDisplay() {
    const [userTime, setUserTime] = useState("");
    const [myTime, setMyTime] = useState(new Date()
        .toLocaleTimeString([],
            {
                hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit"
            }
        ));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMyTime(new Date()
                .toLocaleTimeString([],
                    {
                        hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit"
                    }
                ));
            setUserTime(new Date()
                .toLocaleTimeString([],
                    {
                        hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit"
                    }
                ));
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="time-display-container">
            <div className="time-label">
                <span className="time-label-text">You o'clock</span>
            </div>
            <div className="time-face">
                <span className="time-face-text">{userTime}</span>
            </div>
            <div className="time-label">
                <span className="time-label-text">Me o'clock</span>
            </div>
            <div className="time-face">
                <span className="time-face-text">{myTime}</span>
            </div>
        </div>
    );
}

export default TimeDisplay;