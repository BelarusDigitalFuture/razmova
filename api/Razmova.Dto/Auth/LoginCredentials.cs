using System.ComponentModel.DataAnnotations;

namespace Razmova.Dto.Auth
{
    public class LoginCredentials
    {
        [Required]
        public string Username { get; set; }
        
        [Required] 
        public string Password { get; set; }
    }
}
