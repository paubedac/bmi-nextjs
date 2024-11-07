
interface Props {
  id: string;
  name: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: () => void;
}

const RadioInputFom = ({ id, name, label, value, checked, onChange }: Props) => {
  return (
    <div className="flex items-center me-4">
      <input
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
        <label
          htmlFor={label}
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      </div>
    )
}

export default RadioInputFom;