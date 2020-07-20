import { UAParser } from "ua-parser-js";

const MOBILE_TYPES = [
    "mobile",
    "tablet",
    "wearable"
];

export const isMobile = () => {
    let parser = new UAParser();
    const device = parser.getDevice();
    if(MOBILE_TYPES.indexOf(device) !== -1) {
        return true;
    }
};
