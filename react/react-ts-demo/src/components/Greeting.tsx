
type GreetingProps = {
    name: string;
    country?: string;
}

const Greeting = ({ name, country ="India" }: GreetingProps) => {
  return (
    <div>Greeting {name} from {country}!</div>
  )
}

export default Greeting