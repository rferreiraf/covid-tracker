import axios from "axios";

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get("https://corona.lmao.ninja/v2/countries");
    return data.map((d, i) => {
      return d.country;
    });
  } catch (err) {
    console.log("Erro fetch countries ", err);
  }
};

export const fetchCountry = async (country) => {
  let resposta = "";
  try {
    resposta = await axios.get(
      `https://corona.lmao.ninja/v2/countries/${country}`
    );
  } catch (err) {
    console.log("Erro fetch single country ", err);
  }

  return resposta.data;
};
