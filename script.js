/* Base styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background: #f4f4f4;
}

h1 {
  text-align: center;
  color: #2c3e50;
}

section, form {
  background: #fff;
  padding: 20px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  max-width: 800px;
  box-sizing: border-box;
}

input, button, select {
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #2c3e50;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #34495e;
}

/* Grid layout for responsive section */
.grid-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background: #ecf0f1;
  padding: 20px;
  border-radius: 10px;
}

.grid-layout > div {
  flex: 1 1 300px;
  min-width: 250px;
}

/* To-Do List & Gallery */
.todo-list li {
  margin: 10px 0;
  padding: 8px;
  background: #e1f5fe;
  border-left: 5px solid #039be5;
  cursor: pointer;
}

/* Media Queries */
@media (max-width: 768px) {
  h1 {
    font-size: 1.6rem;
  }

  .grid-layout {
    flex-direction: column;
  }

  button {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  input, button {
    font-size: 0.9rem;
  }

  form, section {
    padding: 15px;
  }

  .todo-list li {
    font-size: 0.95rem;
  }
}