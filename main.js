// Random User Robot.

// The flow of the data works like this:

// -First initialize Robot vars with empty strings "".

// -The click event fires all functions.

// -Get robot name from robotNames.js -----> robotname();
// -Now, with an ajax request to randomuser.me, get ID and Location from returned object. This ajax request 
//  also returns a promise inwhich we can chain more functions to.

// -The Promise, in the promise object we call more functions --> getBarcode()? + getRobot() + getQuote.

// - After all these functions are done we create the Robot Object:
//  					{
// 					profilePic 	: 	robPic,
// 					name 	   	:	robName,
// 					id         	: 	robID,
// 				?<----	barcode		:	robBarcode, ---> ?
// 					location   	: 	robLocation,
// 					quote      	: 	robQuote,
// 					quoteAuthor 	: 	robQuoteAuthor
// 										}


$(function() {
    console.log("ready!");

    document.getElementById("wanted").disabled = true;
});

//init for all Robot vars
var robPic = "";
var robName = "";
var robID = "";
var robKey = "";
var robLocation = "";
var robQuote = "";
var robQuoteAuthor = "";

var robObj = "";

//click event fires all functions
$('#go').on('click', function() {

    //fadeIn fixes
    $("#theRobot").css("display", "none");
    $(".bubble").css("display", "none");
    $("#code39").css("display", "none");
    $(".wantedPosterBCG").css("display", "none");
    $(".robInfo").css("display", "none");



    // 1. Get robot name 
    $("#theRobot").attr("src", "");
    randomRobotName();

    // 2. Ajax request to randomuser.me to get ID & Location - returns a promise

    var req = $.ajax({
        url: 'http://api.randomuser.me/?nat=gb',
        dataType: 'json'
    });

    var err = function(req, status, err) {
        console.log("something went wrong!")
    };

    //3. The Promise - chained functions
    req.then(function(resp) {
        console.log(resp);
        //get ID & Location
        randomUser(resp);
        //get robot Key
        robKey = resp.results[0].id.value;
        //get robot profile pic
        getRobot();
        //get robot quote
        getQuote();
        //get barcode
        getBarcode();

        //after all these functions have finished with a setTimeout of 1sec we create the RobObj

        function getRobotObj() {
            var random_robot = {
                profilePic: robPic,
                name: robName,
                id: robID,
                key: robKey,
                location: robLocation,
                quote: robQuote,
                quoteAuthor: robQuoteAuthor
            }


            robObj = random_robot;
            console.log(robObj);
        }
        setTimeout(getRobotObj, 2000);

    document.getElementById("wanted").disabled = false;
        //enable the show Wanted Poster button

        ///end of promise and ajax-request - callback for err function
    }, err);

});


$('#wanted').on('click', function() {

    $(' img.infoProPic').attr('src', robObj.profilePic);
    $('.robInfo_name').text("Name: " + robObj.name);
    $('.robInfo_location').text("Location: " + robObj.location);
    $('.robInfo_id').text("ID: " + robObj.id);
    $('.robInfo_key').text("KEY: " + robObj.key);
    $('.robInfo_owner').text("Authored: " + robQuoteAuthor);


    $('.wantedPosterBCG').fadeIn(1000); // 1000 ms
    $('.robInfo').fadeIn(1000); // 1000 ms

})
