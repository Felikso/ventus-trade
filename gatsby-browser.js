import React from 'react';
import ThemeLocalProvider from 'providers/ThemeLocalProvider';

/* export const onClientEntry = async () => {
    if (typeof IntersectionObserver === "undefined") {
        await import("intersection-observer");
        console.log("IntersectionObserver polyfilled ;)");
    }
};
 */
export const onServiceWorkerUpdateReady = () => window.location.reload(true);

export const wrapRootElement = ({ element }) => <ThemeLocalProvider>{element}</ThemeLocalProvider>;