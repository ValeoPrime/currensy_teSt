import React, { Component } from 'react';
import './App.css';
import Form from './form/form'
import Table from './table/table'
import Loader from './UI/Loader/Loader'
import axios from 'axios'



export default class App extends Component {
  state = {
    formOnSubmit: false,
    dateStart: '',
    dateEnd: '',
    valuteID: "1R01235",
    currencies: []
  }

  formSubmit = async event => {
    event.preventDefault()
    let curr_date = Date.now();

    try {
      const responce = await axios.get('api/index.php', {
        method: 'get',
        params: {
          dateStart: this.state.dateStart || 631152000, // дата на 01.01.1990
          dateEnd: this.state.dateEnd || curr_date, // текущая дата
          valuteID: this.state.valuteID 
        }
      })

      this.setState({
        formOnSubmit: true,
        currencies: responce.data
      })
    } catch (e) {
      console.log(e)
    }
  }

  inputChange = (event) => {
    let dateStart = ''
    let dateEnd = ''
    let valuteID = ''
    
    if (event.target.id === "dateStart") {
      dateStart = event.target.value
      this.setState({
        dateStart: Date.parse(dateStart) / 1000
      })
    }
    if (event.target.id === "dateEnd") {
      dateEnd = event.target.value
      this.setState({
        dateEnd: Date.parse(dateEnd) / 1000
      })
    }
    if (event.target.id === "currencyName") {
      valuteID = event.target.value
      this.setState({
        valuteID
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Form
          onChange={this.inputChange}
          onSubmit={this.formSubmit}
        />
        {this.state.currencies.length === 0 ?
          <p> Здесь будет отображена таблица с результатами выборки</p>
          : this.state.formOnSubmit
            ? <Table
              currencies={this.state.currencies}
            /> : <Loader />
        }
      </div>
    )
  };
}


