const InProgressCourseseContainer = document.querySelector('#inProgressCourses');
const CoursesData = [
    {
        id: 1,
        title: "Enhancing FCV Operations with Geospatial ICT Tools",
        imageSrc: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        rating: 3,
    },
    {
        id: 2,
        title: "Post-Approval Changes to Marketing Authorizations Training",
        imageSrc: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        rating: 3,
    },
    {
        id: 3,
        title: "Land Pooling / Readjustment : An Alternative to Compulsory Land Acquisition (Self-Paced)",
        imageSrc: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        rating: 3,
    },
    {
        id: 4,
        title: "IFC IQ-Healthcare: Patient Safety Training",
        imageSrc: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        rating: 3,
    },
    {
        id: 4,
        title: "Smart Cities for Global Frontier Infrastructure (Virtual Knowledge Exchange)",
        imageSrc: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        rating: 3,
    },
    {
        id: 4,
        title: "Land Pooling/Readjustment: An Alternative to Compulsory Land Acquisition (Self-Paced)",
        imageSrc: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        rating: 3,
    },
    {
        id: 4,
        title: "Smart Cities for Global Frontier Infrastructure (Virtual Knowledge Exchange)",
        imageSrc: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        rating: 3,
    },
];

console.log(CoursesData[1].title.length);

const populdateNews = (element, actions) => {
    CoursesData.map(({ id, title, imageSrc, rating }) => {

        if (title.length > 60) {
            if (window.innerWidth < 769) {
                title = title.slice(0, 40) + '...';
            } else {
                title = title.slice(0, 60) + '...';
            }
        }

        const newsEle = `
        <div class="card border-0">
            <img class="rounded card-img-top" src="${imageSrc}">
            <div class="card-body p-0">
                <h4 class="card-title mt-2 course-card-title">${title}</h4>
                <div class="d-flex align-items-center justify-content-between">
                    <div class="lable-container row gx-2 star-container d-flex align-items-center">
                        <i class="bi bi-star-fill icon"></i>
                        <i class="bi bi-star-fill icon"></i>
                        <i class="bi bi-star-fill icon"></i>
                        <i class="bi bi-star icon"></i>
                        <i class="bi bi-star icon"></i>
                    </div>
                    <div class="dropdown relative courses-action-dropdown">
                        <button type="button" class="btn asean-primary text-white view-btn">View</button>
                        <button type="button" class="btn btn-sm dropdown-toggle text-asean-primary dropdown-trigger">
                            
                        </button>
                        <ul class="absolute course-dropdown-menu shadow-sm d-none">
                            <li><a class="dropdown-item" href="#">${actions[0]}</a></li>
                            <li><a class="dropdown-item" href="#">${actions[1]}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;

        let divElement = document.createElement('div')
        divElement.classList.add('news-slider__item')
        divElement.classList.add('swiper-slide')
        divElement.innerHTML = newsEle;
        element.appendChild(divElement);

        divElement.querySelector('.dropdown-trigger').addEventListener('click', () => {
            console.log('Close Dropdown')
            divElement.querySelector('.course-dropdown-menu').classList.toggle('d-none')
        })

        divElement.querySelector('.dropdown-trigger').addEventListener('blur', () => {
            console.log('Close Dropdown')
            divElement.querySelector('.course-dropdown-menu').classList.add('d-none')
        })
    })

}

populdateNews(document.querySelector('.swiper-wrapper'), ['Register', 'Go To Plan']);

populdateNews(document.querySelector('#in_progress_courses'), ['Resume', 'Go To Plan']);

populdateNews(document.querySelector('#new_recommendations_courses'), ['Resume', 'Go To Plan']);

var swiper = new Swiper('.news-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: false,
    centeredSlides: true,
    keyboard: false,
    spaceBetween: 15,
    slidesPerView: 1,
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints: {
        760: {
            slidesPerView: 3,
            centeredSlides: false
        },
        960: {
            spaceBetween: 30,
            slidesPerView: 4,
            centeredSlides: false
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
    },
});


