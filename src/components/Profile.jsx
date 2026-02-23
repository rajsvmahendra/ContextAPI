import { useAppContext } from "../context/AppContext";

export default function Profile() {
    const { user, setUser } = useAppContext();

    return (
        <div
            className="profile"
            style={{ padding: 20 }}>
            <h3>User Name</h3>

            <input
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
        </div>
    );
}