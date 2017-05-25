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
    },

    clickCallBack: function () {
        this.fireEvent("view:buttonClick")
    }
};

ButtonView = utils.extend(View, ButtonView);