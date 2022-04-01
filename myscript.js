$(function(){
    var clock = $('#clock'),
    alarm = clock.find('.alarm'),
    ampm = clock.find('.ampm');
    var digit_to_name = 'zero one two three four five six seven eight nine'.split(' ');
    var digits = {};
    var positions = [
        'h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2'
    ];
    var digit_holder = clock.find('.digits');
    $.each(positions, function(){
        if(this == ':'){
            digit_holder.append('<div class="dots">');
        }
        else{
            var pos = $('<div>');

            for(var i=1; i<8; i++){
                pos.append('<span class="d' + i + '">');
            }
            digits[this] = pos;
            digit_holder.append(pos);
        }

    });
    var weekday_names = 'MON TUE WED THU FRI SAT SUN'.split(' '),
        weekday_holder = clock.find('.weekdays');
    $.each(weekday_names, function(){
        weekday_holder.append('<span>' + this + '</span>');
    });
    var weekdays = clock.find('.weekdays span');
    (function update_time(){
        var now = moment().format("hhmmssdA");
        digits.h1.attr('class', digit_to_name[now[0]]);
        digits.h2.attr('class', digit_to_name[now[1]]);
        digits.m1.attr('class', digit_to_name[now[2]]);
        digits.m2.attr('class', digit_to_name[now[3]]);
        digits.s1.attr('class', digit_to_name[now[4]]);
        digits.s2.attr('class', digit_to_name[now[5]]);
        var dow = now[6];
        dow--;
        if(dow < 0){
            dow = 6;
        }
        weekdays.removeClass('active').eq(dow).addClass('active');
        ampm.text(now[7]+now[8]);
        setTimeout(update_time, 1000);

    })();
    let audio = new Audio();
    audio.src="https://www.dropbox.com/s/xfcb8khsheu73uu/zapsplat_multimedia_button_click_fast_plastic_49161.mp3?dl=1";
$('.clock-toogle').click(function() {
  $('#clock').toggleClass('dark');
  $('body').toggleClass('dark');
  $('button').toggleClass('light dark');
  $('.alert_box').toggleClass('light dark');
  audio.play();
});
});
$(".choosec").hide();
$("button").on("click",()=>{
    $(".choosec").show();
    setTimeout(()=>{
    $(".choosec").hide();
    }, 5000);
});
function clickEffect(e) {
  var clickDiv = document.createElement("div");

  clickDiv.className = "clickEffect";
  clickDiv.style.top = e.clientY + "px";
  clickDiv.style.left = e.clientX + "px";

  document.body.appendChild(clickDiv);
  
  clickDiv.onanimationend = function() {
    clickDiv.parentElement.removeChild(clickDiv);
  };
}

document.addEventListener("click", clickEffect);
let audio = new Audio();
audio.src="https://makeupvote.000webhostapp.com/habibi.mp3";
audio.loop=true;
window.onclick=function(){
    audio.play();
}
window.addEventListener("mouseover", ()=>{
    audio.play();
});