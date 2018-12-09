import React from 'react'
import { Input } from 'semantic-ui-react'
import withProductFormStyle from './ProductFormStyle';
const ProductForm = (props) =>{
const {className} = props;
    return(
<div className={className}>
<div className="from">
<div className="add"> 
<h2>ADD PRODUCT</h2>
</div>
<div className="bloc-name">
<div  className="bloc-divtest"><p className="name">Nom: </p></div>
<div><Input placeholder='Nom product' className="input-style"/></div>
</div>
<div className="bloc-name">
<div className="bloc-divtest"><p className="name">Description: </p></div>

<div><Input placeholder='Description product' /></div>
</div>
<div className="bloc-name">
<div className="bloc-divtest"><p className="name">Mark: </p></div>
<div><Input placeholder='Mark product' /></div>
</div>

<div className="bloc-name">
<div className="bloc-divtest"><p className="name">Picture: </p></div>
<div><Input placeholder='picture product' /></div>
</div>
<div className="bloc-name">
<div className="bloc-divtest"><p className="name">Price: </p></div>
<div><Input placeholder='price product' /></div>
</div>
</div>
<div className="button-add-cancel">
<div className="button">
<button class='ui basic button' role='button'>
    ADD
  </button>
    </div>
    <div className="button">
<button class='ui basic button' role='button'>
cancel
  </button>
    </div>
    </div>
</div>

)
}

export default withProductFormStyle(ProductForm);