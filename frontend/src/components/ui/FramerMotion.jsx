
import { motion } from 'framer-motion';

export const FramerMotion = () => {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  Hello
</motion.div>

  )
}
