import React from 'react'
import './Card.css'

export const Card = () => {

     return (
          <> 
               {/* nav bar responsive */}
               <nav>
                    <div className="log">Brand</div>
                    <input type="checkbox" id="click" />
                    <label for="click" className="menu-btn">
                         <i className="fas fa-bars"></i>
                    </label>
                    <ul>
                         <li><a href="#">Home</a></li>
                         <li><a href="#">About</a></li>
                         <li> <a href="#">Service</a></li>
                         <li><a href="#">Help</a></li>
                         <li><a href="#">Registration</a></li>
                    </ul>
               </nav>
               {/* card  */}

               <div className="showdiv">
                    <div className="maindiv">

                         <div className="divcards">
                              <div className="cardpic">
                                   <img src='' alt="" />
                                   <h3>A</h3>
                              </div>
                              <div className="card1">
                                   <h5>Title</h5> <br />
                                   <p>Amar sharma</p><br />
                                   <h5>Discription</h5>
                                   <p> Abc</p>
                              </div>
                         </div>

                         <div className="divcards">
                              <div className="cardpic">
                                   <img src='' alt="" />
                                   <p>Amar Sharma</p>
                              </div>
                              <div className="card1">
                                   <h5>Title</h5> <br />
                                   <p>Amar sharma</p><br />
                                   <h5>Discription</h5>
                                   <p> Abc</p>
                              </div>
                         </div>

                         <div className="divcards">
                              <div className="cardpic">
                                   <img src='' alt="" />
                                   <p>Amar Sharma</p>
                              </div>
                              <div className="card1">
                                   <h5>Title</h5> <br />
                                   <p>Amar sharma</p><br />
                                   <h5>Discription</h5>
                                   <p> bca</p>
                              </div>
                         </div>

                         <div className="divcards">
                              <div className="cardpic">
                                   <img src='' alt="" />
                                   <p>Amar Sharma</p>
                              </div>
                              <div className="card1">
                                   <h5>Title</h5> <br />
                                   <p>Amar sharma</p><br />
                                   <h5>Discription</h5>
                                   <p> bca</p>
                              </div>
                         </div>
                         <div className="divcards">
                              <div className="cardpic">
                                   <img src='' alt="" />
                                   <p>Amar Sharma</p>
                              </div>
                              <div className="card1">
                                   <h5>Title</h5> <br />
                                   <p>Amar sharma</p><br />
                                   <h5>Discription</h5>
                                   <p> bca</p>
                              </div>
                         </div>

                         <div className="divcards">
                              <div className="cardpic">
                                   <img src='' alt="" />
                                   <p>Amar Sharma</p>
                              </div>
                              <div className="card1">
                                   <h5>Title</h5> <br />
                                   <p>Amar sharma</p><br />
                                   <h5>Discription</h5>
                                   <p> bca</p>
                              </div>
                         </div>

                         <div className="divcards">
                              <div className="cardpic">
                                   <img src='' alt="" />
                                   <p>Amar Sharma</p>
                              </div>
                              <div className="card1">
                                   <h5>Title</h5> <br />
                                   <p>Amar sharma</p><br />
                                   <h5>Discription</h5>
                                   <p> bca</p>
                              </div>
                         </div>

                         <div className="divcards">
                              <div className="cardpic">
                                   <img src='' alt="" />
                                   <p>Amar Sharma</p>
                              </div>
                              <div className="card1">
                                   <h5>Title</h5> <br />
                                   <p>Amar sharma</p><br />
                                   <h5>Discription</h5>
                                   <p> bca</p>
                              </div>
                         </div>

                    </div>
               </div>

               {/* footer */}
               <div className="container">
                    <div className="fitem">
                         <h2>Title1</h2>
                         <ul>
                              <li>Link1</li>
                              <li>Link2</li>
                              <li>Link3</li>
                              <li>link4</li>
                         </ul>
                    </div>
                    <div className="fitem">
                         <h2>Title2</h2>
                         <ul>
                              <li>Link1</li>
                              <li>Link2</li>
                              <li>Link3</li>
                              <li>link4</li>
                         </ul>
                    </div>
                    <div className="fitem">
                         <h2> Title3</h2>
                         <ul>
                              <li>Link1</li>
                              <li>Link2</li>
                              <li>Link3</li> 
                              <li>link4</li>
                         </ul></div>
                    <div className="fitem">
                         <h2>Title4</h2>
                         <ul>
                              <li>Link1</li>
                              <li>Link2</li>
                              <li>Link3</li>
                              <li>link4</li>
                         </ul></div>
                         <div className="fitem">
                         <h2>Title5</h2>
                         <ul>
                              <li>Link1</li>
                              <li>Link2</li>
                              <li>Link3</li>
                              <li>link4</li>
                         </ul></div>
               </div>
          </>
     )
}
