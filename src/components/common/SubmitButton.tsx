interface ISubmitButtonProps {
    loading: boolean;
    label: string;
}

const SubmitButton: React.FC<ISubmitButtonProps> = ({ loading, label }) => (
    <button
        type="submit"
        className={`w-full py-2 sm:py-3 ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-400"
        } text-white font-bold rounded-lg hover:bg-yellow-500 transition`}
        disabled={loading}
    >
        {loading ? "Loading..." : label}
    </button>
);

export default SubmitButton;
