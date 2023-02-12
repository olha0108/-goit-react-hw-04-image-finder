import PropTypes from 'prop-types';
import {
  ImageGalleryItemCard,
  ImageGalleryItemimage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  openModal,
}) => {
  return (
    <ImageGalleryItemCard>
      <ImageGalleryItemimage
        src={webformatURL}
        alt={tags}
        onClick={() => openModal(largeImageURL)}
        largeimage={largeImageURL}
      />
    </ImageGalleryItemCard>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
