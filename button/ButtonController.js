function ButtonController(moduleName) {
    ButtonController.parent.constructor.call(this, moduleName);
}

ButtonController.addToProto = {
    setupEvents: function () {
        var me = this;
        me.on({
            "view:buttonClick": me.processButtonClick
        });
    },

    processButtonClick: function () {
        this.fireEvent("notify:buttonClicked")
    }
};


ButtonController = utils.extend(Controller, ButtonController);
