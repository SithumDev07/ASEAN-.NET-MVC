const TopRatedCoursesContainer = document.querySelector('#topRatedCourses');
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
];

const populateTopRatedCourses = (element) => {

    CoursesData.map(({ id, title, imageSrc, rating }) => {
        const TopRatedCourse = `
                        <div class="card border-0">
                            <img class="rounded card-img-top" src="${imageSrc}">
                            <div class="card-body p-0">
                                <h4 class="card-title fs-5 mt-2" style="min-height: 3rem">${title}</h4>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="lable-container row gx-2">
                                        <img src="/Content/Icons/Star.svg" class="col" width="19" height="19" alt="Star Icon">
                                        <img src="/Content/Icons/Star.svg" class="col" width="19" height="19" alt="Star Icon">
                                        <img src="/Content/Icons/Star.svg" class="col" width="19" height="19" alt="Star Icon">
                                        <img src="/Content/Icons/Star.svg" class="col" width="19" height="19" alt="Star Icon">
                                        <img src="/Content/Icons/Star.svg" class="col" width="19" height="19" alt="Star Icon">
                                    </div>
                                    <div class="dropdown">
                                        <button type="button" class="btn btn-sm btn-outline-dark dropdown-toggle" id="categoryDropDown" data-bs-toggle="dropdown" aria-expanded="false">
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
                        </div>
        `;
        let divElement = document.createElement('div')
        divElement.classList.add('col-12')
        divElement.classList.add('col-md-6')
        divElement.classList.add('col-lg-4')
        divElement.classList.add('col-xl-3')
        divElement.classList.add('course')
        divElement.innerHTML = TopRatedCourse;
        element.appendChild(divElement);
    })

}

populateTopRatedCourses(TopRatedCoursesContainer);
populateTopRatedCourses(InProgressCourseseContainer);