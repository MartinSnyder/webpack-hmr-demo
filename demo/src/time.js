let moduleStartTime = getCurrentSeconds();

function getCurrentSeconds() {
    return Math.round(new Date().getTime() / 1000);
}

export function getElapsedSeconds() {
    return getCurrentSeconds() - moduleStartTime;
}

// Activate Webpack HMR
if (module.hot) {
    const data = module.hot.data || {};

    // Update our moduleStartTime if we are in the process of reloading
    if (data.moduleStartTime)
        moduleStartTime = data.moduleStartTime;

    // dispose handler to pass our moduleStart time to the next version of our module
    module.hot.dispose((data) => {
        data.moduleStartTime = moduleStartTime;
    });
}
