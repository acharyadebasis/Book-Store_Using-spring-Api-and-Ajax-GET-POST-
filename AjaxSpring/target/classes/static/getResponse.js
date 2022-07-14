GET:
$( document ).ready(function() {
	console.log("<<<<<<<<<<<<<<")
		$("#getAll").click(function(event) {
			//prevent the form submitting via brower
			console.log("<<<<<<<<<<<<<<")
			event.preventDefault();
			ajaxGet();
		});

		function ajaxGet() {
			

			//Do Post
			$.ajax({
				type: "GET",
				url: "getBook",
				success: function(result) {
					if (result.status == "success") {
						$("#getResultDiv ul").empty();
						var custList="";
						
						/*result.data.forEach(data=>{
							$("#getResultDiv").html("Name: "+data.name);
							console.log(data.name);
						})*/
						var user="";
						$.each(result.data,function(i,book){
							 user =user.concat("Book name: "+book.name+" , Author = "+book.author+"<br>");
							$("#getResultDiv").html(user);
						});
						
						//
						console.log("Success: ",result);
					} else {
						$("#postResultDiv").html("<strong>Error</surong>")
						console.log("Fail: ",result);
					}
					
					
				},
				error: function(e) {
					$("#getResultDiv").html("<strong>Error</strong>")
					alert("Error!");
					console.log("ERROR: ", e);
				}

			});
		}
	});
	
	
	

