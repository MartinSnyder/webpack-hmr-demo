import pulse from './pulse';

const delay = 2500; // milliseconds

function getCurrentSeconds() {
    return new Date().getTime() / 1000;
}

function writeToElement(id, text) {
    document.getElementById(id).innerText = text;
}

const intervalId = window.setInterval(() => {
    writeToElement('upTime', getCurrentSeconds() - moduleStartTime);
    writeToElement('lastPulse', pulse());
}, delay);

let moduleStartTime = getCurrentSeconds();

// Activate Webpack HMR
if (module.hot) {
    const data = module.hot.data || {};

    const numReloads = data.numReloads || 0;
    writeToElement('numReloads', numReloads);

    // Update our moduleStartTime if we are in the process of reloading
    if (data.moduleStartTime)
        moduleStartTime = data.moduleStartTime;

    module.hot.accept();

    // dispose handler
    module.hot.dispose((data) => {
        window.clearInterval(intervalId);

        data.numReloads = numReloads + 1;
        data.moduleStartTime = moduleStartTime;
    });
}
