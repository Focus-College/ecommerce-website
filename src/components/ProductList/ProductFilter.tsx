import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Col, Form, Row } from 'react-bootstrap';
import { ISearchFilter } from './HorizontalProductList';
import { categoriesState } from './product.recoil';

export default function ProductFilter( props:{
    searchDispatch: ( searchFilter:ISearchFilter ) => void
} ){

    const categories = useRecoilValue<string[]>(categoriesState);
    const [ searchTerm, setSearchTerm ] = useState("");
    const onChangeSearchTerm = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
        props.searchDispatch({
            name: searchTerm
        });
    }, [ searchTerm ])

    return <>
        <Form>
            <Row>
                <Col>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Filter by Brand</option>
                        { categories.map(( brand:string ) => <option>{brand}</option> )}
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Filter by Category</option>
                        { categories.map(( category:string ) => <option>{category}</option> )}
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Control placeholder="Search Product Name..." value={searchTerm} onChange={onChangeSearchTerm} />
                </Col>
            </Row>
        </Form>
  </>;

}