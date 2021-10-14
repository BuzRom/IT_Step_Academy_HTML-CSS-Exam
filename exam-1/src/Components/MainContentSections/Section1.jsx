import React from 'react'

import '../../style/Components/MainContentSections/Section1.scss'

export default function Section1() {

   return (
      <section>
         <ul className="section-1">
            <li>
               <svg className="green" enableBackground="new 0 0 32 32" height="32px" id="Layer_1" version="1.1"
                  viewBox="0 0 32 32" width="32px" space="preserve" xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink">
                  <g id="data">
                     <path
                        d="M16,0C9.256,0,2,2.033,2,6.5v19C2,29.965,9.256,32,16,32c6.743,0,14-2.035,14-6.5v-19   C30,2.033,22.742,0,16,0z M28,25.5c0,2.484-5.373,4.5-12,4.5c-6.628,0-12-2.016-12-4.5v-3.736C6.066,23.893,11.05,25,16,25   c4.95,0,9.934-1.107,12-3.236V25.5z M28,19.5h-0.004c0,0.01,0.004,0.021,0.004,0.031C28,22,22.627,24,16,24c-6.627,0-12-2-12-4.469   c0-0.01,0.004-0.021,0.004-0.031H4v-3.736C6.066,17.893,11.05,19,16,19c4.95,0,9.934-1.107,12-3.236V19.5z M28,13.5h-0.004   c0,0.01,0.004,0.021,0.004,0.031C28,16,22.627,18,16,18c-6.627,0-12-2-12-4.469c0-0.01,0.004-0.021,0.004-0.031H4v-3.436   C6.621,12.061,11.425,13,16,13c4.575,0,9.379-0.939,12-2.936V13.5z M16,11C9.372,11,4,8.984,4,6.5C4,4.014,9.372,2,16,2   c6.627,0,12,2.014,12,4.5C28,8.984,22.627,11,16,11z"
                        fill="whitesmoke" />
                     <circle cx="25" cy="26" fill="whitesmoke" r="1" />
                     <circle cx="25" cy="20" fill="whitesmoke" r="1" />
                     <circle cx="25" cy="14" fill="whitesmoke" r="1" />
                  </g>
               </svg>
               <div className="item-info">
                  <p>Used Spase</p>
                  <span>49/50 GB</span>
               </div>
               <div className="item-bottom">
                  <img src="../../icone/alert.png" alt="icone" />Get more space...
               </div>
            </li>
            <li>
               <svg className="yellow" enableBackground="new 0 0 32 32" height="32px" id="Layer_1" version="1.1"
                  viewBox="0 0 32 32" width="32px" space="preserve" xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink">
                  <path
                     d="M31.4,11.2l-3-3.998c-0.117-0.157-0.256-0.293-0.4-0.423V2c0-1.104-0.896-2-2-2H6  C4.895,0,4,0.896,4,2v4.78C3.856,6.909,3.717,7.044,3.6,7.2l-2.999,3.999C0.213,11.715,0,12.354,0,13v1c0,1.654,1.346,3,3,3h0v13  c0,1.104,0.896,2,2,2h22c1.104,0,2-0.896,2-2V17l0,0c1.654,0,3-1.346,3-3v-1C32,12.354,31.787,11.715,31.4,11.2z M26,2v4H6h0V2H26z   M10.193,15H6.004l4-7h2.189L10.193,15z M13.234,8H15.5v7h-4.266L13.234,8z M16.5,8h2.266l2,7H16.5V8z M19.805,8h2.189l4,7h-4.189  L19.805,8z M2,14v-1c0-0.217,0.07-0.427,0.2-0.6l3-4C5.389,8.148,5.685,8,6,8h2.852l-4,7H3C2.448,15,2,14.553,2,14z M20,30h-7.5V20  H20V30z M27,30h-6V20c0-0.553-0.449-1-1-1h-7.5c-0.552,0-1,0.447-1,1v10H5V17h22V30z M30,14c0,0.553-0.447,1-1,1h-1.854l-4-7H26l0,0  c0.314,0,0.611,0.148,0.799,0.4l3,4C29.93,12.573,30,12.783,30,13V14z"
                     fill="whitesmoke" id="shop_1_" />
               </svg>
               <div className="item-info">
                  <p>Revenue</p>
                  <span>&#36; 34,245</span>
               </div>
               <div className="item-bottom">
                  <img src="../../icone/calendar.png" alt="icone" />Last 24 Hours
               </div>
            </li>
            <li>
               <svg className="blue" enableBackground="new 0 0 32 32" height="32px" id="Layer_1" version="1.1"
                  viewBox="0 0 32 32" width="32px" space="preserve" xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink">
                  <g id="tag">
                     <path clipRule="evenodd"
                        d="M31.391,13.883l-5-8c-0.73-1.169-2.012-1.88-3.391-1.88H4   c-2.209,0-4,1.791-4,4v16c0,2.209,1.791,4,4,4h19c1.379,0,2.66-0.711,3.391-1.881l5-8C32.203,16.827,32.203,15.18,31.391,13.883z    M29.695,17.062l-5,8.002c-0.367,0.588-1.002,0.939-1.695,0.939H4c-1.103,0-2-0.898-2-2v-16c0-1.103,0.897-2,2-2h19   c0.693,0,1.328,0.352,1.695,0.939l5,8C30.098,15.587,30.098,16.419,29.695,17.062z"
                        fill="whitesmoke" fillRule="evenodd" />
                     <path clipRule="evenodd"
                        d="M23,13.003c-1.658,0-3,1.343-3,3c0,1.657,1.342,3,3,3   c1.656,0,3-1.344,3-3C26,14.346,24.656,13.003,23,13.003z M23,18.004c-1.105,0-2-0.896-2-2c0-1.104,0.895-2,2-2   c1.104,0,2,0.896,2,2C25,17.107,24.104,18.004,23,18.004z"
                        fill="whitesmoke" fillRule="evenodd" />
                  </g>
               </svg>
               <div className="item-info">
                  <p>Fixed Issues</p>
                  <span>75</span>
               </div>
               <div className="item-bottom">
                  <img src="../../icone/down.png" alt="icone" />Tracked from Github
               </div>
            </li>
            <li>
               <svg className="red" enableBackground="new 0 0 32 32" height="32px" id="Layer_1" version="1.1"
                  viewBox="0 0 32 32" width="32px" space="preserve" xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink">
                  <path
                     d="M31.543,0.16C31.377,0.053,31.188,0,31,0c-0.193,0-0.387,0.055-0.555,0.168l-30,20  c-0.309,0.205-0.479,0.566-0.439,0.936c0.038,0.369,0.278,0.688,0.623,0.824l7.824,3.131l3.679,6.438  c0.176,0.309,0.503,0.5,0.857,0.504c0.004,0,0.007,0,0.011,0c0.351,0,0.677-0.186,0.857-0.486l2.077-3.463l9.695,3.877  C25.748,31.977,25.873,32,26,32c0.17,0,0.338-0.043,0.49-0.129c0.264-0.148,0.445-0.408,0.496-0.707l5-30  C32.051,0.771,31.877,0.377,31.543,0.16z M3.136,20.777L26.311,5.326L9.461,23.363c-0.089-0.053-0.168-0.123-0.266-0.162  L3.136,20.777z M10.189,24.066c-0.002-0.004-0.005-0.006-0.007-0.01L29.125,3.781L12.976,28.943L10.189,24.066z M25.217,29.609  l-8.541-3.416c-0.203-0.08-0.414-0.107-0.623-0.119L29.205,5.686L25.217,29.609z"
                     fill="whitesmoke" id="paperplane" />
               </svg>
               <div className="item-info">
                  <p>Followers</p>
                  <span>+ 245</span>
               </div>
               <div className="item-bottom">
                  <img src="../../icone/time.png" alt="icone" />Just updated
               </div>
            </li>
         </ul>
      </section>
   )
}
