import React from 'react'

import '../style/Components/UserProfile.scss'

export default function UserProfile() {
   return (
      <section className="section">
         <div className="section__block">
            <div className="form-block__head">
               <p className="form-block__title">Edit Profile</p>
               <p className="form-block__des">Complete your profile</p>
            </div>
            <form className="form-block__grid" action="#">
               <div className="company group">
                  <input type="text" required />
                  <span className="bar"></span>
                  <label>Company</label>
               </div>
               <div className="username group">
                  <input type="text" required />
                  <span className="bar"></span>
                  <label>Username</label>
               </div>
               <div className="email group">
                  <input type="email" required />
                  <span className="bar"></span>
                  <label>Email address</label>
               </div>
               <div className="name">
                  <div className="f-name group">
                     <input type="text" required />
                     <span className="bar"></span>
                     <label>First name</label>
                  </div>
                  <div className="l-name group">
                     <input type="text" required />
                     <span className="bar"></span>
                     <label>Last name</label>
                  </div>
               </div>
               <div className="address group">
                  <input type="text" required />
                  <span className="bar"></span>
                  <label>Address</label>
               </div>
               <div className="city group">
                  <input type="text" required />
                  <span className="bar"></span>
                  <label>City</label>
               </div>
               <div className="country group">
                  <input type="text" required />
                  <span className="bar"></span>
                  <label>Country</label>
               </div>
               <div className="postal group">
                  <input type="text" required />
                  <span className="bar"></span>
                  <label>Postal code</label>
               </div>
               <div className="text group">
                  <textarea name="#" rows="3" required></textarea>
                  <label>About me</label>
               </div>
               <div className="submit">
                  <button>Update profile</button>
               </div>
            </form>
         </div>
         <div className="section__block profile_block">
            <div className="profile_photo">
               <img src="icone/profile.jpg" alt="avatar" />
            </div>
            <div className="profile_title">
               <p>CEO / CO-FOUNDER</p>
            </div>
            <div className="profile_name">
               <h2>Alec Thompson</h2>
            </div>
            <div className="profile_text">
               <p>Don't be scared of the truth because we need to restart the human foundation in truth And I love
                  you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
            </div>
         </div>
      </section>
   )
}
