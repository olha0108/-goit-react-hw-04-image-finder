import { useEffect } from 'react';
import { ModalDiv } from './Modal.styled';
import { OverlayDiv } from './Modal.styled';

export const Modal = ({ largeImageURL, onModalClose }) => {
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onModalClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onModalClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalClose]);

  return (
    <>
      <OverlayDiv onClick={handleBackdropClick}>
        <ModalDiv>
          <img src={largeImageURL} alt="" />
        </ModalDiv>
      </OverlayDiv>
    </>
  );
};
