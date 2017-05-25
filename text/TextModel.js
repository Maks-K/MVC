function TextModel(moduleName) {
    TextModel.parent.constructor.call(this, moduleName);
}

TextModel.addToProto = {
    colors: ["green", "red", "yellow", "blue"],

    setupData: function () {
        this.storeData("activeColor", this.colors[0]);
    },

    updateActiveColor: function () {
        var currenColor = this.readData("activeColor"),
            index = this.colors.indexOf(currenColor);

        if (index + 1 >= this.colors.length) {
            index = 0
        } else {
            index++
        }

        this.storeData("activeColor", this.colors[index]);
    }
};

TextModel = utils.extend(Model, TextModel);
