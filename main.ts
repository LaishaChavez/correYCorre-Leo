scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        Salto = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Salto < Max_saltó) {
        Salto += 1
        Pebble.vy = -100
    }
})
let Salto = 0
let Max_saltó = 0
let Pebble: Sprite = null
Pebble = sprites.create(assets.image`PebbleRight`, SpriteKind.Player)
Pebble.ay = 200
controller.moveSprite(Pebble, 150, 0)
Pebble.setStayInScreen(true)
tiles.setCurrentTilemap(tilemap`nivel1`)
Max_saltó = 2
game.onUpdate(function () {
    Pebble.setImage(assets.image`PebbleRight`)
    if (Pebble.vx == 0) {
        Pebble.setImage(assets.image`PebbleIdle`)
    }
    if (Pebble.vy < 0) {
        Pebble.setImage(assets.image`myImage`)
    } else if (Pebble.vy > 0) {
        Pebble.setImage(assets.image`PebbleIdle`)
    } else if (Pebble.vx > 0) {
        Pebble.setImage(assets.image`PebbleRight`)
    }
    if (Pebble.vx < 0) {
        Pebble.image.flipX()
        Pebble.setImage(Pebble.image)
    }
})
