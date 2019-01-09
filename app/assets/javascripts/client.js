// $(function (){
//    if($('body').is("#Client_Show")){
//    listenToClientPage();
//   }
//  })
//
//
//  function listenToClientPage(){
//    $("#Edit_Client").on('click', function(event) {
//      event.preventDefault();
//   //   console.log("hello!")
//      setForm();
//   })
// }
//
// function setForm(){
//   document.getElementById("client_name").innerHTML = '<textarea id="text_field"></textarea><button id="Submit_client_edit">Submit</button>';
//   $("#Submit_client_edit").on('click', function(event) {
//     event.preventDefault();
//     patchClient();
// })
// }
//
// function patchClient(){
//
//   client = Number(this.location.href.split('/')[4]);
//   client_data = {name: document.getElementById("text_field").value};
//   $.ajax({
//       type: 'PATCH',
//       url: base_url + `clients/${client}`,
//       data: JSON.stringify(client_data),
//       dataType: 'json'
//     });
//     debugger
//     getUpdate();
//   }
//
//   function getUpdate() {
//     $("client_name").empty();
//
//     $.ajax({
//       url: this.href, //data .json if you dont use dataType
//       method: 'get',
//       dataType: 'JSON',
//       success: function(response) {
//         debugger
//         document.getElementById("client_name").innerHTML = '<h2></h2'
//     }
//   })
// }
