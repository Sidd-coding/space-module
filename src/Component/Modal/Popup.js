import { Button } from 'bootstrap';
import React from 'react';
import { RocketDetail } from './Component/RocketDetail.js';
import { Modal } from 'react-bootstrap';


class Popup extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    handleModal() {
        this.setState({ show: true })
    }
    render() {
        return (
            <div>
                <RocketDetail onclick={() => { this.handleModal() }}>Open Modal</RocketDetail>
                <Modal show={this.state.show}>
                    <Modal.Header>Modal Head Part</Modal.Header>
                    <Modal.Body>
                        Hi, React modal is here
                    </Modal.Body>
                    <Modal.Footer>
                        <Button>
                            Close Modal
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div >
        )
    }
};

export default Popup;