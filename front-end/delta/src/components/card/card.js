import React from 'react';
// import Header from "./Header/Header";
// import {graphql} from 'react-apollo';
import lunchQuery from '../../graphql/brand';
// import MenuExampleContentProp from "./Card/Card";
import { Grid } from 'semantic-ui-react';
import ProductItem from './productItem';
import { Query } from 'react-apollo';

export default function Product(props) {
    // console.log('props' , props.data);
    // if (props.data.loading) { return <div>Loading...</div>; }
    return (
        <Query
            query={lunchQuery}
            variables={{ input: 'zara' }}
        >
            {({ data, loading }) => {
                if (loading) return <div>Loading...</div>;
                const { getProductByMark } = data;
                return (
                    <div>
                        <Grid columns="2" divided>
                            <Grid.Row>
                                <Grid.Column width={12}>
                                    {getProductByMark.map((product) => (
                                        <ProductItem
                                            key={product._id} // eslint-disable-line
                                            product={product}
                                        />
                                    ))}
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                )
            }}
        </Query>
    );
}
// const Card=()=>{
//     return(
//         <div className="card-list">
//         <div>
//             <Header />
//             <MenuExampleContentProp />
//         </div>
//         <div className="card-items">
//         <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src=".../100px180/" alt="Card image cap" />
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

//         </div>

//         </div>
//     )
//}
