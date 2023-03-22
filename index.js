// $("h1").css("color","red").addClass("class2 class1").
// removeClass("class1 class2").text("Don't click me").html("<em>Hello</em>").attr("class")

// $("a").attr("href","https://www.yahoo.com")

$("button").click(function() {
    $("h1").css("color","purple")
})

$("body").keypress(function(event) {
    console.log(event.key)
    $("h1").text(event.key)
})

$("h1").on("mouseover", function() {
    $("h1").css("color","purple")
})


// outside of h1 tag
$("h1").before("<button>before</button>")
$("h1").after("<button>after</button>")

// inside of h1 tag
$("h1").prepend("<button>prepend</button>")
$("h1").append("<button>append</button>")

// $("button").remove()

// $("button").click(function() {
//     $("h1").hide()
// })

// $("button").click(function() {
//     $("h1").show()
// })

// $("button").click(function() {
//     $("h1").toggle()
// })

// $("button").click(function() {
//     $("h1").fadeToggle()
// })

// $("button").click(function() {
//     $("h1").slideUp()
// })

// $("button").click(function() {
//     $("h1").slideDown()
// })

// number only in the animate method
$("button").click(function() {
    $("h1").animate({opacity:0.5})
})