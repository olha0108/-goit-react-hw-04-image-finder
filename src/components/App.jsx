import { useState, useEffect } from 'react';
import { ImageGallery } from '../components/ImageGallery/ImageGallery';
import { Modal } from '../components/Modal/Modal';
import { Searchbar } from '../components/Searchbar/Searchbar';
import { fetchImages } from '../services/api.jsx';
import { AppDiv } from './App.styled';
import { Notify } from 'notiflix';
import { Button } from '../components/Button/Button';
import { Loader } from '../components/Loader/Loader';

export const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [loadmoreBtn, setLoadmoreBtn] = useState(false);

  const onClickLoadMore = () => {
    setPage(prev => prev + 1);
    setIsLoading(true);
    setLoadmoreBtn(true);
  };

  const onModalOpen = url => {
    setOpenModal(true);
    setLargeImageURL(url);
  };

  const onModalClose = () => {
    setOpenModal(false);
    setLargeImageURL('');
  };

  const onSubmit = evt => {
    evt.preventDefault();
    setSearch(evt.target.search.value.trim().toLowerCase());
    setIsLoading(true);
    setImages([]);
    setPage(1);
    evt.target.reset();
  };

  useEffect(() => {
    if (!search) return;
    const fetchGallery = async search => {
      try {
        const response = await fetchImages(search, page);
        setImages(prev => [...prev, ...response]);
        if (response.length < 1) {
          Notify.failure('Not found');
        }
        if (response.length < 12) {
          setIsLoading(false);
          setLoadmoreBtn(false);
        }
        if (response.length === 12) {
          setIsLoading(true);
          setLoadmoreBtn(true);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchGallery(search, page);
  }, [search, page]);

  return (
    <AppDiv>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery
        images={images}
        openModal={onModalOpen}
        onLoadMore={onClickLoadMore}
      />{' '}
      {isLoading && <Loader />}
      {loadmoreBtn && <Button onClickLoadMore={onClickLoadMore} />}
      {openModal && (
        <Modal largeImageURL={largeImageURL} onModalClose={onModalClose} />
      )}
    </AppDiv>
  );
};
