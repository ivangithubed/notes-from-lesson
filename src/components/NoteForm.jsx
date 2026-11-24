import { useState } from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import TextAreaInput from "./TextAreaInput";

const NoteForm = ({ setNotes }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Work",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submited", formData);

    // if (!formData.title.trim() || !formData.description.trim()) {
    //   alert("Введіть заголовок та опис нотатки!");
    //   return;
    // }

    const newNote = {
      id: Date.now(),
      ...formData,
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);

    setFormData({
      title: "",
      priority: "Medium",
      category: "Work",
      description: "",
    });
    setIsFormVisible(false);
  };

  return (
    <>
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600"
      >
        {isFormVisible ?'Сховати форму ❌':'Показати форму ➕' }
      </button>

      {isFormVisible && (
        <form className="mt-4" onSubmit={handleSubmit}>
          <TextInput
            label="Заголовок"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required={true}
          />

          <SelectInput
            label="Пріоритет"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: "Low", label: "🟢 Низький" },
              { value: "Medium", label: "🟡 Середній" },
              { value: "High", label: "🔴 Високий" },
            ]}
          />
          <SelectInput
            label="Категорія"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: "Low", label: "🏢 Робота" },
              { value: "Medium", label: "🏠 Особисте" },
              { value: "High", label: "💡 Ідеї" },
            ]}
          />

          <TextAreaInput
            label="Опис"
            name="description"
            value={formData.description}
            // required={true}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600"
          >
            Додати нотатку
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
