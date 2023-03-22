/* Banner*/
let dropDown = document.querySelector('.navbar-toggler')
let banner = document.querySelector('.banner')



dropDown.addEventListener('click', () => {
    banner.classList.toggle("marginTop")
})


/* Scroll Nav*/

const navigation = document.querySelector('.navbar-expand-lg')

window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        navigation.classList.add("nav-anim");
        dropDown.classList.remove('navbar-dark');

    } else {
        navigation.classList.remove("nav-anim");
        dropDown.classList.add('navbar-dark');
    }

})


const list = document.querySelectorAll('.nav-link')
const sect = document.querySelectorAll('section')

/* Active */
function activeMenu() {
    let long = sect.length-1;
    while (long-- && window.scrollY+100 < sect[long].offsetTop) { }
    list.forEach(li => li.classList.remove("active-list"))
    list[long].classList.add("active-list");
   
    
}
 
activeMenu();
window.addEventListener('scroll', activeMenu);




// Portfolio
const row = document.querySelector('.portfolio-img')


const printImage = (array) => {
    row.innerHTML = ""
    for (product of array) {
        const div1 = document.createElement('div')
        div1.classList.add('col-md-4','mt-2')

        const div2 = document.createElement('div')
        div2.classList.add('portfolio-banner')

        const images = document.createElement('img')
        images.setAttribute('src', `${product.image}`)
        images.classList.add('img-fluid', 'w-100')

        const bouton = document.createElement('button')
        bouton.classList.add('read')
        bouton.innerHTML="Quick View"

        div2.append(bouton)
        div2.append(images)
        div1.append(div2)
        row.append(div1)

        banner = document.querySelectorAll('.portfolio-banner')

        for (item of banner) {
            item.addEventListener('mouseenter', (event) => {
           
                const button = event.target.firstElementChild
      
                const img = event.target.lastElementChild
                img.style.transform = "scale(1.1)"
                button.style.top = "78%"
            })
            item.addEventListener('mouseleave', (event) => {
                const button = event.target.firstElementChild
                const img = event.target.lastElementChild
                img.style.transform = "scale(1)"
                button.style.top = "100%"
            })
        }


    }

}

printImage(portfolio)

const items = document.querySelectorAll('.button-portfolio .pf-bouton')
for(item of items){
    item.addEventListener('click', (event) => {
        const element= event.target
        element.classList.add('active-item')
        let activeMenu = event.target.id 
        
        if(activeMenu != 'all')
        printImage(portfolio.filter((value) => {
            if(value.type == activeMenu){
                return value
            }
        }))
    else{
        printImage(portfolio)
    }

        
        for(li of items){
                if(li != element){
                    li.classList.remove('active-item')
                }
            }
        })
    }


    // ********* Scroll Body
    // -------------------ABOUT-------------

    window.addEventListener('scroll', () => {
        let about = document.querySelector('.about');
        let aboutPosition = about.getBoundingClientRect().top;
        let screenAbout = window.innerHeight;
        if (aboutPosition < screenAbout) {
            about.classList.add('opacite')
        }
    }) 

     // ------------------SKILLS-------------

     window.addEventListener('scroll', () => {
        let skills = document.querySelector('.skills');
        let skillPosition = skills.getBoundingClientRect().top;
        let screenSkills = window.innerHeight;
        if (skillPosition < screenSkills) {
            skills.classList.add('opacite')
        }
    }) 

       // ------------------QUALITY-------------

       window.addEventListener('scroll', () => {
        let quality = document.querySelector('.quality');
        let qualityPosition = quality.getBoundingClientRect().top;
        let screenQuality = window.innerHeight;
        if (qualityPosition < screenQuality) {
            quality.classList.add('opacite')
        }
    }) 


       // ------------------PORTFOLIO-------------

       window.addEventListener('scroll', () => {
        let portfolio = document.querySelector('.portfolio');
        let portfolioPosition = portfolio.getBoundingClientRect().top;
        let screenPortfolio = window.innerHeight;
        if (portfolioPosition < screenPortfolio) {
           portfolio.classList.add('opacite')
        }
    }) 

      // ------------------contactS-------------

      window.addEventListener('scroll', () => {
        let contact = document.querySelector('.contact');
        let contactPosition = contact.getBoundingClientRect().top;
        let screencontact = window.innerHeight;
        if (contactPosition < screencontact) {
            contact.classList.add('opacite')
        }
    }) 

      // ------------------CONTACT-------------

      window.addEventListener('scroll', () => {
        let contact = document.querySelector('.contact');
        let contactPosition = contact.getBoundingClientRect().top;
        let screenContact = window.innerHeight;
        if (contactPosition < screenContact) {
            contact.classList.add('opacite')
        }
    }) 

    window.addEventListener('scroll', () => {
        let contact2 = document.querySelector('.contact-2');
        let contact2Position = contact2.getBoundingClientRect().top;
        let screenContact2 = window.innerHeight;
        if (contact2Position < screenContact2) {
            contact2.classList.add('opacite')
        }
    }) 