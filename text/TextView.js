function TextView(moduleName) {
    TextView.parent.constructor.call(this, moduleName);
}

TextView.addToProto = {
    init: function () {
        this.paragraph = document.createElement("p");
        this.text = document.createTextNode("sample text");

        this.paragraph.appendChild(this.text);

        document.body.appendChild(this.paragraph);
        this.updateTextColor();
    },

    updateTextColor: function () {
        var me = this;
        var activeColor = this.model.readData("activeColor");

        this.paragraph.setAttribute("style", "background-color: " + activeColor + ";");

        this.fireEvent("view:textColorChanged", me);
    }
};

TextView = utils.extend(View, TextView);
