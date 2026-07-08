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
Pebble = sprites.create(assets.image`Pebble`, SpriteKind.Player)
Pebble.ay = 200
controller.moveSprite(Pebble, 150, 0)
Pebble.setStayInScreen(true)
tiles.setCurrentTilemap(tilemap`nivel1`)
Max_saltó = 2
