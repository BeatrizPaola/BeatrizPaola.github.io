var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["bird", "clock", "boss", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog", "cat", "book"];
verbs = ["kicked", "ran", "flew", "started", "played" ,"dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
adjectives = ["beautiful", "lazy", "professional", "tall", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy", "cold"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "noisy", "scandalous", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "beetween", "behind", "across", "towards"];

function randGen() {
  return Math.floor(Math.random() * 6);
}

function sentence() {
  var rand1 = Math.floor(Math.random() * 12);
  var rand2 = Math.floor(Math.random() * 12);
  var rand3 = Math.floor(Math.random() * 12);
  var rand4 = Math.floor(Math.random() * 12);
  var rand5 = Math.floor(Math.random() * 12);
  var rand6 = Math.floor(Math.random() * 12);
  //                var randCol = [rand1,rand2,rand3,rand4,rand5];
  //                var i = randGen();
  var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";

  document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
};
sentence();