// helperFunction.js
export const to12HourFormat = (startTime, endTime) => {
    const convertTime = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Convert 0 to 12 for midnight
        return `${formattedHours}${period}`;
    };
    const startFormatted = convertTime(startTime);
    const endFormatted = convertTime(endTime);
    return `${startFormatted} to ${endFormatted}`;
};

// Example usage
// import { to12HourFormat } from './helperFunction';
// const result = to12HourFormat('08:00', '18:00');
// console.log(result); // Outputs: "8AM to 6PM"


// The Haversine formula calculates the great-circle distance between two points on a sphere (like Earth).
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
};


export const capitalize = (string) => {  
    return string.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');  
};