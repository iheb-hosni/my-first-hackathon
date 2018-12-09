import React, { Component } from 'react';

const SignUp =()=>{
    return(
        <div>
 <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
Sign Up</button>

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
    <label for="exampleInputPassword1"> First name</label>
    <input type="text" class="form-control" id="lastname" placeholder="First name"/>
            </div>
            <div class="form-group">
    <label for="exampleInputPassword1"> last name</label>
    <input type="text" class="form-control" id="lastname" placeholder="last name"/>
            </div>
             <div class="form-group">
             <label for="exampleInputEmail1">Email address</label>
             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
             </div>
             <div class="form-group">
             <label for="exampleInputPassword1">Password</label>
             <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
             </div>
             
             <button type="submit" class="btn btn-primary">sign Up</button>
              
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
export default SignUp;
