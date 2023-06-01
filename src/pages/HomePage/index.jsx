import banner from '../../assets/home/banner.jpg'
import Button from "../../components/Button"
import { useCounter } from '../../hooks/useCounter'

const HomePage = () => {

  const {counter, setCounter} = useCounter();

  const handlerOnClick = (event) => {
    const name = event.target.name;

    if (name === 'restar') setCounter(counter - 1)
    if (name === 'sumar') setCounter(counter + 1)
  }

  return (
    <>
      <div>
        <img src={banner} alt="quares IT SOLUTIONS" title="quares IT SOLUTIONS" loading="lazy"/>
      </div>
      <div>
        <p>{counter}</p>
        <Button name='restar' onClick={(event) => handlerOnClick(event)}>restar</Button>
        <Button name='sumar' onClick={(event) => handlerOnClick(event)}>sumar</Button>
      </div>
    </>
  )
}

export default HomePage