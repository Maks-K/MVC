function AdvancedButtonView(moduleName) {
    AdvancedButtonView.parent.constructor.call(this, moduleName);
}

AdvancedButtonView.addToProto = {
    init: function () {

        var button = document.createElement("button"),
            text = document.createTextNode("A ETOT BUTTON ASOBINNY!");

        button.appendChild(text);
        button.setAttribute("type", "button");
        //button.setAttribute("onclick", "createdModules.Button.view.clickCallBack()");
        button.addEventListener("click", this.clickCallBack.bind(this));

        document.body.appendChild(button);
    },

    clickCallBack: function () {
        console.warn("ADVANCED BUTTON CLICK");
        AdvancedButtonView.parent.clickCallBack.call(this);
    }
};

AdvancedButtonView = utils.extend(ButtonView, AdvancedButtonView);