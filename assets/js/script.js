let mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    let form = document.getElementById('register_form');
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        form.classList.add('dark');
        return;
    }
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');
    form.classList.remove('dark');
    
});

