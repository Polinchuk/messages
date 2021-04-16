import React from 'react';
import MessageforAdmin from '../components/MessageForAdmin';
import {Link} from 'react-router-dom';
import { changeStatus } from '../action/';

export default class Admin extends React.Component {
  
    constructor(props) {
        super(props);  
        this.state = {
            message: props.message
        };
        this.handleClick = this.handleClick.bind(this)
    
    };
  

    handleClick = (event) => {

        event.preventDefault();
        let id = this.state.message.map(item => item.id).indexOf(event.target.elements.btn.value);
        let newStatus = event.target.elements.selectStatus.value;
        let newClassStatus = '';
            
        if (newStatus === 'Зарегистрирована') {
            newClassStatus = 'badge-primary';
        } else if(newStatus === 'Принята') {
            newClassStatus = 'badge-success';
        }else if(newStatus === 'Отклонена') {
            newClassStatus = 'badge-danger';
        }else {
            newClassStatus = 'badge-secondary';
        };
        
        this.props.dispatch(changeStatus(id, newStatus, newClassStatus));

    }
 
    render() {
        return (             
            <div>
                <div className="title-list d-flex justify-content-between">
                    <h1>Список обращений:</h1>
                </div>
                {this.state.message.map(item =>
                    <MessageforAdmin
                        id={item.id}
                        number={item.number}
                        region={item.region}
                        theme={item.theme}
                        date={item.date}
                        description={item.description}
                        status={item.status}
                        key={item.id}
                        onClick={this.handleClick}
                    />
                )}
                <Link to={`/`} className="btn btn-primary">Назад</Link>
            </div>
        )
    }
};