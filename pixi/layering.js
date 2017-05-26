var layering = {
    //order matters:
    layers: ["layer2", "layer1"],

    addContainer: function (name) {
        var container = new PIXI.Container();

        function compareNumeric(a, b) {
            return a.id - b.id;
        }

        container.id = this.layers.indexOf(name);

        globalContainer.addChild(container);

        globalContainer.children.sort(compareNumeric);

        if(this.layers.indexOf(name) === -1){
            console.error("no such layer: ", name)
        }

        return container;
    }
};