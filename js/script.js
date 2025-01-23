document.addEventListener("DOMContentLoaded", () => {
    function updateTotal() {
      let total = 0;
      document.querySelectorAll(".card").forEach((card) => {
        const unitPrice = parseFloat(card.querySelector(".unit-price").textContent.replace("$", ""));
        const quantity = parseInt(card.querySelector(".quantity").textContent);
        total += unitPrice * quantity;
      });
      document.querySelector(".total").textContent = total + " $";
    }
  
    function updateQuantity(card, increment) {
      const quantityElement = card.querySelector(".quantity");
      let quantity = parseInt(quantityElement.textContent);
      quantity = increment ? quantity + 1 : quantity - 1;
      if (quantity < 0) quantity = 0;
      quantityElement.textContent = quantity;
      updateTotal();
    }
  
    // delete item
    function deleteItem(card) {
      card.remove();
      updateTotal();
    }
  
    function toggleLike(heart) {
      heart.classList.toggle("liked");
    }
  
    document.querySelectorAll(".card").forEach((card) => {
      card.querySelector(".fa-plus-circle").addEventListener("click", () => updateQuantity(card, true));
      card.querySelector(".fa-minus-circle").addEventListener("click", () => updateQuantity(card, false));
  
      card.querySelector(".fa-trash-alt").addEventListener("click", () => deleteItem(card));
  
      card.querySelector(".fa-heart").addEventListener("click", (event) => toggleLike(event.target));
    });
  

    updateTotal();
  });
  