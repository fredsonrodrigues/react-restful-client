import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { logout } from '../../default/auth/authActions'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }
    changeOpen() {
        this.setState({ open: !this.state.open })
    }
    render() {
        const { name, /*email*/ } = this.props.user
        return (
            <div className="navbar-nav ml-auto">
                <ul className="nav navbar-nav">
                    <li onMouseLeave={() => this.changeOpen()}
                        className={`dropdown user user-menu ${this.state.open ? 'show' :
                            ''}`}>
                        <a href="#!" onClick={() => this.changeOpen()}
                            aria-expanded={this.state.open ? 'true' : 'false'}
                            className="dropdown-toggle nav-link"
                            data-toggle="dropdown">
                            <img src="http://lorempixel.com/160/160/abstract"
                                className="user-image" alt="User 1" />
                            <span className="hidden-xs">{name}</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="user-header">
                                <img src="http://lorempixel.com/160/160/abstract"
                                    className="img-circle" alt="User 2" />
                                <p>{name}<small>{this.props.profile.noun}</small></p>
                            </li>
                            <li className="user-footer">
                                <div className="pull-right">
                                    <a href="#!" onClick={this.props.logout}
                                        className="btn btn-default btn-flat">Sair</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}
const mapStateToProps = state => ({ user: state.auth.user, profile: state.auth.profile })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)