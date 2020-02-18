$("#btn").click(function(){
    let display = $('#greetings').attr('style')
    console.log(display)
    if (display == 'display: block;'){
        $("#greetings").css("display", "none")
    } else{
        $("#greetings").css("display", "block")
    }
    
})