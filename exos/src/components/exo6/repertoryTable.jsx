const RepertoryTable = ({contacts}) => {
  return (
    <>
    <div style={contacts.length>0?{display:"block"}:{display:"none"}}>
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
              <td>{p.firstname}</td>
              <td>{p.lastname}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <p style={{color:"white",backgroundColor:"#212529"}}><b>{contacts.length>0?"":"Aucun contact n'a été enregistré"}</b></p>
    </>
  );
};

export default RepertoryTable;
