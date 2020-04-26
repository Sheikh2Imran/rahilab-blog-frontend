import React, {Component} from 'react';

class CreatePost extends Component {
    render () {
        return (
            <div className="row container">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="text" type="text" className="validate" />
                            <label for="text">Post Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                        <label for="textarea1">Textarea</label>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreatePost;