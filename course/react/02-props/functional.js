import React from 'react';

const List = ({items}) => (
    <ul>
        {items.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
);

const ListContainer = () => <List items={['Learn React', 'Learn Next.js', '???', 'Profit']} />;

export default ListContainer;
