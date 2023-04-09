import React from 'react';
import './MagazineSection.scss';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

export const MagazineSection = () => {
  return (
    <section className="magazineSection">
      <div className="magazineBanner">
        <h3 className="magazineTitle">순간들의 무드</h3>
        <p className="magazineSubText">향을 통해 달라지는 휴식을 만나보세요.</p>
        <div className="magazineBody">
          <div className="leftArrow">
            <IoIosArrowBack className="magazineArrow" />
          </div>
          <div className="swipeContainer">
            {MAGAZINE_DATA.map(function ({
              id,
              magazineColor,
              magazineImg,
              magazineTitle,
              magazineSubText,
            }) {
              return (
                <div className="magazineCard" key={id}>
                  <img className="imgBox" src={magazineImg} alt="사진" />
                  <p className="textBold">{magazineTitle}</p>
                  <p className="textSub">{magazineSubText}</p>
                </div>
              );
            })}
          </div>
          <div className="rightArrow">
            <IoIosArrowForward className="magazineArrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

const MAGAZINE_DATA = [
  {
    id: 1,
    magazineImg: '/images/insense_3.jpeg',
    magazineColor: '#DDFFBB',
    magazineTitle: '차가운 것으로 따뜻한 것을 만들다',
    magazineSubText: '철제 가구 디자이너 양윤선의 티라이프',
  },
  {
    id: 2,
    magazineImg: '/images/insense_3.jpeg',
    magazineColor: '#C7E9B0',
    magazineTitle: '주변의 모든 것이 예술이 되는 과정',
    magazineSubText: '테이핑 아티스트 박건우의 티라이프',
  },
  {
    id: 3,
    magazineImg: '/images/insense_3.jpeg',
    magazineColor: '#B3C99C',
    magazineTitle: '잘 달리는 것보다 즐겁게 달리는 방법',
    magazineSubText: '러닝 트레이너 임소영의 티라이프',
  },
  {
    id: 4,
    magazineImg: '/images/insense_3.jpeg',
    magazineColor: '#A4BC92',
    magazineTitle: '일과 삶 사이, 자연이라는 쉼표',
    magazineSubText: '오지 캠퍼 강서구의 티라이프',
  },
  {
    id: 5,
    magazineImg: '/images/insense_3.jpeg',
    magazineColor: '#7AA874',
    magazineTitle: '온전하게 나만을 위한 채식이야기',
    magazineSubText: '채식 요리 연구가 신주하의 티라이프',
  },
];
