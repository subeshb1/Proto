import React from "react";
import { Carousel } from ".";
import { Transition } from "../../components";
import { Link } from "react-router-dom";

export default (
  <Carousel.Slide className="slide first container">
    <Transition
      eventHandlers={{
        mount: {
          style: {
            animationName: "t-blink"
          }
        }
      }}
    >
      <h1>Easy Insurance</h1>
    </Transition>

    <div className="container" style={{ flexDirection: "row", marginTop: 100 }}>
      <Transition
        duration={"500ms"}
        eventHandlers={{
          mount: {
            style: {
              animationName: "t-fade-in-slow"
            }
          }
        }}
      >
        <Link to="#">
          <div className="circle-container">
            <div className="circle">
              <svg viewBox="0 0 59 59">
                <path
                  d="M30.5,3.025V1c0-0.553-0.448-1-1-1s-1,0.447-1,1v2.025C15.363,3.552,4.69,14.388,4.502,27.64  c-0.003,0.268,0.136,0.614,0.324,0.805c0.437,0.441,1.234,0.421,1.647-0.043C7.855,26.853,9.64,26,11.5,26  c1.962,0,3.82,0.937,5.23,2.639C16.92,28.867,17.202,29,17.5,29s0.58-0.133,0.77-0.361C19.68,26.937,21.538,26,23.5,26  c1.86,0,3.62,0.85,5,2.386V54c0,1.654-1.346,3-3,3s-3-1.346-3-3c0-0.553-0.448-1-1-1s-1,0.447-1,1c0,2.757,2.243,5,5,5s5-2.243,5-5  V28.386C31.88,26.85,33.64,26,35.5,26c1.962,0,3.82,0.937,5.23,2.639C40.92,28.867,41.202,29,41.5,29s0.58-0.133,0.77-0.361  C43.68,26.937,45.538,26,47.5,26c1.86,0,3.645,0.853,5.025,2.4c0.416,0.467,1.213,0.486,1.648,0.044  c0.188-0.19,0.328-0.538,0.324-0.807C54.31,14.388,43.637,3.552,30.5,3.025z"
                  fill="#038aa9"
                />
              </svg>
            </div>
            <div className="detail">Term</div>
          </div>
        </Link>
      </Transition>
      <Transition
        duration={"700ms"}
        eventHandlers={{
          mount: {
            style: {
              animationName: "t-fade-in-slow"
            }
          }
        }}
      >
        <Link to="/compare/car">
          <div className="circle-container">
            <div className="circle">
              <svg viewBox="0 0 512 512">
                <g>
                  <path
                    d="M110.933,287.834c-23.526,0-42.667,19.14-42.667,42.667c0,23.526,19.14,42.667,42.667,42.667
                        c23.526,0,42.667-19.14,42.667-42.667C153.6,306.975,134.46,287.834,110.933,287.834z M110.933,356.101
                        c-14.114,0-25.6-11.486-25.6-25.6s11.486-25.6,25.6-25.6s25.6,11.486,25.6,25.6S125.047,356.101,110.933,356.101z"
                    fill="#038aa9"
                  />
                </g>
                <g>
                  <path
                    d="M503.467,287.834v-51.2c0-3.669-2.347-6.938-5.837-8.098l-48.145-16.051c-18.133-30.711-43.059-59.938-98.142-69.589
                        c-0.102-0.017-0.205-0.034-0.307-0.051c-101.726-14.063-178.099,8.883-227.132,68.224c-36.497,0.529-73.754,8.158-95.667,22.187
                        c-11.349,7.27-18.082,19.925-18.714,33.391l-0.99,21.188c-4.71,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.823,8.533,8.533,8.533
                        h34.133c4.736,0,8.525-3.891,8.533-8.627c0-0.043,0.009-0.085,0.009-0.137c0.128-32.879,26.812-59.503,59.725-59.503
                        c32.99,0,59.733,26.743,59.733,59.733c-0.614,5.18,3.473,8.533,8.533,8.533h153.6c4.736,0,8.525-3.891,8.533-8.627
                        c0-0.043,0.008-0.085,0.008-0.137c0.128-32.879,26.812-59.503,59.725-59.503c32.99,0,59.733,26.743,59.733,59.733
                        c-0.614,5.18,3.473,8.533,8.533,8.533h34.133c4.71,0,8.533-3.823,8.533-8.533v-34.133
                        C512,291.657,508.177,287.834,503.467,287.834z M273.067,206.768c0,2.355-1.911,4.267-4.267,4.267H157.517
                        c-3.942,0-5.734-4.847-2.825-7.501c29.611-26.991,67.268-42.428,113.673-46.532c2.5-0.222,4.702,1.792,4.702,4.301V206.768z
                         M375.586,206.81c-0.026,2.338-1.929,4.224-4.267,4.224H294.4c-2.355,0-4.267-1.911-4.267-4.267v-46.592
                        c0-2.364,1.886-4.309,4.241-4.309c17.015-0.017,35.021,1.22,54.161,3.866c9.114,1.604,17.237,3.806,24.627,6.511
                        c1.698,0.623,2.782,2.27,2.765,4.079L375.586,206.81z M420.122,211.034h-23.202c-2.372,0-4.292-1.937-4.267-4.309l0.222-23.125
                        c0.034-3.524,4.053-5.436,6.895-3.354c9.225,6.741,16.896,14.771,23.731,23.885C425.634,206.972,423.671,211.034,420.122,211.034z
                        "
                    fill="#038aa9"
                  />
                </g>
                <g>
                  <path
                    d="M401.067,287.834c-23.526,0-42.667,19.14-42.667,42.667c0,23.526,19.14,42.667,42.667,42.667
                        c23.526,0,42.667-19.14,42.667-42.667C443.733,306.975,424.593,287.834,401.067,287.834z M401.067,356.101
                        c-14.114,0-25.6-11.486-25.6-25.6s11.486-25.6,25.6-25.6c14.114,0,25.6,11.486,25.6,25.6S415.181,356.101,401.067,356.101z"
                    fill="#038aa9"
                  />
                </g>
              </svg>
            </div>
            <div className="detail">Car</div>
          </div>
        </Link>
      </Transition>
      <Transition
        duration={"900ms"}
        eventHandlers={{
          mount: {
            style: {
              animationName: "t-fade-in-slow"
            }
          }
        }}
      >
        <Link to="/compare/bike">
          <div className="circle-container">
            <div className="circle">
              <svg viewBox="0 0 512.012 512.012">
                <g>
                  <path
                    d="M511.214,317.348c-4.489-31.582-29.082-57.506-60.305-63.983c-13.978-2.901-27.375-1.775-39.509,2.193l-8.098-17.826    
                    c7.492-1.929,15.292-3.063,23.373-3.063h34.133c4.719,0,8.533-3.823,8.533-8.533c0-2.722-4.77-51.968-17.067-68.267    
                    c-20.702-27.452-60.134-51.2-93.867-51.2c-2.799,0-5.419,1.374-7.014,3.669c-1.596,2.304-1.954,5.239-0.973,7.859l4.002,10.675    
                    l-19.55-4.881c-4.582-1.178-9.199,1.638-10.342,6.212c-1.152,4.574,1.63,9.207,6.212,10.351l30.959,7.74l7.492,19.985    
                    c-33.886-12.271-84.113-23.159-119.236-8.474c-15.343,6.417-26.59,17.041-33.51,31.625l-71.373-7.151v-9.344    
                    c0-4.07-2.867-7.569-6.861-8.363L52.88,149.506c-3.183-0.631-6.477,0.597-8.457,3.191c-1.971,2.586-2.313,6.076-0.853,8.994    
                    l12.672,25.327l-41.873,13.952c-3.063,1.024-5.291,3.686-5.751,6.886L0.084,267.59c-0.546,3.891,1.613,7.654,5.265,9.122    
                    c3.635,1.468,7.817,0.256,10.112-2.935c17.365-24.124,47.411-39.108,78.413-39.108c43.051,0,79.334,29.175,90.359,68.762    
                    l-16.819,3.055c-9.617-32.026-39.586-55.33-74.837-54.741c-40.38,0.674-74.308,34.167-75.469,74.539    
                    c-1.246,43.366,33.673,79.053,76.766,79.053c42.351,0,76.8-34.458,76.8-76.8c0-1.766-0.145-3.499-0.265-5.239l16.913-3.072    
                    c0.239,2.731,0.418,5.495,0.418,8.294c0,4.702,4.096,8.55,8.806,8.55h127.727c4.676,0,8.542-3.763,8.533-8.439    
                    c-0.034-37.683,22.298-70.17,54.374-85.129l8.721,19.183c-26.052,15.607-42.197,46.114-36.267,79.727    
                    c5.521,31.292,30.788,56.431,62.114,61.781C473.812,413.084,518.586,369.18,511.214,317.348z M93.874,388.269    
                    c-32.93,0-59.733-26.795-59.733-59.733s26.803-59.733,59.733-59.733c26.3,0,48.64,17.109,56.593,40.772l-58.12,10.564    
                    c-4.642,0.845-7.714,5.291-6.869,9.924c0.751,4.122,4.344,7.006,8.388,7.006c0.512,0,1.015-0.043,1.536-0.137l58.095-10.564    
                    c0.026,0.725,0.111,1.434,0.111,2.167C153.607,361.474,126.813,388.269,93.874,388.269z M435.207,388.269    
                    c-32.93,0-59.733-26.795-59.733-59.733c0-21.077,11-39.595,27.529-50.227l24.439,53.76c1.425,3.14,4.523,5,7.774,5    
                    c1.178,0,2.372-0.247,3.524-0.768c4.292-1.954,6.187-7.006,4.233-11.298l-24.448-53.786c5.299-1.545,10.889-2.415,16.683-2.415    
                    c32.93,0,59.733,26.795,59.733,59.733S468.146,388.269,435.207,388.269z"
                    fill="#038aa9"
                  />
                </g>
              </svg>
            </div>
            <div className="detail">Bike</div>
          </div>
        </Link>
      </Transition>
      <Transition
        duration={"1100ms"}
        eventHandlers={{
          mount: {
            style: {
              animationName: "t-fade-in-slow"
            }
          }
        }}
      >
        <Link to="">
          <div className="circle-container">
            <div className="circle">
              <svg viewBox="0 0 612 612">
                <g>
                  <path
                    d="M612,195.722c0,105.87-510.374,222.727-549.02,222.727c-21.667,0-46.25-4.994-46.25-24.969   
                    c0-6.674,7.703-16.32,21.22-27.949l-0.015,0.008L2.109,301.883c-4.851-8.618-1.005-19.536,8.175-23.212l6.157-2.465   
                    c11.159-4.468,23.718-3.802,34.341,1.821l65.039,34.432c25.323-15.02,54.049-30.746,84.326-46.229L73.402,184.001   
                    c-10.027-6.506-9.92-21.22,0.201-27.578l10.368-6.514c17.256-10.841,38.234-14.043,57.938-8.846l210.85,55.616   
                    c65.742-26.094,125.181-43.904,160.363-43.904c9.396,0,18.806,0.249,27.887,0.898l-63.675,28.745l-1.524,21.418l98.29-45.183   
                    C597.661,164.272,612,174.759,612,195.722z M355.492,378.476l78.648,89.344c4.793,5.445,12.599,7.084,19.176,4.027l10.533-4.896   
                    c19.208-8.928,30.521-29.172,28.061-50.209l-9.846-84.186c-0.61-5.209-5.896-8.506-10.843-6.764l-112.308,39.562   
                    C353.447,367.281,351.661,374.125,355.492,378.476z"
                    fill="#038aa9"
                  />
                </g>
              </svg>
            </div>
            <div className="detail">Travels</div>
          </div>
        </Link>
      </Transition>
    </div>
  </Carousel.Slide>
);
