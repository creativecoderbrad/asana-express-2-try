


// create tags

var addTag = document.getElementById('tag-input')

addTag.addEventListener('click', makeTag );

function makeTag(e) {

    e.preventDefault();

    
    this.onkeypress = function() {

      // on space / enter press
      var enterkey = e.keyCode == 13 || event.keyCode == 13;
      // get latest individual input
      var input = addTag.value.toLowerCase();

      if (enterkey && input != '') {

          document.getElementById('tag-input').value = '';
          console.log(input);


      // end function
      return false;
      }
      return true;
    }
}




// submit tags
$(function(){

    $('#enter').click(function(){

       tags = [ 'node', 'js', 'php'];

       $.ajax({
             url: '/ajax',
             type: 'POST',
             data: {   arr:  tags  },
            //  data: { number: 2 },
             success: function(data){
                alert('Success!');
             }
             , error: function(err){
                 alert('text status '+ err );
             }
      });
   });

});
