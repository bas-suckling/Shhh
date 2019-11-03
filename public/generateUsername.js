const rug = require("random-username-generator")

function generate() {
    // document.getElementById("inputUsername").innerHTML = rug.generate();
    console.log(rug.generate())
    return;
  };

module.exports = generate;
