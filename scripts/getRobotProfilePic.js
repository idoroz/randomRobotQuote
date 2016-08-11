function getRobot() {

    function stringGen(len) {
        var text = "";

        var charset = "abcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < len; i++)
            text += charset.charAt(Math.floor(Math.random() * charset.length));

        return text;
    }

    var robotInput = stringGen(3);

    robPic = "https://robohash.org/" + robotInput + ".png";

    $("#theRobot").attr("src", robPic);
    $('#theRobot').fadeIn(2000); // 1000 ms


    //adding the speech bubble with 4sec delay
    function quoteSpeechBubble() {
        $('.bubble').fadeIn(1000); // 1000 ms
        $('.bubble').text(robQuote);
    }
    setTimeout(quoteSpeechBubble, 3000);

}
