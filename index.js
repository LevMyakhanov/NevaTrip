let tripTimesLists = document.querySelectorAll('.card__trip-list');

if (tripTimesLists.length > 4) {
    let tripTimes = tripTimesLists.querySelectorAll('.card__trip-item');
    for (let index = 0; index < tripTimes.length; index++) {
        tripTimes[3].innerHTML = "ещё";
        if (index > 3) {
            
        }
    }
}