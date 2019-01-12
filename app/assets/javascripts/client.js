$(function () {
    $('#new_client').submit(function(event) {
    event.preventDefault();  //prevent form from submitting the default way
    url = this.action
    data = {
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
