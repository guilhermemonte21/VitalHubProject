using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Contexts;
using WebAPI.Domains;
using WebAPI.Utils.Mail;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecuperarSenhaController : ControllerBase
    {
        private readonly VitalContext _context;
        private readonly EmailSendingService _emailSendingService;
        public RecuperarSenhaController(VitalContext context, EmailSendingService sendMail)
        {
            _context = context;
            _emailSendingService = sendMail;
        }

        [HttpPost]
        public async Task<IActionResult> SendPasswordRecoveryCode(string email)
        {
            try
            {
                Usuario user = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == email);
                if (user == null)
                {
                    return NotFound("Usuário não encontrado.");
                }

                // Gerar um código de 4 algarismos
                Random random = new Random();
                int recoveryCode = random.Next(1000, 10000);

                user.CodRecupSenha = recoveryCode;

                await _context.SaveChangesAsync();
                await _emailSendingService.SendRecoveryEmail(email, recoveryCode);
                return Ok("Código enviado com sucesso.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // Crie um controller para validar um código criado para o email
        [HttpPost("ChecarCodigo")]
        public async Task<IActionResult> CheckRecoveryCode(string email, int recoveryCode)
        {
            try
            {
                var user = _context.Usuarios.FirstOrDefault(x => x.Email == email);

                if (user == null)
                {
                    return NotFound("Usuário não encontrado.");
                }
                if (user.CodRecupSenha != recoveryCode)
                {
                    return BadRequest(user);
                }

                user.CodRecupSenha = null;
                await _context.SaveChangesAsync();
                return Ok("Código válido");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
