import React from 'react';

const List = ({items, ...props}) => {
    const [filteredItems, setFilteredItems] = React.useState(items);

    const filterItems = (e) => {
        const searchValue = e.target.value;
        const currentItems = [...items];
        const matchingItems = currentItems.filter((item) => item.startsWith(searchValue));

        setFilteredItems(matchingItems);
    };

    return (
        <>
            <input onChange={filterItems} />
            <ul {...props}>
                {filteredItems.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
};

const ListContainer = () => (
    <List aria-label="My Fancy List" items={['Learn React', 'Learn Next.js', '???', 'Profit']} />
);

export default ListContainer;
