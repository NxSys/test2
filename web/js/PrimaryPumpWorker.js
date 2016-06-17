var Apptivity;
(function (Apptivity) {
    var PrimaryPumpWorker = (function () {
        function PrimaryPumpWorker() {
            this.isCrystalized = false;
        }
        PrimaryPumpWorker.prototype.onMessage = function (oMessage) {
            console.log('[PPW] New mmsg!');
            if (!this.isCrystalized) {
                if (oMessage.data[0] !== 'xargs') {
                    throw "Unable to process messages, not yet configured!";
                }
                if (oMessage.data[1] instanceof PrimaryPumpWorkerXargsEvent) {
                    var configEvt = oMessage.data[1];
                    this.sATVServerHost = configEvt.sATVServerHost;
                    this.sATVServerEndpoint = configEvt.sATVServerEndpoint;
                    console.log("[PPW] Initialized");
                    this.isCrystalized = true;
                }
                return;
            }
            console.log("[PPW] Has received a message...");
        };
        PrimaryPumpWorker.prototype.postMessage = function (mMessage, targetOrigin) {
            self.postMessage(mMessage, targetOrigin);
        };
        return PrimaryPumpWorker;
    }());
    Apptivity.PrimaryPumpWorker = PrimaryPumpWorker;
    var PrimaryPumpWorkerXargsEvent = (function () {
        function PrimaryPumpWorkerXargsEvent(sATVServerHost, sATVServerEndpoint) {
            this.sATVServerHost = sATVServerHost;
            this.sATVServerEndpoint = sATVServerEndpoint;
            this.Parameters = {
                'sATVServerHost': '',
                'sATVServerEndpoint': ''
            };
        }
        return PrimaryPumpWorkerXargsEvent;
    }());
    Apptivity.PrimaryPumpWorkerXargsEvent = PrimaryPumpWorkerXargsEvent;
})(Apptivity || (Apptivity = {}));
var PPW = new Apptivity.PrimaryPumpWorker;
onmessage = PPW.onMessage;
//# sourceMappingURL=PrimaryPumpWorker.js.map