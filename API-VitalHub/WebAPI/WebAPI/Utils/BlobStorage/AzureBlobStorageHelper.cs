using Azure.Storage.Blobs;

namespace WebAPI.Utils.BlobStorage
{
    public static class AzureBlobStorageHelper
    {
        public static async Task<string> UploadImageBlobAsync(IFormFile file, string connectionString, string containerName)
        {
            try
            {
                // Verifica se o arquivo existe
                if (file != null)
                {
                    // Gera um nome único + extensão do arquivo
                    var blobName = Guid.NewGuid().ToString().Replace("-", "") + Path.GetExtension(file.FileName);
                    // Cria uma instância do Client Blob Service e passa a string de conexão
                    var blobServiceClient = new BlobServiceClient(connectionString);
                    // Obtem um cliente com o novo container
                    var blobContainerClient = blobServiceClient.GetBlobContainerClient(containerName);
                    // Obtem um Blob Client com o Blob Name
                    var blobClient = blobContainerClient.GetBlobClient(blobName);
                    // Abre o fluxo de entrada do arquivo
                    using (var stream = file.OpenReadStream())
                    {
                        // Carrega o arquivo(foto) para o BlobStorage de forma assíncrona
                        await blobClient.UploadAsync(stream, true);
                    }
                    // Retorna a URI do blob
                    return blobClient.Uri.ToString();
                }
                else
                {
                    return "https://blobvitalhubg17richard.blob.core.windows.net/containervitalhubg17-richard/profile-default.png";
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
