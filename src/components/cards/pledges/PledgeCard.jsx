import React from 'react';
import { promises } from '../../data'

function PledgeCard(props) {
    return (
        <div>
            {promises.map(promise => promise + '  ')}
        </div>
    );
}

export default PledgeCard;