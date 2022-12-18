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
    let prevScrollHeight = 0;
    let currentScene = 1;
    // for (let objInex = 0; objInex < currentScene; objInex++) {
    //   const { section } = objs[objInex];
    //   const pageYOffset = window.pageYOffset;
    //   prevScrollHeight += section.clientHeight;

    //   console.log("prevScrollHeight : ", prevScrollHeight);
    //   console.log("pageYOffset : ", pageYOffset);
    //   if (pageYOffset >= prevScrollHeight) {
    //     currentScene++;
    //     break;
    //   }
    // }

    console.log(currentScene);
  });
})();
