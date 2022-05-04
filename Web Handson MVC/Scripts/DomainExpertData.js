$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


const CoursesData = [
    {
        id: 1,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        dueDate: "28-APR-2022 - 06-JUN-2022",
        submissions: 7,
        actionLink: "View Submission",
    },
    {
        id: 2,
        title: "ClimInvesting in Quality Infrastructure for a Green, Inclusive and Resilient Recovery",
        category: "Orientation",
        dueDate: "12-DEC-2022 - 28-MAR-2023",
        submissions: 21,
        actionLink: "View Submission",
    },
    {
        id: 3,
        title: "Leadership and Innovation Program (E-Course1) (Self-Paced)",
        category: "Orientation",
        dueDate: "12-MAR-2022 - 23-SEP-2022",
        submissions: 1,
        actionLink: "View Submission",
    },
    {
        id: 4,
        title: "Improve the Safety of High-Alert Medications (HAMs) (Self-Paced)",
        category: "Orientation",
        dueDate: "04-JAN-2022 - 06-JUL-2022",
        submissions: 44,
        actionLink: "View Submission",
    },
    {
        id: 5,
        title: "Leadership and Innovation Program (E-Course2) (Self-Paced)",
        category: "Orientation",
        dueDate: "28-JAN-2022 - 09-NOV-2022",
        submissions: 78,
        actionLink: "View Submission",
    },
    {
        id: 6,
        title: "Building a Safe Surgery Culture (Self-Paced)",
        category: "Orientation",
        dueDate: "28-JUL-2022 - 31-DEC-2022",
        submissions: 2,
        actionLink: "View Submission",
    }
];

const populdateNews = (element) => {
    CoursesData.map(({ title, category, dueDate, actionLink }) => {

        const tablerowdata = `
            <td scope="row" class="coursetitle" >${title}</td>
            <td class="course-category">${category}</td>
            <td class="duration">${dueDate}</td>
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


