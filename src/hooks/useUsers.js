import { useState, useEffect } from 'react';
import api from '../api/axios';
import { showInfo, showSuccess, showError } from '../utils/toast';


export default function useUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false); // Added loading state

    useEffect(() => {
        async function fetchUsers() {
            setLoading(true);
            try {
                showInfo("Fetching users...");
                const response = await api.get("/users");
                setUsers(response.data);
                showSuccess("Users loaded successfully!");
            } catch (error) {
                showError("Failed to fetch users");
                console.error(error);
            } finally {
                setLoading(false); // Stop loading regardless of success/error
            }
        }

        fetchUsers();
    }, []);

    return { users, loading };
}

