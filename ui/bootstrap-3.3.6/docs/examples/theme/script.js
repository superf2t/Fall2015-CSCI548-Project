$(document).ready(function() {
    $('#datePicker1')
        .datepicker({
            format: 'mm/dd/yyyy'
        })
        .on('changeDate', function(e) {
            // Revalidate the date field
           //$('#eventForm').formValidation('revalidateField', 'date');
	console.log("test");
        });

 $('#datePicker2')
        .datepicker({
            format: 'mm/dd/yyyy'
        })
        .on('changeDate', function(e) {
            // Revalidate the date field
          // $('#eventForm').formValidation('revalidateField', 'date');
	console.log("test");
        });


});


function cityClick(id)
{
	var len = 3;
	var classprefix = "city-btn-"
	var cities = ["Los Angeles", "New York" , "London"];
	for(i=0;i<3;i++)
	{
		if(i!=id)
			$('#'+classprefix+i).removeClass("btn-primary");
		else
			$('#'+classprefix+i).addClass("btn-primary");
				
	}


}
function IntClick(id)
{
	var len = 6;
	var classprefix = "interest-btn-"
	var cities = ["Los Angeles", "New York" , "London"];
	if ($('#'+classprefix+id).hasClass("btn-primary"))
		$('#'+classprefix+id).removeClass("btn-primary");
	else
		$('#'+classprefix+id).addClass("btn-primary");
	
}

function go()
{

	var len = 3;
	var msg = "City : " ;
	var classprefix = "city-btn-"
var cities = ["Los Angeles", "New York" , "London"];
	for(i=0;i<3;i++)
	{
		if ($('#'+classprefix+i).hasClass("btn-primary"))
			{
				msg +=  cities[i];
				break;
			}					
	}


	 len = 6;
	 msg += ",\n Interests : " ;
	var classprefix = "interest-btn-"
	var interests = ["Literature","Movies","Art","Theatre","Music","Cooking"];
	for(i=0;i<len;i++)
	{
		if ($('#'+classprefix+i).hasClass("btn-primary"))
			{
				
				msg +=  interests[i] + ",";

			}					
	}	

	alert(msg);	

}
