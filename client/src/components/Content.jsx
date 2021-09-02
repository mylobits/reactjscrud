
import React, {useState} from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import AddMovie from '../components/movie/AddMovie';
import MoviesList from '../components/movie/MoviesList';
import AddActor from '../components/actor/AddActor';
import ActorsList from '../components/actor/ActorsList';
import AlertDialog from "../components/AlertDialog";





//Main content
const Content = () => {


    // const {notifications} = this.props;
// const [msgShow, setMsgshow] = useState({
//     show: false,
//     title:"",
//     msg:""
// });  
    
        return (
            <div className="main-content">
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="box">
                                    <div className="box-body">
                                        <div className="row">
                                        <AlertDialog />
                                                <div className="main-content">
                                                    
                                                        <BrowserRouter>
                                                            <Switch>
                                                                {/* <Route exact path={["/", "/MoviesList"]} render={(props) => <MoviesList {...props} /> }  /> */}
                                                                <Route exact path="/" component={MoviesList} />
                                                                <Route exact path="/addMovie" component={AddMovie} />
                                                                {/* <Route path="/MoviesList/:id" render={(props) => <MoviesList setMsgshow={setMsgshow} {...props} /> }/> */}
                                                                <Route exact path="/addActor" component={AddActor} />
                                                                <Route exact path="/ActorsList" component={ActorsList} />
                                                                {/* <Route path="/ActorsList/:id" render={(props) => <ActorsList setMsgshow={setMsgshow} {...props} /> } /> */}
                                                            </Switch>
                                                        </BrowserRouter>
                                                    
                                                </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
}

export default Content;