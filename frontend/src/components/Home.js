import React from 'react'
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header class="showcase">
      <h1>DATA VISUALIZATION</h1>
      <p>
      The best tools for data analysis, visualization,</p>
      <p>and integration are those that are versatile,</p>
      <p>easy to use, and able to link to other data sources.</p>
      <p>Use these tools to gain insights and understanding from your data.
      </p>
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
        <a class="text-dark">DataVisualizer.com</a>
      </div>
           
  </div>
    

  )
}

export default Home