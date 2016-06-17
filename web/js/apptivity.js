var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Apptivity;
(function (Apptivity) {
    var Eventing = (function () {
        function Eventing() {
        }
        Eventing.prototype.initPrimaryPumpWorker = function () {
            console.log('loading PPW...');
            this.hPrimaryPumpWorker = new Worker('PrimaryPumpWorker.js');
            this.hPrimaryPumpWorker.postMessage(['xargs', new Apptivity.PrimaryPumpWorkerXargsEvent('http://127.0.0.1:8081', 'ATV/ws')]);
        };
        Eventing.prototype.dispatch = function (sEventName, oEventObject) {
            if (oEventObject === void 0) { oEventObject = null; }
            console.log('dispatching message...');
            this.hPrimaryPumpWorker.postMessage([sEventName, 'foo']);
        };
        return Eventing;
    }());
    Apptivity.Eventing = Eventing;
    var ATVEvent = (function (_super) {
        __extends(ATVEvent, _super);
        function ATVEvent() {
            _super.apply(this, arguments);
        }
        return ATVEvent;
    }(Event));
    Apptivity.ATVEvent = ATVEvent;
})(Apptivity || (Apptivity = {}));
//# sourceMappingURL=apptivity.js.map