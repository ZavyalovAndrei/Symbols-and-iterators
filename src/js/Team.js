export default class Team {
  constructor() {
    this.currentTeam = new Set();
  }

  makeTeam(...characters) {
    characters.forEach((item) => this.currentTeam.add(item));
  }

  [Symbol.iterator]() {
    let current = 0;
    const members = [...this.currentTeam];
    let last = members.length;
    return {
      next() {
        if (current >= last) {
          return {
            done: true,
            value: undefined,
          };
        }
        return {
          done: false,
          value: members[current++],
        };
      },
    };
  }
}
