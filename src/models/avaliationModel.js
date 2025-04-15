import prisma from "../../prisma/client.js";

class AvaliationModel {
  getAll = async () => {
    return await prisma.avaliation.findMany();
  };

  create = async (usuario, avaliacao) => {
    return await prisma.avaliation.create({
      data: {
        usuario,
        avaliacao,
      },
    });
  };

}
export default new TarefaModel();
