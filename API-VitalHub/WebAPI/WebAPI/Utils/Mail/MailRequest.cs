namespace WebAPI.Utils.Mail
{
    public class MailRequest
    {
        // Email destinatário
        public string? toEmail { get; set; }
        // Assunto do email
        public string? Subject { get; set; }
        // Corpo do email
        public string? Body { get; set; }
    }
}
