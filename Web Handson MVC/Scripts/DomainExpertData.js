$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

const CoursesData = [
    {
        id: 1,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        from: "28-APR-2022",
        to: "28-MAY-2022",
        actionLink: "View Courses",
        mandatory: true,
    },
    {
        id: 2,
        title: "Digital Dividends: Strengthening the Analog Foundation of the Digital Revolution",
        category: "Orientation",
        from: "28-APR-2022",
        to: "28-MAY-2022",
        actionLink: "View Courses",
        mandatory: false,
    },
    {
        id: 3,
        title: "The Hidden Side of Energy Access: Clean Cooking",
        category: "Orientation",
        from: "28-APR-2022",
        to: "28-MAY-2022",
        actionLink: "View Courses",
        mandatory: false,
    },
    {
        id: 4,
        title: "Impact Evaluation Methods with Applications in Low- and Middle-Income Countries",
        category: "Orientation",
        from: "28-APR-2022",
        to: "28-MAY-2022",
        actionLink: "View Courses",
        mandatory: false,
    },
    {
        id: 5,
        title: "Strengthening Geospatial Information Management: Using the Integrated Geospatial Information Framework (Virtual Knowledge Exchange)",
        category: "Orientation",
        from: "28-APR-2022",
        to: "28-MAY-2022",
        actionLink: "View Courses",
        mandatory: true,
    },
];

const populdateNews = (element) => {
    CoursesData.map(({ id, title, category, from, to, actionLink, mandatory }) => {

        const tablerowdata = `
            <td>
                <div class="d-flex flex-row justify-content-start align-items-center">
                   <div class="myiconspan align-items-center position-relative" data-toggle="tooltip" data-placement="right" title="${mandatory ? 'Mandatory' : 'Optional'}">
                        <i class="bi bi-mortarboard myplanicon "></i>
                        <i class="bi bi-exclamation-triangle-fill position-absolute warningicon ${mandatory ? 'd-block' : 'd-none'}"></i>
                    </div>
                    <div class="coursetitle">
                        ${title}
                    </div>
                </div>
            </td>
            <td>${category}</td>
            <td class="duration">${from}</td>
            <td class="duration">${to}</td>
            <td class="text-nowrap actiontext position-relative"><div class="d-flex align-items-center justify-content-between" ><a href="#">${actionLink}</a><button class="deletebtn">
                <i class="bi bi-three-dots "></i>
            </button></div>
                <ul class="optionmenu p-0 m-0 shadow d-none">
                    <li><button class="dropbutton dropbutton-${id}">Drop</button></li>
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

function onDropBtn() {
    let confirmation = document.getElementById("confirmation");
    CoursesData.map(({ id, title }) => {
        document.querySelector(`.dropbutton-${id}`).addEventListener('mousedown', function () {
            if (!confirmation.classList.contains("model-open")) {
                document.querySelector('#delete-course-description').innerHTML = `Are you sure you want to drop <span class="highlightCourseName">${title}</span> course?`;
                confirmation.classList.remove("model-close");
                confirmation.classList.add("model-open");
            }
        })
    })

}

function onCancel() {
    document.querySelector("#confirmation").classList.remove("model-open");
    document.querySelector("#confirmation").classList.add("model-close");
}

populdateNews(document.querySelector('#assignedCourses'));
onDropBtn();


