var item = [];
var template = $('#item-template').html();

$('#itemModule').find('button').on('click', function() {
  item.push($('#itemModule').find('input').val());
  $('#itemModule').find('input').val('');
  // data for mustache template
  var data = {
    item: item,
  };
  $('#itemModule').find('ul').html(Mustache.render(template, data));
});

$('#itemModule').find('ul').delegate('i.del', 'click', function(e) {
  var $remove = $(e.target).closest('li');
  var i = $('#itemModule').find('ul').find('li').index($remove);

  $remove.remove();
  item.splice(i,1);
});
