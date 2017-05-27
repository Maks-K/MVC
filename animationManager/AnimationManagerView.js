function AnimationManagerView(moduleName) {
    AnimationManagerView.parent.constructor.call(this, moduleName);
    this.layers = ["layer1", "layer2"];
}

AnimationManagerView.addToProto = {
    init: function () {
        this.app = new PIXI.Application(800, 600, {transparent : true});
        this.globalContainer = new PIXI.Container();
        document.body.appendChild(this.app.view);

        this.app.stage.addChild(this.globalContainer);
    },

    addContainer: function (name) {
        var container = new PIXI.Container();

        function compareNumeric(a, b) {
            return a.id - b.id;
        }

        container.id = this.layers.indexOf(name);

        this.globalContainer.addChild(container);

        this.globalContainer.children.sort(compareNumeric);

        if(this.layers.indexOf(name) === -1){
            console.error("no such layer: ", name)
        }

        return container;
    }
};

AnimationManagerView = utils.extend(View, AnimationManagerView);
