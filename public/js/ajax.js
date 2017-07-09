
// making a get request

$(function(){

  $.ajax ({

  url: '/posts/loadmore',
  type: 'GET',
  success: function(posts){

   $.each(posts, function(i, post) {
     console.log( post.author, post.body);
   });

  }

  });
});

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
             success: function (data) {  window.location.href= '/'; },
             error: function (err) {  alert('text status '+ err );  }
      });
   });
});

// like a post

$(function () {

    $('.like').click(function(e) {

     $target = $(e.target);
     // post id for route url
     const id = $target.attr('data-id');

     $.ajax ({
       url: '/posts/like/'+id,
       type: 'POST',
       success: function () { window.location.href= '/';      },
       error: function (err) {  alert('text status '+ err );  }

     })

     //  if(this.style.color = 'black') {
     //       this.style.color = 'red';
     //  }

   });
});
