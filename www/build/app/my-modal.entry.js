const h = window.App.h;

class MyModal {
    constructor() {
        this.buttons = ['OK', 'Cancel'];
        this.showOptions = false;
    }
    open() {
        this.modalEle.style.display = 'block';
    }
    closeModalHandler() {
        this.showOptions = false;
        this.modalEle.style.display = 'none';
    }
    showOptionHandler() {
        this.showOptions = true;
    }
    render() {
        let options = null;
        if (this.showOptions) {
            options = this.buttons.map(btn => (h("button", { onClick: this.closeModalHandler.bind(this) }, btn)));
        }
        return (h("div", null,
            h("h1", null, this.title),
            h("p", null, this.content),
            h("button", { onClick: this.showOptionHandler.bind(this) }, " Show more options... "),
            h("hr", null),
            options));
    }
    static get is() { return "my-modal"; }
    static get properties() { return {
        "content": {
            "type": String,
            "attr": "content"
        },
        "modalEle": {
            "elementRef": true
        },
        "open": {
            "method": true
        },
        "showOptions": {
            "state": true
        },
        "title": {
            "type": String,
            "attr": "title"
        }
    }; }
    static get style() { return "my-modal {\n  font-family: 'Courier New', Courier, monospace;\n  border: 1px solid #ccc;\n  -webkit-box-shadow: 1px 1px 1px #ccc;\n  box-shadow: 1px 1px 1px #ccc;\n  background-color: white;\n  position: fixed;\n  top: 30%;\n  width: 350px;\n  left: calc(50% - 175px);\n  z-index: 1000;\n  display: none;\n  padding: 16px; }\n  my-modal button {\n    background-color: transparent;\n    border: none;\n    outline: none;\n    font: inherit;\n    cursor: pointer;\n    color: #ff0050; }"; }
}

export { MyModal };
