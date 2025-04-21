import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { props.users.length > 0 ? (
                    props.users.map(user => {
                        const {id } = user;
                        return (
                            <ToDoItem key={id} user={user} deleteUser={props.deleteUser} editUser={props.editUser}  />
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No users found</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
      
      
    </>
  )
}

export default ToDoList;
