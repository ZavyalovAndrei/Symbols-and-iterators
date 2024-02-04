import { Magician } from "../Magician";
import { Daemon } from "../Daemon";
import { Undead } from "../Undead";
import { Bowerman } from "../Bowerman";
import Team from "../Team";

const team = new Team(
  [new Magician("Юлия"), new Daemon("Марина"),
  new Undead("Вероника"),
  new Bowerman("Светлана")]
);

test.each([
  ["Magician Юлия (уровень: 1, здоровье: 100, атака: 10, защита: 40)", false],
  ["Daemon Марина (уровень: 1, здоровье: 100, атака: 10, защита: 40)", false],
  ["Undead Вероника (уровень: 1, здоровье: 100, атака: 25, защита: 25)", false],
  ["Bowerman Светлана (уровень: 1, здоровье: 100, атака: 25, защита: 25)", false],
])("should return caracter %s and done to be %s" , (expected, status) => {
  const result = team.next();
  expect(result.value.toString()).toEqual(expected);
  expect(result.done).toBe(status);
});

test('should return undefined when done is true', () => {
    const result = team.next();
    console.log(result.value + "  " + result.done);
    expect(result.value).toEqual(undefined);
    expect(result.done).toBe(true);
  });
