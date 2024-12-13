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
            setTasks([...tasks, { id: Date.now(), task, category }]);
            setTask("");
            setCategory("");
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const categories = ["Trabajo", "Personal", "Estudio", "Lista compra", "Deporte", "Hogar", "Estudio", "Viajes",  "Otros"]; // Predefined categories

    return (
        <div className="gestor">
            <div>
                <h4>Gestor de Tareas</h4>
                <div>
                <input
                    type="text"
                    value={task}
                    onChange={handleTaskChange}
                    placeholder="Introduce una tarea"
                />
                <select value={category} onChange={handleCategoryChange}>
                    <option value="">Agrégala a una categoría!</option>
                    {categories.map((categoryName, index) => (
                        <option key={index} value={categoryName}>
                            {categoryName}
                        </option>
                    ))}
                </select>
                <button onClick={addTask}>Agregar tarea</button>
                    </div>
            </div>

            <div className="table">
                {categories.map((categoryName) => (
                    <div key={categoryName} className="category">
                        <h5>{categoryName}</h5>
                        <ol>
                            {tasks
                                .filter((task) => task.category === categoryName)
                                .map((task) => (
                                    <li key={task.id}>
                                        {task.task}
                                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                                    </li>
                                ))}
                        </ol>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GestorTareas;
