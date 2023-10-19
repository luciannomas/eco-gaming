import { useState } from "react";
import { Image } from "semantic-ui-react";
import { map } from "lodash";
import Slider from "react-slick";

import styles from "./Gallery.module.scss";
import { FullModal } from '../../../Shared/FullModal/FullModal';


export function Gallery(props) {
  const { screenshots } = props;
  const [show, setShow] = useState(false);
  console.log("screenshots",screenshots)

  const onOpenClose = () => setShow((prevState) => !prevState);

  const screenshotsClone = [...screenshots];
  const principalImage = screenshotsClone.shift();

  const settings = {
    dots: true,
    dotsClass: styles.dots,
    infinite: true,
    slidersToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: function (index) {
      return <Image src={`http://localhost:1337${screenshots[index].attributes.url}`} />;
    },
  };

  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.principal}>
          <Image src={`http://localhost:1337${principalImage.attributes.url}`} onClick={onOpenClose} />
        </div>

        <div className={styles.grid}>
          {map(screenshotsClone, (screenshot) => (
            <div key={screenshot.id}>
              <Image src={`http://localhost:1337${screenshot.attributes.url}`} onClick={onOpenClose} />
            </div>
          ))}
        </div>
      </div>

      <FullModal show={show} onClose={onOpenClose}>
        <div className={styles.carouselContainer}>
          <Slider {...settings}>
            {map(screenshots, (screenshot) => (
              <div key={screenshot.id}>
                <Image src={`http://localhost:1337${screenshot.attributes.url}`} />
              </div>
            ))}
          </Slider>
        </div>
      </FullModal>
    </>
  );
}
