import React, { Component } from 'react';
import SHOP_DATA from './shops_data'

class ShopPage extends Component {
    constructor(props){
        super(props);

        this.state ={
            collections : SHOP_DATA
        }
    }
    render(){
        return(
            <div>
                SHOPS PAGE
            </div>
        )
    }
}

export default ShopPage;