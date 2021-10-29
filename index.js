class CustomSelect {
     constructor(original) {
          this.original = original;
          this.customSelect = document.createElement("div");
          this.customSelect.classList.add("select");

          this.original.querySelectorAll("option").forEach(optionElement => {
               const itemElement = document.createElement("div");
               itemElement.classList.add("select__item");
               itemElement.textContent = optionElement.textContent;
               this.customSelect.appendChild(itemElement);

               itemElement.addEventListener("click", () => {
                    if(itemElement.classList.contains("selected__item--selected")) {
                         this._deselect(itemElement);
                    } else {
                         this._select(itemElement);
                    }
               });
          });

          this.original.insertAdjacentElement("afterend", this.customSelect);
     }
     _select(itemElement) {
          const index = Array.from(this.customSelect.children).indexOf(itemElement);

          this.original.querySelectorAll("option")[index].selected = true;
          itemElement.classList.add("selected__item--selected");
     }
     _deselect(itemElement) {

     }
}
document.querySelectorAll(".custom-select").forEach(selectElement => {
     new CustomSelect(selectElement);
});