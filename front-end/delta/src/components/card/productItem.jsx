import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import MenuExampleContentProp from '../navmenu/navmenu';
import HeaderComponent from '../Header/Header';

const style = {
    h1: {
        marginTop: '1em',
    },
};

class ProductList extends Component {

    render() {
        const {
            product,
        } = this.props;

        return (
           <div>
                <div>
                    <HeaderComponent />
                    <MenuExampleContentProp />
                </div>
                <div>
                <div class="ui card">
  <div class="image">
    <img src="/images/avatar2/large/kristy.png" />
  </div>
  <div class="content">
    <a class="header">Kristy</a>
    <div class="meta">
      <span class="date">Joined in 2013</span>
    </div>
    <div class="description">
      Kristy is an art director living in New York.
    </div>
  </div>
  <div class="extra content">
    <a>
      <i class="user icon"></i>
      22 Friends
    </a>
  </div>
</div>

                </div>
               
          </div>
        );
    }
}


ProductList.propTypes = {
    product: PropTypes.object,
};

export default ProductList;