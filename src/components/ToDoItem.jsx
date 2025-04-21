

const ToDoItem = (props) => {
  const {id, name, username} = props.user;
  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{username}</td>
        <td>
          <button onClick={() => props.editUser(id, props.user)}>Edit</button>{"  "}
          <button onClick={() => props.deleteUser(id)}>Delete</button>
        </td>
      </tr>
    </>
  )
}

export default ToDoItem;
