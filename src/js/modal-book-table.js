
(() => {
    const refs = {
      openModalBookTableBtn: document.querySelector("[data-modal-book-table-open]"),
      closeModalBookTableBtn: document.querySelector("[data-modal-book-table-close]"),
      modalBookTable: document.querySelector("[data-modal-book-table]"),
    };

    refs.openModalBookTableBtn.addEventListener("click", toggleModalBookTable);
    refs.closeModalBookTableBtn.addEventListener("click", toggleModalBookTable);

    function toggleModalBookTable() {
      refs.modalBookTable.classList.toggle("is-hidden");
    }
  

})();
  