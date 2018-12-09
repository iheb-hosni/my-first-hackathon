import React, { Component } from 'react'
import "./footer.css"
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h1 className="adress-txt" id="contactus"><span className="our-adr">Contact US</span></h1>
<div className="container">
<div className="col-lg-12 col-md-12 col-sm-12 adr">
    <div className="form-area" >  
        <form role="form" name="f" onsubmit="return false">
        
                    
    				<div className="form-group">
						<input type="text" className="form-control" id="names" name="names" placeholder="Name" />
						<span id="num"></span>
						<span id="nums"></span>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" id="emails" name="email" placeholder="Email" />
						<span id="mail"></span>
					</div>
					
					<div className="form-group">
						<input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" />
						<span id="sub"></span>
					</div>
                    <div className="form-group">
                    <textarea className="form-control" type="textarea" id="message" placeholder="Message" maxlength="140" rows="7"></textarea>
                        <span className="help-block"><p id="characterLeft" className="help-block ">You have reached the limit</p></span>                    
                    </div>
            <div className="button">
         <button type="reset" id="reset" name="reset" className="btn btn-success pull-right">annuler</button>
         <button type="submit" id="submit" name="submit" className="btn btn-primary pull-right" onclick="msg()">envoyer</button>
          </div>
        </form>
    </div>
</div>
</div>
      </div>
    )
  }
}
