const CoursesData = [
    {
        id: 1,
        name: "Martin Wills",
        role: "HR Admin",
    },
    {
        id: 2,
        name: "Martin Wills",
        role: "HR Admin",
    },
    {
        id: 3,
        name: "Martin Wills",
        role: "HR Admin",
    },
    {
        id: 4,
        name: "Martin Wills",
        role: "HR Admin",
    },
    {
        id: 5,
        name: "Martin Wills",
        role: "HR Admin",
    },
];

const populdateNews = (element) => {
    CoursesData.map(({ name, role }) => {

        const tablerowdata = `
            <td scope="row">${name}</td>
            <td>${role}</td>
        `;

        let tableRowElement = document.createElement('tr')
        tableRowElement.innerHTML = tablerowdata;
        element.appendChild(tableRowElement);
    })
}

populdateNews(document.querySelector('#assignedUsers'));


