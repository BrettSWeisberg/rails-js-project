// $(function (){
//    if($('body').is("#Client_Show")){
//    listenToClientPage();
//   }
//  })
//


  $(function () {
    $('form').submit(function(event) {
      //prevent form from submitting the default way
      event.preventDefault();
      debugger
      var values = $(this).serialize();

      var posting = $.post('/posts', values);

      posting.done(function(data) {
        var post = data;
        $("#postTitle").text(post["title"]);
        $("#postBody").text(post["description"]);
      });
    });
  });
