const InProgressCourseseContainer = document.querySelector('#inProgressCourses');
const CoursesData = [
    {
        id: 1,
        title: "Introduction to Project Management",
        imageSrc: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        rating: 3,
    },
    {
        id: 2,
        title: "Master CRUD .NET Core Web",
        imageSrc: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        rating: 3,
    },
    {
        id: 3,
        title: "Introduction to Project Management",
        imageSrc: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        rating: 3,
    },
    {
        id: 4,
        title: "Introduction to Project Management",
        imageSrc: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        rating: 3,
    },
    {
        id: 4,
        title: "Introduction to Project Management",
        imageSrc: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        rating: 3,
    },
    {
        id: 4,
        title: "Introduction to Project Management",
        imageSrc: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        rating: 3,
    },
    {
        id: 4,
        title: "Introduction to Project Management",
        imageSrc: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        rating: 3,
    },
];

const populdateNews = (element) => {
    CoursesData.map(({ id, title, imageSrc, rating }) => {

        const newsEle = `
        <div class="card border-0">
            <img class="rounded card-img-top" src="${imageSrc}">
            <div class="card-body p-0">
                <h4 class="card-title mt-2 course-card-title">${title}</h4>
                <div class="d-flex align-items-center justify-content-between">
                    <div class="lable-container row gx-2">
                        <img src="/Content/Icons/StarGold.svg" class="col" width="19" height="19" alt="Star Icon">
                        <img src="/Content/Icons/StarGold.svg" class="col" width="19" height="19" alt="Star Icon">
                        <img src="/Content/Icons/StarGold.svg" class="col" width="19" height="19" alt="Star Icon">
                        <img src="/Content/Icons/Star.svg" class="col" width="19" height="19" alt="Star Icon">
                        <img src="/Content/Icons/Star.svg" class="col" width="19" height="19" alt="Star Icon">
                    </div>
                    <div class="dropdown">
                        <button type="button" onCLick="() => console.log('View Dropdown')" class="btn btn-sm btn-outline-dark dropdown-toggle" id="categoryDropDown" data-bs-toggle="dropdown" aria-expanded="false">
                            View
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="categoryDropDown">
                            <li><a class="dropdown-item" href="#">Provincial</a></li>
                            <li><a class="dropdown-item" href="#">Provincial</a></li>
                            <li><a class="dropdown-item" href="#">Provincial</a></li>
                            <li><a class="dropdown-item" href="#">Provincial</a></li>
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
    })
}

populdateNews(document.querySelector('.swiper-wrapper'));

populdateNews(document.querySelector('#in_progress_courses'));

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


