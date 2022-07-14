$( document ).ready(function() {
	
		$("#bookForm").submit(function(event) {
			//prevent the form submitting via brower
			event.preventDefault();
			ajaxPost();
		});

		function ajaxPost() {
			var formData = {
				name: $("#name").val(),
				id: $("#id").val(),
				author: $("#author").val()

			}

			//Do Post
			$.ajax({
				type: "POST",
				contentType: "application/json",
				url: "saveBook",
				data: JSON.stringify(formData),
				dataType: 'json',
				success: function(result) {
					if (result.status == "success") {
						$("#postResultDiv").html(
							"" + result.data.name 
							+ " post successfully !<br>"
							+ "--->congrats!!"
							+"</p>");
					} else {
						$("#postResultDiv").html("<strong>Error</surong>")
					}
					
					console.log(result);
				},
				error: function(e) {
					alert("Error!");
					console.log("ERROR: ", e);
				}

			});
		}
	});
	
	
	

