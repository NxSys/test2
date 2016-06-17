
/// <reference path="types/jquery/jquery.d.ts" />
/// <reference path="apptivity.ts" />
/// <reference path="PrimaryPumpWorker.ts" />

//imports $ from "JQuery";

class MyApp
{
        public oATVEvt: Apptivity.Eventing;
		public onRenderStart()
		{
            console.log("hit onRenderStart()");
			//maybe do some lib loading

			//grab data components may need
			//this.EventMgr=new EventDispatcher;
            this.oATVEvt=new Apptivity.Eventing;
            this.oATVEvt.initPrimaryPumpWorker();
			//initalize local storage
		}

		public onRenderComplete()
		{
            console.log("hit onRenderComplete()");
			//the dom skel should exsist now in its entirty
               
			//test availability
			//start firing events

            this.oATVEvt;
			//var oAppEvent=new Apptivity.ATVEvent;
			//oATVEvt.dispatch('app_available', oAppEvent);
		}
}
var App=new MyApp();