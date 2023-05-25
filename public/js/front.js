const formEl = document.querySelector('.form');
const authorsEl = document.querySelector('.authors');
const select = document.querySelector('.select');

let result;


const authors = async () => {
    //обробляєм помилки
    try {
        arrauthor = await axios.post('/add', { name: name });
        console.log(arrauthor.data)
      } catch (error) {
        console.error(error);
      }
}


formEl.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    name = formData.get('name');
    authors();
})