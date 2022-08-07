import { Input } from '@mui/material';
import React from 'react'
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header class="showcase">
      <h1 style={{fontSize: "5rem"}}>DATA VISUALIZER</h1>
      <p>
      The best tools for data analysis, visualization,</p>
      <p>and integration are those that are versatile,</p>
      <p>easy to use, and able to link to other data sources.</p>
      </header>
      <section class="home-cards">
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fhdqjJuA3u7EI2ASaxURR8ngRkfY-2PsUg&usqp=CAU" alt=""></img>
        <h3>BAR CHARTS</h3>
        <p>
        A Bar Charts is a graphical display of data using bars of different heights.
        </p>
     </div>
      <div>
        <img src="https://grafana.com/static/img/docs/pie-chart-panel/pie-type-chart-7-5.png" alt="" />
        <h3>PIE CHARTS</h3>
        <p>
        A pie chart is a type of graph that represents the data in the circular graph.
        </p>
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgrKw29o3K8nWT2VSGogAZ7DKPlkKc7eN72A&usqp=CAU" alt="" />
        <h3>PYRAMID CHARTS</h3>
        <p>
        A pyramid chart (also called a triangle diagram or a triangle chart) appears in the shape of a triangle divided into horizontal sections and is used to represent hierarchies.
        </p>
      </div>      
      
      <div>
        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZJ2ZCKriLDWCMDhOOuJBX_Nhp7aVJD-HnQ&usqp=CAU" alt="" />
        <h3>LINE CHARTS</h3>
        <p>
        A line chart is a graphical representation of an asset's historical price action that connects a series of data points with a continuous line.
        </p>
      </div>
    </section>
    <section class="xbox">
      <div class="content">
      </div>
    </section>
    <hr className="m-0" />
    <div class="container">  
  <form id="contact" action="" method="post">
    <h3>Contact Us</h3>
    <h4>Contact us today, and get reply with in 24 hours!</h4>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus></input>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required></input>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number" type="tel" tabindex="3" required></input>
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site starts with http://" type="url" tabindex="4" required></input>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
  
</div>
    <section>
    <div className="text-center py-4 align-items-center">
        <p>Follow DATA VISUALIZER on social media</p>
        <a
          href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
          class="btn btn-primary m-1"
          role="button"
          rel="nofollow"
          target="_blank"
        >
          <i class="fab fa-youtube"></i>
        </a>
        <a
          href="https://www.facebook.com/mdbootstrap"
          class="btn btn-primary m-1"
          role="button"
          rel="nofollow"
          target="_blank"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com/MDBootstrap"
          class="btn btn-primary m-1"
          role="button"
          rel="nofollow"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <a
          href="https://github.com/mdbootstrap/mdb-ui-kit"
          class="btn btn-primary m-1"
          role="button"
          rel="nofollow"
          target="_blank"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
      </section>
      <div className="text-center p-3">
        © 2020 Copyright:
        <a class="text">DataVisualizer.com</a>
      </div>
           
  </div>
    

  )
}

export default Home