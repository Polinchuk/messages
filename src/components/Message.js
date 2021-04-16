import React from 'react';
import {Link} from 'react-router-dom';

export default class Message extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
                <div className="card">
                    <div className="card-header">
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.date}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.type}</h6>
                        <h5>{this.props.theme}</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <h4 className="card-title d-inline-block">Сообщение №: {this.props.number}</h4>
                            <span className={"badge d-inline-block " + (this.props.classStatus)}>{this.props.status}</span>
                        </div>
                        <h5>Описание:</h5>
                        <p className="card-text">{this.props.description}</p>
                    </div>
                    <div className="card-footer">
                        <Link to={{
                            pathname:`/msg/${this.props.number}`,
                            propsSearch: this.props
                            }} className="card-link">Подробнее</Link>
                    </div>
                </div>
        )
    }
};

