$(document).ready(function(){
    $('#loaderImage').show()
	//Show contacts on page load
	showContacts(loader);
	
	//Add Contact
	$(document).on('submit','#addContact', function(){
		//Show Loader Image
		$('#loaderImage').show();
		
		//Post data from form
		$.post("add_contact.php", $(this).serialize())
			.done(function(data){
                $('#loaderImage').hide()
				console.log(data);
				$('#addModal').foundation('reveal','close');
				showContacts(loader);
			});
			return false;
	});
	
	//Edit Contact
	$(document).on('submit','#editContact', function(){
		//Show Loader Image
		$('#loaderImage').show();
		
		//Post data from form
		$.post("edit_contact.php", $(this).serialize())
			.done(function(data){
				console.log(data);
				$('.editModal').foundation('reveal','close');
				showContacts(loader);
			});
			return false;
	});
	
	//Delete Contact
	$(document).on('submit','#deleteContact', function(){
		//Show Loader Image
		$('#loaderImage').show();
		
		//Post data from form
		$.post("delete_contact.php", $(this).serialize())
			.done(function(data){
				console.log(data);			
				showContacts(loader);
			});
			return false;
	});
	
});

//Show Contacts
function showContacts(myFunc){
	console.log('Showing Contacts...');
    setTimeout("$('#pageContent').load('contacts.php',function(){$('loaderImage').hide();})",1000);
    myFunc();
}

function loader() {
    $('#loaderImage').hide();
}

//Close Modal
$(document).on('click', '.close-reveal-modal', function() {
	$('.reveal-modal').foundation('reveal', 'close');
});