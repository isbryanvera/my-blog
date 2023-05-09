import humanize from "./utils/humanize.js"

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function humanizeDate($date, i) {
    const datetime = $date.getAttribute("datetime");
    const humanizedDate = humanize(datetime)
    // console.log(humanizedDate);

    $date.textContent = capitalizeFirstLetter(humanizedDate)
    
}

function sortByDate($a, $b) {
    const dateA = new Date($a.querySelector("time").getAttribute("datetime"));
    const dateB = new Date($b.querySelector("time").getAttribute("datetime"));
    return dateB - dateA;
}

function humanizeArticlesDate() {
    const $dates = document.querySelectorAll("time")
    $dates.forEach(humanizeDate);
}

function sordArticlesByDate() {
    const $cards = document.querySelectorAll(".post-list .card");
    const $cardsSorted = [...$cards].sort(sortByDate);
    const $postList = document.querySelector(".post-list");

    [...$postList.children].forEach($child => $child.remove());
    $postList.append(...$cardsSorted)
}

function main() {
    humanizeArticlesDate()
    sordArticlesByDate()
}

main()