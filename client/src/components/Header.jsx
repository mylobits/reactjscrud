import React from 'react';
//import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header">
    
    <nav className="navbar navbar-static-top">
    <a href="/" className="logo">
        <span className="logo-lg"><b>Movie</b>Manager</span>
    </a>
        <a href="/" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
        </a>
        <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
                <li className="dropdown messages-menu">
                    <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-envelope-o"></i>
                        <span className="label label-success">4</span>
                    </a>
                    <ul className="dropdown-menu">
                        <li className="header">You have 4 messages</li>
                        <li>
                            <ul className="menu">
                                <li>
                                    <a href="/">
                                        <div className="pull-left">
                                            <img src="img/user2-160x160.jpg" className="img-circle" alt="User" />
                                        </div>
                                        <h4>
                                            Support Team
                                            <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                        </h4>
                                        <p>Why not buy a new awesome theme?</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</header>
  );
};

export default Header;