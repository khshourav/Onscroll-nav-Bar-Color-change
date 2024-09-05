let navbar= document.getElementById('nav');

window.onscroll = () => {
    let scrollY = window.scrollY;
    if(scrollY){
        // navbar.style.backgroundColor='blue';
        // navbar.style.borderBottom = '4px solid green';
        navbar.classList.remove('bg-light');
        navbar.classList.add('bg-success');
    }
    else{
        navbar.classList.remove('bg-primary');
        navbar.classList.add('bg-light');
    }
}