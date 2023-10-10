import coffeePresentation from '../assets/coffee-presentation.png'
import CoffeeCard from '@/components/CoffeeCard'
import { useGetCoffee } from '@/hooks/coffee'
import Icon from '@/components/Icon'
import {
  PiCoffeeFill,
  PiPackageFill,
  PiShoppingCartFill,
  PiTimerFill,
} from 'react-icons/pi'

export default function Home() {
  const { data: coffeeList, isFetching } = useGetCoffee()

  return (
    <>
      <section className="mb-5 mt-5 flex flex-wrap-reverse items-center justify-center gap-5 bg-home-section bg-contain px-5 pb-4 md:mt-0 md:gap-14 md:px-32 lg:mb-0 lg:h-[34rem] lg:flex-nowrap">
        <div className="mb-5 flex h-auto flex-col gap-4">
          <h2 className="text-center font-baloo text-3xl font-extrabold md:text-left md:text-5xl">
            Encontre o café perfeito para qualquer hora do dia
          </h2>
          <p className="mb-4 text-center font-roboto text-xl md:mb-24 md:text-left">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="flex flex-wrap gap-5">
            <div className="flex w-60 items-center gap-3 font-roboto text-base">
              <Icon icon={PiShoppingCartFill} className="bg-yellow-dark" />
              <p>Compra simples e segura</p>
            </div>
            <div className="flex items-center gap-3 font-roboto text-base">
              <Icon icon={PiPackageFill} className="bg-base-text" />
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div className="flex w-60 items-center gap-3 font-roboto text-base">
              <Icon icon={PiTimerFill} className="bg-yellow" />
              <p>Entrega rápida e rastreada</p>
            </div>
            <div className="flex items-center gap-3 font-roboto text-base">
              <Icon icon={PiCoffeeFill} className="bg-purple" />
              <p>O Café chega fresquinho até você</p>
            </div>
          </div>
        </div>
        <img
          src={coffeePresentation}
          alt="coffee-example"
          className="h-56 md:h-96"
        />
      </section>
      <section className="flex h-auto flex-col items-center justify-start px-5 md:items-start md:px-32 lg:flex-nowrap">
        <h2 className="font-baloo text-3xl font-extrabold">Nossos cafés</h2>
        <br />
        <br />
        <div className="flex flex-wrap justify-center gap-8 md:justify-start">
          {isFetching ? (
            <h1>Loading</h1>
          ) : (
            coffeeList?.map((coffee) => (
              <CoffeeCard
                id={coffee.id}
                pictureUrl={coffee.pictureUrl}
                name={coffee.name}
                description={coffee.description}
                tags={coffee.tags}
                value={coffee.value}
                key={coffee.id}
              />
            ))
          )}
        </div>
      </section>
    </>
  )
}
