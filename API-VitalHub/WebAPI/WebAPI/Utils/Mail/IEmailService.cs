namespace WebAPI.Utils.Mail
{
    public interface IEmailService
    {
        // Método para o envio de e-mail
        Task SendEmailAsync(MailRequest mailRequest);
    }
}
