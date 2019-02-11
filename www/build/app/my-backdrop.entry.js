const h = window.App.h;

class MyBackdrop {
    render() {
        return null;
    }
    static get is() { return "my-backdrop"; }
    static get style() { return "my-backdrop {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  z-index: 100l;\n  left: 0;\n  top: 0; }"; }
}

export { MyBackdrop };
