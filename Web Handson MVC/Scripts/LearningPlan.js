// Table

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


const CoursesandCertificateContainer = document.querySelector("#tableData");

const dataSet = [
    {
        id: 1,
        courseTitle: "Introduction to project Managment",
        courseCategory: "Orientation",
        courseStatus: "In Progress",
        lableColor: 'yellow',
        dueDate: "25-JUN-2022",
        action: "Resume",
        mandatory: false,
    },
    {
        id: 2,
        courseTitle: "Basic Mathematics",
        courseCategory: "Skill Development",
        courseStatus: "Completed",
        lableColor: 'green',
        dueDate: "9-MAY-2022",
        action: "Print Certificate",
        mandatory: false,
    },
    {
        id: 3,
        courseTitle: "Algebra - Basic Concepts of Algebra",
        courseCategory: "Orientation",
        courseStatus: "Pending",
        lableColor: 'blue',
        dueDate: "18-JULY-2023",
        action: "Register",
        mandatory: true,
    },
    {
        id: 4,
        courseTitle: "Land Pooling / Readjustment : An Alternative to Compulsory Land Acquisition (Self-Paced)",
        courseCategory: "Orientation",
        courseStatus: "Expired",
        lableColor: 'red',
        dueDate: "18-MAY-2022",
        action: "Register",
        mandatory: false,
    }
]

const initiateTableData = (element) => {

    dataSet.map(({ courseTitle, courseCategory, courseStatus, dueDate, action, lableColor, mandatory }) => {
        let date = new Date(dueDate);
        let today = new Date();
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        let remainDays = Math.round(Math.abs((date - today) / oneDay));;
        let sortingFactor = date.getFullYear().toString() + [date.getMonth() + 1].toString() + date.getDate().toString()
        const CourseData = `
            <td>
                <div class="d-flex flex-row justify-content-start align-items-center">
                    <div class="myiconspan align-items-center position-relative ">
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
                        <button>
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

initiateTableData(CoursesandCertificateContainer);

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