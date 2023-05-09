import humanize from "./utils/humanize.js"

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function humanizeDate($date, i) {
    const datetime = $date.getAttribute("datetime");
    const humanizedDate = humanize(datetime)
    console.log(humanizedDate);

    $date.textContent = capitalizeFirstLetter(humanizedDate)
    
}

const $dates = document.querySelectorAll("time")
$dates.forEach(humanizeDate)



