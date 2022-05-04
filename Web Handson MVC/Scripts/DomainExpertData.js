const CoursesData = [
    {
        id: 1,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022 - 28-MAY-2022",
        actionLink: "View Courses",
    },
    {
        id: 2,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022 - 28-MAY-2022",
        actionLink: "View Courses",
    },
    {
        id: 3,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022 - 28-MAY-2022",
        actionLink: "View Courses",
    },
    {
        id: 4,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022 - 28-MAY-2022",
        actionLink: "View Courses",
    },
    {
        id: 5,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022 - 28-MAY-2022",
        actionLink: "View Courses",
    },
];

const populdateNews = (element) => {
    CoursesData.map(({ title, category, duedata, actionLink }) => {

        const tablerowdata = `
            <td scope="row" class="coursetitle" >${title}</td>
            <td>${category}</td>
            <td class="duration">${duedata}</td>
            <td class="text-nowrap actiontext position-relative"><div class="d-flex align-items-center justify-content-between" ><a href="#">${actionLink}</a><button class="deletebtn">
                <i class="bi bi-three-dots "></i>
            </button></div>
                <ul class="optionmenu p-0 m-0 shadow d-none">
                    <li>
                        <button>
                            Drop
                        </button>
                    </li>
                </ul>
            </td>
        `;

        let tableRowElement = document.createElement('tr')
        tableRowElement.innerHTML = tablerowdata;
        element.appendChild(tableRowElement);

        // Action delete button click funtion
        tableRowElement.querySelector(".deletebtn").addEventListener("mousedown", () => {
            tableRowElement.querySelector(".optionmenu").classList.toggle("d-none");
            //console.log("Hellow");
        })
        tableRowElement.querySelector(".deletebtn").addEventListener("blur", () => {
            tableRowElement.querySelector(".optionmenu").classList.add("d-none");
        })
    })
}

populdateNews(document.querySelector('#assignedCourses'));


