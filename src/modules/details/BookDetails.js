import React from 'react';
import {
  shape,
  object,
  string,
  arrayOf,
  bool,
  func,
  number
} from 'prop-types';
import StarRating from 'react-native-star-rating';

import { TouchableCircle, StyledMaterialIcon } from '../../components/shared';
import {
  BookDetailsWrapper,
  BookDetailsContainer,
  BookDetailsLeftSection,
  BookDetailsRightSection,
  BookDetailsRightTopSection,
  BookDetailsRightPricingSection,
  BookDetailsRightBottomSection
} from './BookDetails.styles';
import Book from '../../components/Book';
import Text from '../../components/Text';
import Button from '../../components/Button';

import styles, { em } from '../../styles';
import { normalizeAuthorsArray } from '../../helpers/array';

const BookDetails = ({
  item,
  starRating,
  isBookFavorite,
  onPressStarRating,
  onPressBuyButton,
  onPressFavoriteButton
}) => {
  const {
    volumeInfo: {
      title,
      pageCount,
      authors
    },
    saleInfo
  } = item;

  return (
    <BookDetailsWrapper>
      <BookDetailsContainer>
        <BookDetailsLeftSection>
          <Book item={item} />

          {pageCount && (
            <Text
              light
              color={styles.colors.textLight}
              style={{ marginLeft: em(0.8) }}
            >
              {pageCount} pages
            </Text>
          )}
        </BookDetailsLeftSection>

        <BookDetailsRightSection>
          <BookDetailsRightTopSection>
            <Text large bold>{title || 'No title provided'}</Text>

            <Text light color={styles.colors.textLight}>
              by {normalizeAuthorsArray(authors)}
            </Text>

            <BookDetailsRightPricingSection>
              <Text large bold>
                {(saleInfo.retailPrice && `R$ ${saleInfo.retailPrice.amount}`) || 'not for sale'}
              </Text>

              <StarRating
                maxStars={5}
                rating={starRating}
                selectedStar={rating => onPressStarRating(rating)}
                starSize={em(1.5)}
                containerStyle={{ marginLeft: em(1) }}
              />
            </BookDetailsRightPricingSection>
          </BookDetailsRightTopSection>

          <BookDetailsRightBottomSection>
            <Button onPress={onPressBuyButton}>
              <Text bold color={styles.colors.white}>BUY</Text>
            </Button>

            <TouchableCircle
              radius={em(1.2)}
              onPress={onPressFavoriteButton}
              backgroundColor={isBookFavorite ? styles.colors.redHeart : styles.colors.gray}
              style={{ marginLeft: em(0.5) }}
            >
              <StyledMaterialIcon
                name="favorite-border"
                color={styles.colors.white}
                size={em(1.5)}
              />
            </TouchableCircle>
          </BookDetailsRightBottomSection>
        </BookDetailsRightSection>
      </BookDetailsContainer>
    </BookDetailsWrapper>
  );
};

BookDetails.propTypes = {
  item: shape({
    volumeInfo: shape({
      title: string.isRequired,
      pageCount: number.isRequired,
      authors: arrayOf(string).isRequired
    }).isRequired,
    saleInfo: object.isRequired
  }).isRequired,
  starRating: number.isRequired,
  isBookFavorite: bool.isRequired,
  onPressStarRating: func.isRequired,
  onPressBuyButton: func.isRequired,
  onPressFavoriteButton: func.isRequired
};

export default BookDetails;
