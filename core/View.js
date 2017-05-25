function View(moduleName) {
    View.parent.constructor.call(this, moduleName, "view");
}

View.addToProto = {
    init: function () {
        console.log("basic view init done");
    }
};


View = utils.extend(Observable, View);

