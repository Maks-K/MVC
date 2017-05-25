function Controller(moduleName) {
    Controller.parent.constructor.call(this, moduleName, "controller");

}

Controller.addToProto = {
    setupEvents: function () {
        console.warn("empty setupEvents");
    }
};

Controller = utils.extend(Observable, Controller);
