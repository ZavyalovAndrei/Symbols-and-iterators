import { Magician } from "../Magician";
import { Daemon } from "../Daemon";
import { Undead } from "../Undead";
import { Bowerman } from "../Bowerman";
import Team from "../Team";

const team = new Team();
const magician = new Magician("Юлия");
const daemon = new Daemon("Марина");
const undead = new Undead("Вероника");
const bowerman = new Bowerman("Светлана");
team.makeTeam(magician, daemon, undead, bowerman);
const iterator = team[Symbol.iterator]();


test.each([
  ["Magician Юлия (уровень: 1, здоровье: 100, атака: 10, защита: 40)", magician],
  ["Daemon Марина (уровень: 1, здоровье: 100, атака: 10, защита: 40)", daemon],
  ["Undead Вероника (уровень: 1, здоровье: 100, атака: 25, защита: 25)", undead],
  ["Bowerman Светлана (уровень: 1, здоровье: 100, атака: 25, защита: 25)", bowerman],
])("should return caracter %s and done to be false", (_, expected) => {
  const result = iterator.next();
  expect(result.value).toEqual(expected);
  expect(result.done).toBeFalsy();
});

test("should return undefined when done is true", () => {
  const result = iterator.next();
  expect(result.value).toBeUndefined()
  expect(result.done).toBeTruthy();
});
