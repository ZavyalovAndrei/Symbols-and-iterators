import { Magician } from "../Magician";
import { Daemon } from "../Daemon";
import { Undead } from "../Undead";
import { Bowerman } from "../Bowerman";
import Team from "../Team";

const team = new Team([
  new Magician("Юлия"),
  new Daemon("Марина"),
  new Undead("Вероника"),
  new Bowerman("Светлана"),
]);

test.each([
  ["Magician Юлия (уровень: 1, здоровье: 100, атака: 10, защита: 40)"],
  ["Daemon Марина (уровень: 1, здоровье: 100, атака: 10, защита: 40)"],
  ["Undead Вероника (уровень: 1, здоровье: 100, атака: 25, защита: 25)"],
  [
    "Bowerman Светлана (уровень: 1, здоровье: 100, атака: 25, защита: 25)"
  ],
])("should return caracter %s and done to be %s", (expected) => {
  const result = team.iterator.next();
  expect(result.value.toString()).toEqual(expected);
  expect(result.done).toBe(false);
});

test("should return undefined when done is true", () => {
  const result = team.iterator.next();
  expect(result.value).toEqual(undefined);
  expect(result.done).toBe(true);
});
