import { getBlogPosts } from "./data";

const blogs = getBlogPosts();
const ul = document.createElement("ul");
blogs.forEach((blog)=>{
  const li = document.createElement("li");
  li.innerText = blog;  
  ul.appendChild(li);
});

document.body.appendChild(ul);