function AdvancedButton() {
    AdvancedButton.parent.constructor.apply(this, arguments);
}

AdvancedButton.addToProto = {
    getDefaultMVCClasses: function () {
        return {
            model: Model,
            view: AdvancedButtonView,
            controller: AdvancedButtonController
        }
    }
};

AdvancedButton = utils.extend(Module, AdvancedButton);
