import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class List extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        );
    }
}

const ListContainer = () => <List items={['Learn React', 'Learn Next.js', '???', 'Profit']} />;

export default ListContainer;
