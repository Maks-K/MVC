var utils = {
    extend: function (parent, child) {
        child.parent = parent.prototype;
        child.prototype = Object.create(parent.prototype);
        child.prototype.constructor = child;
        if(child.addToProto && child.addToProto instanceof Object){
            for (var key in child.addToProto){
                if(child.addToProto.hasOwnProperty(key)){
                    child.prototype[key] = child.addToProto[key]
                }
            }
            delete child.addToProto;
        }
        console.dir(child);
        return child
    },
    addContainer: function (name) {
        return createdModules.AnimationManager.view.addContainer(name);
    }
};