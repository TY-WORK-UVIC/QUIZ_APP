import { useState, useEffect } from "react";

export default function QuestionTimer({timeout, onTimeOut,mode}){
    const [remainingTime,setremainingTime] =useState(timeout);

    useEffect( () => {
        console.log('Setting timeout');
        const timer= setTimeout(onTimeOut, timeout);
        return () => {
            clearTimeout(timer);
        };
    },[timeout,onTimeOut]); 
    

    useEffect(() => {
        console.log('Setting interval');

        const interval = setInterval(() => {
            setremainingTime(prevRemainingTime => prevRemainingTime-100);
        },100);

        return () => {
            clearInterval(interval);
        };

    }, []);

    
    return <progress id='question-time' max={timeout} value={remainingTime}
    className={mode}/>;
}