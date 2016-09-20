let moduleStartTime = getCurrentSeconds();

function getCurrentSeconds() {
    return Math.round(new Date().getTime() / 1000);
    // return new Date().getTime() / 1000;
}

export function getElapsedSeconds() {
    return getCurrentSeconds() - moduleStartTime;
}
