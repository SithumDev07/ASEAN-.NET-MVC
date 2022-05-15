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
        completeddate: "17-FEB-2022",
        action: "View Certivicate",
        mandatory: false,
    },
    {
        id: 2,
        courseTitle: "Basic Mathematics",
        courseCategory: "Skill Development",
        completeddate: "15-JUN-2022",
        action: "View Certivicate",
        mandatory: false,
    },
    {
        id: 3,
        courseTitle: "Algebra - Basic Concepts of Algebra",
        courseCategory: "Orientation",
        completeddate: "12-MAY-2022",
        action: "View Certivicater",
        mandatory: true,
    },
    {
        id: 4,
        courseTitle: "Land Pooling / Readjustment : An Alternative to Compulsory Land Acquisition (Self-Paced)",
        courseCategory: "Orientation",
        completeddate: "21-JUL-2022",
        action: "View Certivicate",
        mandatory: false,
    }
]

const initiateTableData = (element) => {

    dataSet.map(({ courseTitle, courseCategory, completeddate, action, mandatory }) => {
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
            <td class="text-wrap compltedate ">
                <p class="mb-0">Successfully Completed <br>on ${completeddate}</p>
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

//Profile Details

const profilledatacontainer = document.querySelector("#profiledetails");

const profileData =
{
    propicCover: "./Content/Images/LearnerProfile/propic.png", //use a squre size profile picture
    name: "Hannah Muyeen",
    studentId: "VP - ASEAN",
    email: "jamesmarith@asean.org"
}

profilledatacontainer.querySelector(".profilepic").src = profileData.propicCover;
profilledatacontainer.querySelector(".username").innerHTML = profileData.name;
profilledatacontainer.querySelector(".studentid").innerHTML = profileData.studentId;
profilledatacontainer.querySelector(".studentemail").innerHTML = profileData.email;