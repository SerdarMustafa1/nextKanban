// ***********show/hide buckets**********

$('#bucketCheckbox1').on('click', function() {
  $('.board-column.backlog').fadeToggle(1500);
});

$('#bucketCheckbox2').on('click', function() {
  $('.board-column.planned').fadeToggle(1500);
});

$('#bucketCheckbox3').on('click', function() {
  $('.board-column.inProgress').fadeToggle(1500);
});

$('#bucketCheckbox4').on('click', function() {
  $('.board-column.done').fadeToggle(1500);
});
//completed hidden on page load
$('#bucketCheckbox5').on('click', function() {
  if ($('#bucketCheckbox5').is(':checked')) {
    $('.board-column.completed').css('display', 'block');
  } else {
    $('.board-column.completed').css('display', 'none');
  }
});

function toggleBuckets(el) {
  console.log(el);
  let bucketName = el.parentElement.innerText;
  console.log(bucketName);
  let ArrayTest3 = document.getElementsByClassName(bucketName);

  ArrayTest3 = Array.prototype.slice.call(ArrayTest3);

  console.log(ArrayTest3);

  if ($(el).is(':checked')) {
    ArrayTest3.forEach(function(element) {
      element.style.display = 'block';
    });
  } else {
    ArrayTest3.forEach(function(element) {
      element.style.display = 'none';
    });
  }
}
