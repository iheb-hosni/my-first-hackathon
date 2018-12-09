import React from 'react';
import { Grid } from 'semantic-ui-react';
import AllArticl from './AllArticls';
import EssayageContainer from './EssayageContainer';
import Header from '../Header/Header';

class  Essayage extends React.Component {
    render () {
        return (
            <div>
               
            <Grid>
                <Grid.Row columns={2}>
            <Grid.Column>
                <AllArticl />
            </Grid.Column>
    
            <Grid.Column>
                <EssayageContainer />
            </Grid.Column>
                </Grid.Row>
            </Grid>
      </div>  
      );
    }
       
}

export default Essayage;
