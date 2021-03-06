const InProgressCourseseContainer = document.querySelector('#inProgressCourses');
const TopRatedCoursesData = [
    {
        id: 1,
        title: "e-Learning course on Innovative Business Models for Expanding Fiber-Optic Networks and Closing the Access Gaps",
        imageSrc: "./Content/Images/Courses/nr1.png",
        rating: 5,
    },
    {
        id: 2,
        title: "Land Pooling / Land Readjustment: An Alternative to Compulsory Land Acquisition",
        imageSrc: "./Content/Images/Courses/nr2.png",
        rating: 5,
    },
    {
        id: 3,
        title: "Impact Evaluation Methods with Applications in Low- and Middle-Income Countries",
        imageSrc: "./Content/Images/Courses/nr3.png",
        rating: 5,
    },
    {
        id: 4,
        title: "Introduction to Public Expenditure and Financial Accountability (PEFA)",
        imageSrc: "./Content/Images/Courses/nr4.png",
        rating: 5,
    },
    {
        id: 5,
        title: "Investing in Quality Infrastructure for a Green, Inclusive and Resilient Recovery",
        imageSrc: "./Content/Images/Courses/nr5.png",
        rating: 5,
    },
    {
        id: 6,
        title: "Digital Dividends: Strengthening the Analog Foundation of the Digital Revolution",
        imageSrc: "./Content/Images/Courses/nr6.png",
        rating: 5,
    },
    {
        id: 7,
        title: "The Hidden Side of Energy Access: Clean Cooking",
        imageSrc: "./Content/Images/Courses/nr7.png",
        rating: 5,
    },
];

const InProgressCoursesData = [
    {
        id: 1,
        title: "Urban Upgrading for Inclusion, Sustainability and Resilience in a time of Global Pandemics",
        imageSrc: "./Content/Images/Courses/ip1.png",
        rating: 2,
    },
    {
        id: 2,
        title: "GREENTECH: Mainstreaming Technologies in Green, Blue and Clean Operations",
        imageSrc: "./Content/Images/Courses/ip2.png",
        rating: 3,
    },
    {
        id: 3,
        title: "Strengthening Geospatial Information Management: Using the Integrated Geospatial Information Framework (Virtual Knowledge Exchange)",
        imageSrc: "./Content/Images/Courses/ip3.png",
        rating: 5,
    },
    {
        id: 4,
        title: "e-Learning course on Appraising the wider Economic Benefits of Transport Corridor Investments",
        imageSrc: "./Content/Images/Courses/ip4.png",
        rating: 4,
    },
    {
        id: 5,
        title: "e-Learning course on Railway Financing",
        imageSrc: "./Content/Images/Courses/ip5.png",
        rating: 0,
    },
    {
        id: 6,
        title: "Strengthening Geospatial Information Management: Using the Integrated Geospatial Information Framework",
        imageSrc: "./Content/Images/Courses/ip6.png",
        rating: 1,
    },
    {
        id: 7,
        title: "The Hidden Side of Energy Access: Understanding Clean Cooking (Virtual Knowledge Exchange)",
        imageSrc: "./Content/Images/Courses/ip7.png",
        rating: 5,
    },
];

const newAndRecommendedCoursesData = [
    {
        id: 1,
        title: "Unlocking Investment and Finance in Emerging Markets and Developing Economies (EMDEs)",
        imageSrc: "./Content/Images/Courses/tr2.png",
        rating: 3,
    },
    {
        id: 2,
        title: "Think Road Safety – Road Safety Training for External Partners",
        imageSrc: "./Content/Images/Courses/tr7.png",
        rating: 5,
    },
    {
        id: 3,
        title: "Trading for Development in the Age of Global Value Chains - Word Development Report 2020",
        imageSrc: "./Content/Images/Courses/tr6.png",
        rating: 1,
    },
    {
        id: 4,
        title: "Smart Cities for Sustainable Development",
        imageSrc: "./Content/Images/Courses/tr4.png",
        rating: 0,
    },
    {
        id: 5,
        title: "Data for Better Lives: A New Social Contract - Self Paced",
        imageSrc: "./Content/Images/Courses/tr5.png",
        rating: 4,
    },
    {
        id: 6,
        title: "e-Learning on Digital Agriculture",
        imageSrc: "./Content/Images/Courses/tr3.png",
        rating: 4,
    },
    {
        id: 7,
        title: "Solid Waste Management",
        imageSrc: "./Content/Images/Courses/tr1.png",
        rating: 5,
    },
];


