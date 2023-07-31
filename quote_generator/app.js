let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('btn')
let twitter = document.querySelector(".twitter")

const url = "https://api.quotable.io/random";

let getQuote = () =>{
    btn.classList.add("Loading");
    btn.innerText = "Loading Quote...";
    fetch(url)
    .then((data)=> data.json())
    .then((item) => {
        //  console.log(item.content);
        // console.log(item.author);
        quote.innerText = item.content;
        author.innerText = item.author;
        btn.innerText = "New Quote";
        btn.classList.remove("Loading");
    });
};
twitter.addEventListener("click",()=>{
let twiUrl = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
window.open(twiUrl,"_blank");
});
window.addEventListener("load", getQuote)
btn.addEventListener("click", getQuote)

