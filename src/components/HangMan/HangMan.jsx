
import Level1 from '../../assests/images/1.svg'
import Level2 from '../../assests/images/2.svg'
import Level3 from '../../assests/images/3.svg'
import Level4 from '../../assests/images/4.svg'
import Level5 from '../../assests/images/5.svg'
import Level6 from '../../assests/images/6.svg'
import Level7 from '../../assests/images/7.svg'
import Level8 from '../../assests/images/8.svg'

function HangMan({step}){
   const images =[Level1,Level2,Level3,Level4,Level5,Level6,Level7,Level8];
  
    return (
    <div className='w-[300px] h-[300px]'>
      <img
        src = {step>=images.length ?images[images.length-1]:images[step]}
      />
    </div>
  )
}

export default HangMan
