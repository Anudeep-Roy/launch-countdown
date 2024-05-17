window.addEventListener('load', function() {
    let months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let months31 = [0, 2, 4, 6, 7, 9, 11];
    let date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth();
    let curerntDate = date.getDate();
    let isCurrentYear, isCurrentMonth;
    console.log(months.indexOf('May'));
    console.log('Current month : ' +currentMonth);
    for (var i=0; i<10; i++) {
        let option = this.document.createElement('option');
        let year = this.document.createTextNode(currentYear+i);
        option.appendChild(year);
        this.document.querySelector('.date-select .select-year').appendChild(option);
    }
    this.document.querySelector('.select-year').addEventListener('change', function(e) {
        document.querySelector('.select-month').innerHTML = '';
        let selectedYear = e.target.value;
        console.log('Year changed : ' + selectedYear);
        selectedYear == currentYear ? isCurrentYear=true : isCurrentYear=false;
        console.log('Is current year : ' + isCurrentYear);
        setMonths(isCurrentYear);
    })

    this.document.querySelector('.select-month').addEventListener('change', function(e) {
        document.querySelector('.select-day').innerHTML = '';
        let selectedMonth = e.target.value;
        console.log('Month changed : ' + selectedMonth);
        selectedMonth == months[currentMonth] ? isCurrentMonth=true : isCurrentMonth=false;
        console.log('Is current month : ' + isCurrentMonth);
        setDays(isCurrentMonth, selectedMonth);
    })

    function setMonths (isCurrentYear) {
        if(isCurrentYear) {
            for(var i=currentMonth; i<months.length; i++) {
                let option = this.document.createElement('option');
                let month = this.document.createTextNode(months[i]);
                option.appendChild(month);
                this.document.querySelector('.date-select .select-month').appendChild(option);
            }
        } else {
            for(var i=0; i<months.length; i++) {
                let option = this.document.createElement('option');
                let month = this.document.createTextNode(months[i]);
                option.appendChild(month);
                this.document.querySelector('.date-select .select-month').appendChild(option);
            }
        }
    }
    function setDays (isCurrentMonth, selectedMonth) {
        if(isCurrentMonth) {
            if(months31.includes(months.indexOf(currentMonth))) {
                for(var i=curerntDate; i<=31; i++) {
                    let option = this.document.createElement('option');
                    let day = this.document.createTextNode(i);
                    option.appendChild(day);
                    this.document.querySelector('.date-select .select-day').appendChild(option);
                }
            } else if(currentMonth == 'Feb') {
                for(var i=curerntDate; i<=28; i++) {
                    let option = this.document.createElement('option');
                    let day = this.document.createTextNode(i);
                    option.appendChild(day);
                    this.document.querySelector('.date-select .select-day').appendChild(option);
                }
            } else {
                for(var i=curerntDate; i<=30; i++) {
                    let option = this.document.createElement('option');
                    let day = this.document.createTextNode(i);
                    option.appendChild(day);
                    this.document.querySelector('.date-select .select-day').appendChild(option);
                }
            }
        } else {
            if(months31.includes(months.indexOf(selectedMonth))) {
                for(var i=1; i<=31; i++) {
                    let option = this.document.createElement('option');
                    let day = this.document.createTextNode(i);
                    option.appendChild(day);
                    this.document.querySelector('.date-select .select-day').appendChild(option);
                }
            } else if(selectedMonth == 'Feb') {
                for(var i=1; i<=28; i++) {
                    let option = this.document.createElement('option');
                    let day = this.document.createTextNode(i);
                    option.appendChild(day);
                    this.document.querySelector('.date-select .select-day').appendChild(option);
                }
            } else {
                for(var i=1; i<=30; i++) {
                    let option = this.document.createElement('option');
                    let day = this.document.createTextNode(i);
                    option.appendChild(day);
                    this.document.querySelector('.date-select .select-day').appendChild(option);
                }
            }
        }
    }
    
    this.document.querySelector('.submit').addEventListener('click', function(e) {
        let launchDay = document.querySelector('.select-day').value;
        console.log(launchDay);
        let launchMonth = document.querySelector('.select-month').value;
        console.log(launchMonth);
        let launchYear = document.querySelector('.select-year').value;
        console.log(launchYear);
        let launchDate = launchYear+'-'+launchMonth+'-'+launchDay;
        document.querySelector('.modal').style.display = "none";
        setInterval( function() { 
            setDateParams(launchDate); 
        }, 1000 );
    })
})

function setDateParams (launchingDate) {
    let launchDate = new Date (`${launchingDate}`);
    let currentDate = new Date();
    let timeDifference = (launchDate.getTime() - currentDate.getTime())/1000;
    let daysLeft = (timeDifference/86400);
    let hoursLeft = (daysLeft - Math.floor(daysLeft)) * 100;
    hoursLeft = hoursLeft * 24/100;
    let minutesLeft = (hoursLeft - Math.floor(hoursLeft)) * 100;
    minutesLeft = minutesLeft * 60/100;
    let secondsLeft = (minutesLeft - Math.floor(minutesLeft)) * 100;
    secondsLeft = secondsLeft * 60/100;
    document.querySelector(".days").innerHTML = daysLeft<10 ? '0' + Math.trunc(daysLeft) : Math.trunc(daysLeft);
    document.querySelector(".hours").innerHTML = hoursLeft<10 ? '0' + Math.trunc(hoursLeft) : Math.trunc(hoursLeft);
    document.querySelector(".minutes").innerHTML = minutesLeft<10 ? '0' + Math.trunc(minutesLeft) : Math.trunc(minutesLeft);
    document.querySelector(".seconds").innerHTML = secondsLeft<10 ? '0' + Math.trunc(secondsLeft) : Math.trunc(secondsLeft);
}
