const CoursesData = [
    {
        id: 1,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
    },
    {
        id: 2,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
    },
    {
        id: 3,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
    },
    {
        id: 4,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
    },
    {
        id: 5,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
    },
    {
        id: 5,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
    },
    {
        id: 5,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
    },
    {
        id: 5,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
    },
    {
        id: 5,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
    },
    {
        id: 5,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
    },
    {
        id: 5,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
    },

];

const populdateNews = (element) => {
    CoursesData.map(({ title, category, duedata, submissions, actionLink }) => {

        const tablerowdata = `
            <td scope="row" class="coursetile">${title}</td>
            <td>${category}</td>
            <td class="duedate">${duedata}</td>
            <td>${submissions}</td>
            <td class="text-nowrap actiontext position-relative"><div class="d-flex align-items-center justify-content-between" ><a href="#">${actionLink}</a><button class="deletebtn">
                <i class="bi bi-three-dots "></i>
            </button></div>
                <ul class="optionmenu p-0 m-0 shadow d-none">
                    <li><button>Delete</button></li>
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
//15.5
//<td><a href="${actionLink}" class="link-primary">View Course</a></td>
populdateNews(document.querySelector('#assignedCourses'));


