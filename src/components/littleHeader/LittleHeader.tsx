import mainPhoto from '../../assets/mainPhoto.png'
import cls from './LittleHeader.module.css'

const LittleHeader = () => {
  return (
    <>

      <div className={cls.header}>
        <div className='
             flex
             items-center
             flex-col
             text-[18px]
             w-screen
             '>
          <img
            src={mainPhoto}
            alt="☕🍩👋"
            className='object-cover w-[240px] h-[120px] mb-5'
          />
          <span>
            Dmytro Lagodich CV
          </span>

          <a
            href="https://duttyfgh.github.io/projects/"
            className='hover:underline mt-1'
            target='_blank'
          >
            View all my projects
          </a>

        </div>


      </div>
      <div className="h-[1px] bg-[#cecece] w-[100%] mt-[20px] mb-[20px] littleLine"></div>
    </>
  )
}

export default LittleHeader