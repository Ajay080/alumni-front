import React from 'react'
import './Home.css'
import img1 from '../Images/img1.png'
import about from '../Images/about.jpg'
import homecover from '../Images/homecover.png'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
const Home = () => {
  return (
    <div className="home">
      {<Header/>}
    <div className="home-cover">
      <img src={homecover}/>
    </div>
    <div className="container">
      <div className="Overview" id="Overview">
      <h4>Overview</h4>
      <p>India is a secular democracy. This means that all religions are equally respected, and every person is free to follow any religion they want. India is the largest democracy in the world. People here have all basic human rights. The national heritage animal of India is an Indian Elephant. The national river of India is the Ganges. The Ganges is the sacred Hindu river, which is so sacred that it is believed to wash the sins of people away. 
        The highest civilian award in India is the Bharat Ratna, which means ‘jewel of India.’
        The most prominent personalities of India who serve with excellency is their field of work with dedication, and hard work earns this award. The Param Vir Chakra is India’s highest military decoration awarded for displaying bravery. The soldiers who have their life online to protect the citizens are the heroes of India. The first prime minister of India was Pandit Jawaharlal Nehru, also called as Pandit Nehru or Chacha Nehru.
        The first President of India was Dr. Rajendra Prasad by the constituent assembly. He was a member of the INC (Indian National Congress), and he was a scholar. Mohandas Karamchand Gandhi, lovingly known as Bapujii or Mahatma Gandhi, is the Father of our Nation. He is the most recognized figure worldwide, best known for his contribution to the independence of the country by non-violence. Rabindranath Tagore won the Nobel Prize in Literature in the year 1913, and he is one of the most eminent personalities in India.
      </p>
      </div>
      <div className="News">
        <h4>Latest News and Announcements </h4>
        <div className="intro">
          <p>
            India is a secular democracy. This means that all religions are equally respected, and every person is free to follow any religion they want. India is the largest democracy in the world. People here have all basic human rights. The national heritage animal of India is an Indian Elephant. The national river of India is the Ganges. The Ganges is the sacred Hindu river, which is so sacred that it is believed to wash the sins of people away. 
            The highest civilian award in India is the Bharat Ratna, which means ‘jewel of India.’
          </p>
        </div>
        <div class="grid-container">
          <div class="news1"></div>
          <div class="news2">
            <p>India is a secular democracy. This means that all religions are equally respected, and every person is free to follow any religion they want. India is the largest democracy in the world. People here have all basic human rights. The national heritage animal of India is an Indian Elephant. The national river of India is the Ganges. The Ganges is the sacred Hindu river, which is so sacred that it is believed to wash the sins of people away. </p>
          </div>
          <div class="news3">
            <img src={img1}/>
          </div>
        </div>
        <div class="grid-container">
          <div class="news1"></div>
          <div class="news2">
            <p>India is a secular democracy. This means that all religions are equally respected, and every person is free to follow any religion they want. India is the largest democracy in the world. People here have all basic human rights. The national heritage animal of India is an Indian Elephant. The national river of India is the Ganges. The Ganges is the sacred Hindu river, which is so sacred that it is believed to wash the sins of people away. </p>
          </div>
          <div class="news3">
            <img src={img1}/>
          </div>
        </div>
        <div class="grid-container">
          <div class="news1"></div>
          <div class="news2">
            <p>India is a secular democracy. This means that all religions are equally respected, and every person is free to follow any religion they want. India is the largest democracy in the world. People here have all basic human rights. The national heritage animal of India is an Indian Elephant. The national river of India is the Ganges. The Ganges is the sacred Hindu river, which is so sacred that it is believed to wash the sins of people away. </p>
          </div>
          <div class="news3">
            <img src={img1}/>
          </div>
        </div>
      </div>
      <div className="about">
        <h4>About Us</h4>
        <div className="about-image">
          <img src={about}/>
        </div>
        <div className="about-desc">
          <p>India is one of the youngest superpowers in the world. The National bird of India is the peacock, which has a very colourful and beautiful tail. The national flower of India is Lotus. Lotus comes in many colours, white and pink being prominent. The National animal of India is the Royal Bengal tiger. It is very powerful and majestic to look at. The national anthem of India is ‘Jana Gana Mana.’ Its approximate playing time is 52 seconds. The national song of India is Vande Mataram, written by Bankimchandra Chatterji and was sung in the 1896 session of the Indian National Congress. The national insects of India are the Papilionidae or swallowtails. The national aquatic animal of India is South Asian Dolphin. The national reptile of India is King Cobra, also known as the ‘king of snakes. The national fruit of India is Mango, also called the ‘King of Fruits.’</p>
        </div>
      </div>
      
    </div>
    {<Footer/>}
  </div>
  )
}

export default Home