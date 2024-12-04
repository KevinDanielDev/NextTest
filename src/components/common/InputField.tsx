interface IInputFieldProps {
    id: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const InputField: React.FC<IInputFieldProps> = ({ id, type, value, onChange, placeholder }) => (
    <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input input-bordered w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
        required
    />
);

export default InputField;
