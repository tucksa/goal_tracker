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
console.log(weekday)