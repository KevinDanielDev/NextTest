interface IErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({ message }) => (
    <p className="text-red-500 text-sm">{message}</p>
);

export default ErrorMessage;
