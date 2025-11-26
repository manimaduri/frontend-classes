// https://jsonplaceholder.typicode.com/users

const userList = document.getElementById('userList');
const loadUsersBtn = document.getElementById('loadUsers');
const userForm = document.getElementById('userForm');
const message = document.getElementById('message');

loadUsersBtn.addEventListener('click', async ()=>{
  userList.innerHTML = "Loading users....";
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!res.ok) throw new Error(`HTTP Error : ${res.status}`)
      const users = await res.json();
      userList.innerHTML = '';
      users.forEach(user=>{
        const div = document.createElement('div');
        div.className = 'user-card';
        div.innerHTML = `<h4>${user.name}</h4>
                         <p><strong>Email:</strong> ${user.email}</p>
                         <p><strong>Phone:</strong> ${user.phone}</p>
                         <p><strong>Address:</strong> ${user.address.street}</p>
                         <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p> <hr>`;
        userList.appendChild(div);
      })
  } catch (error) {
    userList.innerHTML = `<p style="color:red;"> Failed to load users : ${error.message}</p>`;
  }
})

// POST new user
userForm.addEventListener('submit', async(e)=>{
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if(!name || !email){
    message.textContent = "Please fill all fields!";
    message.style.color="red";
    return
  }

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',{
      method:'POST',
      headers : {'Content-Type':'application/json'},
      body : JSON.stringify({name,email})
    });

    if(!res.ok ) throw new Error(`HTTP Error : ${res.status}`);

    const newUser = await res.json();
    message.textContent = "User added successfully";
    message.style.color = "green";
    
    //Add to list
    const div = document.createElement('div');
    div.className = 'user-card';
    div.innerHTML = `<h3>${newUser.name}</h3> <p>${newUser.email}</p>`
    userList.prepend(div);
    userForm.reset();
  } catch (error) {
    message.textContent = `Error adding user : ${error.message}`;
    message.style.color = "red";
  }

})