import './reviews.css';
import review1 from '../assets/review1.png'
import review2 from '../assets/review1.png'
import review3 from '../assets/review1.png'
const Reviews = () => {
  const testimonials = [
    {
      name: 'Lauren M.',
      text: 'My results still shock me every day and continue to shock those around me',
      image: review1
    },
    {
      name: 'Amy R.',
      text: '"Strong is a good look" I’m so thankful to have found this workout and I tell people all the time about it',
      image: review1
    },
    {
      name: 'Laura C.',
      text: 'I have never allowed people to take pictures of me in a bikini, but now I don’t care, snap away!',
      image: review1
    }
  ];

  return (
    <div className="reviews-container">
      <h1 className="title">The Best Success Story is Your Own</h1>
      <p className="subtitle">
        Hitting the barre at Physique 57 means pushing your limits and opening yourself up to change. But trust us when we tell you – it’s worth it. Our clients tell us all the time that they’ve never experienced workouts – or seen results – like ours.
      </p>
      <div className="reviews">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="review-card">
            <img src={testimonial.image} alt={testimonial.name} className="avatar" />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
