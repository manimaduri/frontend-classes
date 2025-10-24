const userList = document.getElementById('userList');
const loadUsersBtn = document.getElementById('loadUsers');
const userForm = document.getElementById('userForm');
const message = document.getElementById('message');

// ✅ GET USERS
loadUsersBtn.addEventListener('click', async () => {
  userList.innerHTML = "Loading users...";
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    const users = await res.json();

    userList.innerHTML = '';
    users.forEach(user => {
      const div = document.createElement('div');
      div.className = 'user-card';
      div.innerHTML = `
        <h3>${user.name}</h3>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>City:</b> ${user.address.city}</p>
      `;
      userList.appendChild(div);
    });
  } catch (err) {
    userList.innerHTML = `<p style="color:red;">Failed to load users: ${err.message}</p>`;
  }
});

// ✅ POST NEW USER
userForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!name || !email) {
    message.textContent = "Please fill all fields!";
    message.style.color = "red";
    return;
  }

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });

    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

    const newUser = await res.json();

    message.textContent = `✅ User added! ID: ${newUser.id}`;
    message.style.color = "green";

    // Add to list visually
    const div = document.createElement('div');
    div.className = 'user-card';
    div.innerHTML = `<h3>${newUser.name}</h3><p>${newUser.email}</p>`;
    userList.prepend(div);

    userForm.reset();
  } catch (err) {
    message.textContent = `❌ Error: ${err.message}`;
    message.style.color = "red";
  }
});
