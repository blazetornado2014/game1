import kaplay from "kaplay";

const k = kaplay({
  width: 1280,
  height: 720,
});

k.loadBean();
k.setGravity(1500);

const player = k.add([
  k.sprite("bean"), 
  k.pos(k.center()),
  k.area(),
  k.body(),
  k.offscreen(),
]);

player.onExitScreen(() => {
  k.add([
    k.go("gameover"),
  ]);
});

k.scene("gameover", () => {
  k.add([
    k.text("Game Over"),
    k.pos(k.center()),

  ])
});

player.onKeyPress("space", () => {
  if (player.isGrounded())
    player.jump();
})

k.add([
  k.rect(k.width(), 300), 
  k.pos(0, 500),
  k.area(),
  k.body({
    isStatic: true
  }),
  k.outline(3),
])

let counter = 0;
const counterUI = k.add([
  k.text("0")
]);

k.loop(1, () => {
  counter++;
  counterUI.text = counter.toString();

  const speeds = [500, 1000, 1500]
  const curSpeed = speeds[Math.floor(Math.random() * speeds.length)]
  k.add([
    k.rect(50, 50),
    k.pos(1000, 500),
    k.area(),
    k.body(),
    k.outline(3),
    k.move(k.vec2(-1, 0), curSpeed),
  ]);
});