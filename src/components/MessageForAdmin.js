import React from 'react';

export default class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            statusArr: [
                "Зарегистрирована",
                "Принята",
                "Отклонена",
                "Завершена"
            ],
        }; 
    }

    render() {
        return(
            <div>
                <form className="card" id="form" onSubmit={this.props.onClick}>
                    <h3 className="card-header">Сообщение №: {this.props.number} от {this.props.date}</h3>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.theme}</h4>
                        <p className="card-text">{this.props.description}</p>
                        <select className="custom-select" id="selectStatus" defaultValue={this.props.status}>
                            {this.state.statusArr.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                        <button type="submit" className="btn btn-primary" value={this.props.id} id="btn">Установить</button>
                    </div>
                </form>
            </div>
        )
    }
};

