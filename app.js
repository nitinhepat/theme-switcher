const bodyContainer = document.body;
const themeAction = document.getElementById('theme-action');

const currentTheme = localStorage.getItem('theme');

if(currentTheme && currentTheme !== 'light'){
        bodyContainer.classList.replace('light','dark');
        localStorage.setItem('theme','dark');
        themeAction.classList.replace('fa-moon-o','fa-sun-o');

}

themeAction.onclick = () =>{
    if(bodyContainer.classList.contains('light')){
        bodyContainer.classList.replace('light','dark');
        localStorage.setItem('theme','dark');
        themeAction.classList.replace('fa-moon-o','fa-sun-o');

    } else if(bodyContainer.classList.contains('dark')){
        bodyContainer.classList.replace('dark','light');
        localStorage.setItem('theme','light');
        themeAction.classList.replace('fa-sun-o','fa-moon-o');
    }
}