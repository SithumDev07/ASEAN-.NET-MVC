$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

const CourseStructureData = [
    {
        id: 1,
        type: "video",
        title: "Introduction to Sustainability",
        status: "Completed",
        statusColor: "green",
        action: "View Results"
    },
    {
        id: 2,
        type: "document",
        title: "Introduction to Sustainability",
        status: "Not Evaluated",
        statusColor: "yellow",
        action: "Launch"
    },
    {
        id: 3,
        type: "quiz",
        title: "Introduction to Sustainability",
        status: "Not Evaluated",
        statusColor: "yellow",
        action: "Launch"
    },
]

const ForumComments = [
    {
        id: 1,
        type: "user",
        user: {
            usericon:
                "https://images.unsplash.com/photo-1554230505-919a13968970?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            reviewUser: "Carolyn J. Haight",
            reviewUserComment:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quis assumenda modi minus sapiente numquam expedita ab, saepe nisi suscipit.",
            liked: false,
            reviewTimeStamp: "2022-05-15T20:56:23",
            replies: [
                {
                    id: 1,
                    type: "user",
                    user: {
                        usericon:
                            "https://images.unsplash.com/photo-1560238970-cc0ae073d3a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
                        reviewUser: "Carolyn J. Haight",
                        reviewUserComment:
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quis assumenda modi minus sapiente numquam expedita ab, saepe nisi suscipit.",
                        liked: false,
                        reviewTimeStamp: "2022-05-15T20:56:23",
                    },
                },
                {
                    id: 2,
                    type: "anonymous",
                    user: {
                        reviewUserComment:
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quis assumenda modi minus sapiente numquam expedita ab, saepe nisi suscipit.",
                        liked: true,
                        reviewTimeStamp: "2022-05-15T20:56:23",
                    },
                },
            ],
        },
    },
    {
        id: 2,
        type: "user",
        user: {
            usericon:
                "https://images.unsplash.com/photo-1516522973472-f009f23bba59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            reviewUser: "Carolyn J. Haight",
            reviewUserComment:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quis assumenda modi minus sapiente numquam expedita ab, saepe nisi suscipit.",
            liked: false,
            reviewTimeStamp: "2022-05-15T20:56:23",
            repliies: [],
        },
    },
    {
        id: 3,
        type: "anonymous",
        user: {
            reviewUserComment:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quis assumenda modi minus sapiente numquam expedita ab, saepe nisi suscipit.",
            liked: false,
            reviewTimeStamp: "2022-05-15T20:56:23",
            repliies: [],
        },
    },
    {
        id: 4,
        type: "user",
        user: {
            usericon:
                "https://images.unsplash.com/photo-1560238970-cc0ae073d3a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            reviewUser: "Carolyn J. Haight",
            reviewUserComment:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quis assumenda modi minus sapiente numquam expedita ab, saepe nisi suscipit.",
            liked: false,
            reviewTimeStamp: "2022-05-15T20:56:23",
            repliies: [],
        },
    },
    {
        id: 5,
        type: "anonymous",
        user: {
            reviewUserComment:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quis assumenda modi minus sapiente numquam expedita ab, saepe nisi suscipit.",
            liked: true,
            reviewTimeStamp: "2022-05-15T20:56:23",
            replies: [
                {
                    id: 1,
                    type: "user",
                    user: {
                        usericon:
                            "https://images.unsplash.com/photo-1560238970-cc0ae073d3a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
                        reviewUser: "Carolyn J. Haight",
                        reviewUserComment:
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quis assumenda modi minus sapiente numquam expedita ab, saepe nisi suscipit.",
                        liked: false,
                        reviewTimeStamp: "2022-05-15T20:56:23",
                    },
                },
                {
                    id: 2,
                    type: "anonymous",
                    user: {
                        reviewUserComment:
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quis assumenda modi minus sapiente numquam expedita ab, saepe nisi suscipit.",
                        liked: true,
                        reviewTimeStamp: "2022-05-15T20:56:23",
                    },
                },
            ],
        },
    },
];

