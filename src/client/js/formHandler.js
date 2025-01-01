/* component form */
function handleSubmit(event) {

    event ? event.preventDefault() : false;

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    Client.checkForName(formText);

    console.log("::: Form Submitted :::", Client.checkForName);
    fetch(`/test?name=${formText}`)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML += res.message;
        return res.message;
    }).then((t)=>{
        console.log("who am i", t);
        fetch('/ok',{
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            // Body data type must match "Content-Type" header
            body: JSON.stringify({name: formText}),
        }).then((res)=>res.json()).then((res)=>{
            document.getElementById('results').innerHTML += `<br /> Post Name: ${res.name}`;
        });
    })

}

console.log("hello form handler");
export { handleSubmit }
