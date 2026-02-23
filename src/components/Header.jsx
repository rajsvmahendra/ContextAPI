import { useAppContext } from "../context/AppContext";

export default function Header() {
    const { user, theme, toggleTheme } = useAppContext();

    return (
        <header
            style={{
                padding: 20,
                background: theme === "light" ? "#eee" : "#333",
                color: theme === "light" ? "#000" : "#fff",
            }}
        >
            <h2>Welcome, {user}</h2>

            <button
                style={{
                    padding: 8,
                    border: "none",
                    borderRadius: 6,
                    backgroundColor: theme === "light" ? "#333" : "#eee",
                    color: theme === "light" ? "#eee" : "#333",
                    cursor: "pointer",
                }}
                onClick={toggleTheme}>Toggle</button>
        </header>
    );
}