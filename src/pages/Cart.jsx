import { memo, useMemo, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, deleteCart } from "./../store/cartSlice";
import { changeName, changeAge } from "./../store/userSlice";

function Cart(){
    
    let state = useSelector((state)=> state);
    let dispatch = useDispatch();
    let [count, setCount] = useState(0);   

    return (
        <div>
            <h6>{state.user.name} {state.user.age}의 장바구니</h6>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>추가</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    { state.cart.map((product, i)=>(
                        <tr key="i">
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.count}</td>
                            <td><button onClick={()=>{
                                dispatch(addCount(product.id))
                            }}>+</button></td>
                            <td><button onClick={()=>{
                                dispatch(deleteCart(product.id))
                            }}>-</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;