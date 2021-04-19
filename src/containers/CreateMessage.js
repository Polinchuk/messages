import React from 'react';
import {Link} from 'react-router-dom';
import { addNewMessage } from '../action/';
import url from '../components/url.json';

export default class CreateMessage extends React.Component {

    constructor(props) {
        super(props);
        let today = new Date(),
        date = today.getDate() + '.' + today.getMonth() + '.' + today.getFullYear();
        this.state = {
            error: null,
            isLoaded: false,
            itemsRegion: [],
            itemsGroups: [],
            itemsType: [],
            date: date,
            message: props.message,
            valueGroup: '',
            valueType: ''
        }; 
        
        this.formHandler = this.formHandler.bind(this)
    };
  
    formHandler = (event) => {

        event.preventDefault();
        let id = String(this.state.message.length+1);
        let number = String(id).padStart(4,'0');
        let date = this.state.date;
        let theme = event.target.elements.formTheme.value;
        let group = event.target.elements.formGroup.value;
        let type = event.target.elements.formType.value;
        let text = event.target.elements.textMessage.value;
        let status = "Зарегистрирована";
        let classStatus = "badge-primary";
        this.props.dispatch(addNewMessage(id, number, date, theme, group, type, text, status, classStatus));
        this.props.history.push('/');

    }

    groupHandler = (event) => {
        event.preventDefault();
        let groupId = event.target.id;
        this.state.itemsType.map(item => {
            if (item.id === groupId) {
                this.setState({
                    valueType: item.name
                });
            }
        });
    }

    typeHandler = (event) => {
        event.preventDefault();
        let typeId = event.target.id;
        this.state.itemsGroups.map(item => {
            if (item.id === typeId) {
                this.setState({
                    valueGroup: item.name
                });
            }
        });
    }
    
    componentDidMount() {

        fetch(url.urlRegion,{
             mode: 'no-cors'
            })
        
            .then(response => response.json())
          

        fetch(url.urlGroup)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        itemsGroups: result.content
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

        fetch(url.urlType)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        itemsType: result.content
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

         

    render() {

        const {error, isLoaded, itemsGroups, itemsRegion, itemsType, valueGroup, valueType} = this.state;
       if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <div>
                    <form id="form" onSubmit={this.formHandler}>
                        <h5 className="modal-title" id="exampleModalLabel">Сообщить о проблеме</h5>
                        <h6>Дата обращения: {this.state.date}</h6>
                        <div className="form-group">
                            <label htmlFor="formTheme">Введите тему обращения</label>
                            <input type="text" className="form-control" id="formTheme" required/>
                            <label htmlFor="formRegion">Выберите регион</label>
                            <select className="custom-select" id="formRegion" defaultValue="">
                                <option disabled selected hidden>Выберите регион</option>
                                {itemsRegion.map(item => (
                                    <option key={item.id} value={item.name} required>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="formGroup">Выберите группу</label>
                            <select className="custom-select" id="formGroup" required>
                                {valueGroup ? (<option disabled selected hidden>{valueGroup}</option>) : (<option disabled selected hidden>Выбрать из списка</option>)}
                                {itemsGroups.map(item => (
                                    <option key={item.id} value={item.name} id={item.id} onClick={this.groupHandler}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="formType">Выберите тип обращения</label>
                            <select className="custom-select" id="formType" required>
                                {valueType ? (<option disabled selected hidden>{valueType}</option>) : (<option disabled selected hidden>Выбрать из списка</option>)}
                                {itemsType.map(item => (
                                    <option key={item.id} value={item.name} id={item.subject.id} onClick={this.typeHandler}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="textMessage">Введите текст сообщения</label>
                            <textarea className="form-control" id="textMessage" rows="3" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Отправить</button>
                        <Link to={`/`} className="btn btn-primary">Назад</Link>
                    </form>
                </div>
            )
        }
    }

    
}


