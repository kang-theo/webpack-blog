import { getBlogPosts } from "./data";
import "./styles.css";
import Banner from "./assets/images/banner.webp"

const blogs = getBlogPosts();
const ul = document.createElement("ul");
blogs.forEach((blog)=>{
  const li = document.createElement("li");
  li.innerText = blog;  
  ul.appendChild(li);
});

document.body.appendChild(ul);

const image = document.createElement("img");
image.src = Banner;
document.body.prepend(image);
