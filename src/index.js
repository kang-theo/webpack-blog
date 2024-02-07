import { getBlogPosts } from "./data";
import "./styles.css";
import Banner from "./assets/images/banner.webp"

const blogs = getBlogPosts();
const ul = document.createElement("ul");
// arrow function from ES6, use babel to convert to ES5
blogs.forEach((blog)=>{
  const li = document.createElement("li");
  li.innerText = blog;  
  ul.appendChild(li);
});

document.body.appendChild(ul);

const image = document.createElement("img");
image.src = Banner;
document.body.prepend(image);
