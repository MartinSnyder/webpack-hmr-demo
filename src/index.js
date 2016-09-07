import * as ES6ImportedPulse from './pulse';
const TopLevelRequiredPulse = require('./pulse');

const delay = 2500; // milliseconds

window.setInterval(() => {
    const InnerRequiredPulse = require('./pulse');

    TopLevelRequiredPulse.emitPulse(document.getElementById('left'));
    InnerRequiredPulse.emitPulse(document.getElementById('center'));
    ES6ImportedPulse.emitPulse(document.getElementById('right'));
}, delay);

// Activate Webpack HMR
if (module.hot) {
    module.hot.accept();
}
