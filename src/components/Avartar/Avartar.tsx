import img from '../../assets/images/face.jpg'

type Props = {}

export default function Avartar({}: Props) {
  return (
    <img className='rounded-full' src={img} height={30} width={30} alt='Avartar'></img>
  )
}