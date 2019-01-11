$(function () {
	listenToForm();
	listenToButton();
})

const base_url = 'http://localhost:3000/'

function listenToForm() {
	$("#DisplayClients").on('click', function (event) {
		event.preventDefault();
		getClients();

	})
}

function getClients() {
	$(`#Show_Clients`).empty();
	$.ajax({
		url: this.href, //data .json if you dont use dataType
		method: 'get',
		dataType: 'JSON',
		success: function (response) {

			let manager = new Manager(response)
			let clientsList = manager.clientsHTML() // feeds to the client prototype
			$('ul#Show_Clients').html(clientsList)

		//	listenClientButton()

		}
	})
}

// function listenClientButton() {
// 	$('button.client-button').on('click', function (event) {
// 		event.preventDefault()
//
//
// 		let client_id = Number(this.id);
// 		let manager_id = this.dataset.id;
//
// 		$.ajax({
// 			url: base_url + `/clients/${client_id}`,
// 			method: 'get',
// 			dataType: 'json'
// 		}).done(function (data) {
//
// 			console.log("data: ", data);
// 			let client = new Client(data)
// 			let projectsList = client.projectsHTML()
// 			$(`#products_for_${client_id}`).html(projectsList)
//
//
// 		})
// 	})
// }

// class Client {
// 	constructor(obj) {
// 		this.name = obj.name
// 		this.projects = obj.projects
// 	}
// }



class Manager {
	constructor(obj) {
		this.id = obj.id
		this.name = obj.name
		this.projects = obj.projects
		this.clients = obj.clients
	}
}



// html for a list of clients, from an instance of Manager
Manager.prototype.clientsHTML = function () {
	return this.clients.map((client, index) => {
		return (`
			<li>Client Name:${client.name}</li>
			<button id="get_project" class='client-button' onclick="getProjects(this)" data-client=${client.id}>Display Projects</button>
			<ul id=projects_for_${client.id}></ul>
			`)
	})
}
//
// Manager.prototype.projectsHTML = function () {
// 	debugger
// 	let managerProjects = this.projects
//
// 	managerProjects.map((project, index) => {
// 		return (`
// 			< div >
// 			<li>Client Name:${project.name}</li>
// 			<button id=${project.id} class='project-button' onclick="getProjects(this)">Display Projects</button>
// 			</div >
// 			`)
// 	})
// }


function getProjects(el){

	let client = Number(el.dataset.client);

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


function listenToButton() {
	$('#Create_Client').on('click', function (event) {
		event.preventDefault();
		createForm();
	})
}


function createForm(){
  document.getElementById("form").innerHTML = 'Name:<input id="text_field"></input><button id="create">Submit</button>';
  $("#create").on('click', function(event) {
    event.preventDefault();
    createClient();
})
}
