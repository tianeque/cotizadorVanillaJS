export const $cl = (number) => {
  let pesos = new Intl.NumberFormat("cl-ES").format(number);
  pesos = `$ ${pesos}`;
  return pesos;
};
