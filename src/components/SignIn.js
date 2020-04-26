import React, {Component} from 'react';

class Signin extends Component {
    render () {
        return (
            <div className="row container">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" class="validate" />
                            <label for="password">Password</label>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signin;