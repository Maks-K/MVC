function AnimationManagerView(moduleName) {
    AnimationManagerView.parent.constructor.call(this, moduleName);
    this.layers = CONFIG.layers;
}

AnimationManagerView.addToProto = {
    init: function () {
        this.app = new PIXI.Application(CONFIG.viewport.width, CONFIG.viewport.height, {transparent : true});
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
