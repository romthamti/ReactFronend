import '../App.css'
import { useState } from 'react'
import codeIcon from '../assets/icons/code.svg'
import paletteIcon from '../assets/icons/palette.svg'
import briefcaseIcon from '../assets/icons/briefcase.svg'
import userIcon from '../assets/icons/user.svg'

// จับคู่ตำแหน่งกับไฟล์ไอคอน
const positionIcons = {
  Developer: codeIcon,
  Designer: paletteIcon,
  Manager: briefcaseIcon
}

function PersonalList() {
  const [data, setData] = useState([
    { id: 1, name: "Mild", age: 20, position: "Developer" },
    { id: 2, name: "John", age: 25, position: "Designer" },
    { id: 3, name: "Jane", age: 30, position: "Manager" }
  ])
  const [hide, setHide] = useState(false)

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">
          จำนวนประชากร
          <span className="count">{data.length} คน</span>
        </h2>
        <button className="button button-ghost" onClick={() => setHide(!hide)}>
          {hide ? "แสดง" : "ซ่อน"}
        </button>
      </div>

      {hide ? (
        <p className="empty">ซ่อนรายชื่ออยู่ กด "แสดง" เพื่อดูรายชื่อ</p>
      ) : (
        <ul className="person-list">
          {data.map((item) => {
            const icon = positionIcons[item.position] || userIcon
            return (
            <li key={item.id} className="person">
              <div className="avatar">{item.name[0]}</div>
              <div className="person-info">
                <div className="person-name">{item.name}</div>
                <div className="person-age">อายุ {item.age} ปี</div>
              </div>
              <span className="badge">
                <img src={icon} alt="" className="badge-icon" />
                {item.position}
              </span>
            </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default PersonalList
