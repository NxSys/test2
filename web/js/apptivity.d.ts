declare module Apptivity {
    class Eventing {
        hPrimaryPumpWorker: Worker;
        initPrimaryPumpWorker(): void;
        dispatch(sEventName: string, oEventObject?: Event): void;
    }
    class ATVEvent extends Event {
        Name: string;
        Parameters: {
            [key: string]: any;
        };
    }
}
