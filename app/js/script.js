// CSS House - Leaves Falling
function createLeaf() {
  const leaf = document.createElement("div");

  leaf.innerHTML = "<div id='leaf'>";
  leaf.classList.add("leaf");

  document.body.appendChild(leaf);

  leaf.style.left = Math.random() * 100 + "vw";

  leaf.style.animationDuration = math.random() * 5 + 8 + "s";

  setTimeout(() => {
    leaf.remove();
  }, 5000);
}

setInterval(createLeaf, 2500);