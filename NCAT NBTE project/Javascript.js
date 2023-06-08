

// let mybutton = document.getElementById("myBtn");

// window.onscroll =  function(){
//     toTop()
// };

// function toTop(){
//     if (document.documentElement.scrollTop > 100 ||
//         document.body.scrollTop > 100)
//         {
//          mybutton.style.display = "block";
//         }
//     else{
//         mybutton.style.display = "none";
//     }
// }

// function topTop(){
//     document.documentElement.scrollTop = 0;
//     document.body.scrollTop = 0;
// }


const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
const goTo = () => window.scrollTo({top: 0, behavior: 'smooth'});

// ================ Nav bar react ============================

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 1)
})


// ============ Faq toggle================

const faq = document.querySelectorAll('.faq');

faq.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        
        // change icon
        const icon = faq.querySelector('.faqs__icon i');
        if (icon.className === 'bi bi-plus')
        {
            icon.className = "bi bi-dash-lg";
        }
        else{
            icon.className = "bi bi-plus";
        }
    })
});