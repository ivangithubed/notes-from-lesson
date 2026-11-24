export default function SelectInput({ label, name, value, onChange, options }) {
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        className="border rounded-lg w-full"
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}

     
      </select>
    </div>
  );
}
