import React, { useEffect, useState } from 'react';
import { CardList } from '../CardList/CardList.component';
import { HeadingH1, Wrapper } from "../Commons"
import {TeamContainer} from "./TeamElements"

const Team = () => {
    
    const [members, setMembers] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setMembers(data))
    }, []);

    return (
        <>
            <TeamContainer id="team">
                <HeadingH1>Team</HeadingH1>
                <Wrapper>
                    <CardList data={members} />
                </Wrapper>                
            </TeamContainer>
        </>
    )
}

export default Team;