$(function () {
	listenToForm();
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

			listenClientButton()

		}
	})
}

function listenClientButton() {
	$('button.client-button').on('click', function (event) {
		event.preventDefault()


		let client_id = Number(this.id);
		let manager_id = this.dataset.id;

		$.ajax({
			url: base_url + `/clients/${client_id}`,
			method: 'get',
			dataType: 'json'
		}).done(function (data) {

			console.log("data: ", data);
			let client = new Client(data)
			let projectsList = client.projectsHTML()
			$(`#products_for_${client_id}`).html(projectsList)

			
		})
	})
}

class Client {
	constructor(obj) {
		this.name = obj.name
		this.projects = obj.projects
	}
}



class Manager {
	constructor(obj) {
		this.id = obj.id
		this.name = obj.name
		this.projects = obj.projects
		this.clients = obj.clients
	}
}

// html for a single instance of Manager
Manager.prototype.managerHTML = function () {
	return (`
				< div >
					<li>Manager Name:${this.name}</li>
				</div>
			`)
}

// html for a list of clients, from an instance of Manager
Manager.prototype.clientsHTML = function () {
	return this.clients.map((client, index) => {
		return (`
			<li>Client Name:${client.name}</li>
			<button id=${client.id} class='client-button' data-manager_id=${this.id}>Display Projects</button>
			<div id=projects_for_${client.id}></div>
			`)
	})
}

// html for a list of projects, from an instance of Manager
Client.prototype.projectsHTML = function () {
	let managerProjects = this.projects

	managerProjects.map((project, index) => {
		return (`
			< div >
			<li>Client Name:${project.name}</li>
			<button id=${project.id} class='project-button'>Display Projects</button>
			</div >
			`)
	})
}


function listenToButton() {
	$("button").on('click', function (event) {
		event.preventDefault();

		// debugger;

		getProjects(this);
	})
}


// list all projects
//  listener, button, function, DOM update

// show project details
//  listener, button, function, DOM update

//  show the manager
//  listener, button, function, DOM update

//    show the manager's projects

//
// function getProjects(data) {
//
// 	let client = Number(data.id.split("-")[1]);
// 	let project_ul = `show_projects - ${client}`;
// 	let project_show_url = base_url + 'clients/' + client + '/projects/'
// 	$(`#show_projects - ${client}`).empty();
//
// 	$.ajax({
// 		url: this.href, //data .json if you dont use dataType
// 		method: 'get',
// 		dataType: 'JSON',
// 		success: function (response) {
// 			let myObj = response.projects;
// 			for (x in myObj) {
// 				if (myObj[x].client_id === client) {
// 					document.getElementById(`show_projects - ${client}`).innerHTML += ` < li > Project Name: <a href=` + project_show_url + myObj[x].id + ` > ` + myObj[x].name + '</a></li>' +
// 						`< button class= "create_project" id = ${client} > Create Project</button > <br><div id="create_project_form"></div>`;
// 				}
// 			}
// 			listenToCreateButton()
// 		}
// 	})
// }
//
// function listenToCreateButton() {
// 	$(".create_project").on('click', function (event) {
// 		event.preventDefault();
// 		createProjectForm(this);
// 	})
// }
//
// function createProjectForm() {
// 	document.getElementById("create_project_form").innerHTML =
// 		'<form>' +
// 		'Project Name:<input id="text_field"></input><br>' +
// 		'Project Completed?:<select><option id="No">No</option><option id="Yes">Yes</option></select>' +
// 		'</form>' +
// 		'<button id="Submit_project">Submit</button>';
// 	$("#Submit_project").on('click', function (event) {
// 		event.preventDefault();
// 		createProject();
// 	})
// }
//
// function createProject() {
// 	client_data = { name: document.getElementById("text_field").value };
// 	$.ajax({
// 		type: 'Post',
// 		url: base_url + `clients/${client}`,
// 		data: JSON.stringify(client_data),
// 		dataType: 'json'
// 	});
// }


//   class Project {
//     constructor(name, completed, client_id, manager_id){
//       this.name = obj.name
//     }
//   }
//
//   Client.prototype.create = function() {
//
//   }
//
//     User.prototype.welcome = function() {
//       document.getElementById(`welcome`).innerHTML = `Welcome ${this.name}`!;
//   }
// }
