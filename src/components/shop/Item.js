import React from 'react';

class Item extends React.Component {
    constructor() {
        super();
        this.state = {
            error: false,
            item: [],
            itemImage: [],
            itemData: []
        };
    }

    async componentDidMount() {
        await fetch("https://fortnite-api.theapinetwork.com/item/get?id="+this.props.match.params.id+"&authorization=33d32a30a9aab66ac78644bb4cc80652")
            .then(res => res.json())
            .then(
                (items) => {
                    console.log(items.data.item);
                    this.setState({
                        item: items.data.item,
                        itemData: items.data.item,
                        itemImage: items.data.item.images
                    });
                },
                (error) => {
                    this.setState({
                        error: true,
                        itemData: []
                    });
                }
            )
    }

    renderItem = () => {
        const {item, itemData} = this.state;

        if(item.images) {
            return (
                <div className="card">
                    <div className="card-body text-center" >
                        <h2 className="card-title">{itemData.name}</h2>
                        <img src={item.images.icon} alt={itemData.name}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="loader" />
            )
        }
    }

    render() {
       return (
           this.renderItem()
       )
    }
}

export default Item;