const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector(".nav_items");



//open nav menu
menuBtn.addEventListener("click", () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display ='inline-block'
})


//close nav menu
closeBtn.addEventListener("click", () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display ='none'
})

//show/hide faqs
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')
    
    const icon = faq.querySelector('.faq_icon i');
    if(icon.className === 'uil uil-plus'){
        icon.className = 'uil uil-minus';
    }
    else{
        icon.className = 'uil uil-plus';
    }
    })
})
