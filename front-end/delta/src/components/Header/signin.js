import React from 'react';
import "./header.css"
const SignIn =()=>{
    return(
        <div className="signin">
 <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
Sign In</button>

 <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
         <div>
             <form>
             <div class="form-group">
             <label for="exampleInputEmail1">Email address</label>
             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
             </div>
             <div class="form-group">
             <label for="exampleInputPassword1">Password</label>
             <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
             </div>
             <div class="form-group form-check">
             <input type="checkbox" class="form-check-input" id="exampleCheck1" />
             <label class="form-check-label" for="exampleCheck1">Check me out</label>

             </div>
             <button type="submit" class="btn btn-primary">sign in</button>

             </form>
         </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Sign In</button>
      </div>
    </div>
  </div>
</div>
</div>
    )
}
export default SignIn;
