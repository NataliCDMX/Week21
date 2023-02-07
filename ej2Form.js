let elem = document.getElementById('wrapper'); //     
elem.style.background = 'lightblue'; 

postButton.onclick = function (event) {
event.preventDefault();
let user = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
}

fetch('https://httpbin.org/post', {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
})
            .then(response => response.json())
            .then(user => {
                const usersElement = document.getElementById('users');
                data.forEach(user => {
                    console.log(user);
                });
            })
            .catch(error => console.log(error));
}