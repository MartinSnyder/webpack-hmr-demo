const secretText = 'Pulse';

export function emitPulse(domNode) {
    domNode.appendChild(document.createTextNode(secretText));
    domNode.appendChild(document.createElement('br'));
}

// Activate Webpack HMR
if (module.hot) {
    module.hot.accept();
}
