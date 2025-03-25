// let allImage = document.querySelectorAll("#section img");
// let editImage = document.querySelector(".img-edit img");
// allImage.forEach((img) => {
//   img.addEventListener("click", () => {
//     editImage.src = img.src;
//   })
// });



function passValue1() {
    let text = document.querySelector("#text1").value;
    let image = document.querySelector("#img1").src;
    localStorage.setItem("textValue", text);
    localStorage.setItem("img", image);
    return false;
}

function passValue2() {
    let text = document.querySelector("#text2").value;
    let image = document.querySelector("#img2").src;
    localStorage.setItem("textValue", text);
    localStorage.setItem("img", image);
    return false;
}

function passValue3() {
    let text = document.querySelector("#text3").value;
    let image = document.querySelector("#img3").src;
    localStorage.setItem("textValue", text);
    localStorage.setItem("img", image);
    return false;
}

function passValue4() {
    let text = document.querySelector("#text4").value;
    let image = document.querySelector("#img4").src;
    localStorage.setItem("textValue", text);
    localStorage.setItem("img", image);
    return false;
}

function passValue5() {
    let text = document.querySelector("#text5").value;
    let image = document.querySelector("#img5").src;
    localStorage.setItem("textValue", text);
    localStorage.setItem("img", image);
    return false;
}

function passValue6() {
    let text = document.querySelector("#text6").value;
    let image = document.querySelector("#img6").src;
    localStorage.setItem("textValue", text);
    localStorage.setItem("img", image);
    return false;
}

function passValue7() {
    let text = document.querySelector("#text7").value;
    let image = document.querySelector("#img7").src;
    localStorage.setItem("textValue", text);
    localStorage.setItem("img", image);
    return false;
}

function passValue8() {
    let text = document.querySelector("#text8").value;
    let image = document.querySelector("#img8").src;
    localStorage.setItem("textValue", text);
    localStorage.setItem("img", image);
    return false;
}

function passValue9() {
    let text = document.querySelector("#text9").value;
    let image = document.querySelector("#img9").src;
    localStorage.setItem("textValue", text);
    localStorage.setItem("img", image);
    return false;
}

function passValue10() {
    let text = document.querySelector("#text10").value;
    let image = document.querySelector("#img10").src;
    localStorage.setItem("textValue", text);
    localStorage.setItem("img", image);
    return false;
}

function passValue11() {
    let text = document.querySelector("#text11").value;
    let image = document.querySelector("#img11").src;
    localStorage.setItem("textValue", text);
    localStorage.setItem("img", image);
    return false;
}

function passValue12() {
    let text = document.querySelector("#text12").value;
    let image = document.querySelector("#img12").src;
    localStorage.setItem("textValue", text);
    localStorage.setItem("img", image);
    return false;
}

function passValue13() {
    let text = document.querySelector("#text13").value;
    let image = document.querySelector("#img13").src;
    localStorage.setItem("textValue", text);
    localStorage.setItem("img", image);
    return false;
}

function passValue14() {
    let text = document.querySelector("#text14").value;
    let image = document.querySelector("#img14").src;
    localStorage.setItem("textValue", text);
    localStorage.setItem("img", image);
    return false;
}

function passValue15() {
    let text = document.querySelector("#text15").value;
    let image = document.querySelector("#img15").src;
    localStorage.setItem("textValue", text);
    localStorage.setItem("img", image);
    return false;
}

function passValue16() {
    let text = document.querySelector("#text16").value;
    let image = document.querySelector("#img16").src;
    localStorage.setItem("textValue", text);
    localStorage.setItem("img", image);
    return false;
}

function passValue17() {
    let text = document.querySelector("#text17").value;
    let image = document.querySelector("#img17").src;
    localStorage.setItem("textValue", text);
    localStorage.setItem("img", image);
    return false;
}

function passValue18() {
    let text = document.querySelector("#text18").value;
    let image = document.querySelector("#img18").src;
    localStorage.setItem("textValue", text);
    localStorage.setItem("img", image);
    return false;
}

function passValue19() {
    let text = document.querySelector("#text19").value;
    let image = document.querySelector("#img19").src;
    localStorage.setItem("textValue", text);
    localStorage.setItem("img", image);
    return false;
}

// category btns
let categoryBtns = document.querySelectorAll(".category-btn button");
// kind btns
let kindBtns = document.querySelectorAll(".kind-btn button");
// all category
let allCategory = document.querySelectorAll("#cards");
// all kind
let allKind = document.querySelectorAll("#section");
// all category btn
let allCategoryBtn = document.querySelector(".all-cards");
// all kind btn
let allKindBtn = document.querySelector(".all-card");
let filterButtonGroup = document.querySelectorAll(".filter-button-group button");
let date = new Date().getFullYear();
document.querySelector("#date").append(date);

// add active class function for // category btns
addActiveClass(categoryBtns);

// add active class function for // kind btns
addActiveClass(kindBtns);

// Double filter category and kind function
doubleFilter(filterButtonGroup, allCategory, allKind);

// show all category function
showAllCAndF(allCategoryBtn, allCategory)

// show all category function
showAllCAndF(allKindBtn, allKind)

// visitor counter function
// countVisit();

// Image loading optimization
document.addEventListener('DOMContentLoaded', function() {
    // Add loading spinner to the page
    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    document.body.appendChild(spinner);

    // Show spinner while images are loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    let loadedImages = 0;

    images.forEach(img => {
        img.addEventListener('load', () => {
            loadedImages++;
            if (loadedImages === images.length) {
                spinner.style.display = 'none';
            }
        });

        img.addEventListener('error', () => {
            loadedImages++;
            if (loadedImages === images.length) {
                spinner.style.display = 'none';
            }
        });
    });

    // Preload critical images
    const preloadImages = [
        './image/شعار_برنامج_الإسكان_السعودي.png'
    ];

    preloadImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Add loading state to image containers
document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.image-container');
    
    imageContainers.forEach(container => {
        const img = container.querySelector('img');
        if (img) {
            container.classList.add('loading');
            img.addEventListener('load', () => {
                container.classList.remove('loading');
            });
        }
    });
});

// add active class function 
function addActiveClass(list) {
    list.forEach((btn) => {
        btn.addEventListener("click", () => {
            list.forEach((btns) => {
                btns.classList.remove("active")
            })
            btn.classList.add("active");
        })
    })
}
// add active class function end

// Double filter category and kind function    ftr => filter
function doubleFilter(btns, ftr1, ftr2) {
    let tem;
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            tem = btn.getAttribute("data-filter");
            if (tem === "squar" || tem === "rectan") {
                ftr1.forEach((cat) => {
                    cat.classList.add("none");
                    if (tem === cat.getAttribute("data-filter")) {
                        cat.classList.remove("none")
                    }
                })
            } else if (tem === "bairam" || tem === "fast" || tem === "anthor") {
                ftr2.forEach((ki) => {
                    ki.classList.add("none");
                    if (tem === ki.getAttribute("data-filter")) {
                        ki.classList.remove("none");
                    }
                })
            }

        })
    })
}

// Show all category or kind or both function
function showAllCAndF(btn, ftr) {
    btn.addEventListener("click", () => {
        ftr.forEach((cat) => {
            cat.classList.remove("none");
        })
    })
}

// count visitor function

function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
}

// count visitor function end