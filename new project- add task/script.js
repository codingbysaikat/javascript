// Define UT Elements
let from= document.querySelector('#task_from');
let tasklist= document.querySelector('ul');
let clearbutton= document.querySelector('#clear_task_btn');
let filter= document.querySelector('#task_filter');
let taskinput= document.querySelector('#new_task');
console.log(tasklist.firstChild);

//Define EventLisener
from.addEventListener('submit', addtask);
tasklist.addEventListener('click',removeTask);
clearbutton.addEventListener('click',cleartask);
filter.addEventListener('keyup',filtertask);
document.addEventListener('DOMContentLoaded',getTask);
// Define funcation
//add task funcation
function addtask(e){
    if (taskinput.value ==='') {
        alert('please add a task');
        
    }
    else{
        let li= document.createElement('li');
        li.appendChild(document.createTextNode(taskinput.value+' '));
        tasklist.appendChild(li);
       
        let link= document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML='x';
        li.appendChild(link);
        StoreTaskInputLocalStore(taskinput.value);

        taskinput.value='';

    }
    e.preventDefault();

}
// task remove funcation
function removeTask(e){
    if (e.target.hasAttribute('href')) {
        if (confirm('Are you sure?')) {
            let ele= e.target.parentElement;
            ele.remove();
            removeFromLs(ele);
        }

        
    }
    

}
// clear task funcation
function cleartask(e){
    if (confirm('Are you sure?')) {
        //tasklist.innerHTML='';
        while(tasklist.firstChild){
            tasklist.removeChild(tasklist.firstChild)
        }
        localStorage.clear();
    }
}
// filter funcation
function filtertask(e){
    let text= e.target.value.toLowerCase();
    //console.log(text);
    document.querySelectorAll('li').forEach(function(item){
        let search=item.firstChild.textContent;
        if (search.toLocaleLowerCase().indexOf(text)!=-1) {
         item.style.display='block';
         
            
        }
        else{
            item.style.display='none';
             
        }

    })


}
// local sote funcation........................
function StoreTaskInputLocalStore(task){
    let tasks;
    if (localStorage.getItem('tasks')===null) {
        tasks= [];
        
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
        
    }
    tasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(tasks));

}
//get data from local storage
function getTask(){
    let tasks;
    if (localStorage.getItem('tasks')===null) {
        tasks= [];
        
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
        
    }
    tasks.forEach(function(item){
        let li= document.createElement('li');
        li.appendChild(document.createTextNode(item+' '));
        tasklist.appendChild(li);
       
        let link= document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML='x';
        li.appendChild(link);

    })

}
// remove data from local store funcation
function removeFromLs(taskItem){
    let tasks;
    if (localStorage.getItem('tasks')===null) {
        tasks= [];
        
    }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
        
    }
    let li=taskItem;
    li.removeChild(li.lastChild);//<a></a>

    tasks.forEach((task,index) =>{
        if (li.textContent.trim()===task) {
            tasks.splice(index,1);
            console.log(index)
            
        }


    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
    


}
