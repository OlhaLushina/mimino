
(() => {
    const refs = {
      openModalRoomPriceBtn: document.querySelector("[data-modal-room-price-open]"),
      closeModalRoomPriceBtn: document.querySelector("[data-modal-room-price-close]"),
      modalRoomPrice: document.querySelector("[data-modal-room-price]"),

    };
 
    refs.openModalRoomPriceBtn.addEventListener("click", toggleModalRoomPrice);
    refs.closeModalRoomPriceBtn.addEventListener("click", toggleModalRoomPrice);

 
  
    function toggleModalRoomPrice() {
      refs.modalRoomPrice.classList.toggle("is-hidden");
    }

})();