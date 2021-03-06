import React from 'react'

export default function CartItem({item,value}) {
    const{id,nom,image_choisi,prix,total,count} = item;
    const{increment,decrement,removeItem} = value;
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={"img_choisi/" + image_choisi} style={{width:'5rem',height:"5rem"}} className="img-fluid rounded-circle" alt="produit"/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">produit :</span>{nom}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">prix :</span>${prix}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1 rounded-circle" onClick={()=>{decrement(id)}}>-</span>
                        <span className="btn btn-black mx-1 rounded-circle">{count}</span>
                        <span className="btn btn-black mx-1 rounded-circle" onClick={()=>{increment(id)}}>+</span>
                    </div>
                </div>
            </div>
            {/* */}
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => {removeItem(id)}}>
                    <i className="fas fa-trash text-danger"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong> total : ${total}</strong>
            </div>
        </div>
    )
}
