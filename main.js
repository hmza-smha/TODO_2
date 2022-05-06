var taskList = document.getElementById('task_list');
var creatContainer = document.getElementById('create');

var nameInfo = document.getElementById('name_info');
var dueDateInfo = document.getElementById('due_date_info');
var breifInfo = document.getElementById('breif_info');

var todayTasks = [];
var tomorrowTasks = [];
var somedayTasks = [];

//default today click
window.onload = function() {
    document.getElementById('today_aside').click();
}

// dates in create task container
var date;
var today = document.getElementById('today');
var tomorrow = document.getElementById('tomorrow');
var someday = document.getElementById('someday');

today.onclick = function() {

    date = "today";
    this.style.backgroundColor = "seagreen";
    tomorrow.style.backgroundColor = "#194350";
    someday.style.backgroundColor = "#194350";
}
tomorrow.onclick = function() {
    date = "tomorrow";
    this.style.backgroundColor = "seagreen";
    today.style.backgroundColor = "#194350";
    someday.style.backgroundColor = "#194350";
}
someday.onclick = function() {
    date = "someday";
    this.style.backgroundColor = "seagreen";
    today.style.backgroundColor = "#194350";
    tomorrow.style.backgroundColor = "#194350";
}

//create button event
document.getElementById('create_btn').onclick = function() {
    date = "";
    document.getElementById('task_name').value = "";
    breif.value = "";
    taskList.style.visibility = 'hidden';
    creatContainer.style.visibility = 'visible';

    today.style.backgroundColor = "#194350";
    tomorrow.style.backgroundColor = "#194350";
    someday.style.backgroundColor = "#194350";
}

// submit button in createContainer(FORM) event
document.getElementById('submit_task_btn').onclick = function() {
    if (date == "") {
        alert("whta is date daddy??");
        return; // this make the function continue
    }
    taskList.style.visibility = 'visible';
    creatContainer.style.visibility = 'hidden';

    // create a task (li) HTML element
    var newTask = document.createElement('li');
    newTask.classList.add("task");
    //create done button
    var doneBtn = document.createElement('span');
    doneBtn.classList.add("done_btn");
    var doneText = document.createTextNode('done');
    doneBtn.appendChild(doneText);

    //get new task name
    var taskName = document.createTextNode(document.getElementById('task_name').value);
    //get brief
    var breif = document.createTextNode(document.getElementById('breif').value);

    // 1 add name to the task
    newTask.appendChild(taskName);
    // 2 add done btn to the task
    newTask.appendChild(doneBtn);

    //check date
    if (date == "today") {
        todayTasks.push(newTask);
    } else if (date == "tomorrow") {
        tomorrowTasks.push(newTask);
    } else if (date == "someday") {
        somedayTasks.push(newTask);
    }

    //create tsk obj
    var tsk = {
        name: document.getElementById('task_name').value,
        date: date,
        breif: document.getElementById('breif').value
    }


    newTask.addEventListener("click", function() {
        nameInfo.innerHTML = tsk.name;
        dueDateInfo.innerHTML = tsk.date;
        breifInfo.innerHTML = tsk.breif;
    }, true)



    doneBtn.addEventListener("click", function() {
        newTask.remove();
        nameInfo.innerHTML = "";
        dueDateInfo.innerHTML = "";
        breifInfo.innerHTML = "";
        if (date == "today") {
            todayTasks.pop(newTask);
        } else if (date == "tomorrow") {
            tomorrowTasks.pop(newTask);
        } else if (date == "someday") {
            somedayTasks.pop(newTask);
        }
    })

}

//whole screen clickable expect creat btn and formContainer
document.body.onclick = function(e) {
    e = e.target;
    if (e.id != "create_btn" &&
        e.id != "create" &&
        e.parentElement.id != "create") {
        taskList.style.visibility = 'visible';
        creatContainer.style.visibility = 'hidden';
    }
}


document.getElementById('today_aside').onclick = function() {

    this.style.border = "1px solid seagreen";
    document.getElementById('tomorrow_aside').style.border = "none";
    document.getElementById('someday_aside').style.border = "none";

    if (todayTasks.length == 0) {
        taskList.innerHTML = "No tasks";
    } else {
        taskList.innerHTML = "";
    }
    for (i in todayTasks) {
        taskList.appendChild(todayTasks[i]);
    }
}

document.getElementById('tomorrow_aside').onclick = function() {
    this.style.border = "1px solid seagreen";
    document.getElementById('today_aside').style.border = "none";
    document.getElementById('someday_aside').style.border = "none";
    if (tomorrowTasks.length == 0) {
        taskList.innerHTML = "No tasks";
    } else {
        taskList.innerHTML = "";
    }
    for (i in tomorrowTasks) {
        taskList.appendChild(tomorrowTasks[i]);
    }
}

document.getElementById('someday_aside').onclick = function() {
    this.style.border = "1px solid seagreen";
    document.getElementById('tomorrow_aside').style.border = "none";
    document.getElementById('today_aside').style.border = "none";
    if (somedayTasks.length == 0) {
        taskList.innerHTML = "No tasks";
    } else {
        taskList.innerHTML = "";
    }
    for (i in somedayTasks) {
        taskList.appendChild(somedayTasks[i]);
    }
}