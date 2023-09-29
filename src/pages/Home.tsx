import IconHome1 from '@/components/icons/IconHome1'
import coffeePresentation from '../assets/coffee-presentation.png'
import IconHome2 from '@/components/icons/IconHome2'
import IconHome3 from '@/components/icons/IconHome3'
import IconHome4 from '@/components/icons/IconHome4'
import CoffeeCard from '@/components/CoffeeCard'

export default function Home() {
  return (
    <>
      <section className="bg-home-section flex h-auto flex-wrap-reverse items-center justify-center gap-14 px-32 lg:h-[34rem] lg:flex-nowrap">
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
              <IconHome1 />
              <p>Compra simples e segura</p>
            </div>
            <div className="flex items-center gap-3 font-roboto text-base">
              <IconHome2 />
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div className="flex w-60 items-center gap-3 font-roboto text-base">
              <IconHome3 />
              <p>Entrega rápida e rastreada</p>
            </div>
            <div className="flex items-center gap-3 font-roboto text-base">
              <IconHome4 />
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
        <CoffeeCard />
      </section>
    </>
  )
}
