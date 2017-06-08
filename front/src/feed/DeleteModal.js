import React from 'react';

export default class DeleteModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='modal-wrap'>
                    <div className='modal-section'>
                        <div className='modal-head space-between'>
                            <h3>Are you sure?</h3>
                            <button onClick={this.props.closeModal}>
                                <span title="Close" className='ion-ios-close modal-close'></span>
                            </button>
                        </div>
                        <div className="modal-inside">
                            <p>Once deleted, your post will be gone forever.</p>
                            <button className='btn danger' onClick={this.props.onOkay}>Delete Post
                                <span className='ion-trash-a'></span>
                            </button>
                            <button className='btn' onClick={this.props.closeModal}>Cancel
                                <span className='ion-android-cancel'></span>
                            </button>
                        </div>
                    </div>
            </div>
        );
    }
}
