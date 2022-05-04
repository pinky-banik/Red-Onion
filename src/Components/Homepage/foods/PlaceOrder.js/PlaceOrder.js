import React from 'react';
import { useDelivery } from '../../../../Context/DeliveryProvider';
import { useOrder } from '../../../../Context/OrderProvider';
import Back from '../../../../Routes/Back/Back';
import OrderPrice from './OrderPrice';
import { Navigate } from 'react-router-dom';
import DeliveryForm from './DeliveryForm';
import OrderCard from './OrderCard';
import swal from 'sweetalert';

const PlaceOrder = () => {
    const {order,setOrder} = useOrder();
    const { input, disabled } = useDelivery();
    const navigate = Navigate();
    return (
        <main className=" h-screen banner">
            <div className="max-w-screen-xl py-20 mx-auto px-6">
                <Back />
                {order.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                            {/* left side form  */}
                            <div className="col-span-1">
                                <DeliveryForm />
                            </div>
                            {/* right side  */}
                            <div className="col-span-1">
                                <div className="glass p-6 box-border rounded-lg">
                                    {/* order details  */}
                                    <div className="flex flex-col space-y-4 mb-3">
                                        <p className="poppins text-gray-700">Deliver Place :  <span className="font-semibold text-black">{input.country ? `${input.country}` : '-----'}</span></p>
                                        <p className="poppins text-gray-700">Arriving in 20-30 min</p>
                                        <p className="poppins text-gray-700">Road <span className="font-semibold text-black">{input.roadNo ? `${input.roadNo}` : '-----'}</span> </p>
                                        <p className="poppins text-gray-700">Floor :  <span className="font-semibold text-black">{input.flatno ? `${input.flatno}` : '-----'}</span> </p>
                                        <p className="poppins text-gray-700">Deliver to :  <span className="font-semibold text-black">{input.name ? `${input.name}` : '-----'}</span> </p>
                                    </div>
                                    {/* orders  */}

                                    <div className=" flex flex-col space-y-3 h-64 overflow-y-scroll orderContainer " >
                                        {order.map(item => (
                                            <OrderCard
                                                key={item.id}
                                                {...item}
                                            />
                                        ))}
                                    </div>
                                    {/* price  */}
                                    <OrderPrice {...order} />
                                    {/* place order button  */}
                                    <div>
                                        {disabled ? (
                                            <button disabled="disabled" className="w-full px-6 py-3 rounded-lg bg-primary text-white poppins ring-red-300 focus:ring-4 transition duration-500 opacity-40">Place Order</button>
                                        ) : (
                                            <button className="w-full px-6 py-3 rounded-lg bg-primary text-white poppins ring-red-300 focus:ring-4 transition duration-500" onClick={() => {
                                                swal("Congratulations!!!", `You have order ${order.length} times successfully`, "success")
                                                navigate('/order-successful');
                                                setOrder([]);
                                            }}>Place Order</button>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="pt-24">
                        <h1 className="text-center text-5xl text-primary poppins">No Order has added!!</h1>
                    </div>
                    // xgxgxgffgjfgjfgjfj
                )
                }
            </div>
        </main>
    )
}

export default PlaceOrder;