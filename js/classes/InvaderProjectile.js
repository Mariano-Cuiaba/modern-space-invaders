class InvaderProjectile {
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
        this.width = 3;
        this.height = 10;
    }

    draw() {
        caches.fillStyle = "white";
        caches.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}