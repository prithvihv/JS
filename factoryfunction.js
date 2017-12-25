function makegreeting(language){
    return function greeting(firstname,lastname){
        if(language=="en"){
            console.log("hello "+ firstname + " " + lastname);
        }
        if(language=="sp"){
            console.log("hola "+firstname + " " + lastname);
        }
        console.log(language);
    }
}
var englishgreeting = makegreeting("en");
var spanishgreeting = makegreeting("sp");
englishgreeting("john","doe");
spanishgreeting("john","doe");