const populateReplyCards = (replies, commentID) => {
    let allReplies = "";

    replies.map(({ id, user }) => {
        allReplies =
            allReplies +
            `<div class="d-flex align-items-start reply-card">
                         <div class="usericon">
            <img class="border-0" src="https://images.unsplash.com/photo-1554230505-919a13968970?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="usericon">
        </div>
        <div class="review-content">
            <h4 class="review-user">Carolyn J. Haight</h4>
            <p class="review-user-comment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quis assumenda modi minus sapiente numquam expedita ab, saepe nisi suscipit.</p>
            <div class="d-flex review-actions-row">
                <button type="button" class="likeBtn likeBtn-reply-${id}-${commentID} ${user.liked ? "text-asean-primary" : ""
            }">
                    <i class="bi bi-hand-thumbs-up icon icon-reply-${id}-${commentID} ${user.liked ? "d-none" : "d-block"
            }"></i>
                    <i class="bi bi-hand-thumbs-up-fill icon-active icon-active-reply-${id}-${commentID} ${user.liked ? "d-block" : "d-none"
            }"></i>
                    Like
                </button>
                <p>10 weeks ago</p>
            </div>
        </div>
                    </div>
  `;
    });
    return allReplies;
};

const activeReplyForms = [];


const populateUserReviews = (element, dataSet) => {
    // dataSet.map(({ id, type, user }) => {
    ForumComments.map(({ id, type, user }) => {
        const now = new Date();
        let reviewDate = Date.parse(user.reviewTimeStamp);
        // get total seconds between the times
        let delta = Math.abs(now - reviewDate) / 1000;

        // calculate (and subtract) whole weeks
        let weeks = Math.floor(delta / 604800);
        delta -= weeks * 604800;

        // calculate (and subtract) whole days
        let days = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        let hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        let minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        // what's left is seconds
        let seconds = Math.floor(delta) % 60; // in theory the modulus is not required

        const reviewCard = `
        <div class="usericon">
            <img class="border-0" src="${type === "user"
                ? user.usericon
                : "./Content/Images/CourseDetails/user-placeholder.jpg"
            }" alt="usericon">
        </div>
        <div class="review-content">
            <h4 class="review-user">${type === "user" ? user.reviewUser : "Anonymous User"
            }</h4>
            <p class="review-user-comment">${user.reviewUserComment}</p>
            <div class="d-flex review-actions-row">
                <button type="button" class="likeBtn likeBtn-${id} ${user.liked ? "text-asean-primary" : ""
            }">
                    <i class="bi bi-hand-thumbs-up icon icon-${id} ${user.liked ? "d-none" : "d-block"
            }"></i>
                    <i class="bi bi-hand-thumbs-up-fill icon-active icon-active-${id} ${user.liked ? "d-block" : "d-none"
            }"></i>
                    Like
                </button>
                <button type="button" class="d-flex align-items-center reply-btn-${id}">
                    <i class="bi bi-chat-square icon"></i>
                    Reply
                </button>
                <p>${weeks === 0
                ? days == 0
                    ? hours === 0
                        ? minutes === 0
                            ? seconds === 0
                                ? "Just now"
                                : `${seconds} Seconds ago`
                            : minutes === 1
                                ? `${minutes} Minute ago`
                                : `${minutes} Minutes ago`
                        : hours === 1
                            ? `${hours} Hour ago`
                            : `${hours} Hours ago`
                    : days === 1
                        ? `${days} Day ago`
                        : `${days} Days ago`
                : weeks === 1
                    ? `${weeks} Week ago`
                    : `${weeks} Weeks ago`
            }</p>
                <button type="button" class="ms-3 replies-count-${id}">${user.replies && user.replies.length
                ? user.replies.length + " replies"
                : ""
            }</button>
            </div>
            <div class="replies-container-${id} d-none flex-column align-items-baseline ms-5">${user.replies && user.replies.length > 0
                ? populateReplyCards(user.replies, id)
                : ""
            }
            <div class="reply-form reply-form-${id} mt-3 ${user.replies && user.replies.length > 1 ? "d-block" : "d-none"
            }">
                        <h3 class="forum-reply-title fs-6">Reply</h3>
                        <form method="get">
                            <textarea name="comment" class="mt-1 text-area-reply" id="floatingTextarea2"></textarea>
                            <div class="dropdown mt-3">
                                <button type="button" class="btn asean-primary dropdown-toggle text-white comment-btn" id="categoryDropDown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Reply
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="categoryDropDown">
                                    <li><button type="submit" name="comment_type" class="dropdown-item" value="Post">Reply</button></li>
                                    <li><button type="submit" name="comment_type" class="dropdown-item" value="Post_Anonymously">Reply Anonymously</button></li>
                                </ul>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    `;

        let divElement = document.createElement("div");
        divElement.classList.add("d-flex");
        divElement.classList.add("align-items-start");
        divElement.classList.add("review-card");
        divElement.innerHTML = reviewCard;
        element.appendChild(divElement);

        //Reply Section Toggler
        function replyStateChange() {
            document
                .querySelector(`.replies-container-${id}`)
                .classList.toggle("d-flex");
            document
                .querySelector(`.replies-container-${id}`)
                .classList.toggle("d-none");
            if (activeReplyForms && activeReplyForms.length > 0) {
                activeReplyForms.map((item) => {
                    item.classList.toggle("d-none");
                    item.classList.toggle("d-flex");
                    activeReplyForms.pop(item);
                });
            }
            activeReplyForms.push(document.querySelector(`.replies-container-${id}`));
            console.warn(activeReplyForms);
            //Set Page Size
            setPageSize(2);
            document.querySelector(`.reply-form-${id}`).scrollIntoView();
        }

        // Reply Icon onClick Handler
        document.querySelector(`.reply-btn-${id}`).addEventListener("click", () => {
            if (!user.replies || user.replies.length == 0) {
                document.querySelector(`.reply-form-${id}`).classList.toggle("d-none");
                document.querySelector(`.reply-form-${id}`).classList.toggle("d-block");
            }
            replyStateChange();
        });

        // Replies Count Button onClick Handler
        document
            .querySelector(`.replies-count-${id}`)
            .addEventListener("click", () => {
                replyStateChange();
            });

        //Like Functionality
        document.querySelector(`.likeBtn-${id}`).addEventListener("click", () => {
            document
                .querySelector("#Forum")
                .querySelector(`.icon-${id}`)
                .classList.toggle("d-block");
            document
                .querySelector("#Forum")
                .querySelector(`.icon-${id}`)
                .classList.toggle("d-none");
            document
                .querySelector("#Forum")
                .querySelector(`.icon-active-${id}`)
                .classList.toggle("d-block");
            document
                .querySelector("#Forum")
                .querySelector(`.icon-active-${id}`)
                .classList.toggle("d-none");
        });
        // // Like Functionality Replies
        if (user.replies && user.replies.length > 0) {
            user.replies.map((item) => {
                document
                    .querySelector(`.likeBtn-reply-${item.id}-${id}`)
                    .addEventListener("click", () => {
                        document
                            .querySelector("#Forum")
                            .querySelector(`.icon-reply-${item.id}-${id}`)
                            .classList.toggle("d-block");
                        document
                            .querySelector("#Forum")
                            .querySelector(`.icon-reply-${item.id}-${id}`)
                            .classList.toggle("d-none");
                        document
                            .querySelector("#Forum")
                            .querySelector(`.icon-active-reply-${item.id}-${id}`)
                            .classList.toggle("d-block");
                        document
                            .querySelector("#Forum")
                            .querySelector(`.icon-active-reply-${item.id}-${id}`)
                            .classList.toggle("d-none");
                    });
            });
        }
    });
};

