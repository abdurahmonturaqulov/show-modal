const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

for (let i of btnsOpenModal) {
    i.addEventListener("click", removeModal);
}

function removeModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

btnCloseModal.addEventListener("click", addModal);

function addModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
overlay.addEventListener("click", addModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    }
});