const todoList = [
    { title: "Task 1", description: "Description 1" },
    { title: "Task 2", description: "Description 2" },
    { title: "Task 3", description: "Description 3" },
  ];
  
  let ulElement = document.getElementById("todo-list");
  
  /**
   * Updates the DOM with the current list of todo items.
   * The function waits for a set timeout before rendering the list.
   */
  function todoPrompt() {
    // Simulate a delay before updating the list
    setTimeout(() => {
      let todoItems = ""; // Initialize an empty string to accumulate list items
  
      // Iterate over each item in the todoList
      todoList.forEach((item) => {
        // Create list item HTML for each todo and append to todoItems
        todoItems += `
          <li>
            <b>${item.title}</b>
            <p>${item.description}</p>
          </li>
        `;
      });
  
      // Update the inner HTML of the ul element with the accumulated list items
      ulElement.innerHTML = todoItems;
    }, 1000); // Delay of 1000 milliseconds (1 second)
  }
  
  
  /**
   * Adds a new todo item to the todo list and returns a Promise.
   * The Promise resolves after a set timeout (2 seconds) and executes a callback function.
   * If an error occurs, the Promise rejects with an Error object.
   * @param {Object} todo - The todo item to add (includes title and description).
   * @return {Promise} - A Promise that resolves or rejects after adding the todo item.
   */
  function addTodo(todo) {
    return  new Promise((resolve, reject) => {
        
        setTimeout(() => {
            
            // Add the new todo item to the todo list
            todoList.push(todo);
            
            // Simulate an error condition
            const e = false;
            if (!e) {
                // Resolve the Promise
                resolve();
            } else {
                // Reject the Promise
                reject(new Error("Error occurred..."));
            }

          }, 2000); // Delay of 2000 milliseconds (2 seconds)
    })
    
  }


  addTodo(
    {
      title: "Family Time",
      description: "Spend time with family",
    }
  ).then(response => {
      todoPrompt();
  }).catch(e => {
      console.log(e);
  });