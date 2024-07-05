document.addEventListener('DOMContentLoaded', () =>{

    //объявление функций
    
    const deleteClass = (arr, className)=>{
        for(let i = 0; i < arr.length; i++){
            arr[i].classList.remove(className);
        }
    }

    const addClass = (arr, className) => {
        for(let i = 0; i < arr.length; i++){
            arr[i].classList.add(className);
        }
    }

    //переключение страниц

    const navLink = document.querySelectorAll('.navigation__link');
    const pageSection = document.querySelectorAll('section');

    navLink.forEach((element, index) => {
        element.addEventListener('click', (evt)=>{
            if(!element.classList.contains('external__link')){
                evt.preventDefault();
                window.scrollTo(0, 0);
                addClass(pageSection, 'invisible');
                pageSection[index].classList.remove('invisible');
            }
        })
    });

    //окружности в скиллах

    const mySkillsItems = document.querySelectorAll('.about__myskills-item div');

    mySkillsItems.forEach(element =>{
        mySkillsPercent = element.querySelector('.about__percent').textContent;
        element.style.setProperty('--value', mySkillsPercent);
    });


    //переключение между типами макетов

    const projectType = document.querySelectorAll('.portfolio__element');
    const projects = document.querySelectorAll('.portfolio__items');

    const showProjects = (project, className)=>{
        deleteClass(projectType, 'portfolio__element--active');
        project.classList.add('portfolio__element--active');
        addClass(projects, 'invisible');
        addClass(projects, 'fadeIn');
        deleteClass(document.querySelectorAll(className), 'invisible');
        
    }

    projectType.forEach(element =>{
        element.addEventListener('click', ()=>{
            if(element.classList.contains('portfolio__element--all')){
                showProjects(element, '.portfolio__items');
            }else if(element.classList.contains('portfolio__element--responsive')){
                showProjects(element, '.portfolio__items--responsive');  
            }else if(element.classList.contains('portfolio__element--fix')){
                showProjects(element, '.portfolio__items--fix');
            }
        })
    })

    //модальное окно

    const homeButton = document.querySelector('.home__button');
    const about = document.querySelector('.about');
    const closeButton = document.querySelector('.popup__button');
    const buttonWrapper = closeButton.parentNode;
    const darkBackground = document.querySelector('.dark-background');

    const closeModal = ()=>{
        about.classList.remove('popup');
        darkBackground.classList.add('invisible');
        about.classList.add('invisible');
        buttonWrapper.classList.add('invisible');
    }

    homeButton.addEventListener('click', (evt)=>{
        evt.preventDefault();
        about.classList.add('popup');
        darkBackground.classList.remove('invisible');
        about.classList.remove('invisible');
        buttonWrapper.classList.remove('invisible');
    });

    closeButton.addEventListener('click', (evt)=>{
        evt.preventDefault();
        closeModal();
    });

    darkBackground.addEventListener('click', ()=>{
        closeModal();
    });

    window.addEventListener('keydown', (evt)=>{
        if(evt.keyCode === 27){
            evt.preventDefault();
            closeModal();
        }
    });

    //кнопка назад

    const buttonUp = document.querySelector('.button__up');

    const showBtn = () =>{
        buttonUp.classList.remove('fadeOut');
        buttonUp.classList.add('fadeIn');
    }

    const hideBtn = ()=>{
        buttonUp.classList.remove('fadeIn');
        buttonUp.classList.add('fadeOut');
    }

    window.addEventListener("scroll", ()=>{
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if(scrollY > 400){
            showBtn();
        }else{
            hideBtn();
        }
    });

    buttonUp.addEventListener("click", ()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

})