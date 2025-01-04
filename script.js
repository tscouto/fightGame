let log = new Log(document.querySelector('.log'));
let char = new knight('Tiago');
let monster = new LittleMonster();
let bigmonster = new BigMonster();

const stage = new Stage(
  char,
  monster,
  document.querySelector('#char'),
  document.querySelector('#monster'),
  log
);

stage.start();
