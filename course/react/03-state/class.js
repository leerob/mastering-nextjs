import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filteredItems: this.props.items
        };

        // This binding is necessary to make `this` work in the callback
        this.filterItems = this.filterItems.bind(this);
    }

    filterItems(e) {
        const searchValue = e.target.value;
        const currentItems = [...this.props.items];
        const matchingItems = currentItems.filter((item) => item.startsWith(searchValue));

        this.setState({
            filteredItems: matchingItems
        });
    }

    render() {
        return (
            <>
                <input onChange={this.filterItems} />
                <ul>
                    {this.state.filteredItems.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </>
        );
    }
}

const ListContainer = () => <List items={['Learn React', 'Learn Next.js', '???', 'Profit']} />;

export default ListContainer;
