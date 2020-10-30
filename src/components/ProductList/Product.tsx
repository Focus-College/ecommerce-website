import { getValueFromDenormalizedStringPath } from '../../helpers/getValueFromDenormalizedStringPath';
import Images from '../../images';

import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import { IProduct } from './HorizontalProductList';
import './style.scss';

export default function Product( props:IProduct ){

    return (
        <Card className="product-list-product">
            { props.image && <Card.Img variant="top" src={getValueFromDenormalizedStringPath(Images, props.image)} /> }
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <div>
                    {props.categories.map( category => {
                        return <Badge variant="info">{category}</Badge>
                    })}
                </div>
                <small className="text-muted">Product: {props.productNo}</small>
            </Card.Footer>
        </Card>
    );

}