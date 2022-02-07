//summary.html file er sathe link kora...

const blogs = document.getElementsByTagName("p");
for( const blog of blogs){
    // console.log(blog)
    blog.style.backgroundColor = "steelblue";
    blog.style.color = "black";
    blog.style.border = "2px solid red";
    blog.style.borderRadius = "10px";
    blog.style.marginBottom = "10px";
    blog.style.padding = "8px";
}

const blog3 = document.getElementById("spacial-blog");
blog3.innerHTML = `
    <h4> জাভাস্ক্রিপ্ট দিয়ে পরিবর্তন করা </h4>
    <div> 
        <ul>
            <li> ami set </li>
            <li> korte pari </li>
        </ul>
    </div>
`
// রিমুভ করা
const listRemove = document.getElementById("friends");
const fifth = listRemove.children[4]; //[4]; index number 4;
listRemove.removeChild(fifth);

// ADD element
const newName = document.createElement("li");
newName.innerText = "Name - 11 Add by JavaScript";
friends.appendChild(newName);