populateUserReviews(document.querySelector("#Forum"), ForumComments);

const populateCourseStructure = (element, dataSet) => {
    dataSet.map(({ type, title, status, statusColor, action }) => {

        const itemCard = `
        <div class="d-flex align-items-center">
            <i class="bi ${type === "video" ? `bi-file-earmark-play` : type === "document" ? `bi-file-earmark` : 'bi-chat-left'} me-2 me-md-3 icon"></i>
            <div class="current-item">
                ${title}
                ${type === 'video' ? "" : type === "document" ? `<li class="current-item-extra">Course Material</li>` : `<li class="current-item-extra">Quiz</li>`}
            </div>
        </div>
        <p class="item-row-status item-row-status-${statusColor}">${status}</p>
        <button type="button" class="btn asean-primary text-white">
            ${action}
        </button>
    `;

        let divElement = document.createElement('div')
        divElement.classList.add('d-flex')
        divElement.classList.add('mt-4')
        divElement.classList.add('justify-content-between')
        divElement.classList.add('align-items-center')
        divElement.classList.add('item-row')
        divElement.innerHTML = itemCard;
        element.appendChild(divElement);
    })
}

populateCourseStructure(document.querySelector('#CourseStructure'), CourseStructureData);

const contentElementsArray = [
    document.querySelector('#OtherInfo'),
    document.querySelector('#CourseStructure'),
    document.querySelector('#Forum'),
]

