const ikka = "https://api.quotable.io/random"

const Quote=document.querySelector('#Quote');
const author = document.querySelector('#author');
const button=document.querySelector('.btn');

async function getquotable(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  Quote.innerHTML=data.content
    author.innerHTML=data.author
}
getquotable(ikka)
button.addEventListener('click', ()=>{
    getquotable(ikka)
})


