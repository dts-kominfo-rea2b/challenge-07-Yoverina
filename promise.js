const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const getEmotion = (theater, emotion) => {
  return theater.filter((data) => data.hasil == emotion).length
};

const promiseOutput = async (emotion) => {
  try {
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();
    //filter response based on emotion parameter
    return getEmotion(theaterIXX, emotion) + getEmotion(theaterVGC, emotion);
    
  } catch (error) {
    console.log(error);
  }
};

promiseOutput("tidak marah");

module.exports = {
  promiseOutput,
};
