
// * Function yang memanggil dirinya didalam parentnya dan parent memanggil dirinya di parent tergangtung scope

function init(){

    const name = 'Obi Wan'

    function greet(){
        console.log(`Halo, ${name}`)
    }

    greet()
}

init()