import { useState } from "react";
import './style.css';

function GestorTareas() {
    const [task, setTask] = useState("");
    const [category, setCategory] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleTaskChange = (e) => setTask(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);

    const addTask = () => {
        if (task.trim() && category.trim()) {
            setTasks([...tasks, { task, category }]);
            setTask("");
            setCategory("");
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const categories = ["Work", "Personal", "Study", "Other"]; // Predefined categories

    return (
        <div className="gestor">
            <div>
                <h1>Task Manager</h1>
                <input
                    type="text"
                    value={task}
                    onChange={handleTaskChange}
                    placeholder="Enter a task"
                />
                <select value={category} onChange={handleCategoryChange}>
                    <option value="">Select category</option>
                    {categories.map((categoryName, index) => (
                        <option key={index} value={categoryName}>
                            {categoryName}
                        </option>
                    ))}
                </select>
                <button onClick={addTask}>Add Task</button>
            </div>

            <div>
                {categories.map((categoryName, index) => (
                    <div key={index} className="category">
                        <h5>{categoryName}</h5>
                        <ul>
                            {tasks
                                .filter((task) => task.category === categoryName)
                                .map((task, i) => (
                                    <li key={i}>
                                        {task.task}
                                        <button onClick={() => deleteTask(i)}>Delete</button>
                                    </li>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GestorTareas;
