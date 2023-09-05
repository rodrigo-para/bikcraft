const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href; //página atual//
  const href = link.href; //página que a pessoa clica
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);
