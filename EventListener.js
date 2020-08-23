
const form=document.getElementById('form');
const boxNames = ['name-box', 'password-box','email-box'];

function eventHandler (event) {
    const targetBox = event.target.closest('div');

    if (!targetBox) {
        return;
    }

    const id = targetBox.id;

    for(let i=0; i< boxNames.length; i++) {
        const boxName = boxNames[i];
        if (boxName === id) {
            const infoLine = targetBox.getElementsByClassName('alert');
            infoLine[0].innerHTML='Should not include space'
        }


    }

}


form.addEventListener('click', eventHandler);





var cleanup =document.getElementById('cleanupahmet');

cleanup.addEventListener('click', function(){
    var  a=['You have only one time'];
    for( var i=0; i<a.length; i++ ){
        var string= document.createElement('span')
        string.innerHTML= a[i]
        result.append(string)
    }
    }
)




document.getElementById("empty").addEventListener("mousemove", myFunction);

function myFunction() {
    document.getElementById("demo").innerHTML = Math.random();
}











