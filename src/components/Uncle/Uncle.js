import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = ({house}) => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>Hi, from uncle</h3>
            <p><small>House: {house}</small></p>
            <p><small>Money: {money}</small></p>
            <button onClick={()=>setMoney(money + 500)}>Added 500</button>
        </div>
    );
};

export default Uncle;