export default class Team {
  constructor(currentTeam) {
    this.currentTeam = currentTeam;
    this.iterator = this.currentTeam[Symbol.iterator]();
  }
}
