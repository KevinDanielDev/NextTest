interface ActionButtonsProps {
    onLogin: () => void;
    onRegister: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onLogin, onRegister }) => {
    return (
        <div className="flex-none gap-2">
            <button className="btn btn-sm btn-yellow" onClick={onLogin}>
                Login
            </button>
            <button className="btn btn-sm btn-yellow" onClick={onRegister}>
                Register
            </button>
        </div>
    );
};

export default ActionButtons;
