class AlarmClock {
	constructor(alarmCollection, timerId){
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(time, callback, id){
		if (id === null){
			throw new Error('Параметр id не передан');
		} else if(this.timerId.some(item => item == id)){
			console.error('Такой будильник уже существует');
		} else{this.alarmCollection.push([time, callback, id])
			
		}
	}

	removeClock(id){
		
	}
}