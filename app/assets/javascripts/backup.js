// $(function (){
//   listenToForm();
// })
//
// const base_url = 'http://localhost:3000/'
//
// function listenToForm (){
//   $("#DisplayClients").on('click', function(event) {
//     event.preventDefault();
//     getClients();
//
//   })
// }
//
// function getClients(){
//   $(`#Show_Clients`).empty();
//   $.ajax({
//     url: this.href, //data .json if you dont use dataType
//     method: 'get',
//     dataType: 'JSON',
//     success: function(response) {
//
//       let myObj = response.clients;
//       for (x in myObj) {
//         document.getElementById("Show_Clients").innerHTML += `<li>Manager Name: <a href=`+ base_url + 'clients/' + myObj[x].id +`>` + myObj[x].name + '</a></li>' +
//         `<button id="clientid-${myObj[x].id}">Display Projects</button><br>` +
//           `<ul id="show_projects-${myObj[x].id}"></ul>`;
//       }
//       listenToButton(this);
//     }
//   })
// }
//
// function listenToButton (){
//     $("button").on('click', function(event) {
//       event.preventDefault();
//       getProjects(this);
//   })
// }
//
//
// function getProjects(data){
//
//   let client = Number(data.id.split("-")[1]);
//   let project_ul = `show_projects-${client}`;
//   let project_show_url = base_url + 'clients/' + client + '/projects/'
//   $(`#show_projects-${client}`).empty();
//
//   $.ajax({
//     url: this.href, //data .json if you dont use dataType
//     method: 'get',
//     dataType: 'JSON',
//     success: function(response) {
//       let myObj = response.projects;
//       for (x in myObj) {
//         if (myObj[x].client_id === client) {
//           document.getElementById(`show_projects-${client}`).innerHTML += `<li>Project Name: <a href=`+ project_show_url + myObj[x].id +`>` + myObj[x].name + '</a></li>' +
//           `<button class="create_project" id="clientid-${client}">Create Projects</button><br><div id="create_project_form"></div>`;
//         }
//       }
//       debugger
//       listenToCreateButton ()
//     }
//   })
// }
//
// function listenToCreateButton (){
//     $(".create_project").on('click', function(event) {
//       event.preventDefault();
//       createProjectForm(this);
//   })
// }
//
// function createProjectForm(){
//   document.getElementById("create_project_form").innerHTML =
//   `<form>
//     Project Name:<input id="text_field"></input><br>
//     Project Completed?:<select><option id='no'>No</option><option id='yes'>Yes</option></select>
//   </form>
//   <button id="Submit_project">Submit</button>`;
//   $("#Submit_project").on('click', function(event) {
//     event.preventDefault();
//   //  createProject();
// })
// }
// //
// // function createProject(){
// //   client_data = {name: document.getElementById("text_field").value};
// //   $.ajax({
// //       type: 'Post',
// //       url: base_url + `clients/${client}`,
// //       data: JSON.stringify(client_data),
// //       dataType: 'json'
// //     });
// // }
// //
// //
// //   class Project {
// //     constructor(obj) {
// //       this.name = obj.name
// //       this.completed = obj.completed
// //     }
// //   }
// //
// //   Client.prototype.postHTML = function() {
// //     return ('
// //     <h3>Project Name:${this.name}</h3><br>
// //     <h3>Completed:${this.name}</h3>
// //     ')
// //   }
