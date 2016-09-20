import * as dom from './dom';
import * as time from './time';
import pulse from './pulse';

require('./styles.scss');

const UPDATE_INTERVAL = 1000; // milliseconds
const intervalId = window.setInterval(() => {
    dom.writeTextToElement('upTime', time.getElapsedSeconds() + ' secs');
    dom.writeTextToElement('lastPulse', pulse());
}, UPDATE_INTERVAL);
