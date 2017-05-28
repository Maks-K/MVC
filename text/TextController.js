function TextController(moduleName) {
    TextController.parent.constructor.call(this, moduleName);
}

TextController.addToProto = {
    setupEvents: function () {
        var me = this;
        me.on({
            "notify:buttonClicked": me.onButtonClicked,
            "view:textColorChanged": me.onTextColorChanged
        });
    },

    onButtonClicked: function () {
        this.view.updateTextColor()
    },

    onTextColorChanged: function () {
        this.model.updateActiveColor()
    }
};

TextController = utils.extend(Controller, TextController);

