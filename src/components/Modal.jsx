import { Component } from 'react';
import { Backdrop, ModalContainer, Button } from './Modal.styled';

export class Modal extends Component {

	componentDidMount() {
		window.addEventListener('keydown',this.closeByEscape)
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.closeByEscape)
	}

	closeByEscape = (e) => {
		if (e.code === 'Escape') {
			this.props.offModal();
		 }
	}
	
	render() {
		const {offModal, image:{src, alt}}=this.props
    return (
      <Backdrop>
        <ModalContainer>
					<img src={`https://image.tmdb.org/t/p/w500${src}`} alt={alt} />
          <Button onClick={offModal}>Close modal</Button>
        </ModalContainer>
      </Backdrop>
    );
  }
}
