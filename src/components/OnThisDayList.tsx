import React from 'react';
import { OnThisDayEvent } from '../types';

interface OnThisDayListProps {
    events: OnThisDayEvent[];
}

const OnThisDayList: React.FC<OnThisDayListProps> = ({ events }) => (
    <ul className="on-this-day-list">
        {events.map((event, index) => (
            <li key={index} className="event-item">
                <strong>{event.year}</strong>: {event.text}
            </li>
        ))}
    </ul>
);

export default OnThisDayList;
