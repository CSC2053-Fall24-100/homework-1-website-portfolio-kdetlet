const button = document.getElementById('toggle-schedule');
const schedule = document.getElementById('schedule-container');
button.addEventListener('click', function(){
    if(schedule.style.display == 'none'){
        schedule.style.display = 'block';
        button.textContent = 'Hide Schedule';
    }
    else{
        schedule.style.display = 'none';
        button.textContent = 'Show Schedule';
    }
})