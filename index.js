//Show check mark image on button or hide it (continue to edit once button added to days on calendar)
$("#btn").click(function(){
    let display = $('#greetings').attr('style')
    console.log(display)
    if (display == 'display: block;'){
        $("#greetings").css("display", "none")
    } else{
        $("#greetings").css("display", "block")
    }
    
})

//Set up variables for the current date (month, day, year, weekday)
var date = new Date()
let month = ''
const day = date.getDate()
var year = date.getUTCFullYear()
let weekday = '';

//turn # weekday into string version
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

//Turn number version of the month into string
function tranMonth(){
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
}
tranMonth()

//Determine how many days will be in that current month
function monthLength(date){
    let month = date.getMonth()
    let year = date.getFullYear()
    let testDay = 31
    let testDate = new Date(year, month, testDay)
    //console.log(date + '\n'+ currentMonth + '\n'+ currentYear)
   
    while(testDate.getMonth() != month){
        testDay -= 1
        testDate = new Date(year, month, testDay)
    }
    return testDay
}

var lastDay = monthLength(new Date())

//using the last day found from the function determining the length of the month dynamically print the dates on the calendar with the coorisponding weekdays
function calendarPrint(date, lastDay){
    const startWeekday = date.getUTCDay()
    console.log('the start day is '+ startWeekday)
    var rowCount = 1
    $('#1').empty()
    $('#2').empty()
    $('#3').empty()
    $('#4').empty()
    $('#5').empty()
    $('#6').empty()
    for(let i = 0; i < lastDay + startWeekday; i++){
        const td = document.createElement('td')
        td.id = 'cal' + i
        if(i % 7 == 0 && i != 0){
            rowCount += 1
        }
        $('#'+rowCount).append(td).addClass('calTd')
        //console.log(i+1)
    }
    for(let i = 0; i < lastDay; i++){
        $('#cal'+ (startWeekday + i)).html(i+1)

    }

    $('#monthH1').empty().prepend(year + ' Calendar')
}
console.log(date)
calendarPrint(date, lastDay)

//funciton to move forward months
$('#addMonth').click(function(){
    date = new Date(year, date.getMonth()+ 1, 1)
    tranMonth()
    var adjlastDay = monthLength(date)
    year = date.getFullYear()
    calendarPrint(date, adjlastDay)
    console.log(date)
    console.log(adjlastDay)
})

//funcion to move back months
$('#subMonth').click(function(){
    date = new Date(year, date.getMonth()- 1, 1)
    tranMonth()
    var adjlastDay = monthLength(date)
    year = date.getFullYear()
    calendarPrint(date, adjlastDay)
    console.log(date)
    console.log(adjlastDay)
})

// switch to the individual day view 
$(document).on('click', 'td', function(){
    let id = this.id
    let index = $('#'+id).index()
    let day = $('#th' + index).text().trim()
    $('#calendar').attr('style', 'display: none')
    $('#calDayDisplay').attr('style', 'display: block')
    $('#daySelected').html(day)
})

// adding list of things to accomplish for the day to achieve goals
$('#addTask').click(function(e){
    e.preventDefault()
    let addedTask = $('#taskInput').val()
    $('#taskInput').val('') 
    let li = document.createElement('input')
    let label = document.createElement('label')
    $(li).attr('type', 'checkbox')
    $(label).html(addedTask).append(li).addClass('list')
    $('#taskDisplay').append(label)
})