import contacts from '../assets/contacts.png'
import summary from '../assets/summary.png'
import languages from '../assets/languages.png'
import education from '../assets/education.png'
import skills from '../assets/skills.png'
import handshake from '../assets/handshake.png'
import clock from '../assets/clock.png'
import Line from './Line'
import LittleHeader from './littleHeader/LittleHeader'

const skillsList = [
    'NextJS',
    'React',
    'RTK',
    'RTK Query',
    'SCSS',
    'Tailwind',
    'Formik',
    'Yup',
    'TS',
    'JS',
    'Algorithms',
    'HTML',
    'CSS',
    'Git',
    'i18n'
];

const RightBar = () => {

    return (
        <div className='max-w-[600px]'>
            <LittleHeader />
            <h1 className='font-bold text-[#222] text-[30px]'>DMYTRO LAGODICH</h1>
            <span>Front-End React Developer</span>
            <div className='flex justify-end flex-col'>
                <div className='flex items-end pb-3 pt-2'>
                    <img
                        src={contacts}
                        alt="☎️"
                        className='w-[40px] h-[35px] mb-1 ml-[-5px]'
                    />
                    <h2 className='font-bold text-[#494949] text-[22px] mt-5'>Contacts:</h2>
                </div>
                <div>
                    <div>
                        <span>Age: </span>
                        <span className='text-[#494949]'>16</span>
                    </div>
                    <div>
                        <span>Phone: </span>
                        <span className='text-[#494949]'>+38(099)415-6179</span>
                    </div>
                    <div>
                        <a target='_blank' href='https://dmytrolagodich@gmail.com'>Email</a>
                        <span className='text-[#494949]'>: dmytrolagodich@gmail.com</span>
                    </div>
                    <div>
                        <a target='_blank' href="https://www.linkedin.com/in/dmytro-lagodich-756949275/">Linkedin</a>
                        <span className='text-[#494949]'>: dmytro-lagodich</span>
                    </div>
                    <div>
                        <a target='_blank' href="https://github.com/duttyfgh">Github</a>
                        <span className='text-[#494949]'>: duttyfgh</span>
                    </div>
                    <div>
                        <a target='_blank' href="https://t.me/dutyfgh">Telegram</a>
                        <span className='text-[#494949]'>: @dutyfgh</span>
                    </div>
                    <div>
                        <a target='_blank' href='https://www.google.com/maps/@49.4269403,32.0309084,12z?entry=ttu'>Location</a>
                        <span className='text-[#494949]'>: Ukraine, Cherkasy</span>
                    </div>
                </div>

                <Line />

                <div>
                    <div className='flex items-end pb-3 pt-2'>
                        <img
                            src={summary}
                            alt="📜"
                            className='w-[35px] h-[35px] mb-1 ml-[-5px]'
                        />
                        <h2 className='font-bold text-[#494949] text-[22px] mt-5'>Summary:</h2>
                    </div>
                    <p>
                        I'm front-end developer with 1 year of experience studying and creating their own projects.
                        I learned all the skills by watching YouTube courses.
                        I also have experience in team work at the startup "CatMoney". I'm communicative and
                        motivated to effectively solve problems in a team.
                        Now I have an B1 level of English, but I learn it for 2-4 hours every day.
                    </p>
                </div>

                <Line />

                <div>
                    <div className='flex items-end pb-3 pt-2'>
                        <img
                            src={skills}
                            alt="🦾"
                            className='w-[40px] h-[40px] mb-1 ml-[-5px]'
                        />
                        <h2 className='font-bold text-[#494949] text-[22px] mt-5'> Skills:</h2>
                    </div>
                    <ul className='list-disc pl-8'>
                        {skillsList.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>

                <Line />

                <div>
                    <div className='flex items-end pb-3 pt-2'>
                        <img
                            src={languages}
                            alt="👅"
                            className='w-[35px] h-[40px] mb-1 ml-[-5px]'
                        />
                        <h2 className='font-bold text-[#494949] text-[22px] mt-5'>Languages:</h2>
                    </div>
                    <p>English - <span className='text-[#494949]'>B1</span>(Intermediate)</p>
                    <p>Ukrainian - <span className='text-[#494949]'> C2</span>(Native)</p>
                </div>

                <Line />

                <div>
                    <div className='flex items-end pb-3 pt-2'>
                        <img
                            src={education}
                            alt="👨‍🎓"
                            className='w-[40px] h-[40px] mb-1 ml-[-5px]'
                        />
                        <h2 className='font-bold text-[#494949] text-[22px] mt-5'> Education:</h2>
                    </div>
                    <div className='flex justify-between education'>
                        <span>Sloviansk Power-Building College</span>
                        <div className='flex items-center'>
                            <img className='w-[20px] h-[22px]' src={clock} alt="🕓" />
                            <span className='pr-4'>September 2023 - Present</span>
                        </div>
                    </div>
                </div>

                <Line />


                <div className='flex justify-center items-start min-h-[30px] gap-[10px] collaborate'>
                    <div className='flex collaborateA'>
                        <div className='flex'>
                            <img src={handshake} alt="🤝" className='w-[55px] h-[40px]' />
                            <h1 className='font-bold text-[#222] text-[30px]'>Let’s
                            </h1>
                        </div>
                        <h1 className='font-bold text-[#222] text-[30px] ml-[10px]'>collaborate</h1>
                    </div>

                    <div className='flex gap-[10px] flex-row collaborateB'>
                        <h1 className='font-bold text-[#222] text-[30px]'>together!</h1>
                    </div>
                </div>

            </div>

            <div className='underPanel'>

                <Line/>
                <div className='
             flex
             items-start
             justify-between
             flex-wrap
             text-[18px]
             w-[100%]
             '>
                    <span>
                        This project is maintained by:
                    </span>
                    <a
                        className='hover:underline'
                        href="https://github.com/duttyfgh"
                        target='_blank'
                    >dutyfgh</a>
                </div>
            </div>
        </div>
    )
}

export default RightBar
