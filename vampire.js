class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let currentVampire = this;
    let numberToOrigin = 0;
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberToOrigin++;
    }
    return numberToOrigin;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    } else {
      return false;
    }
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    // check ranks
    let thisVampire = this;
    let thatVampire = vampire;
    let thisVampireRank = thisVampire.numberOfVampiresFromOriginal;
    let thatVampireRank = thatVampire.numberOfVampiresFromOriginal;
    while (thisVampireRank !== thatVampireRank) {
      if (thisVampireRank > thatVampireRank) {
        thisVampire = thisVampire.creator;
        thisVampireRank = thisVampire.numberOfVampiresFromOriginal;
      } else if (thisVampireRank < thatVampireRank) {
        thatVampire = thatVampire.creator;
        thatVampireRank = thatVampire.numberOfVampiresFromOriginal;
      }
    }
    // once ranks are the same find a common ancestor
    while (thisVampire !== thatVampire) {
      thisVampire = thisVampire.creator;
      thatVampire = thatVampire.creator;
    }
    return thisVampire;

  }
}




module.exports = Vampire;

