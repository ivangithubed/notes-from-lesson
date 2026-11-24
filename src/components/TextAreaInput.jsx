const TextAreaInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        className="border rounded-lg w-full"
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    </div>
  );
};
export default TextAreaInput;
