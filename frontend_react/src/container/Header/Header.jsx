import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

const Header = () => {

  const scaleVariants = {
    whileInView: {
      scale: [0,1],
      opacity: [0,1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0,1]}}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hey! I'm</p>
              <h1 className='head-text'>Quinn</h1>
            </div>

          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Software Developer</p>
            <p className='p-text'>Internet Enjoyer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0,1]}}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.portrait} alt='profile_bg'/>
        <motion.img
          whileInView={{ scale: [0,1]}}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.react, images.mu5, images.javascript].map((circle, index) => {
            return(
              <div className='circle-cmp app__flex' key={`circle-${index}`}>
                <img src={circle} alt='circle'/>
              </div>
            ) 
        })}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')