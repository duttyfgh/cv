import mainPhoto from '../assets/mainPhoto.png'

const LeftBar = () => {
    return (
        <div className='
       
      h-[86vh]
      flex
      flex-col
      items-end      
      justify-between
      fixed
      ml-[-20px]
      '>
            <div className='
             flex
             items-start
             flex-col
             text-[18px]
             '>
                <img
                    src={mainPhoto}
                    alt="☕🍩👋"
                    className='object-cover w-[340px] h-[220px]'
                />
                <span>
                    Dmytro Lagodich CV
                </span>

                <a
                    href="https://duttyfgh.github.io/projects/"
                    className='hover:underline mt-5'
                    target='_blank'
                >
                    View all my projects
                </a>
            </div>

            <div className='
             flex
             items-start
             flex-col
             text-[18px]
             w-[340px]
             '>
                <span>
                    This project is maintained by
                </span>
                <a
                    className='hover:underline'
                    href="https://github.com/duttyfgh"
                    target='_blank'
                >dutyfgh</a>
            </div>

        </div>
    )
}

export default LeftBar