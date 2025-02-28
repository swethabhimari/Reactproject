import { useEffect, useState } from "react";
import { getData, updateData, deleteData } from "../services/firestoreService";

const UpdateDeleteData = () => {
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newName, setNewName] = useState("");

  // Fetch Users from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getData("users");
      setUsers(data);
    };
    fetchUsers();
  }, []);

  // Update User Data
  const handleUpdate = async (id) => {
    if (!newName.trim()) {
      alert("Name cannot be empty!");
      return;
    }
    await updateData("users", id, { name: newName });
    alert("User updated!");

    // Refresh user list
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === id ? { ...user, name: newName } : user))
    );

    setEditingId(null);
    setNewName("");
  };

  // Delete User
  const handleDelete = async (id) => {
    await deleteData("users", id);
    alert("User deleted!");

    // Remove user from the list
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2>Manage Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {editingId === user.id ? (
              <>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <button onClick={() => handleUpdate(user.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {user.name} 
                <button onClick={() => setEditingId(user.id)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdateDeleteData;
