import React from 'react';
import {Link} from 'react-router-dom';

export default class ShowMessage extends React.Component {

    constructor(props) {
        super(props);
           
        if (props.location.propsSearch === undefined) {
            this.state = {isLoaded: false};
        } else {
            this.state = {isLoaded: true};
        }
    }

    render() {
        
        const msg = this.props.location.propsSearch;
        if (!this.state.isLoaded) {
            return (
                <div>
                    <p>Loading...</p>
                    <Link to={`/`} className="btn btn-primary">Назад</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Просмотр сообщения</h1>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Сообщение №: {msg.number}</h4>
                            <hr />
                            <h6 className="card-subtitle mb-2 text-muted">{msg.type}</h6>
                            <h3 className="card-title">{msg.theme}</h3>
                            <fieldset disabled>
                                <input type="text" id="disabledRegion" className="form-control" placeholder={msg.region} />
                                <input type="text" id="disabledDate" className="form-control" placeholder={`Дата последнего изменения: ${msg.date}`} />
                            </fieldset>
                            <hr />
                            <h3>Описание сообщения:</h3>
                            <p className="card-text">{msg.description}</p>
                            <hr />
                            <h3>Обращение на карте:</h3>
                            <Link to={`/`} className="btn btn-primary">Назад</Link>
                        </div>

                    </div>
                </div>
            )
        }
    }
}