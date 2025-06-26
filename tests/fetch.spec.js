
fetch("testdata.json")
  .then(response => response.json()) // Parse the JSON response
  .then(data => showInfo(data)) // Call the showInfo function with the data
  .catch(error => console.error('Error fetching or parsing data:', error)); // Handle errors

function showInfo(data) {
    console.table(data.items); // Display the 'items' array in a table format
}

