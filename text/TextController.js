function TextController(moduleName) {
    TextController.parent.constructor.call(this, moduleName);

    this.on({
        "notify:buttonClicked": this.onButtonClicked,
        "view:textColorChanged": this.onTextColorChanged
    });

}

TextController.addToProto = {
    onButtonClicked: function () {
        this.view.updateTextColor()
    },

    onTextColorChanged: function () {
        this.model.updateActiveColor()
    }
};

TextController = utils.extend(Controller, TextController);

