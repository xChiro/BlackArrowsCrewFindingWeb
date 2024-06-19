import { useEffect, useState } from 'react';

const useTimeAgo = (date: Date) => {
    const [timeAgo, setTimeAgo] = useState('');

    useEffect(() => {
            const now = new Date();
            const differenceInMilliseconds = now.getTime() - date.getTime();
            const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
            const differenceInMinutes = Math.floor(differenceInSeconds / 60);
            const differenceInHours = Math.floor(differenceInMinutes / 60);
            const differenceInDays = Math.floor(differenceInHours / 24);

            if (differenceInDays > 0) {
                setTimeAgo(`${differenceInDays} days ago`);
            } else if (differenceInHours > 0) {
                setTimeAgo(`${differenceInHours} hours ago`);
            } else if (differenceInMinutes > 0) {
                setTimeAgo(`${differenceInMinutes} minutes ago`);
            } else {
                setTimeAgo(`${differenceInSeconds} seconds ago`);
            }
    }, [date]);

    return timeAgo;
};

export default useTimeAgo;