// Table

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


const CoursesandCertificateContainer = document.querySelector("#tableData");

const dataSet = [
    {
        id: 1,
        courseTitle: "Land Pooling / Land Readjustment: An Alternative to Compulsory Land Acquisition",
        courseCategory: "Orientation",
        courseStatus: "In Progress",
        lableColor: 'yellow',
        dueDate: "25-JUN-2022",
        action: "Resume",
        mandatory: false,
    },
    {
        id: 2,
        courseTitle: "Impact Evaluation Methods with Applications in Low- and Middle-Income Countries",
        courseCategory: "Skill Development",
        courseStatus: "Pending",
        lableColor: 'blue',
        dueDate: "9-MAY-2022",
        action: "Print Certificate",
        mandatory: false,
    },
    {
        id: 3,
        courseTitle: "Strengthening Geospatial Information Management: Using the Integrated Geospatial Information Framework (Virtual Knowledge Exchange)",
        courseCategory: "Orientation",
        courseStatus: "In Progress",
        lableColor: 'yellow',
        dueDate: "18-JUL-2022",
        action: "Register",
        mandatory: true,
    },
    {
        id: 4,
        courseTitle: "Investing in Quality Infrastructure for a Green, Inclusive and Resilient Recovery",
        courseCategory: "Orientation",
        courseStatus: "In Progress",
        lableColor: 'yellow',
        dueDate: "15-MAY-2022",
        action: "Register",
        mandatory: false,
    },
    {
        id: 5,
        courseTitle: "e - Learning course on Railway Financing",
        courseCategory: "Orientation",
        courseStatus: "Pending",
        lableColor: 'blue',
        dueDate: "12-JUL-2022",
        action: "Register",
        mandatory: true,
    },
    {
        id: 6,
        courseTitle: "Strengthening Geospatial Information Management: Using the Integrated Geospatial Information Framework",
        courseCategory: "Orientation",
        courseStatus: "In Progress",
        lableColor: 'yellow',
        dueDate: "06-SEP-2022",
        action: "Register",
        mandatory: false,
    },
    {
        id: 7,
        courseTitle: "The Hidden Side of Energy Access: Understanding Clean Cooking(Virtual Knowledge Exchange)",
        courseCategory: "Orientation",
        courseStatus: "Expired",
        lableColor: 'red',
        dueDate: "11-MAY-2022",
        action: "Register",
        mandatory: true,
    }
]


const initiateTableData = (element) => {

    dataSet.map(({ id, courseTitle, courseCategory, courseStatus, dueDate, action, lableColor, mandatory }) => {
        let date = new Date(dueDate);
        let today = new Date();
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        let remainDays = Math.round(Math.abs((date - today) / oneDay));;
        let sortingFactor = date.getFullYear().toString() + [date.getMonth() + 1].toString() + date.getDate().toString()
        const CourseData = `
            <td>
                <div class="d-flex flex-row justify-content-start align-items-center">
                    <div class="myiconspan align-items-center position-relative" data-toggle="tooltip" data-placement="right" title="${mandatory ? 'Mandatory' : 'Optional'}">
                        <i class="bi bi-mortarboard myplanicon "></i>
                        <i class="bi bi-exclamation-triangle-fill position-absolute warningicon ${mandatory ? 'd-block' : 'd-none'}"></i>
                    </div>
                    <div class="coursetitle">
                        ${courseTitle}
                    </div>
                </div>
            </td>
            <td class="text-nowrap course-category">${courseCategory}</td>
            <td class="text-nowrap course-status">
                <p class="status-label status-label-${lableColor}">${courseStatus}</p>
            </td>
            <td data-sort="${sortingFactor}" >
                <div class="d-flex flex-column align-items-start"> 
                    <div>
                        <p class="mb-0 remaindayscolum">${dueDate}</p>
                    </div>
                    <div>
                        <p class="mb-1 fst-italic ${remainDays > 5 ? 'remaindaystext' : 'endingremaindaystext'} ">${remainDays} days more</p>
                    </div>
                </div>
            </td>
            <td class="text-nowrap actiontext position-relative"><div class="d-flex align-items-center justify-content-between" ><a href="#">${action}</a><button class="deletebtn">
                <i class="bi bi-three-dots "></i>

            </button></div>
                <ul class="optionmenu p-0 m-0 shadow d-none">
                    <li>
                        <button class="dropbutton dropbutton-${id}">
                            Drop
                        </button>
                    </li>
                </ul>
            </td>
        `;
        let trElemet = document.createElement('tr');
        //trElemet.classList.add("relative");
        //trElemet.classList.add("align-items-center");
        trElemet.innerHTML = CourseData;
        element.appendChild(trElemet);

        // Action delete button click funtion
        trElemet.querySelector(".deletebtn").addEventListener("mousedown", () => {
            trElemet.querySelector(".optionmenu").classList.toggle("d-none");
            //console.log("Hellow");
        })
        trElemet.querySelector(".deletebtn").addEventListener("blur", () => {
            trElemet.querySelector(".optionmenu").classList.add("d-none");
        })
    })
}

function onDropBtn() {
    let confirmation = document.getElementById("confirmation");
    dataSet.map(({ id, courseTitle }) => {
        document.querySelector(`.dropbutton-${id}`).addEventListener('mousedown', function () {
            if (!confirmation.classList.contains("model-open")) {
                document.querySelector('#delete-course-description').innerHTML = `Are you sure you want to drop <span class="highlightCourseName">${courseTitle}</span> course?`;
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


initiateTableData(CoursesandCertificateContainer);
onDropBtn();

// Pie Chart

const chartData =
{
    pendingAction: 2,
    inprogress: 3,
    completed: 3,
    expired: 2,
    overide: 1
}

const data = {
    labels: [
        'Pending Action',
        'Inprogress',
        'Completed',
        'Expired',
        'Overdue',
    ],
    datasets: [{
        label: 'My First Dataset',

        // Pie Chart data add here
        // Pending Action, Inprogress, Completed, Expired, Overdue
        data: [chartData.pendingAction, chartData.inprogress, chartData.completed, chartData.expired, chartData.overide],

        backgroundColor: [
            'rgb(255, 243, 128)',
            'rgb(229, 103, 23)',
            'rgb(102, 205, 170)',
            'rgb(229, 84, 81)',
            'rgb(255, 205, 150)',
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'pie',
    data: data,
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    color: 'rgb(0, 0, 0)',
                    padding: 15
                },
            }
        },
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);