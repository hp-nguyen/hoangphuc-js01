function shuffleEntities(gameBoard, entities) {
  const gameBoardSize = gameBoard._size;
  const cardEntitySize = gameBoard.children[0]._size;
  const xCenter = (gameBoardSize.width - cardEntitySize.width) / 2;
  const yCenter = (gameBoardSize.height - cardEntitySize.height) / 2;
  const entityGap = 12;

  for (let index = entities.length - 1; index >= 0; index--) {
    gsap.fromTo(
      entities[index].element,
      {
        x: xCenter,
        y: yCenter,
        opacity: 0,
      },
      {
        duration: 0.1,
        x: xCenter,
        y: yCenter,
        ease: 'power2.inOut',
        delay: index * 0.06,
        opacity: 1,
      }
    );
  }

  setTimeout(() => {
    dealCards();
  }, 1100);

  function dealCards() {
    const positions = [];
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 5; col++) {
        const x = col * (cardEntitySize.width + entityGap);
        const y = row * (cardEntitySize.height + entityGap);
        positions.push({ x, y });
      }
    }

    entities.forEach((entity, index) => {
      const { x, y } = positions[index];
      gsap.fromTo(
        entity.element,
        {
          x: xCenter,
          y: yCenter,
        },
        { duration: 1, x, y, ease: Elastic.easeOut, delay: index * 0.1 }
      );
    });
  }
}
export { shuffleEntities };
