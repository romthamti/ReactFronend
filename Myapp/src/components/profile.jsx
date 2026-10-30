import '../App.css'
import { useState } from 'react'

function Profile() {
  const [name, setName] = useState("Mild")
  const [age, setAge] = useState(20)

  return (
    <div className="card profile">
      <div className="avatar avatar-lg">{name[0]}</div>
      <h1 className="profile-name">Hello, {name}!</h1>
      <p className="profile-age">
        อายุ <strong>{age}</strong> ปี
      </p>

      <div className="button-row">
        <button className="button button-ghost" onClick={() => setAge(age - 1)} disabled={age <= 0}>
          − ลดอายุ
        </button>
        <button className="button button-primary" onClick={() => setAge(age + 1)}>
          + เพิ่มอายุ
        </button>
        <button className="button button-ghost" onClick={() => setAge(20)}>
          รีเซ็ต
        </button>
      </div>
    </div>
  )
}

export default Profile
