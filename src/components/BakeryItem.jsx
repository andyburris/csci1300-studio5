import React from "react";
import { Button } from "./Button";

// TODO: create a component that displays a single bakery item
export function BakeryItem({ data, inCart, onClick }) {
    return (
        <div className="flex flex-col gap-3">
            <img 
                src={data.image}
                className="w-full rounded-xl"
                />
            <div className="flex flex-col gap-2 px-1">
                <div className="flex gap-3 w-full">
                    <div className="flex flex-col flex-grow">
                        <h6 className="font-semibold">{data.name}</h6>
                        <p>{data.description}</p>
                    </div>
                    <p>${data.price}</p>
                </div>
                <Button onClick={onClick} className="w-fit">
                    { inCart ? "Remove from Cart" : "Add to Cart" }
                </Button>
            </div>
        </div>
    )
}

export function BakeryItemHorizontal({ data, onClick }) {
    return (
        <div className="flex gap-3">
            <img 
                src={data.image}
                className="w-12 h-12 rounded-xl object-cover"
                />
            <div className="flex gap-3 items-start w-full">
                <div className="flex flex-col w-full">
                    <h6 className="font-semibold flex-grow">{data.name}</h6>
                    <p>${data.price}</p>
                </div>
                <Button onClick={onClick} className="w-fit">
                    Remove
                </Button>
            </div>
        </div>
    )
}