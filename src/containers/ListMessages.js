import React from 'react';
import Message from '../components/Message';
import {Link} from 'react-router-dom';

export default class ListMessages extends React.Component {
  
    constructor(props) {
        super(props);  
        this.state = {
            message: props.message
        }      
    };
 
    render() {
        return (             
            <div>
                <div className="title-list d-flex justify-content-between">
                    <h1>Список обращений:</h1>
                    <Link to={`/create`} className="btn btn-warning">Создать обращение</Link>
                    <Link to={`/login`} className="btn btn-primary">Войти</Link>
                </div>
                {this.state.message.map(item => <Message type={item.type} number={item.number} region={item.region} theme={item.theme} date={item.date} description={item.description} status={item.status} classStatus={item.classStatus} key={item.id}/>)}
            </div>
        )
    }
};