import React from "react"
import Accordion from "./Accordion/Accordion"
import styles from './Questions.module.css'

const items = [
    {
        title: "Как сделать заказ?",
        content: "Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар. ",
    },
    {
        title: "Способы оплаты",
        content: "Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар. ",
    },
    {
        title: "Доставка",
        content: "Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар. ",
    },
    {
        title: "Сроки доставки",
        content: "Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар. ",
    },
    {
        title: "Как сделать обмен?",
        content: "Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар. ",
    },
    {
        title: "Как сделать возврат?",
        content: "Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар. ",
    },
    {
        title: "Куда и когда вернутся деньги за возвращённый товар?",
        content: "Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар. ",
    },

];
const Question = () => {
    return (
        <section className={styles.question}>
            <div className={styles.circle}></div>
            <h2>Часто задаваемые вопросы</h2>
            <h3>FAQ</h3>
            <div>
                <Accordion items={items} />
            </div>
        </section>
    )
}

export default Question