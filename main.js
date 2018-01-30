console.log('ok');
var we = 0;
var val = {
  tex:0
}
var trouc = 0;
window.addEventListener('wheel', function(doom){
  //var wee =
  val.tex +=1;

  //console.log(doom);
  we += 1;
  console.log(we);
  if(we<10){
  document.body.style.backgroundColor= "#00001"+we;
}else if(we>10){
  document.body.style.backgroundColor= "#0000"+we;
}else if(we>60){
  document.body.style.backgroundColor= "#1000"+we;
}
});
$('#xp').on('click', function(){
$('.histoire').css({'display':'block'});
});
$('.histoire').mouseleave(function(){
  $('.histoire').css({'display':'none'});
})
