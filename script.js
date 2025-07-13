function mostrarInfo(nombre, codigo, creditos) {
  const info = document.getElementById("infoCurso");
  info.innerHTML = `
    <h3>${nombre}</h3>
    <p><strong>Código:</strong> ${codigo}</p>
    <p><strong>Créditos:</strong> ${creditos}</p>
  `;
  info.classList.add("info-visible");
}
