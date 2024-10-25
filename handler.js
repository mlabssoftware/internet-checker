const axios = require('axios');

module.exports.checkInternet = async (event) => {
  try {
    // Faz uma requisição para o Google para verificar se a internet está funcionando
    const response = await axios.get('https://graph.facebook.com');

    // Retorna o status e os dados da resposta da requisição
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Internet is working!',
        status: response.status,
        data: response.data,  // Retorna o corpo da resposta de 'google.com'
      }),
    };
  } catch (error) {
    // Se a requisição falhar, a internet pode estar fora do ar
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'No internet connection!',
        error: error.message,  // Inclui a mensagem de erro
      }),
    };
  }
};