function setPageSize(index) {
    const elementHeight = contentElementsArray[index].clientHeight;
    const ContentWrapper = document.querySelector('.content');
    ContentWrapper.style.height = `${elementHeight}px`;
}

//Set Initial Page Size
setPageSize(0)

let pageStatus = "Overview"

const tabElementsArray = [
    document.querySelector('#OtherInfoLink'),
    document.querySelector('#OverviewLink'),
    document.querySelector('#ForumLink'),
]

function tabNavigation(index) {

    tabElementsArray[index].addEventListener('click', () => {
        if (!tabElementsArray[index].classList.contains('active')) {
            tabElementsArray[index].classList.add('active')
        }

        const resetElements = tabElementsArray.filter(function (_, i) {
            return tabElementsArray.indexOf(tabElementsArray[index]) !== i;
        })
        resetElements.map((element) => {
            element.classList.remove('active')
        })

        switch (index) {
            case 0:
                document.querySelector('#BottomLine').classList.remove('bottom-line-middle')
                document.querySelector('#BottomLine').classList.remove('bottom-line-end')
                if (!document.querySelector('#BottomLine').classList.contains('bottom-line-start'))
                    document.querySelector('#BottomLine').classList.add('bottom-line-start');
                //Transform Container
                document.querySelector('#TransformContainer').classList.remove('transform-middle')
                document.querySelector('#TransformContainer').classList.remove('transform-end')
                if (!document.querySelector('#TransformContainer').classList.contains('transform-left'))
                    document.querySelector('#TransformContainer').classList.add('transform-left')
                //Set Page Size
                setPageSize(0)
                pageStatus = "Overview"
                break
            case 1:
                document.querySelector('#BottomLine').classList.remove('bottom-line-start')
                document.querySelector('#BottomLine').classList.remove('bottom-line-end')
                document.querySelector('#BottomLine').classList.add('bottom-line-middle')
                //Transform Container
                document.querySelector('#TransformContainer').classList.remove('transform-left')
                document.querySelector('#TransformContainer').classList.remove('transform-end')
                if (!document.querySelector('#TransformContainer').classList.contains('transform-middle'))
                    document.querySelector('#TransformContainer').classList.add('transform-middle')
                //Set Page Size
                setPageSize(1)
                pageStatus = "Otherinfo"
                break
            case 2:
                document.querySelector('#BottomLine').classList.remove('bottom-line-middle')
                document.querySelector('#BottomLine').classList.remove('bottom-line-start')
                document.querySelector('#BottomLine').classList.add('bottom-line-end')
                //Transform Container
                document.querySelector('#TransformContainer').classList.remove('transform-left')
                document.querySelector('#TransformContainer').classList.remove('transform-middle')
                if (!document.querySelector('#TransformContainer').classList.contains('transform-end'))
                    document.querySelector('#TransformContainer').classList.add('transform-end')
                //Set Page Size
                setPageSize(2)
                pageStatus = "Forum"
                break
        }

    })
}

tabNavigation(0)
tabNavigation(1)
tabNavigation(2)

//When Resize Page
window.addEventListener('resize', function () {
    switch (pageStatus) {
        case 'Overview':
            setPageSize(0)
            break
        case 'Otherinfo':
            setPageSize(1)
            break
        case 'Forum':
            setPageSize(2)
            break
    }
}, true);