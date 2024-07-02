// countdown.js

export const startCountdown = (endDate) => {
  const countDownDate = new Date(endDate).getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (daysElement && hoursElement && minutesElement && secondsElement) {
      daysElement.innerHTML = days;
      hoursElement.innerHTML = hours;
      minutesElement.innerHTML = minutes;
      secondsElement.innerHTML = seconds;
    }

    if (distance < 0) {
      clearInterval(interval);
      const countdownElement = document.querySelector(".countdown");
      if (countdownElement) {
        countdownElement.innerHTML = "EXPIRED";
      }
    }
  };

  const interval = setInterval(updateCountdown, 1000);
};
