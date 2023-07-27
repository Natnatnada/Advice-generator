'use client'; //add to avoid error import server components inside client 
import Image from 'next/image'
import page from './page.module.css'
import { useState, useEffect } from 'react'
export default function AdviceCard() {
    //set quote to and empty array
    const [quote, setQuote] = useState("")
    const [numberQuote, setNumberQuote] = useState("")
    // [Advice Slip API](https://api.adviceslip.com)
    useEffect(() => {
        //check the url, before the error was /advices
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(
                (quote) => {
                    // console.log(quote)
                    //set the id to get the quote
                    setQuote(quote.slip.advice);
                    setNumberQuote(quote.slip.id)
                })
            .catch(error => {
                console.log(error);
            });
    })
    const changeQuote = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(
                (quote) => {
                    // console.log(quote)
                    //set the id to get the quote
                    setQuote(quote.slip.advice);
                    setNumberQuote(quote.slip.id)
                })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
        <div className={page.background}>
            <div className='card'>
                <h2 className={page.numberadvice} >ADVICE N° {numberQuote} </h2>
                <h3 className={page.Advice} > {quote} </h3>
                <div className={page.divider}></div>
                <div className={page.line}></div>
                <div className={page.dicedivider}>
                    <button className={page.btn} onClick={changeQuote}>  <Image src={require('.//images/icon-dice.svg')} alt='dice-divider'
                    /></button>
                </div>
            </div>
        </div>
            <footer>
                <p className={page.footer}>
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                    Coded by <a href="https://github.com/Natnatnada">Natalia A</a>.
                </p>
            </footer>
        </>
            )
}