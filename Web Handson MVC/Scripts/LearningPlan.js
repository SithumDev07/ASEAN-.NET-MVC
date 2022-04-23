// Table 

const CoursesandCertificateContainer = document.querySelector("#tableData");

const dataSet = [
    {
        id: 1,
        courseTitle: "Introduction to project Managment",
        courseCategory: "Orientation",
        courseStatus: "In Progress",
        dueDate: "25-MAR-2022 (12 Days Remaining",
        action: "Resume"
    },
    {
        id: 2,
        courseTitle: "Basic Mathematics",
        courseCategory: "Skill Development",
        courseStatus: "Completed",
        dueDate: "15-APR-2022 (30 Days Remaining",
        action: "Print Certificate"
    },
    {
        id: 3,
        courseTitle: "Basic Concept of Management",
        courseCategory: "Orientation",
        courseStatus: "Pending Action",
        dueDate: "15-APR-2022 (30 Days Remaining",
        action: "Register"
    }
]

const initiateTableData = (element) => {

    dataSet.map(({ courseTitle, courseCategory, courseStatus, dueDate, action }) => {
        const CourseData = `
            <td>${courseTitle}</td>
            <td class="text-nowrap">${courseCategory}</td>
            <td class="text-nowrap">${courseStatus}</td>
            <td>${dueDate}</td>
            <td class="text-nowrap "><a href="#">${action}</a></td>
        `;
        let trElemet = document.createElement('tr')
        trElemet.innerHTML = CourseData;
        element.appendChild(trElemet);
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