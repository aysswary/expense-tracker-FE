import React from 'react';

const RenderCenterLabel = ({ label, totalAmount }) => (
    <>
        <text
            x="50%"
            y="50%"
            dy={-25}
            textAnchor="middle"
            fill="#666"
            fontSize="14px"
            dominantBaseline="middle"
        >
            {label}
        </text>
        <text
            x="50%"
            y="50%"
            dy={8}
            textAnchor="middle"
            fill="#333"
            fontSize="24px"
            fontWeight="semi-bold"
            dominantBaseline="middle"
        >
            {totalAmount}
        </text>
    </>
);

export default RenderCenterLabel;
