function TextView(moduleName) {
    TextView.parent.constructor.call(this, moduleName);
}

TextView.addToProto = {
    init: function () {
        this.paragraph = document.createElement("p");
        this.text = document.createTextNode("sample text");

        this.paragraph.appendChild(this.text);

        document.body.appendChild(this.paragraph);
        this.updateTextColor();

        this.cont = createdModules.AnimationManager.view.addContainer("layer2");
        this.falconH = PIXI.Sprite.fromImage('falcon-heavy-render.png');
        this.falconH.scale.set(0.05);
        this.falconH.anchor.set(0.5);
        this.falconH.x = 400;
        this.falconH.y = 300;
        this.falconH.rotation = 200;


        this.cont.addChild(this.falconH);
    },

    updateTextColor: function () {
        var me = this;
        var activeColor = this.model.readData("activeColor");

        this.paragraph.setAttribute("style", "background-color: " + activeColor + ";");

        this.fireEvent("view:textColorChanged", me);
    }
};

TextView = utils.extend(View, TextView);
