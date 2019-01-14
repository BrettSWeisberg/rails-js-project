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
			if (response.clients[0].name === null && response.clients.length === 1){
					$('ul#Show_Clients').html('<li>You have no clients</li>')
			} else {

				//	let managers = response.filter(manager => manager.name != null);
					let manager = new Manager(response)
					let clientsList = manager.clientsHTML() // feeds to the client prototype
					$('ul#Show_Clients').html(clientsList)
			}
		}
	})
}

class Manager {
	constructor(obj) {
		this.id = obj.id
		this.name = obj.name
		this.projects = obj.projects
		this.clients = obj.clients
	}
}



// html for a list of clients, from an instance of Manager - req 1 & 2 & 5
Manager.prototype.clientsHTML = function () {
	return this.clients.map((client, index) => {
		if (client.name != null) {
		return (`
			<li>Client Name:${client.name}</li>
			<button id="get_project" class='client-button' onclick="getProjects(this)" data-client=${client.id}>Display Projects</button>
			<ul id=projects_for_${client.id}></ul>
			`)
		}
	})
}

//- req 3 &4
function getProjects(el){

	let client = Number(el.dataset.client);

		$(`#projects_for_${client}`).empty(),
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
