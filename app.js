const form = document.querySelector('#inviteForm');
const input = document.querySelector('input');
const main = document.querySelector('.main');
const ul = document.querySelector('#invitedList');

/*
1. create li
------------
*/ 
function createLi() {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = input.value;
  const label = document.createElement('label');
 

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Editar';
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Excluir';

  li.appendChild(span);
  li.appendChild(label);

  li.appendChild(editBtn);
  li.appendChild(removeBtn);

  return li;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const li = createLi();

  if(input.value === '') {
    alert('Qual o seu produto?');
  } else {
    ul.appendChild(li);
  }
}); 

/*
2. Add responded class
----------------------
*/ 
ul.addEventListener('change', (event) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const li = checkbox.parentNode.parentNode;
  if(checked) {
    li.className = 'responded';
  } else {
    li.className = '';
  }
});

/*
3. Button actions
-----------------
*/ 
ul.addEventListener('click', (event) => {
  if(event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if(button.textContent === 'Excluir') {
      ul.removeChild(li);
    } else if(button.textContent === 'Editar') {
      const span = li.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = 'save';
    } else if(button.textContent === 'save') {
      const input = li.firstElementChild;
      const span = document.createElement('span');
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = 'Editar';
    }
  }
});

