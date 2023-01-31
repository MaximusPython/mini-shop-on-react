import React, { Component } from 'react'

export class Сategories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'sofa',
                    name: 'Диваны'
                },
                {
                    key: 'chairs',
                    name: 'Стулья'
                },
                {
                    key: 'tables',
                    name: 'Столы'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
            {this.state.categories.map(el => (
                <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
            ) )}
      </div>
    )
  }
}

export default Сategories