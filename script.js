$(".Click-here").on('click', function() {
  $(".custom-model-main").addClass('model-open');
}); 
$(".close-btn, .bg-overlay").click(function(){
  $(".custom-model-main").removeClass('model-open');
});
const clickBtn = document.getElementById("clickBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

clickBtn.addEventListener('click', ()=>{
    popup.style.display = 'block';
});
closeBtn.addEventListener('click', ()=>{
    popup.style.display = 'none';
});
popup.addEventListener('click', ()=>{
    popup.style.display = 'none';
});