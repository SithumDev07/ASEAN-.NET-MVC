$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


const CoursesData = [
    {
        id: 1,
        title: "Unlocking Investment and Finance in Emerging Markets and Developing Economies (EMDEs)",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
        mandatory: false,
    },
    {
        id: 2,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
        mandatory: true,
    },
    {
        id: 3,
        title: "Think Road Safety – Road Safety Training for External Partners",
        category: "Skill Development",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
        mandatory: false,
    },
    {
        id: 4,
        title: "Smart Cities for Sustainable Development",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
        mandatory: false,
    },
    {
        id: 5,
        title: "e-Learning on Digital Agriculture",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
        mandatory: true,
    },
    {
        id: 6,
        title: "Strengthening Geospatial Information Management: Using the Integrated Geospatial Information Framework (Virtual Knowledge Exchange)",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
        mandatory: false,
    },
    {
        id: 7,
        title: "e-Learning course on Appraising the wider Economic Benefits of Transport Corridor Investments",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
        mandatory: true,
    },
    {
        id: 8,
        title: "The Hidden Side of Energy Access: Understanding Clean Cooking (Virtual Knowledge Exchange)",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
        mandatory: false,
    },
    {
        id: 9,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
        mandatory: false,
    },
    {
        id: 10,
        title: "Unlocking Investment and Finance in Emerging Markets and Developing Economies (EMDEs)",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
        mandatory: true,
    },
    {
        id: 11,
        title: "Trading for Development in the Age of Global Value Chains - Word Development Report 2020",
        category: "Orientation",
        duedata: "28-APR-2022",
        submissions: 7,
        actionLink: "View Submission",
        mandatory: false,
    },

];

const populdateNews = (element) => {
    CoursesData.map(({ id, title, category, duedata, submissions, actionLink, mandatory }) => {

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
            <td class="duedate">${duedata}</td>
            <td>${submissions}</td>
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



//15.5
//<td><a href="${actionLink}" class="link-primary">View Course</a></td>
populdateNews(document.querySelector('#assignedCourses'));
onDropBtn();


