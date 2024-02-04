export default class Team {
  constructor(currentTeam) {
    this.currentTeam = currentTeam;
    this.index = 0;  
  }
      next() {
        if (this.index >= this.currentTeam.length) {
          return {
            value: undefined,
            done: true,
          };
        }
        this.index++;
        return {
          value: this.currentTeam[this.index - 1],
          done: false,
        };
    }
}