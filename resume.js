function toggleExp(e) {
    document.querySelectorAll(".exp-desc-item").forEach((desc) => {
        desc.style.display = "none"
    })
    document.querySelectorAll(".exp-list-item").forEach((opt) => {
        opt.classList.add("exp-list-item")
        opt.classList.remove("exp-list-item-active")
    })

    document.querySelector(`#${e.id}`).classList.add("exp-list-item-active")
    document.querySelector(`#${e.id}-desc`).style.display = "flex"
}

toggleExp(document.querySelector("#exp-orc"))

function toggleMenu(e) {
    const modal = document.querySelector(".background-modal")
    if (e.id.includes("menu")) {
        modal.style.display = "block"
    } else {
        modal.style.display = "none"
    }
}

function closeMenu() {
    document.querySelector(".background-modal").style.display = "none"
}
