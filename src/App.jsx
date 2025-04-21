import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import ToDoList from "./components/ToDoList";
import userList from './users.js';
import EditUserForm from './components/EditUserForm.jsx';
import AddUserForm from './components/AddUserForm.jsx'


function App() {
    const [users, setUsers] = useState(userList);
    const [editing, setEditing] = useState(false);
    const initialUser = { id: null, name: "", username: "" };
    const [currentUser, setCurrentUser] = useState(initialUser);

    const addUser = (user) => {
      user.id = users.length + 1;
      setUsers([...users, user]);
    };

    const deleteUser = (id) => {
      setUsers(users.filter((user) => user.id !== id));
    };

    const editUser = (id, user) => {
      setEditing(true);
      setCurrentUser(user);
    };

    const updateUser = (newUser) => {
      setUsers(
        users.map((user) => (user.id === currentUser.id ? newUser : user))
      );
      setCurrentUser(initialUser);
      setEditing(false);
    };

    return (
      <>
        <Header />
        <Outlet />
        <div className="container">
          <div className="row">
            <div className="five columns">
              {editing ? (
                <div>
                  <h2>Edit user</h2>
                  <EditUserForm
                    currentUser={currentUser}
                    setEditing={setEditing}
                    updateUser={updateUser}
                  />
                </div>
              ) : (
                <div>
                  <h2>Add user</h2>
                  <AddUserForm addUser={addUser} />
                </div>
              )}
            </div>
            <div className="seven columns">
              <h2>View users</h2>
              <ToDoList
                users={users}
                deleteUser={deleteUser}
                editUser={editUser}
              />
            </div>
          </div>
        </div>
      </>
    )
}

export default App;
