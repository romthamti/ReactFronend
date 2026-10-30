import '../App.css'
import Hero from './hero'
import PersonalList from './personallist'

function Member() {
  return (
    <>
      <Hero
        eyebrow="Our team"
        title="สมาชิกทีม YangGai"
        subtitle="รู้จักทีมงานที่อยู่เบื้องหลังทุกโปรเจกต์"
      />
      <div className="page page-overlap">
        <PersonalList />
      </div>
    </>
  )
}

export default Member
