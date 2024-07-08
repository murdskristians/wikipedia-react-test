import React from 'react';
import { OnThisDayEvent } from '../types';

interface OnThisDayListProps {
    events: OnThisDayEvent[];
}

const OnThisDayList: React.FC<OnThisDayListProps> = ({ events }) => {
    const sortedEvents = [...events].sort((a, b) => a.year - b.year);

    return (
        <div>
            {sortedEvents.map((event, index) => (
                <div key={index}>
                    <strong>{event.year}</strong>: {event.text}
                </div>
            ))}
        </div>
    );
};

export default OnThisDayList;
