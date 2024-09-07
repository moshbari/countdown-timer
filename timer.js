function startCountdown(startTime, endTime) {
    const endDateElement = document.getElementById('end-date');
    let start = new Date(startTime).getTime();
    let end = new Date(endTime).getTime();
    const duration = end - start;

    endDateElement.innerHTML = `Ends on: ${new Date(endTime).toLocaleString()}`;

    function updateTimer() {
        const now = new Date().getTime();
        let distance = end - now;

        if (distance < 0) {
            end = now + duration;
            distance = duration;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days-value').innerHTML = days;
        document.getElementById('hours-value').innerHTML = hours;
        document.getElementById('minutes-value').innerHTML = minutes;
        document.getElementById('seconds-value').innerHTML = seconds;
    }

    setInterval(updateTimer, 1000);
}

const startTime = "2024-09-02T12:00:00"; // Replace with your start time
const endTime = "2024-09-05T12:00:00"; // Replace with your end time
startCountdown(startTime, endTime);
