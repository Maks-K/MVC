function Button() {
    Button.parent.constructor.apply(this, arguments);
}

Button.addToProto = {
    getDefaultMVCClasses: function () {
        return {
            model: Model,
            view: ButtonView,
            controller: ButtonController
        }
    }
};

Button = utils.extend(Module, Button);
