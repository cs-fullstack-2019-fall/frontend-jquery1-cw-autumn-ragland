// grab elements with redText class and apply css class
$(".redText").addClass("applyRedText");
// grab elements with myElement id and apply css class
$("#myElement").addClass("applyBlueText");
// grab first child of #myElement and apply css class
$("#myElement div:first").addClass("greenBGWhiteText");
// grab last child of #myElement and apply css class
$("#myElement div:last").addClass("orangeBGPinkText");
// on click function for #myElement
$("#myElement").click(function clickMe(e){
    alert("I was clicked")
});

