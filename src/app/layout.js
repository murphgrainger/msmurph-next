import './globals.css'
import Nav from './components/Nav';

export const metadata = {
  title: 'MsMurph',
  description: 'A website about a lot of things',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='h-screen'>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
