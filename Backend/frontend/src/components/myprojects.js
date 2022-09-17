export default function Myprojects({props2}){
 
    console.log({props2});
    const handleSubmit=async(e)=>{
      e.preventDefault();
        try{
          
          
      }catch(err){

          
      }
    }
return(
  <div>
    <h1>My Projects</h1>
    
  <table className="table table table-bordered table table-hover">
    <thead>
      <tr >
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
          props2.map(e=>
                    <tr key={e.userName}>
                            <td>{e.userName}</td>
                        <td>{e.projectName}</td>
                        <td>{e.projectDesc}</td>
                        <td>{e.projectSkills}</td>
                        <td>{e.projectPay}</td>
                        <td>{e.projectBud}</td>
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