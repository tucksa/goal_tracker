$("#btn").click(function(){
    let display = $('#greetings').attr('style')
    console.log(display)
    if (display == 'display: block;'){
        $("#greetings").css("display", "none")
    } else{
        $("#greetings").css("display", "block")
    }
    
})
const date = new Date()
let month = ''
const day = date.getDate()
const year = date.getUTCFullYear()
let weekday = '';
switch(date.getDay()){
    case 0:
        weekday = 'Sunday'
        break;
    case 1:
        weekday = 'Monday'
        break;
    case 2:
        weekday = 'Tuesday'
        break;
    case 3:
        weekday = 'Wednesday'
        break;
    case 4:
        weekday = 'Thursday'
        break;
    case 5:
        weekday = 'Friday'
        break;
    case 6:
        weekday = 'Saturday'
}
switch(date.getMonth() + 1){
    case 1:
        month = 'January'
        break;
    case 2:
        month = 'Febuary'
        break;
    case 3:
        month = 'March'
        break;
    case 4: 
        month = 'April'
        break;
    case 5:
        month = 'May'
        break;
    case 6:
        month = 'June'
        break;
    case 7:
        month = 'July'
        break;
    case 8:
        month = 'August'
        break;
    case 9:
        month= 'September'
        break;
    case 10:
        month = 'October'
        break;
    case 11:
        month = 'November'
        break;
    case 12:
        month = 'December'
}

$('#month').html(month)
//console.log(weekday)

function monthLength(){
    let currentDate = new Date()
    let currentMonth = currentDate.getMonth()
    let currentYear = currentDate.getFullYear()
    let testDay = 31
    let testDate = new Date(currentYear, currentMonth, testDay)
    //console.log(date + '\n'+ currentMonth + '\n'+ currentYear)
   
    while(testDate.getMonth() != currentMonth){
        testDay -= 1
        testDate = new Date(currentYear, currentMonth, testDay)
    }
    return testDay
}

const lastDay = monthLength()

function calendarPrint(lastDaty){
    const startWeekday = date.getUTCDay()
    console.log('the start day is '+ startWeekday)
    var rowCount = 1
    for(let i = 0; i < lastDay + startWeekday + 1; i++){
        const td = document.createElement('td')
        if(i % 7 == 0 && i != 0){
            rowCount += 1
        }
        $('#'+rowCount).append(td)
        //console.log(i+1)
    }
}

calendarPrint(lastDay)