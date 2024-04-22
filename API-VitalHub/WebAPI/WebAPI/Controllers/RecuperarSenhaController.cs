<<<<<<< HEAD
﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
=======
﻿using Microsoft.AspNetCore.Mvc;
>>>>>>> main
using Microsoft.EntityFrameworkCore;
using WebAPI.Contexts;
using WebAPI.Domains;
using WebAPI.Utils.Mail;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
<<<<<<< HEAD


=======
>>>>>>> main
    public class RecuperarSenhaController : ControllerBase
    {
        private readonly VitalContext _context;
        private readonly EmailSendingService _emailSendingService;
<<<<<<< HEAD
        

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
=======
        public RecuperarSenhaController(VitalContext context, EmailSendingService sendMail)
        {
            _context = context;
            _emailSendingService = sendMail;
        }

        [HttpPost]
        public async Task<IActionResult> SendPasswordRecoveryCode(string email)
>>>>>>> main
        {
            try
            {
                Usuario user = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == email);
                if (user == null)
                {
<<<<<<< HEAD
                    return NotFound("Usuario Nao encontrado");

                }
                if (user.CodRecupSenha == recoveryCode)
                {
                    return BadRequest("Code Invalido");
=======
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
                if (user.CodRecupSenha == recoveryCode)
                {
                    return BadRequest("Código inválido");
>>>>>>> main
                }

                user.CodRecupSenha = null;
                await _context.SaveChangesAsync();
<<<<<<< HEAD
                return Ok("Codigo valido");
                    }
            catch(Exception ex) 
            {
                return BadRequest();
=======
                return Ok("Código válido");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
>>>>>>> main
            }
        }
    }
}
