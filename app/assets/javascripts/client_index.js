$(function () {
	listenToIndex();
})

function listenToIndex() {
  $("#sort_clients").on('click', function (event) {
    event.preventDefault();
    sortClients();
  })
}

function sortClients(){

    $(`#clients_list`).empty(),
    $.ajax({
      url: this.location.href,
      method: 'get',
      dataType: 'JSON',
      success: function (response) {

      response.sort(function(a, b){
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });

      for (i in response) {
      document.getElementById(`clients_list`).innerHTML += "<li>" + response[i].name + "</li>";
      }
      }
    })
  }
