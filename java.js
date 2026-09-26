// menyiapkan element yang sedang di drag
let draggedBox = null

// Membuat even handler untuk menjalankan operasi drag and drop

function handleDragStart(event) {
    draggedBox = event.target;
}

function handleDragEnd(event) {
    event.preventDefault();
}

function handleDragOver(event) {
    event.preventDefault();

const targetBoxid = event.target.id;
const targetBox = document.getElementById(targetBoxid);
if (targetBox) {
    targetBox.style.backgroundColor = 'f9f9f9';
               }
}

function handleDragLeave(event) {
    event.preventDefault();

    const targetBoxId = event.target.id;
    const targetBox = document.getElementById(targetBoxId);
    if (targetBox) {
        targetBox.style.backgroundColor = 'tansparent';

    }
}

function handleDrop(event) {
    event.preventDefault();
    event.target.appendChild(draggedBox);

    const targetBoxId = event.target.id;
     const targetBox = document.getElementById(targetBoxId);

     if (targetBox) {
         targetBox.style.backgroundColor = 'tansparent';
     }
}

// mendaftarkan event handler ke event listener 
function setupBoxEvent (box) {
    box.addEventListener('dragstart', handleDragStart);
     box.addEventListener('dragend', handleDragEnd);
      box.addEventListener('dragover', handleDragOver);
       box.addEventListener('dragleave', handleDragLeave);
         box.addEventListener('drop', handleDrop);
}
// menambahkan event listener ke setiap box
let boxTodo = document.getElementById('box-todo');
setupBoxEvent(boxTodo);

let boxOnProgres = document.getElementById('box-onprogres');
setupBoxEvent(boxOnProgres);

let boxDone = document.getElementById('box-done');
setupBoxEvent(boxDone);