let add = document.getElementById("add");
let input = document.getElementById("inputbar");
let list = document.getElementById("list");

let inp = 0;

add.addEventListener('click', () => {
    if (input.value === '') {
        alert("Invalid! Enter something");
    } else {
        let li = document.createElement("li");
        li.id=`l${inp}`;
        li.className="task"

      
        let checkbox = document.createElement('input');
        checkbox.className = 'checkbox';
        checkbox.type = 'checkbox';
        checkbox.id = `checkbox${inp}`;

        let div=document.createElement('div');
        div.id=`div${inp}`
        className='divcontainer'

        
        let textNode = document.createTextNode(input.value);
        div.innerText=input.value;

        // Create the remove icon with a unique ID
        let icon = document.createElement('i');
        icon.className = 'fa-solid fa-x';
        icon.id = `fa-x${inp}`;

        // Add the elements to the list item
        li.appendChild(checkbox);
        li.appendChild(div);
       
        li.appendChild(icon);

        // Append the list item to the list
        list.appendChild(li);

       
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
            
                list.appendChild(li);
                li.style.textDecoration = 'line-through';
                li.style.opacity='0.5';
            }
            else {
                li.style.textDecoration = 'none';
                li.style.opacity='1';
                
            }
        });

        
        icon.addEventListener('click', () => {
            li.remove();
        });

        inp++; 
    }

    
    input.value = '';
});

function removeX(inp,li){
const removeIcon = document.getElementById(`fa-x${inp}`);

        
        removeIcon.addEventListener('click', () => {
            li.remove();  
        });
    }
