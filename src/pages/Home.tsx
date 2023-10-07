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
      <section className="mb-10 flex flex-wrap-reverse items-center justify-center gap-14 bg-home-section bg-contain px-32 pb-4 lg:mb-0 lg:h-[34rem] lg:flex-nowrap">
        <div className="flex h-auto flex-col gap-4">
          <h2 className="font-baloo text-5xl font-extrabold">
            Encontre o café perfeito para qualquer hora do dia
          </h2>
          <p className="font-roboto text-xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <br />
          <br />
          <br />
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
          className="h-72 lg:h-96"
        />
      </section>
      <section className="flex h-auto flex-col items-start justify-start px-32 lg:flex-nowrap">
        <h2 className="font-baloo text-3xl font-extrabold">Nossos cafés</h2>
        <br />
        <br />
        <div className="flex flex-wrap gap-8">
          {isFetching ? (
            <h1>Loading</h1>
          ) : (
            coffeeList?.map((coffee) => (
              <CoffeeCard
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
