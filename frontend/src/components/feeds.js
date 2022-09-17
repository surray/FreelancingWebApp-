export default function Feeds({props}){
 
        console.log({props}); 
    return(
      <table className="table table table-bordered table table-hover">
      <thead>
        <tr>
          <th scope="col">projectName</th>
          <th scope="col">projectDesc</th>
          <th scope="col">projectSkills</th>
          <th scope="col">projectPay</th>
          <th scope="col">projectBud</th>
        </tr>
      </thead>
      <tbody>
        {
            props.map(e=>
                    <tr key={e._id}>
                        <td>{e.projectName}</td>
                        <td>{e.projectDesc}</td>
                        <td>{e.projectSkills}</td>
                        <td>{e.projectPay}</td>
                        <td>{e.projectBud}</td>


                        {/* <td><button type="submit" className="btn btn-link"
                        onClick={event=>{this.props.setData(e)} 
                        }>Edit</button></td>
                        <td><button type="submit" className="btn btn-danger"
                        onClick={event=>{this.props.del(e)} 
                        }>Delete</button></td> */}
                    </tr>
                )

            
            }
        
      </tbody>
    </table>
    )
}