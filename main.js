const select = document.getElementById("subject");
const lessonsDiv = document.getElementById("lessons");

select.addEventListener("change", () => {
  const subject = select.value;
  lessonsDiv.innerHTML = "";
  if (!subject) return;

  fetch(`${subject}/data.json`)
    .then(res => res.json())
    .then(data => {
      data.forEach(lesson => {
        lessonsDiv.innerHTML += `
          <div class="lesson">
            <h3>${lesson.title}</h3>
            <iframe src="${lesson.pdf}"></iframe>
            <p><a href="${lesson.youtube}" target="_blank">مشاهدة الدرس على يوتيوب</a></p>
          </div>
        `;
      });
    });
});