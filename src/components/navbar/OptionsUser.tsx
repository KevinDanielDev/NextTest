const OptionsUser = ({ onLogout }: { onLogout: () => void }) => {
    return (
        <div className="dropdown rounded-md p-2">
            <ul tabIndex={0} className="menu bg-base-100 rounded-box w-52">
                <li>
                    <a href="#" onClick={onLogout}>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default OptionsUser;
