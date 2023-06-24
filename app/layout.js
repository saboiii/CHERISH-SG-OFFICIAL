
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import './globals.css'

export const metadata = {
  title: 'Cherish SG | Official Website',
  description: 'A passion project.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <div><Navbar /></div>
        <div>{children}</div>
        <div><Footer /></div>
      </body>
    </html>
  )
}
