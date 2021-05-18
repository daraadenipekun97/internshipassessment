// fetching the API using fetch


const getData = () =>{
    fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(users => {
        console.log(users.data);
        const render = users.data.map(user =>{
            return `<div class = "name"><h3>${user.first_name}</h3></div>`
        }).join("")
            console.log(render)
            document.getElementById("userdetails").innerHTML = render;
    })
    .catch(error => {
        console.log(error) 
    })
}
getData();