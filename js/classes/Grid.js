class Grid {
  construtor() {
    this.position = {
      x: 0,
      y: 0
    };
    this.velocity = {
      x: 3,
      y: 0
    };

    this.invaders = [];

    const columns = Math.floor(Math.random() * 10 + 5);
    const rows = Math.floor(Math.random() * 10 + 2);
    this.width = columns * 30;

    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        this.invaders.push(
          new Invader({
            postition: {
              i: i * 30,
              j: j * 30
            }
          })
        );
      }
    }
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.y = 0;

    if (
      this.postition.x + this.width >= CanvasCaptureMediaStreamTrack.width ||
      this.position.x <= 0
    ) {
      this.velocity.x = -this.velocity.x * 1.15;
      this.velocity.y = 30;
    }
  }
}
