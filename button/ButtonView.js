function ButtonView(moduleName) {
    ButtonView.parent.constructor.call(this, moduleName);
}

ButtonView.addToProto = {
    init: function () {

        var button = document.createElement("button"),
            text = document.createTextNode("Change text color");

        button.appendChild(text);
        button.setAttribute("type", "button");
        //button.setAttribute("onclick", "createdModules.Button.view.clickCallBack()");
        button.addEventListener("click", this.clickCallBack.bind(this));

        document.body.appendChild(button);

        this.cont = createdModules.AnimationManager.view.addContainer("layer1");
        this.falconH = PIXI.Sprite.fromImage('falcon-heavy-render.png');
        this.falconH.scale.set(0.05);
        this.falconH.anchor.set(0.5);
        this.falconH.x = 300;
        this.falconH.y = 300;

        this.cont.addChild(this.falconH);
    },

    clickCallBack: function () {
        this.fireEvent("view:buttonClick")
    }
};

ButtonView = utils.extend(View, ButtonView);