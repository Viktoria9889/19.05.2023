const formEl = document.querySelector('.form');
const authorsEl = document.querySelector('.authors');
const select = document.querySelector('.select');

let result;


const authors = async () => {
    arrauthor = await axios.post('/add', { name: name })
    //render()
    console.log(arrauthor.data)
}


formEl.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    name = formData.get('name');
    authors();
})
