//@ts-nocheck


 export const requestGyroscopePermission = async (setPermissionGranted) => {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        try {
            const permission = await DeviceOrientationEvent.requestPermission();
            if (permission === 'granted') {
                console.log('Gyroscope access granted');
                setPermissionGranted(true);
            } else {
                alert('Gyroscope access denied');
            }
        } catch (error) {
            console.error('Error requesting gyroscope permission:', error);
            alert('Error requesting gyroscope permission');
        }
    } else if (typeof DeviceOrientationEvent !== 'undefined') {
        console.log('Gyroscope access available without permission request');
        setPermissionGranted(true);
    } else {
        alert('Gyroscope not supported on this device or browser');
    }
};