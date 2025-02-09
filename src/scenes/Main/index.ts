import Phaser from 'phaser';
import player from '@assets/sprites/player.png';
import { Player } from '../../objects/dynamic/chars/Player';

export class Main extends Phaser.Scene {
  player?: Player;

  preload() {
    this.load.spritesheet('player', player, {
      frameWidth: 51,
      frameHeight: 64,
    });
  }

  create() {
    this.player = new Player(this, 100, 450, 'player');
  }

  update() {
    this.player?.update();
  }
}
