const PersonTable = () => {
  const contacts = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "Guillaume", lastName: "Lefebvre" },
  ];

  return (
    <>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((p,id) => (
            <tr key={id}>
              <td>{id+1}</td>
              <td>{p.firstName}</td>
              <td>{p.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PersonTable;
