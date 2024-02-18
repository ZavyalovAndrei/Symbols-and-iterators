export default class Team {
  constructor() {
    this.currentTeam = {};
  }

  makeTeam(...characters) {
    let index = 0;
    characters.forEach((item) => {
      this.currentTeam[index] = item;
      index++;
    });
    this.currentTeam.length = index;
    this.currentTeam[Symbol.iterator] = [][Symbol.iterator];
  }
}
