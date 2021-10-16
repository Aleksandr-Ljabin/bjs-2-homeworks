class AlarmClock {
	constructor(alarmCollection, timerId){
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(time, callback, id){
		if (id === undefined){
			throw new Error('Параметр id не передан');
		} else if(this.timerId.some(item => item == id)){
			console.error('Такой будильник уже существует');
		} else{this.alarmCollection.push([time, callback, id])
			
		}
	}

	removeClock(id){
		let l = this.alarmCollection.length;
		this.alarmCollection = this.alarmCollection.filter((n) => {return n != id});
		if(l == this.alarmCollection.length){
			return false
		}else if(l !== this.alarmCollection.length){
			return true
		}
	}

	getCurrentFormattedTime(){
		return new Date().toLocaleTimeString().slice(0, -3);
	}

	start (){
		function checkClock() {
		
		}
	}
}