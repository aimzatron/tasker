function update_task_counter(){
  var task_count = $('div#tasks ul').children().not('li.completed').size();
  $('span#task_counter').text(task_count);
  var sort_tasks = $('div#tasks ul').children().not('li.completed').size();
  var task_list = $('div#tasks ul')
  var all_completed = $(task_list).children('li.completed')
    $(all_completed).detach();
     all_completed.appendTo(task_list)
}
$(function(){
  $('#task_text').focus();
  $('form#add_task').on('submit', function(event){
    event.preventDefault();
    var task_text = $('input#task_text').val();
    var list_item = ("<li>" + task_text + "</li>");
    $('ul').append(list_item);
    $('input#task_text').val('');
      update_task_counter();
    $('li:last', '#tasks').on('click', function(){
     $(this).toggleClass('completed');
     update_task_counter();
     console.log("Task Item Clicked");
    })
    console.log("You clicked the add button!" + list_item)
  });
});

