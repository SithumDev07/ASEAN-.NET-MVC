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
        action: "View Certificate",
        mandatory: false,
        isRenewable: true,
    },
    {
        id: 2,
        courseTitle: "Basic Mathematics",
        courseCategory: "Skill Development",
        completeddate: "15-JUN-2022",
        action: "View Certificate",
        mandatory: false,
        isRenewable: false,
    },
    {
        id: 3,
        courseTitle: "Algebra - Basic Concepts of Algebra",
        courseCategory: "Orientation",
        completeddate: "12-MAY-2022",
        action: "View Certificate",
        mandatory: true,
        isRenewable: true,
    },
    {
        id: 4,
        courseTitle: "Land Pooling / Readjustment : An Alternative to Compulsory Land Acquisition (Self-Paced)",
        courseCategory: "Orientation",
        completeddate: "21-JUL-2022",
        action: "View Certificate",
        mandatory: false,
        isRenewable: false,
    }
]

const initiateTableData = (element) => {


    dataSet.map(({ id, courseTitle, courseCategory, completeddate, action, mandatory,isRenewable }) => {
        const date = new Date(completeddate)
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
            <td class="text-wrap compltedate " data-sort="${sortingFactor}" >
                <p class="mb-0">Successfully Completed <br>on ${completeddate}</p>
            </td>
            <td class="text-nowrap actiontext position-relative">
                <div class="d-flex align-items-center justify-content-between" >
                    <a href="#">${action}</a>
                    <button class="deletebtn">
                    <i class="bi bi-three-dots "></i>
                    </button>
                </div>
                <ul class="optionmenu p-0 m-0 shadow d-none">
                    <li class="${isRenewable ? 'optionmenurenewable' : 'optionmenunotrenewable'}">
                        <button>
                            Renew
                        </button>
                    </li>
                    <li>
                        <button class="dropbutton dropbutton-${id}">
                            Drop
                        </button>
                    </li>
                </ul>
            </td>
        `;
        let trElemet = document.createElement('tr');
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

//Profile Details

const profilledatacontainer = document.querySelector("#profiledetails");

const profileData =
{
    propicCover: "./Content/Images/LearnerProfile/propic.png", //use a squre size profile picture
    name: "Jammy",
    studentId: "VP - ASEAN",
    email: "jammymarith@asean.org"
}

profilledatacontainer.querySelector(".profilepic").src = profileData.propicCover;
profilledatacontainer.querySelector(".username").innerHTML = profileData.name;
profilledatacontainer.querySelector(".studentid").innerHTML = profileData.studentId;
profilledatacontainer.querySelector(".studentemail").innerHTML = profileData.email;