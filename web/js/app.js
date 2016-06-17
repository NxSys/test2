var MyApp = (function () {
    function MyApp() {
    }
    MyApp.prototype.onRenderStart = function () {
        console.log("hit onRenderStart()");
        this.oATVEvt = new Apptivity.Eventing;
        this.oATVEvt.initPrimaryPumpWorker();
    };
    MyApp.prototype.onRenderComplete = function () {
        console.log("hit onRenderComplete()");
        this.oATVEvt;
    };
    return MyApp;
}());
var App = new MyApp();
//# sourceMappingURL=app.js.map