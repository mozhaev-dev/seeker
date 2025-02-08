import Phaser from 'phaser';
import { Main } from './scenes/Main';

const config = {
  type: Phaser.AUTO,
  parent: 'app',
  width: 800,
  height: 600,
  scene: Main,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200, x: 200 },
    },
  },
};

new Phaser.Game(config);
