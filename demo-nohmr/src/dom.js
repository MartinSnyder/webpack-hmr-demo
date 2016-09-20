import $ from 'jquery';

export function writeTextToElement(id, text) {
    $('#' + id).text(text);
}
