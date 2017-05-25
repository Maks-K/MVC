function AdvancedButtonController(moduleName) {
    AdvancedButtonController.parent.constructor.call(this, moduleName);

}

AdvancedButtonController.addToProto = {
    processButtonClick: function () {
        AdvancedButtonController.parent.processButtonClick.call(this);
        console.error("A ETOT KANTROLER NI$O NE ROBE TTTTTEEEEEESSSSSSSSSSTTTTTTTT");
    }
};


AdvancedButtonController = utils.extend(ButtonController, AdvancedButtonController);
