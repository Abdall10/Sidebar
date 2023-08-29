const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
    nav =document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    header = document.getElementById(headerId)


    if(toggle && nav && bodyId && header){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')

            toggle.classList.toggle('bx-x')

            bodyId.classList.toggle('body-pd')
            header.classList.toggle('header')
        })
    }
}
showNavbar('header-toggle','nav-bar', 'body-pd','header')

const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    }
}

linkColor.forEach(l=> l.addEventListener('click', colorLink))
