const secretText = 'Pulse';

export function emitPulse() {
    window.document.body.appendChild(document.createTextNode(secretText));
    window.document.body.appendChild(document.createElement('br'));
}

// Activate Webpack HMR
if (module.hot) {
    module.hot.accept();
}
