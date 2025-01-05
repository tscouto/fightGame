const char = createKnight('Tiago');
const monster = createBigMonster();

console.log(monster.name);

stage.start(
  char,
  monster,
  document.querySelector('#char'),
  document.querySelector('#monster')
);
