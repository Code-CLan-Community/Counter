(function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    // Set today's date and time to 7:30 PM
    let today = new Date();
    today.setHours(19, 30, 0, 0); // 19 is 7 PM and 30 is 30 minutes in 24-hour format

    // Calculate the time until today at 7:30 PM
    const countDown = today.getTime(),
      x = setInterval(function () {

        const now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day));
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        // Do something when the time is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "Get Ready For Session";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);

          // Enable the join button and style it
          document.getElementById("joinButton").disabled = false;
          // document.getElementById("joinButton").style.backgroundColor = "green";
          document.getElementById("joinButton").style.color = "white";
        }
      }, 1000); // Update every second
  })();

  // Function to handle joining the session
  function joinSession() {
    // Redirect to the joining link
    window.location.href = "https://meet.google.com/ffb-ooeh-qei";
  }