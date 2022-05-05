$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


const CoursesData = [
    {
        id: 1,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        startDate: "28-APR-2022",
        endDate: "06-JUN-2022",
        submissions: 7,
        actionLink: "View Course",
    },
    {
        id: 2,
        title: "ClimInvesting in Quality Infrastructure for a Green, Inclusive and Resilient Recovery",
        category: "Orientation",
        startDate: "12-DEC-2022",
        endDate: "28-MAR-2023",
        submissions: 21,
        actionLink: "View Course",
    },
    {
        id: 3,
        title: "Leadership and Innovation Program (E-Course1) (Self-Paced)",
        category: "Orientation",
        startDate: "12-MAR-2022",
        endDate: "23-SEP-2022",
        submissions: 1,
        actionLink: "View Course",
    },
    {
        id: 4,
        title: "Improve the Safety of High-Alert Medications (HAMs) (Self-Paced)",
        category: "Orientation",
        startDate: "04-JAN-2022",
        endDate: "06-JUL-2022",
        submissions: 44,
        actionLink: "View Course",
    },
    {
        id: 5,
        title: "Leadership and Innovation Program (E-Course2) (Self-Paced)",
        category: "Orientation",
        startDate: "28-JAN-2022",
        endDate: "09-NOV-2022",
        submissions: 78,
        actionLink: "View Course",
    },
    {
        id: 6,
        title: "Building a Safe Surgery Culture (Self-Paced)",
        category: "Orientation",
        startDate: "28-JUL-2022",
        endDate: "31-DEC-2022",
        submissions: 2,
        actionLink: "View Course",
    }
];

const populdateNews = (element) => {
    CoursesData.map(({ title, category, startDate, endDate, actionLink }) => {
        let date = new Date(startDate)
        let sortingFactor = date.getFullYear().toString() + [date.getMonth() + 1].toString() + date.getDate().toString()
        const tablerowdata = `
            <td scope="row" class="coursetitle" >${title}</td>
            <td class="course-category">${category}</td>
            <td data-sort="${sortingFactor}" class="duration">${startDate} - ${endDate}</td>
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


