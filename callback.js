function greating(greatingHandler,name ) {
    greatingHandler(name)
}
function greatingHandler(name){
    console.log('good night', name)
}
function greatingEvening(name) {
    console.log('good evening', name)
}
function greatingMorning(name) {
    console.log('good morning', name)
}
greating(greatingHandler, 'tom')
greating(greatingHandler, 'hanks')
greating(greatingEvening, 'salluvai')
greating(greatingMorning, 'billuvai')
greating(greatingMorning, 'skulluvai')