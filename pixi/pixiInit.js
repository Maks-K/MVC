var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb}),
    globalContainer = new PIXI.Container();
document.body.appendChild(app.view);

app.stage.addChild(globalContainer);
