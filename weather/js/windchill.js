let t = 84;
let s = 11;
let wc = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);

wc = Math.floor(wc)
document.querySelector("#wind-chill").textContent = wc + '°F';