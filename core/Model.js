function Model(moduleName) {
    Model.parent.constructor.call(this, moduleName, "model");
    this.data = {};
}

Model.addToProto = {
    setupData: function () {
        //stub
    },

    storeData: function (key, value) {
        this.data[key] = value;
    },

    readData: function (key) {
        return this.data[key];
    }
};

Model = utils.extend(Observable, Model);