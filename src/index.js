// import * as Pulse from './pulse';

const delay = 2500; // milliseconds

window.setInterval(() => {
    const Pulse = require('./pulse');
    Pulse.emitPulse();
}, delay);

// Activate Webpack HMR
if (module.hot) {
    module.hot.accept();
}
