export function createUserCard(indexes, data) {
    const arrData = [];
    indexes.forEach((term, index) => {
      const span = document.createElement("span");
      const strong = document.createElement("strong");
      strong.textContent = `${term}:`;
      span.append(strong, data[index])
      arrData.push(span);
    });
    return arrData;
  }