const formEl = document.querySelector('.form');
const authorsEl = document.querySelector('.authors');
const select = document.querySelector('.select');
const main = document.querySelector('.main');

let result;



const item = async () => {   
    select.innerHTML = '';
    const result = await axios.post('/')
    result.data.forEach(item => {
        select.innerHTML += `<option class="option">${item.name}</option>`
    });
    
}
item();


let title;
let text;
let val;

const selectChoose = document.querySelector('select[name=select]');
selectChoose.addEventListener('change', (ev) => {
    val = ev.target.value;
})

const titles = async () => {
    //обробляєм помилки
    try {
        arrtitle = await axios.post('/view-add', { title: title, text: text, name: val, })
        console.log(arrtitle.data)
      } catch (error) {
        console.error(error);
      }
}


const formTitle = document.querySelector('.formTitle');
formTitle.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    title = formData.get('title');
    text = formData.get('text');
    console.log(title, text);
    titles();
    
})
