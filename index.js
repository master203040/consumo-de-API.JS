let url ='https://jsonplaceholder.typicode.com/users'

fetch(url)

    .then(Response=>Response.json())
    .then(data => mostraData(data))
    .catch(error => console.log(error))

    const mostraData = (data)=>{

        console.log(data)

        let body =''

        for(let i = 0; i < data.length; i++) {
            
            body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td><td>${data[i].username}</td></tr>`
            
        }
        document.getElementById('data').innerHTML= body


    }



