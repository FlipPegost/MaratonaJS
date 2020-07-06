
$(document).ready(function(){
  $('#zeitfenster').submit(function(){
      $('#selectedOptions option').attr('selected', 'true');
  });

$('#addOption').click(function(){
  moveSelectedItems('#canSelectOption', '#selectedOptions');
});
$('#addAllSeletedOption').click(function(){
  $('#canSelectOption option').attr('selected', 'true');
  moveSelectedItems('#canSelectOption', '#selectedOptions');
});
$('#removeSelectedOption').click(function(){
  moveSelectedItems('#selectedOptions', '#canSelectOption');
});
$('#removeAllSelectedOption').click(function(){
  $('#selectedOptions option').attr('selected', 'true');
  moveSelectedItems('#selectedOptions', '#canSelectOption');
});
});


function moveSelectedItems(source, destination){
  var selected = $(source+' option:selected').remove();
  var sorted = $.makeArray($(destination+' option').add(selected)).sort(function(a,b){
    return $(a).text() > $(b).text() ? 1:-1;
  });
  $(destination).empty().append(sorted);
}
