import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import InfoPost from './InfoPost';

function FeaturedPost() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <article className="flex items-start lg:items-center flex-wrap">
            <div className="w-full lg:w-8/12">
              <Link to="/">
                <img
                  src="public/featured-thumbnail.png"
                  className="rounded-xl w-full mb-4 md:mb-0"
                  alt="featuredImage"
                />
              </Link>
            </div>
            <div className="w-full lg:w-4/12 lg:pl-6">
              <InfoPost
                category="UI DESIGN"
                date="July 2, 2021"
                title="Understanding color theory: the color wheel and finding complementary colors"
                shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
                authorAvatar="public/author-1.png"
                authorName="Leslie Alexander"
                authorJob="UI Designer"
              />
              <hr className="border-white/10 mt-10 md:hidden" />
            </div>
          </article>
        </div>
        <div>
          <article className="flex items-start lg:items-center flex-wrap">
            <div className="w-full md:w-7/12 lg:w-8/12">
              <Link to="/">
                <img
                  src="public/featured-thumbnail.png"
                  className="rounded-xl w-full mb-4 md:mb-0"
                  alt="featuredImage"
                />
              </Link>
            </div>
            <div className="w-full md:w-5/12 lg:w-4/12 lg:pl-6">
              <InfoPost
                category="UI DESIGN"
                date="July 2, 2021"
                title="Understanding color theory: the color wheel and finding complementary colors"
                shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
                authorAvatar="public/author-1.png"
                authorName="Leslie Alexander"
                authorJob="UI Designer"
              />
              <hr className="border-white/10 mt-10 md:hidden" />
            </div>
          </article>
        </div>
      </Slider>
    </div>
  );
}

export default FeaturedPost;
