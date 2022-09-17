export default function Feeds({props,childToParent}){
 
        console.log({props}); 

        const handleSubmit=async(e)=>{
          e.preventDefault();
            try{
               window.location.href = '/projects';
              
          }catch(err){
  
              
          }
        }
    return(
      <div>
        <h1>Feed table</h1>
        <button onClick={handleSubmit}>Add a new project</button>
      <table className="table table table-bordered table table-hover">
        <thead>
          <tr>
          <th scope="col">User Name</th>
            <th scope="col">Project Name</th>
            <th scope="col">Project Desc</th>
            <th scope="col">Project Skills</th>
            <th scope="col">Project Pay</th>
            <th scope="col">Project Bud</th>
          </tr>
        </thead>
        <tbody>
          {
              props.map(e=>
                      <tr key={e._id}>
                        <td>{e.userName}</td>
                          <td>{e.projectName}</td>
                          <td>{e.projectDesc}</td>
                          <td>{e.projectSkills}</td>
                          <td>{e.projectPay}</td>
                          <td>{e.projectBud}</td>
                          <td><button type="submit" className="btn btn-link" onClick={() => childToParent([e])}>
                            Accept</button></td>
                            <td><button type="submit" className="btn btn-danger"
                            >Delete</button></td>
                      </tr>
                  )
            
            }
          </tbody>
      </table>
    </div>
    )
}