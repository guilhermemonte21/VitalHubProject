using Microsoft.Azure.CognitiveServices.Vision.ComputerVision;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision.Models;
using Org.BouncyCastle.Security;

namespace WebAPI.Utils.OCR
{
    public class OCRService
    {
        private readonly string _subscriptKey = "4cade815ca09481aaed304d1cd48bc59";

        private readonly string _endpoint = "https://cvvvitalhubg17guilherme.cognitiveservices.azure.com/";

        public async Task<string> RecognizeTextAsync (Stream imageStream)
        {
            try
            {
                var client = new ComputerVisionClient(new ApiKeyServiceClientCredentials(_subscriptKey))
                {
                    Endpoint = _endpoint
                };

                var ocrResult = await client.RecognizePrintedTextInStreamAsync(true, imageStream);

                return ProcessRecognitionResult(ocrResult);
            }
            catch (Exception ex)
            {

                return "Erro ao reconhecer o texto"+ ex.Message;
            }

            
        }
        private static string ProcessRecognitionResult(OcrResult result)
        {
            try
            {
                string recognizedText = "";

                foreach (var region in result.Regions)

                {
                    foreach (var line in region.Lines)
                    {
                        foreach (var word in line.Words)
                        {
                            recognizedText += word.Text + " " +
                                "";

                        }
                        recognizedText += "\n";
                    }
                }
                return recognizedText;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
