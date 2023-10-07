import ConfirmedDraw from '@/assets/Confirmed-Motorcycle.svg'
import Icon from '@/components/Icon'
import { PiCurrencyDollarBold, PiMapPinFill, PiTimerFill } from 'react-icons/pi'

export default function Success() {
  return (
    <div className="mt-20 flex flex-wrap gap-8 px-5 lg:px-32">
      <section className="flex w-full flex-col items-center gap-1 lg:items-start">
        <h2 className="font-baloo text-3xl font-extrabold text-yellow-dark">
          Uhu! Pedido confirmado
        </h2>
        <p className="text-center text-xl lg:text-left">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </section>
      <section className="flex w-full flex-wrap-reverse justify-center gap-8 lg:flex-nowrap lg:gap-24">
        <article className="h-auto w-[33rem] min-w-fit rounded-md rounded-bl-[36px] rounded-tr-[36px] bg-gradient-to-br from-yellow to-purple p-[1px]">
          <div className="flex h-full w-full flex-col gap-8 rounded-md rounded-bl-[36px] rounded-tr-[36px] bg-white p-10">
            <div className="flex items-center gap-3">
              <Icon className="bg-purple" icon={PiMapPinFill} />
              <div>
                <p>
                  Entrega em{' '}
                  <span className="font-bold">
                    Rua João Daniel martinelli, 102
                  </span>
                </p>
                <p>Farrapos-Porto Alegre, RS</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon className="bg-yellow" icon={PiTimerFill} />
              <div>
                <p>Previsão de entrega</p>
                <p className="font-bold">20min - 30min</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon className="bg-yellow-dark" icon={PiCurrencyDollarBold} />
              <div>
                <p>Pagamento na entrega</p>
                <p className="font-bold">Cartão de Crédito</p>
              </div>
            </div>
          </div>
        </article>
        <img className="w-60 lg:w-128" src={ConfirmedDraw} alt="Motorcycle" />
      </section>
    </div>
  )
}
