declare module Apptivity {
    class PrimaryPumpWorker {
        sATVServerHost: string;
        sATVServerEndpoint: string;
        isCrystalized: boolean;
        onMessage(oMessage: MessageEvent): void;
        postMessage(mMessage: any, targetOrigin: any): void;
    }
    class PrimaryPumpWorkerXargsEvent {
        sATVServerHost: string;
        sATVServerEndpoint: string;
        Parameters: {
            [key: string]: string;
        };
        constructor(sATVServerHost: string, sATVServerEndpoint: string);
    }
}
declare var PPW: Apptivity.PrimaryPumpWorker;
