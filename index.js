// Add your code here
function submitData(name, email) {
    // Explains data object sent in the request 
    const data = {
      name: name,
      email: email
    };
  
    // Explains configuration of object
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    };
  
    // Creates a POST request
    return fetch("http://localhost:3000/users", config)
      .then(response => response.json())
      .then(data => {
        console.log("Response:", response); // debugging
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
        // Accesses the newly created id to DOM
        document.body.innerHTML += `<p>${data.id}</p>`;
      })
      .catch(error => {
        // Handles errors by fixing the errors to DOM
        document.body.innerHTML += `<p>${error.message}</p>`;
      });
  }

  