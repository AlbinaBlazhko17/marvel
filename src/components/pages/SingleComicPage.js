import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

import './SingleComicPage.scss';

const SingleComic = () => {
    const {comicId} = useParams(),
          [comic, setComic] = useState(null),
          {loading, error, getComic, clearError} =  useMarvelService();

    useEffect(() =>{
        updateComic();
    }, [comicId])

    const updateComic = () => {
        clearError();
        getComic(comicId)
                .then(onComicLoaded)
    }

    const onComicLoaded = (comic) => {
        setComic(comic);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !comic)? <View comic={comic}/> : null;

    return (
       <>
        {errorMessage}
        {spinner}
        {content}
       </>
    )
}

const View = ({comic}) => {
    const {title, description, thumbnail, language, price, pageCount} = comic;

    return (
        <div className="single-comic">
        <img src={thumbnail} alt={title} className="single-comic__img"/>
        <div className="single-comic__info">
            <h2 className="single-comic__name">{title}</h2>
            <p className="single-comic__descr">{description}</p>
            <p className="single-comic__descr">{pageCount}</p>
            <p className="single-comic__descr">Language: {language}</p>
            <div className="single-comic__price">{price}</div>
        </div>
        <Link to='/comics' className="single-comic__back">Back to all</Link>
    </div>
    )
}

export default SingleComic;