let tripTimesLists = document.querySelectorAll('.card__trip-list');



let hideTimes = function(timesParent) {
    for (let j = 0; j < timesParent.length; j++) {
        let tripTimes = timesParent[j].querySelectorAll('.card__trip-item');
        if(tripTimes.length > 4) {
            for (let i = 0; i < tripTimes.length; i++) {
                if(i > 3) {
                    tripTimes[i].classList.add('trip-time_disable');
                }
            }
            let elementMore = document.createElement("li");
            elementMore.classList.add('card__trip-more');
            elementMore.textContent = "ещё.."
            tripTimes.append(elementMore);
        }
    }
}

hideTimes(tripTimesLists);

console.log(tripTimes);