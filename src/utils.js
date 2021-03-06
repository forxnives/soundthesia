

export const millisecondConvert = function (millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }



export const scrollCheck = function (DOMElement) {

    DOMElement.classList.remove('scrolling');

    if (DOMElement.clientWidth < DOMElement.scrollWidth) {
        DOMElement.classList.add('scrolling');
    }

}