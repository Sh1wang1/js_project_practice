const memeButton=document.querySelector(".but");
const memeImage=document.querySelector(".memeImg");
const memeTitle=document.querySelector(".memeTitle");
const memeAuthor=document.querySelector(".memeAuthor");

const updateDetails=(url,title,author)=>{
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML=`Meme by : ${author}`;
}
const generateMeme=()=>{
fetch("https://meme-api.com/gimme/wholesomememes")
.then((response)=>response.json())
.then((data)=>{updateDetails(data.url,data.title,data.author)
});
};
memeButton.addEventListener("click",generateMeme);