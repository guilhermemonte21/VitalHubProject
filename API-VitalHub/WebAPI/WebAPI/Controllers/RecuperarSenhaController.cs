using Microsoft.AspNetCore.Http;
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
        

        public RecuperarSenhaController(VitalContext context,EmailSendingService emailSendingService) { 
        
        _context = context;
            _emailSendingService = emailSendingService;
        }
        [HttpPost ("RotaX")]
        public async Task<IActionResult> SendRecoveryCodePassword(string mail)
        {
            try
            {
               var user = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == mail);
                if (user == null) 
                {
                    return NotFound("user not found");
                }

                //gerar um codigo com 4 algarismo

                Random random = new Random();
                int recoveryCode = random.Next(1000, 9999);

                user.CodRecupSenha = recoveryCode;

                await _context.SaveChangesAsync();

                await _emailSendingService.SendRecovery(user.Email!, recoveryCode);

                return Ok("Codigo nviado com sucesso");
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpPost("Jorge")]
        public async Task<IActionResult> VerifyCode(string email, int recoveryCode)
        {
            try
            {
                Usuario user = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == email);
                if (user == null)
                {
                    return NotFound("Usuario Nao encontrado");

                }
                if (user.CodRecupSenha == recoveryCode)
                {
                    return BadRequest("Code Invalido");
                }

                user.CodRecupSenha = null;
                await _context.SaveChangesAsync();
                return Ok("Codigo valido");
                    }
            catch(Exception ex) 
            {
                return BadRequest();
            }
        }
    }
}
