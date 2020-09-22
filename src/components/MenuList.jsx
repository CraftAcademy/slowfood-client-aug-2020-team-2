import React, { Component } from 'react'
class MenuList extends  Component  {
  state = { 
    menu: []
  } 
  componentDidMount = async () => {
    const products = await getProducts()
    this.setState({menu: products})
  }
  render() {
    const menu = this.state.menu;
    return (
      <>
        { menu.length > 0 && menu.map(item => {
          return (
            <>
              <div data-cy={"product-" + item.id} id={"product-" + item.id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            </>
          )
        }
        )}
      </>
    )
  }
}
export default MenuList
