module Apptivity
{
	export class Eventing
	{
		public hPrimaryPumpWorker: Worker;
		public initPrimaryPumpWorker()
		{
			console.log('loading PPW...');
			this.hPrimaryPumpWorker=new Worker('PrimaryPumpWorker.js');
			//var PPWXargsEvent=new PrimaryPumpWorkerXargsEvent;
			this.hPrimaryPumpWorker.postMessage(['xargs', new PrimaryPumpWorkerXargsEvent(
				'http://127.0.0.1:8081', 'ATV/ws'
			)]);
		}
		public dispatch(sEventName: string, oEventObject: Event = null)
		{
			//shortcut to senting to default remote eventloop 
			return this.dispatchToRemoteLoop(sEventName, oEventObject, 0);
		}
		public dispatchToRemoteLoop(AeVENTpARMS, sRemoteIndex:int=0)
		{
			console.log('dispatching message...');
			this.hPrimaryPumpWorker.postMessage([sEventName, 'foo']);

		}
	}
	
	export class ATVEvent extends Event
	{
		public Name: string;
		public Parameters: {[key: string]: any};
	}
}