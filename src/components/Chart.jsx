import React from 'react';

const Chart = ({ chartInfo }) => {

    return (
        <div className='flex items-end gap-1'>
            {chartInfo?.map((chart, index) => (
                <div
                    key={index}
                    className='rounded-tl-md rounded-tr-md'
                    style={{ height: `${chart}px`, width: "6px", backgroundColor: "#1560bd" }}
                ></div>
            ))}
        </div>
    )
}

export default Chart