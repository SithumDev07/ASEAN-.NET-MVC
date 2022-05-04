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
        dueDate: "25-MAR-2022",
        remainDays: 12,
        action: "Resume"
    },
    {
        id: 2,
        courseTitle: "Basic Mathematics",
        courseCategory: "Skill Development",
        courseStatus: "Completed",
        lableColor: 'green',
        dueDate: "15-APR-2022",
        remainDays: 5,
        action: "Print Certificate"
    },
    {
        id: 3,
        courseTitle: "Algebra - Basic Concepts of Algebra",
        courseCategory: "Orientation",
        courseStatus: "Pending",
        lableColor: 'blue',
        dueDate: "18-FEB-2022",
        remainDays: 30,
        action: "Register"
    },
    {
        id: 4,
        courseTitle: "Land Pooling / Readjustment : An Alternative to Compulsory Land Acquisition (Self-Paced)",
        courseCategory: "Orientation",
        courseStatus: "Expired",
        lableColor: 'red',
        dueDate: "18-DEC-2022",
        remainDays: 30,
        action: "Register"
    }
]

const initiateTableData = (element) => {

    dataSet.map(({ courseTitle, courseCategory, courseStatus, dueDate, action, remainDays, lableColor }) => {
        let date = new Date(dueDate)
        let sortingFactor = date.getFullYear().toString() + [date.getMonth() + 1].toString() + date.getDate().toString()
        const CourseData = `
            <td class="coursetitle">${courseTitle}</td> 
            <td class="text-nowrap course-category">${courseCategory}</td>
            <td class="text-nowrap course-status">
                <p class="status-label status-label-${lableColor}">${courseStatus}</p>
            </td>
            <td data-sort="${sortingFactor}" class="d-flex flex-column" ><p class="mb-0 remaindayscolum">${dueDate}</p><p class="mb-1 fst-italic remaindaystext">${remainDays} days more</p></td>
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