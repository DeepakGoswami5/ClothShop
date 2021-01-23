import React, { Component } from 'react';
import SHOP_DATA from './shops_data'
import CollectionsPreview from '../../components/collections-preview/collections-preview'

class ShopPage extends Component {
    constructor(props){
        super(props);

        this.state ={
            collections : SHOP_DATA
        }
    }
    render(){
        const {collections} = this.state;
        return(
            <div className='shop-page'>
                {
                    collections.map(({id,...othercollectionsProps}) => (
                        <CollectionsPreview key={id} {...othercollectionsProps}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;