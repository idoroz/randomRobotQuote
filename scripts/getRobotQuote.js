function getQuote() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function(response) {
            console.log(response);
            robQuote = response.quoteText;
            robQuoteAuthor = response.quoteAuthor;
            if (response.quoteAuthor == "") {
                robQuoteAuthor = "anonymous";
            }
        }
    });
}
