let rtg = document.getElementsByName("rtg")
let cardHeader = document.querySelector(".card-header")
let headerImg = document.querySelector(".header-img")
let showRatingResult = document.querySelector(".show-rating")
let form = document.querySelector("form")
let cardTitle = document.querySelector(".card-title")
let cardP = document.querySelector(".card-p")
let submit = document.querySelector(".btn-submit")
submit.addEventListener("click", showRating)

function showRating() {
    for (let i = 0; i < rtg.length; i++) {
        if (rtg[i].checked) {
            showRatingResult.innerHTML = (`You selected ${rtg[i].value} out of ${rtg.length}`);
        }
    }

    showRatingResult.style.display = "inline"
    cardTitle.innerHTML = "Thank You!"
    cardTitle.style.textAlign = "center"
    cardP.innerHTML = `We appreciate you taking the time to give a rating. If you ever need more support, 
    don’t hesitate to get in touch!`
    cardP.style.textAlign = "center"
    document.querySelector(".rating-form").style.display = "none"

    headerImg.src = "images/illustration-thank-you.svg"
    headerImg.style.width = "200px"
    cardHeader.style.margin = "auto"
    cardHeader.style.background = "none"
}

function submitForm(event) {
    event.preventDefault()
}

form.addEventListener("submit", submitForm)