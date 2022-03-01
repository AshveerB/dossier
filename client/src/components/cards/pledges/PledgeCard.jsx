import React from 'react';
import { promises } from '../../data'

function PledgeCard(props) {
    return (
        <div className='pledges'>
            {promises.map(promise => promise + '  ')}
        </div>
    );
}

export default PledgeCard;