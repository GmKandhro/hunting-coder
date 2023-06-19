import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      interval={3000} // Change slide every 3 seconds
      className='w-full h-10'
    >
      <div>
        <img src="https://bloggerspassion.com/wp-content/uploads/2019/12/best-programming-blogs.jpg" alt="Image 1" />
        <p className="legend">Coding: A mindset of problem-solving, where skilled hunters navigate lines of code, unraveling algorithms, and equipping you to spot elusive bugs and build elegant solutions</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Image 2" />
        <p className="legend">Embrace the thrill of being a coder: Constantly hunting for new knowledge, navigating ever-evolving technology, and exploring front-end, back-end, machine learning, and AI, to revolutionize your coding adventures</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww&w=1000&q=80
        " alt="Image 3" />
        <p className="legend">Join our passionate coder community at Hunting Coder, where collaboration thrives, experiences are shared, and continuous learning empowers us to tackle challenges, celebrate breakthroughs, and strive for coding excellence</p>
      </div>
    </Carousel>
  );
};

export default Slider;
