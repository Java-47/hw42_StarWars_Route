import React, { useContext } from 'react'
import { friends } from '../utils/constants';
import { HeroContext } from '../utils/context';
import Friend from './Friend';

const DreamTeam = () => {
    const { hero } = useContext(HeroContext);
    return (
        <section className="float-end w-50 mx-1 row border">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.filter(f => f !== hero).map((item, index) => <Friend key={index} friend={item} number={index + 1} />)}
        </section>
    )
}

export default DreamTeam