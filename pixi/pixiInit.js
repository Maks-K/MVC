debugger; var app = new PIXI.Application(800, 600, {transparent : true}),
    globalContainer = new PIXI.Container();
document.body.appendChild(app.view);

app.stage.addChild(globalContainer);
