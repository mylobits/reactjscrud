// SideBar.js
import React, {Component} from 'react';

class SideBar extends Component {
    render(){
        return (
            <div className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="/" className="brand-link">
                    <img src="img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"></img>
                    <span className="brand-text font-weight-light">Movie Manager</span>
                </a>
                <div className="user-panel mt-3 mb-3 d-flex">
                        <div className="image">
                            <img src="img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
                        </div>
                        <div className="info">
                            <p className="d-block">User</p>
                        </div>
                    </div>
                <section className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
                    
                {/* <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                    <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"></input>
                    <div className="input-group-append">
                        <button className="btn btn-sidebar">
                        <i className="fa fa-search fa-fw"></i>
                        </button>
                    </div>
                    </div>
                    <div className="sidebar-search-results">
                        <div className="list-group">
                            <a href="/" className="list-group-item">
                                <div className="search-title">
                                    <strong className="text-light"></strong>N
                                    <strong className="text-light"></strong>o
                                    <strong className="text-light"></strong> 
                                    <strong className="text-light"></strong>e
                                    <strong className="text-light"></strong>l
                                    <strong className="text-light"></strong>e
                                    <strong className="text-light"></strong>m
                                    <strong className="text-light"></strong>e
                                    <strong className="text-light"></strong>n
                                    <strong className="text-light"></strong>t
                                    <strong className="text-light"></strong> 
                                    <strong className="text-light"></strong>f
                                    <strong className="text-light"></strong>o
                                    <strong className="text-light"></strong>u
                                    <strong className="text-light"></strong>n
                                    <strong className="text-light"></strong>d
                                    <strong className="text-light"></strong>!
                                    <strong className="text-light"></strong>
                                    </div>
                                    <div className="search-path"></div>
                            </a>
                        </div>
                    </div>
                </div> */}
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MENU</li>
                        <li className="nav-item">
                            <a href="/">
                                <i className="fa fa-pie-chart"> </i>
                                <span>Movies</span>
                            </a>                            
                        </li>
                        <li className="nav-item">
                            <a href="/AddMovie">
                                <i className="fa fa-home"> </i>
                                <span>Movies Managetment</span>
                            </a>                            
                        </li>
                        <li className="nav-item">
                            <a href="/AddActor">
                                <i className="fa fa-home"> </i>
                                <span>Actors Managetment</span>
                            </a>                            
                        </li>
                    </ul>
                </section>
            </div> 
        )
    }
}

export default SideBar;