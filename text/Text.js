function Text() {
    Text.parent.constructor.apply(this, arguments);

}

Text.addToProto = {
    getDefaultMVCClasses: function () {
        return {
            model: TextModel,
            view: TextView,
            controller: TextController
        }
    }
};

Text = utils.extend(Module, Text);
