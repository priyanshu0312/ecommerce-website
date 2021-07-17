export const CartReducer = (state, action) => {
  const { shoppingCart } = state;
  if (action.type === "ADD_TO_CART") {
    let product;
    const check = shoppingCart.find((product) => product.id === action.id);
    if (check) {
      return state;
    } else {
      product = action.product;
      product["quantity"] = 1;

      return {
        shoppingCart: [product, ...shoppingCart],
      };
    }
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      shoppingCart: state.shoppingCart.filter((curElem) => {
        return curElem.id != action.payload;
      }),
    };
  }
  if (action.type === "INCREASE_ITEM") {

    let updatedCart = state.shoppingCart.map((curElem) => {
      if (curElem.id === action.payload) {
        return { ...curElem, quantity: curElem.quantity + 1 };
      }
      return curElem;
    });
    return { ...state, shoppingCart: updatedCart };

  }
  if (action.type === "DECREASE_ITEM") {
    let updatedCart = state.shoppingCart
      .map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity - 1 };
        }

        return curElem;
      })
      .filter((curElem) => {
        return curElem.quantity != 0;
      });
    return { ...state, shoppingCart: updatedCart };
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      shoppingCart: [],
    };
  }
  return state;
};

// export const CartReducer = (state, action) => {
//   const { shoppingCart, totalPrice, quantity } = state;
//   let product;
//   let index;
//   let updatedPrice;
//   let updatedQuantity;
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const check = shoppingCart.find((product) => product.id === action.id);
//       if (check) {
//         return state;
//       } else {
//         product = action.product;
//         product["quantity"] = 1;
//         updatedQuantity = quantity + 1;
//         updatedPrice = totalPrice + product.price;
//         return {
//           shoppingCart: [product, ...shoppingCart],
//           totalPrice: updatedPrice,
//           quantity: updatedQuantity,
//         };
//       }
//       break;

//     case "INC":
//       product = action.cart;
//       product.quantity = product.quantity + 1;
//       updatedQuantity = quantity + product.quantity;

//       updatedPrice = totalPrice + product.price;
//       index = shoppingCart.findIndex((cart) => cart.id === action.id);
//       shoppingCart[index] = product;
//       return {
//         shoppingCart: [...shoppingCart],
//         totalPrice: updatedPrice,
//         quantity: updatedQuantity,
//       };
//       break;
//     case "DEC":
//       product = action.cart;
//       if (product.quantity > 1) {
//         product.quantity = quantity - 1;
//         updatedPrice = totalPrice - product.price;
//         updatedQuantity = quantity - 1;
//         index = shoppingCart.findIndex((cart) => cart.id === action.id);
//         shoppingCart[index] = product;
//         return {
//           shoppingCart: [...shoppingCart],
//           totalPrice: updatedPrice,
//           quantity: updatedQuantity,
//         };
//       } else {
//         return state;
//       }
//       break;
//     case "REMOVE_ITEM":
//       const filtered = shoppingCart.filter((product = product.id != action.id));
//       product = action.cart;
//       updatedQuantity = quantity - product.quantity;
//       updatedPrice = totalPrice - product.price * product.quantity;
//       return {
//         shoppingCart: [...filtered],
//         totalPrice: updatedPrice,
//         quantity: updatedQuantity,
//       };
//       break;
//     default:
//       return state;
//   }
// };
