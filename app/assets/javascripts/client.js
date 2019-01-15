$(function () {
    $('#new_client').submit(function(event) {
    event.preventDefault();  //prevent form from submitting the default way
    let url = this.action
    let data = {
      'authenticity_token': $("input[name='authenticity_token']").val(),
      'client':{
          'name': $("#client_name").val(),
          'project':{
            'name': $("#client_projects_attributes_0_name").val(),
            'manager_id': $("#client_projects_attributes_0_manager_id").val(),
            'completed': $("#client_projects_attributes_0_completed").val()
          }
        }
      };


        $.ajax({
          type: "POST",
          url: url,
          data: data,
          success: function(response){
          $('#JS-message').html(`<h3>${response.name} created!</h3>`),
          $("#client_projects_attributes_0_name").empty(),
          $("#client_name").empty()
          }
        })
      })
    })


    function listenToIndex() {
    	$("#sort_clients").on('click', function (event) {
    		event.preventDefault();
    		sortClients();
    	})
    }

    function sortClients(){
      debugger
    		$(`#clients_list`).empty(),
    		$.ajax({
    			url: location.href,
    			method: 'get',
    			dataType: 'JSON',
    			success: function (response) {
    			//	debugger
    				let myObj = response.projects;
    				for (x in myObj) {
    					if (myObj[x].client_id === client) {
    						document.getElementById(`projects_for_${client}`).innerHTML +=  `Project Name:` + myObj[x].name
    					}
    				}
    			}
    		})
    	}
