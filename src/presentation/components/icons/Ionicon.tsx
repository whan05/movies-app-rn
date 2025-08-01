import Ionicon from '@react-native-vector-icons/ionicons'

interface Props {
    name: string;
    size?: number;
    color?: string
}

export const Ionicons = ({ name, size = 20, color = "black" }: Props) => {
  return (
        <Ionicon name={name} size={ size } color={color}/>
  )
}
