import  avatar from "./assets/avatar.webp"


export default function App(){

  return (
  <div className="center">
    <div className="container">
        <div className="image"></div>
        <div className="learning">Learning</div>
        <h4>Published 21 Dec 2023</h4>
        <h2>HTML & CSS foundations</h2>
        <p > These languages are the backbone of every website defining structure ,content and presentation.</p>
        <div className="profile">
          <img src={avatar} className="avatar" />
          <span className="name"> Greg Hopper</span>
        </div>

    </div>
    </div>
  )
}