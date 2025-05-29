//Sélection des éléments
const modal = 
document.getElementById("modal");
const modalImage =
document.getElementById("modal-image");
const modalDescription = 
document.getElementById("modal-description");
const closeButton =
document.querySelector(".close-button");

// Fonction pour ouvrir la modal
function openModal (imageSrc, description) {
  modal.style.display = "block";
  modalImage.src = imageSrc;
  modalDescription.textContent = description;
}
// Fonction pour fermer la modal
function closeModal() {
  modal.style.display = "none";
}

// Evènement de fermeture lors du clic sur le bouton fermeture
closeButton.addEventListener("click", closeModal)

//Evènement de fermeture lors du clic en dehors de la modal
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeModal();
  }
});
}

// Ajout des évènements de clic sur les miniatures 
const projectItems = 
document.querySelectorAll(".project-item");
projectItems.forEach(item => { 
item.addEventListener("click",function(event).preventDefault();
const description = this.querySelector(".project-title").textContent;
openModal(imageSrc,description);
  });
});
