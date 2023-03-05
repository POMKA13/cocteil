import React, {useState} from "react";
import styles from './Accordion.module.css'


const Accordion = (props) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = props.items.map((item, index) => {
        const active = index === activeIndex ? "active" : "";

        return (
            <React.Fragment key={item.title}>
                <div className={styles.header} onClick={() => onTitleClick(index)}>
                    <p>
                        {item.title}
                    </p>
                    <span className={styles.title}></span>
                </div>
                <div className={active ? styles.active : styles.container}>
                    <p className={styles.content}>
                        {item.content}
                    </p>
                </div>
            </React.Fragment>
        )
    });
    return <div className="ui styled accordion">{renderedItems}</div>;
}

export default Accordion