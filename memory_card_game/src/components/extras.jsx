// import { useState } from "react";
// import "../styles/App.css";
// let arr = Array.from({ length: 12 }, (_, i) => i + 1);

// function Card({ num, handleOnClick }) {
//     return (
//         <>
//             <div className="card" key={num} onClick={() => handleOnClick(num)}>
//                 <div className="imgg"></div>
//                 {num}
//             </div>
//         </>
//     );
// }

// function Extra() {
//     const [items, setItems] = useState(arr);
//     const [clickedItems, setClickedItems] = useState([]);
//     let [total, setTotal] = useState(0);

//     const handleNewArr = (clickedNum) => {
//         console.log("items before shuffle:", items);
//         let shuffled = [...items];
//         for (let i = shuffled.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//         }
//         setItems(shuffled);
//         console.log("items after shuffle:", shuffled);

//         if (!clickedItems.includes(clickedNum)) {
//             setClickedItems((prev) => [...prev, clickedNum]);
//         } else {
//             setTotal(clickedItems.length);
//             setClickedItems([]);
//         }
//     };

//     return (
//         <>
//             <h3>Score: {clickedItems.length} </h3>
//             <h3>Total: {total}</h3>

//             <div className="container">
//                 {items.map((num) => {
//                     return (
//                         <Card
//                             key={num}
//                             num={num}
//                             handleOnClick={handleNewArr}
//                             // setCur={setCur}
//                         />
//                     );
//                 })}
//             </div>
//         </>
//     );
// }
