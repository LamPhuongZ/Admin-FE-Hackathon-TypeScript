import img from "../../assets/images/face.jpg";

type Props = {};

export default function Avartar({}: Props) {
  return (
    <img
      className="rounded-full"
      src={img}
      height={43}
      width={43}
      alt="Avartar"
    ></img>
  );
}
