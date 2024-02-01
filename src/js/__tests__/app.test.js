import orderByProps, { obj } from '../app';

test('Tests for existed props', () => {
  const character = orderByProps(obj, ["name", "level"]);
  
  expect(character).toEqual([
    {"key": "name", "value": "мечник"}, 
    {"key": "level", "value": 2}, 
    {"key": "attack", "value": 80}, 
    {"key": "defence", "value": 40}, 
    {"key": "health", "value": 10}]);
});

test('Tests for out props', () => {
  const character = orderByProps(obj, ["age", "things"]);
  
  expect(character).toEqual([
    {"key": "attack", "value": 80}, 
    {"key": "defence", "value": 40}, 
    {"key": "health", "value": 10},
    {"key": "level", "value": 2},
    {"key": "name", "value": "мечник"}]);
});