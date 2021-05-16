let tripTimesLists = document.querySelectorAll('.card__trip-list');



let hideTimes = function(timesParent) {
    for (let j = 0; j < timesParent.length; j++) {
        let tripTimes = timesParent[j].querySelectorAll('.card__trip-item');
        if(tripTimes.length > 4) {
            let elementMore = document.createElement("li");
            elementMore.classList.add('card__trip-more');
            elementMore.textContent = "ещё.."
            for (let i = 3; i < tripTimes.length; i++) {
                tripTimes[i].classList.add('trip-time_disable');
            }   
            elementMore.addEventListener("click", function () {
                if(elementMore.textContent === "ещё..") {
                    for (let i = 3; i < tripTimes.length; i++) {
                        elementMore.textContent = "скрыть"
                        tripTimes[i].classList.remove('trip-time_disable');
                    }
                }
                else {
                    for (let i = 3; i < tripTimes.length; i++) {
                            elementMore.textContent = "ещё.."
                            tripTimes[i].classList.add('trip-time_disable');
                        }
                        
                    }
                }
            );
            timesParent[j].appendChild(elementMore);
        }
    }
}

hideTimes(tripTimesLists);