

var Delete = {
  init: function(){
    Delete.styling();
    Delete.events();
  },
  styling: function(){

  },
  events: function(){
    $(".messages").on("mouseenter",".message",function(){
      $(this).children('.delete').removeClass("hidden");
      });
    $(".messages").on("mouseleave",".message",function(){
        $(this).children('.delete').addClass("hidden");
        });
    $('.messages').on('click', '.delete', function(event){
          var deleteMes = $(this).closest('div');
          console.log(deleteMes);
          var messageID = $(this).data('index');
          console.log(messageID);
          Delete.deleteText(messageID, deleteMes);
        });
  },
  deleteText: function(messageID, deleteMes) {

    $.ajax({
      method: 'DELETE',
      url: chatPage.messageURL + "/" + messageID,
      success: function() {
        console.log("DELETED");
        deleteMes.remove();
      },
      failure: function (response) {
        console.log("FAILURE"),response;
      }
    });
  }
};
