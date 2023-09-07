import React from 'react'

export default function Translate() {

  return (
    <section className="container translator-design" id="translation">
      <div className="section-title">
        <h2>CYBER.AI tarjimon</h2>
      </div>
      <div className="main-translation">
        <div className="title-translation">
          <button>English</button>
          <button><i className="bi bi-arrow-left-right"></i></button>
          <button>Russian</button>
        </div>
        <div className="inner-translation">
          <div className="left-side col-lg-6">
            <div className="cancel-text">
              <div className="text-input">
                <textarea 
                // spellcheck="false" 
                className="from-text" placeholder="What is testing?">What is testing?</textarea>
              </div>
              <button><img src={require('../../img/icons/cancel.png')} alt=""/></button>
            </div>
            <div className="box-panel box-panel_bottom">
              <div className="box-panel-container box-panel-container_left state-fadeaway">
                <div className="box-button box-button-hidden">
                 <button> <i className="bi bi-volume-up-fill"></i></button>
                 <button> <i className="bi bi-mic-fill"></i></button>
                 <button> <i className="bi bi-clipboard"></i></button>
                </div>
              </div>
              <div className="box-panel-container box-panel-container_right">
                <div id="textCounter"  className="src-textCounter state-unselectable state-fadeaway">
                  <span id="textCounterContent">2</span>
                  <span>/</span>
                  <span id="textCounterLimit">1000</span>
                  <button><i className="bi bi-keyboard"></i></button>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
          <div className="right-side col-lg-6">
            <div className="copy-text">
              <div className="text-input">
                <textarea 
                // spellcheck="false" 
                // readonly 
                disabled className="to-text" placeholder="Sinov nima?">Sinov nima?</textarea>
              </div>
              <button><img src={require('../../img/icons/copy.png')} alt=""/></button>
            </div>
            <div className="box-panel box-panel_bottom">
              <div className="box-panel-container box-panel-container_left state-fadeaway">
                <div className="box-button box-button-hidden">
                 <button className="volume"> <i className="bi bi-volume-up-fill"></i></button>
                </div>
              </div>
              <div className="box-panel-container box-panel-container_right">
                <div id="textCounter" className="src-textCounter state-unselectable state-fadeaway">
                  <button className="volume"><i className="bi bi-bookmark-star"></i></button>
                  <button className="volume"><i className="bi bi-share-fill"></i></button>
                 <div className="hand">
                  <button className="volume-hand"><i className="bi bi-hand-thumbs-up-fill"></i></button>
                  <button className="volume-hand"><i className="bi bi-hand-thumbs-down-fill"></i></button>   
                 </div>
                </div>
              </div>
              <div>
              </div>
            </div>      
          </div>
        </div>
        </div>
    </section>
  )
}
