import React from 'react'
import './table.css'

function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = date + ' ' + month + ' ' + year;
    return time;
}

const Table = (props) => {
    return (<table className="table" >
        <thead>
            <tr>
                <th>
                    Буквенный код валюты
                    </th>
                <th>
                    Имя валюты
                    </th>
                <th>
                    Курс
                    </th>
                <th>
                    Дата публикации курса
                    </th>
            </tr>
        </thead>

        <tbody>
            {props.currencies.map((item, index) => {
                let date = timeConverter(item.date)
                return (
                    <tr key={index}>
                        <td>{item.charCode}</td>
                        <td>{item.name}</td>
                        <td>{item.value}</td>
                        <td>{date}</td>
                    </tr>
                );
            })
            }
        </tbody>
    </table>

    )
}

export default Table