let tripTimesLists = document.querySelectorAll('.card__trip-list');



let hideTimes = function(timesParent) {
    for (let j = 0; j < timesParent.length; j++) {
        let tripTimes = timesParent[j].querySelectorAll('.card__trip-item');
        if(tripTimes.length > 3) {
            for (let i = 0; i < tripTimes.length; i++) {
                if(i > 2) {
                    tripTimes[i].classList.add('trip-time_disable');
                }
            }
            let elementMore = document.createElement("li");
            elementMore.classList.add('card__trip-more');
            elementMore.textContent = "ещё.."
            elementMore.addEventListener("click", function () {
                tripTimes[i].classList.remove('trip-time_disable');
            });

            tripTimes[i].appendChild(elementMore);
        }
    }
}

hideTimes(tripTimesLists);