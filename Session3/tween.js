function shuffleEntities(entities) {
  const positions = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 5; col++) {
      const x = col * 110;
      const y = row * 110;
      positions.push({ x, y });
    }
  }

  entities.forEach((entity, index) => {
    const { x, y } = positions[index];
    gsap.fromTo(
      entity.element,
      // { x: (gameBoardSize.width - cardEntitySize.width) / 2, y: (gameBoardSize.height - cardEntitySize.height) / 2, opacity: 1 },
      { x: 210, y: 160 },
      { duration: 1, x, y, opacity: 1, ease: 'power2.inOut', delay: index * 0.1, rotate: 360 }
    );
  });
}
export { shuffleEntities };
