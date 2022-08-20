import React from "react";
import { Card } from '../Card/Card.component'
// import './CardList.styles.css'

export const CardList = ({ data }) => (
    data.map(element => (
        <Card key={element.id} info={element} />
    ))
)