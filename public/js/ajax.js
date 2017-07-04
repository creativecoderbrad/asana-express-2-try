


// submit form post
$(function () {

    $('#enter').click(function(){

       // tags = tagstopush
       var author = document.getElementById('author').value;
       var body = document.getElementById('body').value;

       $.ajax({
             url: '/posts/add',
             type: 'POST',
             data: {  arr: tagstopush, author: author, body: body  },
             success: function(data){
                window.location.href= '/';
             },
             error: function(err){
                alert('text status '+ err );
             }
      });
   });
});

// like a post
