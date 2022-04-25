const CoursesData = [
    {
        id: 1,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022 - 28-MAY-2022",
        submissions: 7,
        actionLink: "/assigned-course/1",
    },
    {
        id: 2,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022 - 28-MAY-2022",
        submissions: 7,
        actionLink: "/assigned-course/2",
    },
    {
        id: 3,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022 - 28-MAY-2022",
        submissions: 7,
        actionLink: "/assigned-course/3",
    },
    {
        id: 4,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022 - 28-MAY-2022",
        submissions: 7,
        actionLink: "/assigned-course/4",
    },
    {
        id: 5,
        title: "Climate Mitigation in Action – Sector-Specific Strategies and Approaches",
        category: "Orientation",
        duedata: "28-APR-2022 - 28-MAY-2022",
        submissions: 7,
        actionLink: "/assigned-course/5",
    },
];

const populdateNews = (element) => {
    CoursesData.map(({ title, category, duedata, submissions, actionLink }) => {

        const tablerowdata = `
            <td scope="row">${title}</td>
            <td>${category}</td>
            <td>${duedata}</td>
            <td>${submissions}</td>
            <td><a href="${actionLink}" class="link-primary">View Course</a></td>
        `;

        let tableRowElement = document.createElement('tr')
        tableRowElement.innerHTML = tablerowdata;
        element.appendChild(tableRowElement);
    })
}

populdateNews(document.querySelector('#assignedCourses'));


