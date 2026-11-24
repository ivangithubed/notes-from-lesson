

const TextInput = ({label, name, value, onChange, required=false}) => {
  return (
    <div className="mb-6">
            <label
              htmlFor={name}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {label}
            </label>
            <input
              type="text"
              id={name}
              name={name}
              className="border rounded-lg w-full"
              value={value}
              onChange={onChange}
                required={required}
            />
          </div>
  )
}
export default TextInput