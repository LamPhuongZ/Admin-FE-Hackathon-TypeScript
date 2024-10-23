import Navbar from './Navbar/Navbar'
import ToasterProvider from '../../Providers/ToasterProvider'

type Props = {}

export default function Header({ }: Props) {
  return (
    <div>
      <ToasterProvider />
      <Navbar />
    </div>
  )
}