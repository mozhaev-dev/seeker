import { Types, Scene } from 'phaser';
import { Char } from './Char';

export class Player extends Char {
  cursor?: Types.Input.Keyboard.CursorKeys;

  defaultVelocity = 130;
  frameRate = 15;
  direction: 'up' | 'down' | 'right' | 'left' = 'down';
  isIdle = false;

  constructor(scene: Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);

    this.cursor = this.scene.input.keyboard?.createCursorKeys();

    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 5 }),
      frameRate: this.frameRate,
      repeat: -1,
    });

    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('player', { start: 6, end: 11 }),
      frameRate: this.frameRate,
      repeat: -1,
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('player', { start: 12, end: 17 }),
      frameRate: this.frameRate,
      repeat: -1,
    });

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('player', { start: 18, end: 23 }),
      frameRate: this.frameRate,
      repeat: -1,
    });

    this.anims.create({
      key: 'idle-up',
      frames: this.anims.generateFrameNumbers('player', { start: 0 }),
    });

    this.anims.create({
      key: 'idle-down',
      frames: this.anims.generateFrameNumbers('player', { start: 6 }),
    });

    this.anims.create({
      key: 'idle-right',
      frames: this.anims.generateFrameNumbers('player', { start: 14 }),
    });

    this.anims.create({
      key: 'idle-left',
      frames: this.anims.generateFrameNumbers('player', { start: 19 }),
    });
  }

  update() {
    if (!this.cursor) return;

    if (this.cursor.up.isDown) {
      this.moveUp();
    } else if (this.cursor.down.isDown) {
      this.moveDown();
    } else if (this.cursor.right.isDown) {
      this.moveRight();
    } else if (this.cursor.left.isDown) {
      this.moveLeft();
    } else {
      this.idle();
    }
  }

  moveUp() {
    if (!this.isIdle) return;
    this.isIdle = false;

    this.direction = 'up';
    this.setVelocityY(-this.defaultVelocity);
    this.anims.play('up', true);
  }

  moveDown() {
    if (!this.isIdle) return;
    this.isIdle = false;

    this.direction = 'down';
    this.setVelocityY(this.defaultVelocity);
    this.anims.play('down', true);
  }

  moveRight() {
    if (!this.isIdle) return;
    this.isIdle = false;

    this.direction = 'right';
    this.setVelocityX(this.defaultVelocity);
    this.anims.play('right', true);
  }

  moveLeft() {
    if (!this.isIdle) return;
    this.isIdle = false;

    this.direction = 'left';
    this.setVelocityX(-this.defaultVelocity);
    this.anims.play('left', true);
  }

  idle() {
    this.isIdle = true;
    this.setVelocity(0);

    switch (this.direction) {
      case 'up':
        this.anims.play('idle-up');
        break;
      case 'down':
        this.anims.play('idle-down');
        break;
      case 'right':
        this.anims.play('idle-right');
        break;
      case 'left':
        this.anims.play('idle-left');
    }
  }
}
