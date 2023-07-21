import React from 'react'
import './portfolio.css'
import Bank from '../../assest/Bankimg.png'
import IMG2 from '../../assest/restaurant.png'
import IMG3 from '../../assest/gpt3.png'
import IMG4 from '../../assest/portfolio4.jpg'
import IMG5 from '../../assest/portfolio5.png'
import IMG6 from '../../assest/portfolio6.jpg'

const data = [
  {
    id : 1,
    image : Bank,
    title : 'Bank | The Next Generation Payment Method',
    github : 'https://github.com/Daniick/bankTailwind',
    demo : 'https://bank-personal-davidortega.netlify.app'
  },
  {
    id : 2,
    image : IMG2,
    title : 'Restaurant | The Key To Fine Dining',
    github : 'https://github.com/Daniick/RestaurantPage',
    demo : 'https://restaurantdavidortega.netlify.app'
  },
  {
    id : 3,
    image : IMG3,
    title : 'GPT-3 | Something Amazing',
    github : 'https://github.com/Daniick/ReactPage',
    demo : 'https://gpt3-ia-davidortega.netlify.app'
  },
  {
    id : 4,
    image : IMG4,
    title : 'Insert title',
    github : 'https://github.com/Daniick/bankTailwind',
    demo : 'https://bank-personal-davidortega.netlify.app'
  },
  {
    id : 5,
    image : IMG5,
    title : 'Insert title',
    github : 'https://github.com/Daniick/bankTailwind',
    demo : 'https://bank-personal-davidortega.netlify.app'
  },
  {
    id : 6,
    image : IMG6,
    title : 'Insert title',
    github : 'https://github.com/Daniick/bankTailwind',
    demo : 'https://bank-personal-davidortega.netlify.app'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
              <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={demo} className='btn' target='_blank' rel="noopener noreferrer">Page</a>
                <a href={github} className='btn btn-primary' target='_blank' rel="noopener noreferrer"> Github Code</a>
                </div>
            </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
