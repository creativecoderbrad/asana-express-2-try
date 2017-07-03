document.addEventListener('click', function(e) {
    // focus on input
    var divFocus = document.getElementById('tag-editor');
    // if click in box
    var checkClick = divFocus.contains(e.target);
    if (checkClick) {
        divFocus.classList.add('highlight-tag');
    }
    else {
        divFocus.classList.remove('highlight-tag');
    }
});

// create tags for posts
var tagstopush = [ ];

var addTag = document.getElementById('tag-input')

addTag.addEventListener('click', postTagging );

function postTagging(e) {

  e.preventDefault();

  this.onkeypress = function() {

    // on enter press
    var enterkey = e.keyCode == 13 || event.keyCode == 13;
    // get latest individual input
    var input = addTag.value.toLowerCase();

    if (enterkey && input != '') {
        document.getElementById('tag-input').value = '';
        // build tag
        buildTag(input);
        // check tag amount
        checkTagAmount();
    // end function
    return false;
    }
    return true;
  }
}

function checkTagAmount () {
  // if one tag > remove placeholder
  var removePlaceholder = document.getElementById('tag-input');
  if (tagstopush.length > 0 ) {
    removePlaceholder.placeholder = '';
  }
  else {
    removePlaceholder.placeholder = 'with what language? (make tags by pressing enter)';
  }
}

function buildTag(input) {

  // create new searches
  var populate = document.getElementById('tags');
  var items = document.createElement('span');
  var del   = document.createElement('span');

  items.classList.add('each-tag');
  del.classList.add('del-tag');

  // output that search
  items.innerHTML = input;
  items.appendChild(del) && populate.appendChild(items);

  // push input to all searches array
  tagstopush.push(input)

  del.addEventListener("click", function () {

      deleteItemArray(input);
      // check tag amount
      checkTagAmount();

      var listItem = this.parentNode;
      populate.removeChild(listItem);

  });

  function deleteItemArray(input) {

    for (var i = tagstopush.length - 1; i >= 0; i--) {
      var check = tagstopush[i];
      var matchfind = input;

      if( check === matchfind ) {
         tagstopush.splice(i, 1);
         console.log(tagstopush);
      }
    }
  }
}


// submit tags
$(function () {

    $('#enter').click(function(){

       var author = document.getElementById('author').value;
       var body = document.getElementById('body').value;

       $.ajax({
             url: '/posts/add',
             type: 'POST',
             data: {  arr: tagstopush, author: author, body: body  },
            //  data: { number: 2 },
             success: function(data){
                window.location.href= '/';
             },
             error: function(err){
                alert('text status '+ err );
             }
      });
   });

});
