$('.filter-input input[type="checkbox"]').click(function(event){
   event.closest('.filter-input').toggleClass('done');
});