var modules = [
        "AnimationManager", "Text", "Button", "AdvancedButton"
],
    createdModules = {},
    i, componenets, module;



for(i = 0; i < modules.length; i++){
    createdModules[modules[i]] = new window[modules[i]];
    module = createdModules[modules[i]];
    componenets = module.getDefaultMVCClasses();
    module.model = new componenets.model(modules[i]);
    module.controller = new componenets.controller(modules[i]);
    module.view = new componenets.view(modules[i]);

    module.controller.model = module.model;
    module.controller.view = module.view;

    module.view.model = module.model;

    module.model.setupData();
    module.controller.setupEvents();
    module.view.init();
    console.error(module);
}


