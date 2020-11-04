import React from 'react'
import Wrapper from '../../components/dasboard/Wrapper'

function Index() {
    return (
        <Wrapper sidenav="dashboard">
            <div className="dashboard__main col-lg-9">
                <div className="dashboard__title py-2">
                    <h1>Dashboard</h1>
                    <p className="m-0">Your tour history</p>
                </div>
                <div className="toursite__desc dashboad__preview">
                    <div className="carousel sa-preview-carousel tabcontent" data-flickity="{&quot;wrapAround&quot;: true, &quot;pageDots&quot;: false}">
                        <div className="carousel-cell col-6 col-md-4">
                            <div className="sa-carousel-imgContainer">
                                <img src="https://picsum.photos/280/320?random=4" alt="" />
                            </div>
                            <div className="sa-explore-courousel-details">
                                <h4>Tourist site Name</h4>
                                <p className="m-0">Location</p>
                            </div>
                        </div>
                        <div className="carousel-cell col-6 col-md-4">
                            <div className="sa-carousel-imgContainer">
                                <img src="https://picsum.photos/280/320?random=1" alt="" />
                            </div>
                            <div className="sa-explore-courousel-details">
                                <h4>Tourist site Name</h4>
                                <p className="m-0">Location</p>
                           </div>
                        </div>
                                  <div className="carousel-cell col-6 col-md-4">
                                      <div className="sa-carousel-imgContainer">
                                          <img src="https://picsum.photos/280/320?random=2" alt="" />
                                      </div>
                                      <div className="sa-explore-courousel-details">
                                          <h4>Tourist site Name</h4>
                                          <p className="m-0">Location</p>
                                      </div>
                                  </div>
                                  <div className="carousel-cell col-6 col-md-4">
                                      <div className="sa-carousel-imgContainer">
                                          <img src="https://picsum.photos/280/320?random=3" alt="" />
                                      </div>
                                      <div className="sa-explore-courousel-details">
                                          <h4>Tourist site Name</h4>
                                          <p className="m-0">Location</p>
                                      </div>
                                  </div>
                                  <div className="carousel-cell col-6 col-md-4">
                                      <div className="sa-carousel-imgContainer">
                                          <img src="https://picsum.photos/280/320?random=5" alt="" />
                                      </div>
                                      <div className="sa-explore-courousel-details">
                                          <h4>Tourist site Name</h4>
                                          <p className="m-0">Location</p>
                                      </div>
                                  </div>
                  </div>
              </div>
            </div>
        </Wrapper>
    )
}

export default Index
