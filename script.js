document.addEventListener("DOMContentLoaded", () => {
    const eventForm = document.getElementById("eventForm");
    const output = document.getElementById("output");
    const currentTime = document.getElementById("currentTime");
  
    // Display the current date and time
    function updateTime() {
      const now = new Date();
      currentTime.textContent = `Current Time: ${now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })}`;
    }
    setInterval(updateTime, 1000);
  
    // Handle form submission
    eventForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const eventName = document.getElementById("eventName").value;
      const startDate = new Date(document.getElementById("startDate").value);
      const endDate = new Date(document.getElementById("endDate").value);
      const now = new Date();
  
      // Validation
      if (startDate < now) {
        output.textContent = "Start date cannot be in the past.";
        return;
      }
      if (endDate <= startDate) {
        output.textContent = "End date must be after the start date.";
        return;
      }
  
      // Calculate days between dates
      const diffInDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
      const countdown = Math.ceil((startDate - now) / (1000 * 60 * 60 * 24));
  
      // Format dates
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      const formattedStartDate = startDate.toLocaleDateString("en-US", options);
      const formattedEndDate = endDate.toLocaleDateString("en-US", options);
  
      // Display output
      output.innerHTML = `
        <p><strong>Event Name:</strong> ${eventName}</p>
        <p><strong>Start Date:</strong> ${formattedStartDate}</p>
        <p><strong>End Date:</strong> ${formattedEndDate}</p>
        <p><strong>Duration:</strong> ${diffInDays} day(s)</p>
        <p><strong>Countdown:</strong> ${countdown} day(s) to start</p>
      `;
    });
  });
  