const populdateNews = (element, actions, dataSet) => {
    dataSet.map(({ id, title, imageSrc, rating }) => {

        if (title.length > 50) {
            if (window.innerWidth < 769) {
                title = title.slice(0, 40) + '...';
            } else {
                title = title.slice(0, 50) + '...';
            }
        }

        const newsEle = `
        <div class="card border-0">
            <img class="rounded card-img-top" src="${imageSrc}">
            <div class="card-body p-0">
                <h4 class="card-title mt-2 course-card-title">${title}</h4>
                <div class="d-flex align-items-center justify-content-between">
                    <div class="lable-container star-container d-flex align-items-center">
                    </div>
                    <div class="dropdown relative courses-action-dropdown">
                        <button type="button" class="btn asean-primary text-white view-btn ps-4 ps-md-3 ps-xl-4 pe-4 pe-md-3 pe-xl-4 pt-lg-2 pb-lg-2">View</button>
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

        let ratingStars = ``;

        [...Array(rating)].map((x, i) => {
            ratingStars = ratingStars + `<i class="bi bi-star-fill icon"></i>`;
        })


        console.log();
        [...Array(5 - rating)].map((x, i) => {
            ratingStars = ratingStars + `<i class="bi bi-star icon"></i>`;
        })

        ratingStars = ratingStars + `<p class="rating-label"><span class="fw-bold rating-count">${rating}</span><span>/5</span></p>`;

        let divElement = document.createElement('div')
        divElement.classList.add('news-slider__item')
        divElement.classList.add('swiper-slide')
        divElement.innerHTML = newsEle;
        element.appendChild(divElement);
        divElement.querySelector('.star-container').innerHTML = ratingStars

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

populdateNews(document.querySelector('#toprated_courses'), ['Register', 'Go To Plan'], TopRatedCoursesData);

populdateNews(document.querySelector('#in_progress_courses'), ['Resume', 'Go To Plan'], InProgressCoursesData);

populdateNews(document.querySelector('#new_recommendations_courses'), ['Register', 'Go To Plan'], newAndRecommendedCoursesData);


const myLearningPlanData = [
    {
        id: 1,
        courseTitle: "Enhancing FCV Operations with Geospatial ICT Tools",
        courseCategory: "Orientation",
        courseStatus: "In Progress",
        lableColor: 'yellow',
        dueDate: "25-JUN-2022",
        action: "Resume",
        mandatory: false,
    },
    {
        id: 2,
        courseTitle: "Post-Approval Changes to Marketing Authorizations Training",
        courseCategory: "Skill Development",
        courseStatus: "In Progress",
        lableColor: 'yellow',
        dueDate: "9-MAY-2022",
        action: "Print Certificate",
        mandatory: false,
    },
    {
        id: 3,
        courseTitle: "Land Pooling / Readjustment : An Alternative to Compulsory Land Acquisition (Self-Paced)",
        courseCategory: "Orientation",
        courseStatus: "Pending",
        lableColor: 'blue',
        dueDate: "18-JULY-2022",
        action: "Register",
        mandatory: true,
    },
    {
        id: 4,
        courseTitle: "IFC IQ-Healthcare: Patient Safety Training",
        courseCategory: "Orientation",
        courseStatus: "Expired",
        lableColor: 'red',
        dueDate: "11-MAY-2022",
        action: "Register",
        mandatory: false,
    },
    {
        id: 5,
        courseTitle: "Smart Cities for Global Frontier Infrastructure (Virtual Knowledge Exchange)",
        courseCategory: "Orientation",
        courseStatus: "Expired",
        lableColor: 'red',
        dueDate: "24-MAY-2022",
        action: "Register",
        mandatory: false,
    }
]

const populateMyLearningCourses = (element, dataSet) => {
    dataSet.slice(0, 4).map(({ courseTitle, courseStatus, dueDate, action, lableColor, mandatory }) => {
        let date = new Date(dueDate);
        let today = new Date();
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        remainDays = Math.round((date - today) / oneDay);
        if (courseTitle.length > 50) {
            if (window.innerWidth < 769) {
                courseTitle = courseTitle.slice(0, 40) + '...';
            } else {
                courseTitle = courseTitle.slice(0, 50) + '...';
            }
        }
        const mylearningCard = `
        <div class="myiconspan align-items-center position-relative ">
            <i class="bi bi-mortarboard myplanicon "></i>
            <i class="bi bi-exclamation-triangle-fill position-absolute warningicon ${mandatory ? 'd-block' : 'd-none'}"></i>
        </div>
        <div class="content">
            <h4>${courseTitle}</h4>
            <p class="status-label status-label-${lableColor} mb-1 mb-xxl-2">${courseStatus}</p>
            <div class="d-flex align-items-center mb-1 mb-xxl-3" ><p class="mb-0 remaindayscolum">${dueDate}</p><span class="mb-1 ${remainDays < 1 ? "d-none" : "d-block"
        } fst-italic ${remainDays > 5 ? 'remaindaystext' : 'endingremaindaystext'}">${remainDays} days more</span></div>
            <a href="#" class="">${action}</a>
            </div>
        `;

        let divElement = document.createElement('div')
        divElement.classList.add('d-flex')
        divElement.classList.add('learning-card')
        divElement.classList.add('mt-2')
        divElement.innerHTML = mylearningCard;
        element.appendChild(divElement);
    })
}

populateMyLearningCourses(document.querySelector('.learning-card-wrapper'), myLearningPlanData)

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
            slidesPerView: 2,
            centeredSlides: false
        },
        960: {
            spaceBetween: 30,
            slidesPerView: 3,
            centeredSlides: false
        },
        1025: {
            spaceBetween: 30,
            slidesPerView: 2,
            centeredSlides: false
        },
        1920: {
            spaceBetween: 30,
            slidesPerView: 3,
            centeredSlides: false
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
    },
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

const footer = document.querySelector('footer');
const myPlanning = document.querySelector('.right-my-planning');
myPlanning.style.bottom = `${footer.clientHeight}px`