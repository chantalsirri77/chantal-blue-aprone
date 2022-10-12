var names = [
    "— ANGIE",
    "— CHERYL",
    "— CHRISTY",
    "— LESLIE",
    "— KATIE"
]

var ItemsToAnimate = [
    "My entire family loves the dishes I make! This truly makes my life easier as a working mom! It allows my family to sit down together and enjoy our dinner. I love that my kids love it.",
    "Before Blue Apron, I tried HelloFresh. Blue Apron beats them on all counts—directions, freshness, packing, and prep.",
    "We love Blue Apron! It eliminates a ton of food waste while allowing us to try new things and have tasty meals. Really great quality food, awesome flavors, and things we wouldn't otherwise have any idea how to create.",
    "We changed from HelloFresh to Blue Apron and it was the best choice we made!",
    "We’d tried many other food delivery services and none of them have compared in quality and variety to Blue Apron."
]

var parachange = document.getElementById('changeable');
var personName = document.getElementById('person');
// parachange.innerHTML = "this was changed sorry";


function changeText(){
    var delay = 0;
    for(i=0; i<ItemsToAnimate.length; i++, delay++) {
        // console.log(ItemsToAnimate[i]);
        setTimeout(function(i){
            parachange.innerHTML = ItemsToAnimate[i];
            personName.innerHTML = names[i];
        }, 3000 * delay, i);
    
    }

    setTimeout(changeTextsecond, 3000 * delay);

}

function changeTextsecond(){
    var delay = 0;
    for(i=0; i<ItemsToAnimate.length; i++, delay++) {
        // console.log(ItemsToAnimate[i]);
        setTimeout(function(i){
            parachange.innerHTML = ItemsToAnimate[i];
        }, 3000 * delay, i);
    
    }

    setTimeout(changeText, 3000 * delay);
}

changeText();
