
(() => {
    const refs = {
      openModalBookRoomBtn: document.querySelector("[data-modal-book-room-open]"),
      closeModalBookRoomBtn: document.querySelector("[data-modal-book-room-close]"),
      modalBookRoom: document.querySelector("[data-modal-book-room]"),
    };

    refs.openModalBookRoomBtn.addEventListener("click", toggleModalBookRoom);
    refs.closeModalBookRoomBtn.addEventListener("click", toggleModalBookRoom);

    function toggleModalBookRoom() {
      refs.modalBookRoom.classList.toggle("is-hidden");
    }
})();
 