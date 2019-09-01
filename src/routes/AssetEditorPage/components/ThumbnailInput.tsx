import * as React from 'react';
import styled from 'styled-components';
import * as ThumbnailIcon from '../assets/ic_picture.png';

const EmptyContainer = styled.div`
  min-width: 560px;
  min-height: 440px;
  background-color: #f0f0f0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #cecece;
  & img {
    width: 100px;
    margin-bottom: 15px;
  }
`

interface Props {
  onThumbnailChange: (data?: string) => void,
  defaultThumbnail?: string
}

export const ThumbnailInput: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = React.memo(({ onThumbnailChange, defaultThumbnail, ...divProps }) => {
  const [thumbnail, setThumbnail] = React.useState(defaultThumbnail);
  const handleThumbnail = React.useCallback(() => {
    /* @TODO image upload
      setThumbnail();
    */
  }, []);
  return (
    <EmptyContainer {...divProps} onClick={handleThumbnail}>
      <img src={ThumbnailIcon} />
      <p>사진을 첨부해주세요</p>
    </EmptyContainer>
  )
})