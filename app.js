const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`;

list.innerHTML += html;

};

addForm.addEventListener('submit', e => {

    e.preventDefault();

    const todo = addForm.add.value.trim();
//if length return zero, if a user has typed nothing in here press enter
    if(todo.length){ //it's true 
        generateTemplate(todo); // calls the generateTemplate function to add the todo item to the list
        addForm.reset(); //inputfield is reset 
    }
});

//delete todos

list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){ 
        e.target.parentElement.remove();
    }

});