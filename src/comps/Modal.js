import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if (e.target.className === 'backdrop') {
            setSelectedImg(null)
        }
    }

    return (

        <motion.div className="backdrop" initial={{ opactity: 0 }} animate={{ opacity: 1 }} onClick={handleClick}>
            <motion.img src={selectedImg} alt="enlarged pic" initial={{ y: '-100vh' }} animate={{ y: 0 }} />
        </motion.div>

    );
}

export default Modal;