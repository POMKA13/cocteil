import React, {useState} from "react";
import {Rating} from "@mui/material";


const RatingStar = () => {
    const [value, setValue] = useState(null)

    return (
        <>
            <Rating
                name="simple-controlled"
                value={value}
                style={{color: '#514A7E'}}
                size="small"
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            {/*<Rating name="read-only" value={value} readOnly />*/}
        </>
    )
}

export default RatingStar