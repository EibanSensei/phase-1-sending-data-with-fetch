function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => response.json())
      .then(data => {
        appendIdToDOM(data.id);
      })
      .catch(error => {
        appendErrorToDOM(error.message);
      });
  }
  
  function appendIdToDOM(id) {
    const idElement = document.createElement("p");
    idElement.textContent = `New ID: ${id}`;
    document.body.appendChild(idElement);
  }
  
  function appendErrorToDOM(errorMessage) {
    const errorElement = document.createElement("p");
    errorElement.textContent = `Error: ${errorMessage}`;
    document.body.appendChild(errorElement);
  }