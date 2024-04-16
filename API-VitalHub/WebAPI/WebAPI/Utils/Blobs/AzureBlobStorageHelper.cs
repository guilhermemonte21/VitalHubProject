using Azure.Storage.Blobs;

namespace WebAPI.Utils.Blobs
{
    public static class AzureBlobStorageHelper
    {


        public static async Task<string> UploadImageBlobAsync(IFormFile arquivo, string stringConexao, string nomeContainer)
        {
            try {
                //Verifica se existe o arquivo
                if (arquivo != null)
                {
                    //gera um nome unico para o arquivo
                    var blobName = Guid.NewGuid().ToString().Replace("-","") + Path.GetExtension(arquivo.FileName);

                    //cria uma instancia do client Blob Service e passa a string de conexao
                    var blobServiceClient = new BlobServiceClient(stringConexao);

                    //obtem um container client usando o nome do container blob
                    var blobContainerClient = blobServiceClient.GetBlobContainerClient(nomeContainer);
                     
                    //obtem  um blob clientvusando o blob name
                    var blobClient = blobContainerClient.GetBlobClient(blobName);

                    //abre o fluxo de entrada do arquivo(foto)
                    using(var stream = arquivo.OpenReadStream()) 
                    {
                    await blobClient.UploadAsync(stream);
                    }
                    return blobClient.Uri.ToString();

            }
                else
                {
                    return "";
                }
            }
            catch (Exception) {
                throw;
            }


        }
    }   
    
}
