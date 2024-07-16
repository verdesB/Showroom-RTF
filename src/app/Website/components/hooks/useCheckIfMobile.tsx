import platform from "platform";

export const checkIfMobile = () => {
    const userAgent = navigator.userAgent;
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|Kindle|Silk|Mobile|PlayBook|BB10|MeeGo|Symbian|Tizen|Ubuntu Touch|bada/i;
    const isMobileDevice = mobileRegex.test(userAgent);
    const isSmallScreen = window.innerWidth <= 1201;

    // Check for specific OS using platform.js
    if (platform.os && platform.os.family) {
        const osName = platform.os.family.toLowerCase();
        const isIOS = osName.includes('iOS');
        const isAndroid = osName.includes('android');

        const isTablet = /iPad|Tablet|PlayBook/i.test(userAgent) || (isMobileDevice && !isSmallScreen);

        // Check for iPad in landscape mode specifically
        const isIPadInLandscape = (/iPad|Macintosh/i.test(userAgent) && 'ontouchend' in document) && window.matchMedia("(orientation: landscape)").matches;

        return isMobileDevice || isTablet || isSmallScreen || isIPadInLandscape || isIOS || isAndroid;
    }

    return isMobileDevice || isSmallScreen;
};
