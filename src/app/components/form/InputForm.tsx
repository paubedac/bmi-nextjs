interface InputFormProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
};

const InputForm: React.FC<InputFormProps> = ({ label, value, onChange }) => {
  return (
    <div className="mt-10 grid">
      <div>
        <label htmlFor={label}>{label}</label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <input
              id={label}
              className="block flex-1 border-0 bg-transparent py-1.5 px-6 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 text-right"
              type="number" 
              value={value} 
              onChange={(e) => onChange(parseFloat(e.target.value))}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputForm;