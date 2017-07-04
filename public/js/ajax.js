


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

// like a post
