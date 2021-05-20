// fetching the API using fetch


const getData = () =>{
    fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(users => {
        console.log(users.data[0].id);
       
        const render = users.data.map(user =>{
                return `<div class = "details">
                   
                    <p><img src = "${user.avatar}" alt = "${user.first_name}"/></p>
                     <h3 class = "name">${user.first_name} 
                     
                     <ul class = "list">
                        <li class = "list_items">User ID: ${user.id}</li>
                        <li class = "list_items">Lastname: ${user.last_name}</li>
                        <li class = "list_items">Email: ${user.email}</li>
                    </ul>
                     
                     </h3>
                     
                
                </div>`
        }).join("")
            console.log(render);
        
            document.getElementById("userdetails").innerHTML = render;


            let nameEl = document.querySelectorAll(".name");
            let listEl = document.querySelectorAll(".list");
            console.log(listEl.length);
            
            for (let i = 0; i < nameEl.length; i++) {
                nameEl[i].addEventListener("click", action);

                
                
            }

           

                function action(e){
                       this.style.color = "brown";
                       this.firstElementChild.style.display = "block"
                    

                   
                           
                      

                }
            
    })
    .catch(error => {
        console.log(error) 
    })
}
getData();