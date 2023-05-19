const main = document.querySelector('.main');
let result;
let title;
let text;

const item = async () => {   
    main.innerHTML = '';
    const result = await axios.post('/view', { title: title, text: text, name: name, })
    result.data.forEach(item => {
        main.innerHTML += ` 
                            <div class="div_name">
                                <span class="span_name"><span>Автор:</span>${item.name}</span>
                            </div>
                           <div class="div_title">
                                <span class="span_title">${item.title}</span>
                           </div>
                            <div class="div_text">
                                <span class="span_text">${item.text}</span>
                            </div>
                            `
    });
    
}
item();

