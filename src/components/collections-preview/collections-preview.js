import React from 'react';
import CollectionItems from '../collections-items/collections'
import './collections-preview.scss';

const collectionsPreview = ( {title,items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item,idx) => idx < 4)
                .map(({ id, ...otheritemsProps }) => (
                    <CollectionItems key={id} {...otheritemsProps} />
                ))
            }
        </div>
    </div>
);

export default collectionsPreview;
