//ATV.eventing.PrimaryPumpWorker.ts
console.log('PPW Worker Loading...');

module Apptivity
{
	export class PrimaryPumpWorker
	{
		public sATVServerHost: string;
		public sATVServerEndpoint: string;
		
		public isCrystalized: boolean=false;
				
		public onMessage(oMessage: MessageEvent /*:ATVEvent*/)
		{
			console.log('[PPW] New mmsg!');
			if (!this.isCrystalized)
			{
				//don't process anything untill configured....
				if (oMessage.data[0]!=='xargs')
				{
					throw "Unable to process messages, not yet configured!";
				}
				if (oMessage.data[1] instanceof PrimaryPumpWorkerXargsEvent)
				{
					var configEvt=oMessage.data[1];
					this.sATVServerHost=configEvt.sATVServerHost;
					this.sATVServerEndpoint=configEvt.sATVServerEndpoint;

					//connect to server
		            console.log("[PPW] Initialized");
					//we *really* shouldn't be reconfigured 
					//so lets emulated a singleton constructor
					this.isCrystalized=true;
				}
				return;
			}
			//else process events normally
		    console.log("[PPW] Has received a message...");

			
		}
		public postMessage(mMessage: any, sTargetOrigin: string)
		{
			self.postMessage(mMessage, sTargetOrigin);
		}
		public pumpMessage();
		
	}

	export class PrimaryPumpWorkerXargsEvent// extends ATVEvent
	{
		public Parameters: {[key: string]: string} =
		{
			'sATVServerHost': '',
			'sATVServerEndpoint'		:	''
		};

		constructor(public sATVServerHost: string,
					public sATVServerEndpoint: string)
		{}
		
	}
}

//init and wait for config....
var PPW=new Apptivity.PrimaryPumpWorker;
onmessage=PPW.onMessage;
console.log('PPW Worker Loaded');