for (i = 0; i < $(".btn-primary").length; i++) {
    $(".btn-primary").eq(i).addClass("" + i)
}

$(".btn-outline-success").click(function () {// for searching products
    $.ajax({
        type: "POST",
        data: { name: $(".form-control").val() },
        url: "/products/search",
        success: function (response) {
            console.log(response);
            $(".card").css("display", "none");
            if (response.length === 0) {
                $(".noproduct").text("sorry,there is no such products")
            }
            else {
                for (i = 0; i < $(".card").length; i++) {
                    for (let j = 0; j < response.length; j++) {
                        if ($(".card-title").eq(i).text() === response[j].name) {
                            $(".card").eq(i).css("display", "inline-block")
                        }
                    }
                    
                }  
            }

        },
        error: function (err) {
            console.log(err);
        }
    })

})
$(".btn-primary").click(function () {

    for (i = 0; i < $(".btn-primary").length; i++) {
        if ($(this).hasClass(i)) {
            $.ajax({
                type: "POST",
                data: { number: i },
                url: "/products/image",
                success: function (response) {
                    console.log(response);
                },
                error: function (err) {
                    console.log(err);
                }
            })
        }
    }

})