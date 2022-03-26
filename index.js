import wordList from "./words.json" assert { type: "json" };
class Roastra {
  constructor(options) {
    if (options.plural === true) {
      this.plural = "are";
    } else {
      this.plural = "is";
    }

    if (options.name === false || options.name === undefined) {
      this.name = "You";
      this.plural = "are";
    } else {
      this.name = options.name;
    }

    if (options.name.toLowerCase() === "they") {
      this.plural = "are";
    }

    this.options = options;
  }
  Get(callback) {
    var t = {
      adjective: [
        wordList.adjective[
          Math.floor(Math.random() * wordList.adjective.length)
        ],
        wordList.adjective[
          Math.floor(Math.random() * wordList.adjective.length)
        ],
        wordList.adjective[
          Math.floor(Math.random() * wordList.adjective.length)
        ],
      ],
      amount:
        wordList.amount[Math.floor(Math.random() * wordList.amount.length)],
      animal:
        wordList.animal[Math.floor(Math.random() * wordList.animal.length)],
      animal_part:
        wordList.animal_part[
          Math.floor(Math.random() * wordList.animal_part.length)
        ],
    };
    var sentance = `${this.name} ${this.plural} ${t.adjective[0]} as a ${t.adjective[1]} ${t.amount} of ${t.adjective[2]} ${t.animal} ${t.animal_part}`;

    var result = {
      sentance,
      name: this.options.name,
    };

    if (typeof callback === "function") {
      callback(result);
    }

    return result;
  }
}

export default Roastra;
