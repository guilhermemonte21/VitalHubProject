using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
<<<<<<< HEAD
using Org.BouncyCastle.Crypto.Signers;
using WebAPI.Domains;
using WebAPI.Interfaces;
=======
using WebAPI.Domains;
using WebAPI.Interfaces;
using WebAPI.Repositories;
>>>>>>> main
using WebAPI.Utils.OCR;
using WebAPI.ViewModels;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExameController : ControllerBase
    {
        private readonly IExameRepository _exameRepository;
        private readonly OCRService _ocrService;
        public ExameController(IExameRepository exameRepository, OCRService ocrService)
        {
<<<<<<< HEAD
            exameRepository = _exameRepository;
            ocrService = _ocrService;  
        }
=======
            _exameRepository = exameRepository;
            _ocrService = ocrService;
        }

>>>>>>> main
        [HttpPost("Cadastrar")]
        public async Task<IActionResult> Post([FromForm] ExameViewModel exameViewModel)
        {
            try
            {
<<<<<<< HEAD
                if (exameViewModel.Imagem == null || exameViewModel == null)
                {
                    return BadRequest("Nenhuma Imagem Fornecida");
                }

                using (var stream = exameViewModel.Imagem.OpenReadStream())
                {
                    var result = await _ocrService.RecognizeTextAsync(stream);

                    exameViewModel.Descricao = result;

                    Exame exame = new Exame();
                    exame.Descricao = exameViewModel.Descricao;
                    exame.ConsultaId = exameViewModel.ConsultaId;
                   

=======
                if (exameViewModel.Image == null || exameViewModel == null)
                {
                    return BadRequest("Nenhuma imagem fornecida");
                }
                using (var stream = exameViewModel.Image.OpenReadStream())
                {
                    var result = await _ocrService.RecognizeTextAsync(stream);
                    exameViewModel.Descricao = result;
                    Exame exame = new()
                    {
                        Descricao = exameViewModel.Descricao,
                        ConsultaId = exameViewModel.ConsultaId,
                    };
>>>>>>> main
                    _exameRepository.Cadastrar(exame);

                    return Ok(exame);
                }
            }
            catch (Exception ex)
            {
<<<<<<< HEAD

=======
>>>>>>> main
                return BadRequest(ex.Message);
            }
        }

<<<<<<< HEAD
        [HttpGet("BuscarPorIdConcsulta")]
        public IActionResult GetByIdConsulta(Guid idConsulta) 
        {
            try
            {
                List<Exame> lista = _exameRepository.BuscarPorIdConsulta(idConsulta);

=======
        [HttpGet("BuscarPorIdConsulta")]
        public IActionResult GetByIdConsulta(Guid id)
        {
            try
            {
                List<Exame> lista = _exameRepository.BuscarPorIdConsulta(id);
>>>>>>> main
                return Ok(lista);
            }
            catch (Exception ex)
            {
<<<<<<< HEAD

=======
>>>>>>> main
                return BadRequest(ex.Message);
            }
        }
    }
}