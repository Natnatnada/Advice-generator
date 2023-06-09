import Image from 'next/image'
import page from './page.module.css'
export default function AdviceCard() {
    return (
        <div className={page.background}>
            <div className='card'>
                <h2 className={page.numberadvice} >Advice n° </h2>
                <h3 className={page.Advice} >Here is your advide: </h3>
                <div className='divider'></div>
                <div className={page.dicedivider}>
                    <Image src={require('.//images/icon-dice.svg')} alt='dice-divider'
                        width

                    />
                </div>
            </div>
        </div>
    )
}