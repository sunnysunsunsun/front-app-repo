import { motion, AnimatePresence } from 'framer-motion'
import { useOutlet, ScrollRestoration, useLocation } from 'react-router'
import Header from '@/components/Header'

export default function Default() {
  const outlet = useOutlet()
  const location = useLocation()
  return (
    <>
      <Header />
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, position: 'absolute' }}
          transition={{ duration: 0.2, ease: 'linear' }}>
          {outlet}
        </motion.div>
      </AnimatePresence>

      <ScrollRestoration />
    </>
  )
}
