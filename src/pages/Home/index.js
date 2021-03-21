import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filmes: []
    }
    this.loadFilmes = this.loadFilmes.bind(this)
  }

  componentDidMount() {
    this.loadFilmes()
  }

  loadFilmes() {
    //https://sujeitoprogramador.com/r-api/?api=filmes/
    let url = 'https://sujeitoprogramador.com/r-api/?api=filmes/'
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        this.setState({ filmes: json })
        console.log(json)
      })
  }
  render() {
    return (
      <div>
        <div>
          {this.state.filmes.map((filmes) => {
            return (
              <article key={filmes.id}>
                <strong> {filmes.nome} </strong>
                <img src={filmes.foto} alt="capa"/>
                <Link to="/"></Link>
              </article>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Home;