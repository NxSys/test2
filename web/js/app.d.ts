/// <reference path="../../web_ts-src/types/jquery/jquery.d.ts" />
/// <reference path="apptivity.d.ts" />
/// <reference path="PrimaryPumpWorker.d.ts" />
declare class MyApp {
    oATVEvt: Apptivity.Eventing;
    onRenderStart(): void;
    onRenderComplete(): void;
}
declare var App: MyApp;
