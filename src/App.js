import React from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import Items  from "./components/items"
import Categories  from "./components/categories"
import ShowFullItem from "./components/ShowFullItem"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'ALAN_test_1.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стул черный',
          img: 'chair-black.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'tables',
          price: '49.99'
        },
        {
          id: 3,
          title: 'Стул белый',
          img: 'chair-white.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofa',
          price: '49.99'
        },
        {
          id: 4,
          title: 'Стул красный',
          img: 'chair-red.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 5,
          title: 'Стул бежевый',
          img: 'chair-bejev.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }


    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)


  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem} />}
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({ fullItem: item})
    this.setState({ showFullItem: !this.state.showFullItem})
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
      this.setState({
        currentItems: this.state.items.filter(el => el.category === category)
      })
      
  }

  addToOrder(item) {
    let isArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isArray = true

      })
      if(!isArray)
        this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
