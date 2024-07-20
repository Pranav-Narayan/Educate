import React, { useRef } from 'react'
import './Explore.css'

const Explore = ({explore,setexplore}) => {

  const btn = useRef(null)
  
  const closeExplore = (e)=>{
    if(e.target == btn.current){
        setexplore(false)
    }
  }

  return (
    <div className={`explore container ${explore? '' :'hide'}`}>
        <div className="contents">
            <h1>We Ensure Better Education For A Better World</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur possimus fugit ut beatae voluptatum, amet nostrum. Vel quo, ut nemo minus magni enim nesciunt porro quidem, blanditiis repellendus harum illo!
            Dicta ad incidunt debitis quidem non. Cumque eos corporis amet suscipit odio blanditiis itaque dicta dolorum id consectetur explicabo laboriosam fuga, fugiat consequatur reprehenderit, sint nostrum distinctio voluptatibus doloribus nihil?
            Amet cum, nam quas, eos, neque quod tempore nostrum a quibusdam iste facere commodi nobis architecto quis itaque nisi! Tempora dignissimos voluptatibus voluptates quia ea voluptatem non sit, architecto beatae.
            Aliquid tempora omnis incidunt! Inventore mollitia sequi quis a, obcaecati ex at enim ut quia distinctio dolorem. Perspiciatis atque voluptatem ipsam hic, dolores magnam quaerat ex est, nihil nemo velit?
            Voluptate consectetur minima a autem modi perferendis. Voluptatibus officia quaerat nihil atque, ipsam accusamus? Molestiae est soluta molestias minima distinctio accusantium quisquam, cumque maxime reprehenderit. Officiis itaque incidunt quidem nesciunt.
            Vitae ad iusto deserunt perspiciatis sapiente quos ducimus maiores autem odio? Voluptates repellendus perferendis obcaecati et minima vel incidunt, vero mollitia molestiae inventore pariatur facere iusto, natus veritatis maiores architecto.
            Excepturi quis doloribus voluptas incidunt sed laboriosam nemo? Autem aut sint laudantium natus, excepturi officia ratione sed eaque odit libero doloremque molestias accusamus commodi? Amet rem quos maxime excepturi culpa.
            Sapiente iste nam accusantium cumque voluptatibus earum autem officia reprehenderit sint eum, quod repellat harum unde magni modi, eaque temporibus enim atque! Aliquam, perspiciatis impedit numquam aperiam distinctio aspernatur doloremque.
            Impedit libero enim quasi facere commodi! Perspiciatis cum qui eligendi obcaecati adipisci blanditiis, odio delectus neque alias distinctio corrupti temporibus eaque commodi, doloremque quos excepturi officiis dignissimos culpa reiciendis illo!</p>
            <button className='btn' onClick={closeExplore} ref={btn}>Back To Home</button>
        </div>
    </div>
  )
}

export default Explore
