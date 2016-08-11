function getBarcode() {


    function createBarcode() {

        var bar = robID;


        JsBarcode("#code39", bar, {

            format: "code128",
            height: 37,
            width: 0.8,
            fontSize: 12.5,
            // displayValue: false,

            background: "",
            lineColor: "black",
        });

        $('#code39').fadeIn(1000); // 1000 ms

    }


    setTimeout(createBarcode, 1500);
}
