import React from 'react';
import {Link} from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const login = e.target.elements[0].value;
    const pass = e.target.elements[1].value;
    window.localStorage.setItem('rr_login', login);
    window.localStorage.setItem('rr_pass', pass);

    if ((login === 'admin')&(pass === 'admin')) {
      this.props.history.push('/admin');
    } else {
      alert('Вы ввели неправильный логин или пароль!')
      setTimeout(() => {
        this.props.history.push('/');
      }, 500);
    }
  }


  render() {
    return (
      <div className="row">
        <h3>Пожалуйста, введите логин и пароль администратора:</h3>
        <form сlassName="col-md-4" onSubmit={this.handleSubmit}>
          <input type="text" className="form-control" placeholder="login" />
          <input type="text" className="form-control" placeholder="password" />
          <button type="submit" className="btn btn-primary">Войти</button>
          <Link to={`/`} className="btn btn-primary">Назад</Link>
        </form>
      </div>
    )
  }
}