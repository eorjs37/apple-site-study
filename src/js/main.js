/**
 * 즉시 실행함수
 */
(() => {
  const objs = [
    {
      section: document.querySelector("#section1"),
    },
    {
      section: document.querySelector("#section2"),
    },
    {
      section: document.querySelector("#section3"),
    },
    {
      section: document.querySelector("#section4"),
    },
  ];
  let curScene = 1;

  const setSzie = () => {
    const windowHeight = window.innerHeight;
    objs.forEach((obj) => {
      const { section } = obj;
      section.style.height = `${windowHeight}px`;
    });
  };

  window.onload = () => {
    setSzie();
  };

  window.addEventListener("resize", setSzie);
  window.addEventListener("scroll", () => {
    let pageYoffset = window.pageYOffset;
    let prevScrollHeight = 0;
    for (let sectionIdx = 0; sectionIdx < objs.length; sectionIdx++) {
      const { section } = objs[sectionIdx];
      const height = section.clientHeight;

      prevScrollHeight += height;
      if (pageYoffset >= height) {
        // alert("prevScrollHeight : " + prevScrollHeight);
        // break;
      }
    }

    console.log("curScene : ", curScene);
  });
})();
