function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data));
}

function loadUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displayUser(data));
}

function displayUser(data){
    const ul = document.getElementById("users")
    for(const user of data){
        const li = document.createElement("li");
        // li.innerText = user.name;
        li.innerText = `name: ${user.name} Email: ${user.email}`;
        ul.appendChild(li);
    }
}

// btn a onclick deya ase..
function loadPost(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => displayPost(data));
}

function displayPost(posts){
    const postContainer = document.getElementById("posts");

    for(const post of posts ){
        console.log(post.title);
        const div = document.createElement("div");
        div.classList.add("post");
        div.innerHTML = `<h3>${post.title}</h3>
            <p>${post.body}</h3>
        `;
        postContainer.appendChild(div);
        console.log(post.title);
    }
}